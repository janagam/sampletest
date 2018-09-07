import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Login, UserCartData, UserDetail } from '../Model/login.model';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from '../../signup/Model/user.model';
import { SocialUser } from 'angular4-social-login';
import { promise } from 'protractor';

@Injectable()
export class UserService {
  login: Login;
  userCartData: UserCartData;
  debugger;
  readonly rootUrl = 'http://localhost:31029';
  constructor(private _httpclient: Http) { }

  UserAuthentication(login) {
    const loginData = 'username=' + login.username + '&Password=' + login.password + '&grant_type=password';
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this._httpclient.post('http://localhost:31029/token', loginData, options)
      .map((res: Response) => res.json());

  }
  UserCartData(userCartData: UserCartData, userToken: string, userId: string): Observable<string> {
    const body = JSON.stringify(userCartData);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + userToken);
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._httpclient.post('http://localhost:31029/api/data/customercart?userId=' + userId, body, options)
      .map((res: Response) => res.json()
      );
  }

  GetUserCartData(userToken: string, userId: string): Observable<UserCartData> {
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + userToken);
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._httpclient.get('http://localhost:31029/api/data/getcustomercart?userId=' + userId, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }

  ExteranlLogin(user: SocialUser, type: string): Observable<UserDetail> {
    const body = JSON.stringify(user);
    const typeofUser = type;
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._httpclient.post('http://localhost:31029/api/data/externalLogin?provider=' + type, body, options)
      .map((res: Response) => res.json()
      );
  }

  UserDetails(login, token: string): Observable<UserDetail> {
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + token);
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._httpclient.get('http://localhost:31029/api/data/getcustomerdata?username=' + login.username + '&password='
      + login.password, options).map((res: Response) => res.json());
  }
}

