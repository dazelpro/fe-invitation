import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Breadcrumb } from '../../../../core/models/breadcrumb.model';
import { Profile } from '../../../../core/models/client.model';
import { ClientService } from '../../../../core/services/client.service';
import { StorageService } from '../../../../core/services/storage.service';
import { ConfirmationDeleteComponent } from '../../../../shared/dialogs/confirmation-delete/confirmation-delete.component';
import { DialogProfileComponent } from '../../components/dialog-profile/dialog-profile.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    id;
    visibilityAdd = true;
    listProfile: Profile;
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
            { label: 'Profil', url: `/client/profile` }
        ];
    }

    ngOnInit(): void {
        this.id = this.storageService.getIdParam('id-order-param');
        if (!this.id) {
            this.router.navigate(['/client']);
        } else {
            this.fetchProfile();
        }
    }

    fetchProfile() {
        let params = {
            idOrder: this.id
        };
        this.clientService.getProfile(params).subscribe({
            next: (r) => {
                this.listProfile = r.data.profile;
                if (r.data.profile.length >= 2) {
                    this.visibilityAdd = false;
                }
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }

    deleteProfile(arr: any) {
        let params = {
            id: arr.id
        };
        this.clientService.deleteProfile(params).subscribe({
            next: (r) => {
                if (r) this.ngOnInit();
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }

    openDialogProfile(edited: boolean, arr: any) {
        let param = {};
        if (edited) {
            param = { data: arr };
        }
        const dialogRef = this.dialog.open(DialogProfileComponent, {
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
}
