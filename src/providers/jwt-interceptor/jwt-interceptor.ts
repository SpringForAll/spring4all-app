import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../user/user";

/*
  Generated class for the JwtInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JwtInterceptorProvider implements HttpInterceptor {
  constructor(public http: Http, private user: User) {
    console.log('Hello JwtInterceptorProvider Provider');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const JWT = `Bearer ${this.user.getToken()}`;
    req = req.clone({
      setHeaders: {
        Authorization: JWT
      }
    });
    return next.handle(req).map(event => {
      if (event instanceof HttpResponse) {
        if (event.status === 401) {
          // JWT expired, go to login
        }
      }
      return event;
    });
  }

}
