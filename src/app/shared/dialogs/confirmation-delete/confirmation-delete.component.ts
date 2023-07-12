import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirmation-delete',
    templateUrl: './confirmation-delete.component.html',
    styleUrls: ['./confirmation-delete.component.css']
})
export class ConfirmationDeleteComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<ConfirmationDeleteComponent>) {}

    ngOnInit(): void {}

    close(status) {
        this.dialogRef.close(status);
    }
}
