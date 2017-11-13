import {Injectable, Injector} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../user/user";
import {NavController} from "ionic-angular";

/*
  Generated class for the JwtInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JwtInterceptorProvider implements HttpInterceptor {
  private user: User;

  constructor(private inj: Injector,
              private nav: NavController) {
    console.log('Hello JwtInterceptorProvider Provider');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.user = this.inj.get(User);

    let JWT = this.user.getToken()
    req = req.clone({
      setHeaders: {
        Authorization: JWT
      }
    });
    return next.handle(req).map(event => {
      if (event instanceof HttpResponse) {
        if (event.status === 401 || event.status === 403) {
          return this.user.refreshToken().then((data) => {
            if (data.token !== '') {
              localStorage.setItem('currentUser', JSON.stringify(data.user));
              localStorage.setItem('currentUserPermissions', JSON.stringify(data.permissions));
              localStorage.setItem('JWToken', data.token);
            } else {
              localStorage.removeItem('currentUser');
              localStorage.removeItem('currentUserPermissions');
              localStorage.removeItem('JWToken');
              this.nav.setRoot('LoginPage');
              return Observable.throw(event);
            }
            const clonedRequestRepeat = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('JWToken'))
            });
            return next.handle(clonedRequestRepeat);
          })
        } else {
          return Observable.throw(event);
        }
      }
      return event;
    });
  }

}
