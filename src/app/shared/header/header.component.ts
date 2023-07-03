import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../core/services/loading.service';
import { StorageService } from '../../core/services/storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public initial: string;
    public loading: boolean;
    constructor(private storageService: StorageService, private loadingService: LoadingService) {
        this.initial = this.getInitial();
    }

    ngOnInit(): void {
        this.loadingService.isLoading.subscribe((resp) => {
            this.loading = resp;
        });
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

    logout() {
        this.storageService.logout();
    }
}
