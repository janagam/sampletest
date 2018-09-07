import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
// import {Observable} from 'rxjs/observable';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import { TrackOrder, TrackingOrderDetials } from '../Model/track-order';


@Injectable()
export class TrackorderService {

  constructor(private _httpclient: Http) { }

  GetTrackOrder(user_AccesToken: string): Observable<TrackOrder> {
    const userId = + JSON.parse(sessionStorage.getItem('customerdata')).userId;
    // const body = JSON.stringify(addressVm);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this._httpclient.get('http://localhost:31029/api/Track/TrackOrder?userId=' + userId, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      )).catch(this.handleError1);
  }


  GetTrackOrderDetial(user_AccesToken: string, awb: string): Observable<TrackingOrderDetials> {
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this._httpclient.get('http://localhost:31029/api/Track/TrackingOrder?waybillno=' + awb, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      )).catch(this.handleError1);
  }
  handleError1(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }
}
