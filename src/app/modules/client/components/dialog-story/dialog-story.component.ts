import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from '../../../../core/services/client.service';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
    selector: 'app-dialog-story',
    templateUrl: './dialog-story.component.html',
    styleUrls: ['./dialog-story.component.css']
})
export class DialogStoryComponent implements OnInit {
    id;
    public form = {
        idOrder: '',
        title: '',
        subtitle: '',
        description: ''
    };

    public formValid = {
        title: true,
        subtitle: true
    };

    ready = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) public dataDialog: any,
        public dialogRef: MatDialogRef<DialogStoryComponent>,
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
        this.form.title = this.dataDialog.title;
        this.form.subtitle = this.dataDialog.subtitle;
        this.form.description = this.dataDialog.description;
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
        this.formValid.title = this.form.title ? true : false;
        this.formValid.subtitle = this.form.subtitle ? true : false;

        if (this.formValid.subtitle && this.formValid.title) {
            this.ready = true;
        } else {
            this.ready = false;
        }
    }

    handleSubmit() {
        const body = { id: this.id, ...this.form };
        this.clientService.upsertStory(body).subscribe({
            next: (r) => {
                this.close(true);
            },
            error: (e) => {
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }
}
