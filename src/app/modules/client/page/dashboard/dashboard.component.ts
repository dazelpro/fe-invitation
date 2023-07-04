import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from '../../../../core/models/breadcrumb.model';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardClientComponent implements OnInit {
    id: string;
    breadcrumbs: Breadcrumb[] = [];

    constructor(private storageService: StorageService, private router: Router) {
        this.breadcrumbs = [
            { label: 'Client', url: '/client' },
            { label: 'Dashboard', url: `/client/dashboard` }
        ];
    }

    ngOnInit(): void {
        this.id = this.storageService.getIdParam('id-order-param');
        if (!this.id) this.router.navigate(['/client']);
    }
}
