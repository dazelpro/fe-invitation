import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from '../../../../core/services/client.service';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
    selector: 'app-dialog-event',
    templateUrl: './dialog-event.component.html',
    styleUrls: ['./dialog-event.component.css']
})
export class DialogEventComponent implements OnInit {
    id;
    public form = {
        idOrder: '',
        title: '',
        name: '',
        address: '',
        mapLink: '',
        primary: '',
        date: new Date(),
        timeZone: 'WIB',
        timeStart: '',
        timeEnd: '',
        timeTillTheEnd: ''
    };

    public formValid = {
        title: true,
        timeStart: true,
        name: true
    };

    ready = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) public dataDialog: any,
        public dialogRef: MatDialogRef<DialogEventComponent>,
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
        this.form.title = this.dataDialog.title;
        this.form.date = this.dataDialog.date;
        this.form.timeStart = this.dataDialog.timeStart;
        this.form.timeEnd = this.dataDialog.timeEnd;
        this.form.timeTillTheEnd = this.dataDialog.timeTillTheEnd;
        this.form.timeZone = this.dataDialog.timeZone;
        this.form.address = this.dataDialog.address;
        this.form.mapLink = this.dataDialog.mapLink;
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
        this.formValid.title = this.form.title ? true : false;
        this.formValid.timeStart = this.form.timeStart ? true : false;

        if (this.formValid.name && this.formValid.title && this.formValid.timeStart) {
            this.ready = true;
        } else {
            this.ready = false;
        }
    }

    chooseTimeZone(arr: string) {
        this.form.timeZone = arr;
    }

    handleSubmit() {
        const body = { id: this.id, ...this.form };
        this.clientService.upsertEvent(body).subscribe({
            next: (r) => {
                this.close(true);
            },
            error: (e) => {
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }
}
