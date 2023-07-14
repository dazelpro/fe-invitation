import { Injectable } from '@angular/core';
import { Admin } from '../constants/admin.const';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor(private storageService: StorageService) {}

    public goToWebsite() {
        let url = this.storageService.getIdParam('slug-param');
        window.open(url, '_blank');
    }

    public isOwner() {
        if (this.storageService.getUser().username === Admin.ADMINISTRATOR_USER) return true;
    }
}
