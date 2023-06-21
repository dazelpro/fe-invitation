import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    constructor(private userService: UserService) {}

    ngOnInit(): void {}
    tes() {
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
