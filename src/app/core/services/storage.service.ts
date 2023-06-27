import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthUser } from '../models/auth.model';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    public currentUserSubject: BehaviorSubject<AuthUser>;
    public currentTokenSubject: BehaviorSubject<String>;
    public user: AuthUser;

    constructor(private router: Router) {
        const token = localStorage.getItem('token');
        if (!token) {
            this.currentUserSubject = new BehaviorSubject<AuthUser>(null);
            this.currentTokenSubject = new BehaviorSubject<String>(null);
        } else {
            const user = this.decryptToken(token);
            this.currentUserSubject = new BehaviorSubject<AuthUser>(user);
            this.currentTokenSubject = new BehaviorSubject<String>(token);
        }
    }

    decryptToken(token: string): AuthUser {
        try {
            const decryptedData = JSON.parse(atob(token.split('.')[1]));
            return decryptedData;
        } catch (e) {
            this.clear();
            return null;
        }
    }

    public clear(): void {
        localStorage.clear();
        // this.currentUserSubject.next(null);
        // this.currentTokenSubject.next(null);
    }

    public getToken() {
        const token = localStorage.getItem('token');
        return token;
    }

    public setToken(token: string) {
        const user = this.decryptToken(token);
        this.currentUserSubject.next(user);
        this.currentTokenSubject.next(token);
        localStorage.setItem('token', token);
    }

    public getUser(): AuthUser {
        return this.currentUserSubject.value;
    }

    public getRoleUser() {
        return this.currentUserSubject.value.role.toString();
    }

    public logout() {
        this.clear();
        this.currentUserSubject.next(null);
        this.currentTokenSubject.next(null);
        this.router.navigate(['/authentication']);
    }
}
