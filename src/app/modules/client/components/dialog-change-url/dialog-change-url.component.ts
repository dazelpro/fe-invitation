import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyOrder } from '../../../../core/models/order.model';
import { OrderService } from '../../../../core/services/order.service';

@Component({
    selector: 'app-dialog-change-url',
    templateUrl: './dialog-change-url.component.html',
    styleUrls: ['./dialog-change-url.component.css']
})
export class DialogChangeUrlComponent implements OnInit {
    // public form = {
    //     id: '',
    //     url: ''
    // };

    form: MyOrder;

    public formValid = {
        url: true
    };

    ready = false;

    constructor(public dialogRef: MatDialogRef<DialogChangeUrlComponent>, @Inject(MAT_DIALOG_DATA) public dataDialog: any, private _snackBar: MatSnackBar, private orderService: OrderService) {}

    ngOnInit(): void {
        this.form = this.dataDialog;
    }

    close(arr: boolean) {
        this.dialogRef.close(arr);
    }

    validator() {
        this.formValid.url = this.form.url ? true : false;

        if (this.formValid.url) {
            this.ready = true;
        } else {
            this.ready = false;
        }
    }

    submit() {
        this.validator();
        if (this.ready) {
            this.updateURL();
        }
    }

    updateURL() {
        const body = this.form;
        this.orderService.update(body).subscribe({
            next: (r) => {
                this.close(true);
            },
            error: (e) => {
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }
}
