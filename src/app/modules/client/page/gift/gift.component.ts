import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Breadcrumb } from '../../../../core/models/breadcrumb.model';
import { Gift } from '../../../../core/models/client.model';
import { ClientService } from '../../../../core/services/client.service';
import { StorageService } from '../../../../core/services/storage.service';
import { ConfirmationDeleteComponent } from '../../../../shared/dialogs/confirmation-delete/confirmation-delete.component';
import { DialogGiftComponent } from '../../components/dialog-gift/dialog-gift.component';

@Component({
    selector: 'app-gift',
    templateUrl: './gift.component.html',
    styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
    id;
    listGiftBank: Gift;
    listGiftAddress: Gift;
    breadcrumbs: Breadcrumb[] = [];
    constructor(
        public dialog: MatDialog,
        private clientService: ClientService,
        private _snackBar: MatSnackBar,
        private storageService: StorageService,
        private router: Router
    ) {
        this.breadcrumbs = [
            { label: 'Client', url: '/client' },
            { label: 'Dashboard', url: `/client/dashboard` },
            { label: 'Kado', url: `/client/gift` }
        ];
    }

    ngOnInit(): void {
        this.id = this.storageService.getIdParam('id-order-param');
        if (!this.id) {
            this.router.navigate(['/client']);
        } else {
            this.fetchGift();
        }
    }

    fetchGift() {
        let params = {
            idOrder: this.id
        };
        this.clientService.getGift(params).subscribe({
            next: (r) => {
                this.listGiftBank = r.data.giftBank;
                this.listGiftAddress = r.data.giftAddress;
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }

    openDialogGift(arr: string, item: any) {
        const dialogRef = this.dialog.open(DialogGiftComponent, {
            width: '90%',
            maxWidth: '500px',
            height: 'auto',
            data: {
                mode: arr,
                item: item
            }
        });
        dialogRef.afterClosed().subscribe((r) => {
            if (r) this.ngOnInit();
        });
    }

    deleteGift(arr) {
        let params = {
            id: arr.id
        };
        this.clientService.deleteGift(params).subscribe({
            next: (r) => {
                if (r) this.ngOnInit();
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }

    openDialogDelete(arr: any) {
        const dialogRef = this.dialog.open(ConfirmationDeleteComponent, {
            width: '90%',
            maxWidth: '350px',
            height: 'auto'
        });
        dialogRef.afterClosed().subscribe((r) => {
            if (r) this.deleteGift(arr);
        });
    }
}
