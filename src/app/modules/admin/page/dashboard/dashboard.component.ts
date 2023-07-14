import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientService } from '../../../../core/services/client.service';
import { CommonService } from '../../../../core/services/common.service';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    constructor(
        private storageService: StorageService,
        private router: Router,
        public commonService: CommonService,
        private clientService: ClientService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {}
}
