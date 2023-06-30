import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../core/models/breadcrumb.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardClientComponent implements OnInit {
    breadcrumbs: Breadcrumb[] = [];

    constructor() {
        this.breadcrumbs = [
            { label: 'Client', url: '/client' },
            { label: 'Dashboard', url: `/client/dashboard` }
        ];
    }

    ngOnInit(): void {}
}
