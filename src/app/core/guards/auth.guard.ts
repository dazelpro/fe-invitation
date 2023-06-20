import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(private router: Router, private storageService: StorageService) {}

    canActivate() {
        const isLogin = this.storageService.getToken();
        console.log(isLogin);
        if (isLogin) {
            return true;
        } else {
            this.router.navigate(['/authentication']);
            return false;
        }
    }
}
