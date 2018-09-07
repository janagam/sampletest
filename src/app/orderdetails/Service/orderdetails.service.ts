import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/observable';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'Rxjs/Subscription';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import { OrderDetailsVm, TrackOrderItems, TrackOrder } from '../Model/order-details-vm';

@Injectable()
export class OrderdetailsService {

  constructor(private _httpclient: Http) { }

  GetOrderDetials(user_AccesToken: string, OrderId: string): Observable<OrderDetailsVm> {
    const userId = + JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this._httpclient.get('http://localhost:31029/api/Track/Orderdetails?OrderId=' + OrderId, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      )).catch(this.errorhandler);
  }
  ReOrder(user_AccesToken: string, orderItems: TrackOrder): Observable<string> {
    const userId = + JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const body = JSON.stringify(orderItems);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this._httpclient.post('http://localhost:31029/api/Track/ReOrder?userId=' + userId, body, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      )).catch(this.errorhandler);
  }
  errorhandler(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }
}
