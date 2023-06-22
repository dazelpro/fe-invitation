import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
    providedIn: 'root'
})
export class AnonymousGuard {
    constructor(private router: Router, private storageService: StorageService) {}

    canActivate() {
        const isLogin = this.storageService.getToken();
        if (isLogin) {
            this.router.navigate(['/']);
            return false;
        } else {
            return true;
        }
    }
}
