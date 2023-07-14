import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Breadcrumb } from '../../../../core/models/breadcrumb.model';
import { Users } from '../../../../core/models/users.model';
import { AdminService } from '../../../../core/services/admin.service';
import { CommonService } from '../../../../core/services/common.service';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    search: string;
    listUser: Users;
    breadcrumbs: Breadcrumb[] = [];

    constructor(
        public dialog: MatDialog,
        public commonService: CommonService,
        private adminService: AdminService,
        private _snackBar: MatSnackBar,
        private storageService: StorageService,
        private router: Router
    ) {
        this.breadcrumbs = [
            { label: 'Dashboard', url: `/dashboard` },
            { label: 'Users', url: `/users` }
        ];
    }

    ngOnInit(): void {
        let params = {
            search: this.search
        };
        this.adminService.getUsers(params).subscribe({
            next: (r) => {
                this.listUser = r.data.users;
            },
            error: (e) => {
                console.log(e);
                this._snackBar.open('Terdapat kendala pada sistem');
            }
        });
    }
}
