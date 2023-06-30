import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from '../../core/models/breadcrumb.model';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
    @Input() breadcrumbs: Breadcrumb[] = [];

    constructor(private router: Router) {}

    goTo(url: string) {
        this.router.navigate([url]);
    }
}
