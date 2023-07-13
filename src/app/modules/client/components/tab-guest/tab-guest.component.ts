import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Guest } from '../../../../core/models/client.model';
import { ClientService } from '../../../../core/services/client.service';
import { CommonService } from '../../../../core/services/common.service';
import { StorageService } from '../../../../core/services/storage.service';
import { ConfirmationDeleteComponent } from '../../../../shared/dialogs/confirmation-delete/confirmation-delete.component';
import { DialogGuestComponent } from '../dialog-guest/dialog-guest.component';

@Component({
    selector: 'app-tab-guest',
    templateUrl: './tab-guest.component.html',
    styleUrls: ['./tab-guest.component.css']
})
export class TabGuestComponent implements OnInit {
    id;
    listGuest: Guest;
    listCount: number;
    constructor(
        public dialog: MatDialog,
        private clientService: ClientService,
        private _snackBar: MatSnackBar,
        private storageService: StorageService,
        private router: Router,
        public commonService: CommonService
    ) {}

    ngOnInit(): void {
        this.id = this.storageService.getIdParam('id-order-param');
        if (!this.id) {
            this.router.navigate(['/client']);
        } else {
            this.fetchGuest();
        }
    }

    fetchGuest() {
        let params = {
            idOrder: this.id
        };
        this.clientService.getGuest(params).subscribe({
            next: (r) => {
                this.listGuest = r.data.guest;
                this.listCount = r.data.guest.length;
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }

    openDialogGuest(edited: boolean, arr: any) {
        let param = {};
        if (edited) {
            param = { data: arr };
        }
        const dialogRef = this.dialog.open(DialogGuestComponent, {
            width: '90%',
            maxWidth: '500px',
            height: 'auto',
            ...param
        });
        dialogRef.afterClosed().subscribe((r) => {
            if (r) this.ngOnInit();
        });
    }

    openDialogDelete(arr: any) {
        const dialogRef = this.dialog.open(ConfirmationDeleteComponent, {
            width: '90%',
            maxWidth: '350px',
            height: 'auto'
        });
        dialogRef.afterClosed().subscribe((r) => {
            if (r) this.deleteGuest(arr);
        });
    }

    deleteGuest(arr: any) {
        let params = {
            id: arr.id
        };
        this.clientService.deleteGuest(params).subscribe({
            next: (r) => {
                if (r) this.ngOnInit();
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }
}
