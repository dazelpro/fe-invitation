import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from '../../../../core/services/client.service';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
    selector: 'app-dialog-guest',
    templateUrl: './dialog-guest.component.html',
    styleUrls: ['./dialog-guest.component.css']
})
export class DialogGuestComponent implements OnInit {
    id;
    public form = {
        idOrder: '',
        name: '',
        phone: '',
        email: ''
    };

    public formValid = {
        name: true
    };

    ready = false;
    constructor(
        @Inject(MAT_DIALOG_DATA) public dataDialog: any,
        public dialogRef: MatDialogRef<DialogGuestComponent>,
        private clientService: ClientService,
        private _snackBar: MatSnackBar,
        private storageService: StorageService
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
        this.form.phone = this.dataDialog.phone;
        this.form.email = this.dataDialog.email;
    }

    close(arr: boolean) {
        this.dialogRef.close(arr);
    }

    submit() {
        this.validator();
        if (this.ready) {
            this.handleSubmit();
        }
    }

    validator() {
        this.formValid.name = this.form.name ? true : false;

        if (this.formValid.name) {
            this.ready = true;
        } else {
            this.ready = false;
        }
    }

    handleSubmit() {
        const body = { id: this.id, ...this.form };
        this.clientService.upsertGuest(body).subscribe({
            next: (r) => {
                this.close(true);
            },
            error: (e) => {
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }
}
