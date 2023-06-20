import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    public currentUserSubject: BehaviorSubject<any>;
    public currentTokenSubject: BehaviorSubject<String>;

    constructor() {}

    public clear(): void {
        localStorage.clear();
    }

    public getToken() {
        const token = localStorage.getItem('token');
        console.log();
        if (!token) {
            this.currentUserSubject = new BehaviorSubject<any>(null);
            this.currentTokenSubject = new BehaviorSubject<String>(null);
            return false;
        } else {
            const user = JSON.parse(atob(token.split('.')[1]));
            console.log(user);
            this.currentUserSubject = new BehaviorSubject<any>(user);
            this.currentTokenSubject = new BehaviorSubject<String>(token);
            return token;
        }
    }

    verifyToken(token: string) {}

    public setToken(token: string) {
        localStorage.setItem('token', token);
    }
}
