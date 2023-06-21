import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    public currentUserSubject: BehaviorSubject<any>;
    public currentTokenSubject: BehaviorSubject<String>;
    public user: any;

    constructor() {}

    public clear(): void {
        localStorage.clear();
    }

    public getToken() {
        const token = localStorage.getItem('token');
        if (!token) {
            this.currentUserSubject = new BehaviorSubject<any>(null);
            this.currentTokenSubject = new BehaviorSubject<String>(null);
            return false;
        } else {
            try {
                this.user = JSON.parse(atob(token.split('.')[1]));
                this.currentUserSubject = new BehaviorSubject<any>(this.user);
                this.currentTokenSubject = new BehaviorSubject<String>(token);
                return token;
            } catch (e) {
                this.clear();
                return false;
            }
        }
    }

    public setToken(token: string) {
        localStorage.setItem('token', token);
    }
}
