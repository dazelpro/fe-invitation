import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BearerHandler } from '../handlers/bearer.handler';
import { HttpResponse } from '../models/http.model';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    protected readonly http: HttpClient;

    constructor(bearerHandler: BearerHandler) {
        this.http = new HttpClient(bearerHandler);
    }

    getProfile(params: any) {
        return this.http.get<HttpResponse<any>>(`${environment.api.main}/client/profile`, { params });
    }

    upsertProfile(body: any) {
        return this.http.post<HttpResponse<any>>(`${environment.api.main}/client/profile`, body);
    }
}
