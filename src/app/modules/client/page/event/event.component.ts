import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Breadcrumb } from '../../../../core/models/breadcrumb.model';
import { Profile } from '../../../../core/models/client.model';
import { ClientService } from '../../../../core/services/client.service';
import { StorageService } from '../../../../core/services/storage.service';
import { ConfirmationDeleteComponent } from '../../../../shared/dialogs/confirmation-delete/confirmation-delete.component';
import { DialogEventComponent } from '../../components/dialog-event/dialog-event.component';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
    id;
    visibilityAdd = true;
    listEvent: Profile;
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
            { label: 'Detail Acara', url: `/client/event` }
        ];
    }

    ngOnInit(): void {
        this.id = this.storageService.getIdParam('id-order-param');
        if (!this.id) {
            this.router.navigate(['/client']);
        } else {
            this.fetchEvent();
        }
    }

    fetchEvent() {
        let params = {
            idOrder: this.id
        };
        this.clientService.getEvent(params).subscribe({
            next: (r) => {
                this.listEvent = r.data.event;
                if (r.data.event.length >= 2) {
                    this.visibilityAdd = false;
                } else {
                    this.visibilityAdd = true;
                }
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }

    openDialogEvent(edited: boolean, arr: any) {
        let param = {};
        if (edited) {
            param = { data: arr };
        }
        const dialogRef = this.dialog.open(DialogEventComponent, {
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
            if (r) this.deleteProfile(arr);
        });
    }

    deleteProfile(arr: any) {
        let params = {
            id: arr.id
        };
        this.clientService.deleteEvent(params).subscribe({
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
