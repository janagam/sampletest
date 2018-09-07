import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { User } from '../Model/user.model';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SocialUser } from 'angular4-social-login';


@Injectable()
export class SignUpService {
  constructor(private _httpclient: Http) { }
  createUser(user: User): Observable<string> {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._httpclient.post('http://localhost:31029/api/data/Register', body, options)
      .map((res: Response) => res.json()
      );
  }
}
