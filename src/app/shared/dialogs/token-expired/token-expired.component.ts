import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-token-expired',
    templateUrl: './token-expired.component.html',
    styleUrls: ['./token-expired.component.css']
})
export class TokenExpiredComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<TokenExpiredComponent>) {}

    ngOnInit(): void {}

    close() {
        this.dialogRef.close();
    }
}
