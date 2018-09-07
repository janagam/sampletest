import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent , HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // tslint:disable-next-line:no-debugger
    debugger ;
    const authheader = 'Bearer ' + this.GetToken();
    const reqAuthicateHeader = request.clone({ setHeaders  : { Authorization : authheader} });
    console.log('hi this interceptor');
    return next.handle(reqAuthicateHeader);
}
GetToken(): string {
 const token = localStorage.getItem('userToken');
  return token;
}
}

