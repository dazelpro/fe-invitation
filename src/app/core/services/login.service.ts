import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BearerHandler } from '../handlers/bearer.handler';
import { HttpResponse } from '../models/http.model';
import { LoginRequest, LoginResponse } from '../models/login.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    protected readonly http: HttpClient;

    constructor(bearerHandler: BearerHandler) {
        this.http = new HttpClient(bearerHandler);
    }

    login(body: LoginRequest) {
        return this.http.post<HttpResponse<LoginResponse>>(`${environment.api.main}/auth`, body);
    }
}
