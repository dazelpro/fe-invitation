import { Component } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    public initial: string;
    constructor(private storageService: StorageService) {
        this.initial = this.getInitial();
    }

    getInitial() {
        let username = this.storageService.getUser().name.split(' ').slice(0, 2).join(' ');
        let parts = username.split(' ');
        let initials = '';
        for (let i = 0; i < parts.length; i++) {
            if (parts[i].length > 0 && parts[i] !== '') {
                initials += parts[i][0];
            }
        }
        return initials;
    }
}
