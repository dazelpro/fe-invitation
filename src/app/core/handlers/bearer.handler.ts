import { HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenExpiredComponent } from '../../shared/dialogs/token-expired/token-expired.component';
import { StorageService } from '../services/storage.service';

@Injectable({
    providedIn: 'root'
})
export class BearerHandler extends HttpHandler {
    constructor(
        private readonly next: HttpHandler,
        private router: Router,
        public dialog: MatDialog,
        private storageService: StorageService
    ) {
        super();
    }

    handle(req: HttpRequest<any>) {
        const clone = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + this.storageService.getToken(),
                platform: 'web'
            }
        });
        return this.next.handle(clone).pipe(
            catchError((response: HttpErrorResponse) => {
                if (response.status === 401) {
                    const dialogRef = this.dialog.open(TokenExpiredComponent);
                    dialogRef.afterClosed().subscribe((r) => {
                        this.storageService.clear();
                        this.router.navigate(['/authentication']);
                    });
                }
                return throwError(response);
            })
        );
    }
}
