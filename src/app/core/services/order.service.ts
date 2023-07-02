import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BearerHandler } from '../handlers/bearer.handler';
import { HttpResponse } from '../models/http.model';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    protected readonly http: HttpClient;

    constructor(bearerHandler: BearerHandler) {
        this.http = new HttpClient(bearerHandler);
    }

    getMyOrder() {
        return this.http.get<HttpResponse<any>>(`${environment.api.main}/orders/my-order`);
    }

    update(body: any) {
        return this.http.put<HttpResponse<any>>(`${environment.api.main}/orders/url-website`, body);
    }
}
