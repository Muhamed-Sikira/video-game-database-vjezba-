import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone ({
            setHeaders:{
                'X-RapidAPI-Key': '441267c4ebmsh8051938c1b7aa55p104d43jsn6dd58162d7e2',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                key: '502773bc932d481ab26e9c677d2349da',
            }
        });
        return next.handle(req);
    }
}