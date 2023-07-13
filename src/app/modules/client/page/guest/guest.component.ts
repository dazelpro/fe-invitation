import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Breadcrumb } from '../../../../core/models/breadcrumb.model';
import { CommonService } from '../../../../core/services/common.service';

@Component({
    selector: 'app-guest',
    templateUrl: './guest.component.html',
    styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
    breadcrumbs: Breadcrumb[] = [];
    activeTab: number = 0; //0 = Guest; 1 = Greeting Card
    constructor(public commonService: CommonService, private router: Router, private _activatedroute: ActivatedRoute) {
        this.breadcrumbs = [
            { label: 'Client', url: '/client' },
            { label: 'Dashboard', url: `/client/dashboard` },
            { label: 'Tamu', url: `/client/guest` }
        ];
    }

    ngOnInit(): void {
        this.activeTab = this._activatedroute.snapshot.queryParams.tab || 0;
    }

    setActiveTab(tab: number) {
        this.activeTab = tab;
        this.router.navigate(['/client/guest'], {
            queryParams: {
                tab: tab
            }
        });
    }
}
