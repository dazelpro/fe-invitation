import { HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BearerHandler extends HttpHandler {
    constructor(private readonly next: HttpHandler) {
        super();
    }

    handle(req: HttpRequest<any>) {
        const clone = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + 'TOKEN',
                platform: 'web'
            }
        });
        return this.next.handle(clone).pipe(
            catchError((response: HttpErrorResponse) => {
                if (response.status === 401) {
                    console.log('expired');
                }
                return throwError(response);
            })
        );
    }
}
