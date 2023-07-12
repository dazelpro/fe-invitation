import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tab-guest',
    templateUrl: './tab-guest.component.html',
    styleUrls: ['./tab-guest.component.css']
})
export class TabGuestComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('ini guest');
    }
}
