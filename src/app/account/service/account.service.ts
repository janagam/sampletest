import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { UpdateInfo } from '../model/update-info';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

@Injectable()
export class AccountService {
  constructor(private _httpclient: Http) { }

  GetProfile(user_AccesToken: string): Observable<UpdateInfo> {
    const userId = + JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this._httpclient.get('http://localhost:31029/api/Account/GetProfile?userId=' + userId, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }

  UpdateProfile(profile: UpdateInfo, user_AccesToken: string): Observable<UpdateInfo> {
    const userId = + JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const body = JSON.stringify(profile);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._httpclient.post('http://localhost:31029/api/Account/updateProfile?userId=' + userId, body, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }
}
