import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Greeting } from '../../../../core/models/client.model';
import { ClientService } from '../../../../core/services/client.service';
import { CommonService } from '../../../../core/services/common.service';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
    selector: 'app-tab-greeting-card',
    templateUrl: './tab-greeting-card.component.html',
    styleUrls: ['./tab-greeting-card.component.css']
})
export class TabGreetingCardComponent implements OnInit {
    id;
    listGreeting: Greeting;
    constructor(
        public dialog: MatDialog,
        private clientService: ClientService,
        private _snackBar: MatSnackBar,
        private storageService: StorageService,
        private router: Router,
        public commonService: CommonService
    ) {}

    ngOnInit(): void {
        this.id = this.storageService.getIdParam('id-order-param');
        if (!this.id) {
            this.router.navigate(['/client']);
        } else {
            this.fetchGreeting();
        }
    }

    fetchGreeting() {
        let params = {
            idOrder: this.id
        };
        this.clientService.getGreeting(params).subscribe({
            next: (r) => {
                this.listGreeting = r.data.greeting;
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }
}
