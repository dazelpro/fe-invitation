import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from '../../../../core/services/client.service';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
    selector: 'app-dialog-profile',
    templateUrl: './dialog-profile.component.html',
    styleUrls: ['./dialog-profile.component.css']
})
export class DialogProfileComponent implements OnInit {
    id;
    public form = {
        idOrder: '',
        name: '',
        nickName: '',
        parentName: '',
        address: '',
        otherInformation: '',
        instagramLink: '',
        imageUrl: ''
    };

    public formValid = {
        name: true,
        nickName: true
    };

    ready = false;

    constructor(
        public dialogRef: MatDialogRef<DialogProfileComponent>,
        @Inject(MAT_DIALOG_DATA) public dataDialog: any,
        private clientService: ClientService,
        private storageService: StorageService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        if (this.dataDialog) {
            this.setForm();
        }
        this.form.idOrder = this.storageService.getIdParam('id-order-param');
    }

    setForm() {
        this.id = this.dataDialog.id;
        this.form.name = this.dataDialog.name;
        this.form.nickName = this.dataDialog.nickName;
        this.form.parentName = this.dataDialog.parentName;
        this.form.address = this.dataDialog.address;
        this.form.otherInformation = this.dataDialog.otherInformation;
        this.form.instagramLink = this.dataDialog.instagramLink;
    }

    close(arr: boolean) {
        this.dialogRef.close(arr);
    }

    validator() {
        this.formValid.name = this.form.name ? true : false;
        this.formValid.nickName = this.form.nickName ? true : false;

        if (this.formValid.name && this.formValid.nickName) {
            this.ready = true;
        } else {
            this.ready = false;
        }
    }

    submit() {
        this.validator();
        if (this.ready) {
            this.upsertProfile();
        }
    }

    upsertProfile() {
        const body = { id: this.id, ...this.form };
        this.clientService.upsertProfile(body).subscribe({
            next: (r) => {
                this.close(true);
            },
            error: (e) => {
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }
}
