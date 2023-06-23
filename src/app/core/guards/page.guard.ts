import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Role } from '../constants/role.const';
import { StorageService } from '../services/storage.service';

@Injectable({
    providedIn: 'root'
})
export class PageGuard {
    constructor(private router: Router, private storageService: StorageService) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const expectedRole = route.data.expectedRole;
        const role = this.storageService.getRoleUser();
        const status = expectedRole.some((roleExpec: any) => role.includes(roleExpec));

        if (!status) {
            if (role === Role.ADMIN.toString()) {
                this.router.navigate(['/']);
                return false;
            } else if (role === Role.MEMBER.toString()) {
                this.router.navigate(['/client']);
                return false;
            }
        }
        return true;
    }
}
