import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BearerHandler } from '../handlers/bearer.handler';
import { HttpResponse } from '../models/http.model';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    protected readonly http: HttpClient;

    constructor(bearerHandler: BearerHandler) {
        this.http = new HttpClient(bearerHandler);
    }

    getUsers(params) {
        return this.http.get<HttpResponse<any>>(`${environment.api.main}/admin/user`, { params });
    }
}
