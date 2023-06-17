import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BearerHandler extends HttpHandler {
    constructor(private readonly next: HttpHandler) {
        super();
    }

    handle(req: HttpRequest<any>) {
        const clone = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + 'TOKEN',
                platform: 'web'
            }
        });
        return this.next.handle(clone);
    }
}
