import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { UserService } from '../../core/services/user.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    constructor(private userService: UserService, private storageService: StorageService) {}

    ngOnInit(): void {}
    tes() {
        console.log(this.storageService.getUser());
        this.userService.listUser().subscribe({
            next: (r) => {
                console.log(r);
            },
            error: (e) => {
                console.log(e);
            }
        });
    }
}
