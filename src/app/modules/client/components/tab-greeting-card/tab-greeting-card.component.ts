import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tab-greeting-card',
    templateUrl: './tab-greeting-card.component.html',
    styleUrls: ['./tab-greeting-card.component.css']
})
export class TabGreetingCardComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('ini greeting');
    }
}
