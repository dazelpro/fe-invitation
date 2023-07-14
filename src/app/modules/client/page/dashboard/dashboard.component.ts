import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Breadcrumb } from '../../../../core/models/breadcrumb.model';
import { CounterDashboard } from '../../../../core/models/client.model';
import { ClientService } from '../../../../core/services/client.service';
import { CommonService } from '../../../../core/services/common.service';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardClientComponent implements OnInit {
    id: string;
    counter: CounterDashboard;
    breadcrumbs: Breadcrumb[] = [];

    constructor(
        private storageService: StorageService,
        private router: Router,
        public commonService: CommonService,
        private clientService: ClientService,
        private _snackBar: MatSnackBar
    ) {
        this.breadcrumbs = [
            { label: 'Client', url: '/client' },
            { label: 'Dashboard', url: `/client/dashboard` }
        ];
    }

    ngOnInit(): void {
        this.id = this.storageService.getIdParam('id-order-param');
        if (!this.id) {
            this.router.navigate(['/client']);
        } else {
            this.fetchCounterData();
        }
    }

    fetchCounterData() {
        let params = {
            idOrder: this.id
        };
        this.clientService.getCounterDashboard(params).subscribe({
            next: (r) => {
                this.counter = r.data;
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }
}
