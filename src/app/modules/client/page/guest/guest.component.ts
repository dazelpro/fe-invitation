import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../core/models/breadcrumb.model';
import { CommonService } from '../../../../core/services/common.service';

@Component({
    selector: 'app-guest',
    templateUrl: './guest.component.html',
    styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
    breadcrumbs: Breadcrumb[] = [];
    constructor(public commonService: CommonService) {
        this.breadcrumbs = [
            { label: 'Client', url: '/client' },
            { label: 'Dashboard', url: `/client/dashboard` },
            { label: 'Kado', url: `/client/gift` }
        ];
    }

    ngOnInit(): void {}
}
