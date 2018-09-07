import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { UserCartData } from '../../login/Model/login.model';
import { FinalaOrderVM } from '../Models/address';
import { PaymentVM } from '../Models/address';

@Injectable()
export class OrderService {

  constructor(private _httpclient: Http) { }

  ApplyPromoCode(userCartData: UserCartData, promovalue: string): Observable<number> {
    const user_AccesToken = sessionStorage.getItem('userToken');
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const body = JSON.stringify(userCartData);
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._httpclient.post('http://localhost:31029/api/order/applyPromo?Promo=' + promovalue, body, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }
  OrderConfrim(FinalOrderdata: FinalaOrderVM): Observable<PaymentVM> {
    const userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const user_AccesToken = sessionStorage.getItem('userToken');
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const body = JSON.stringify(FinalOrderdata);
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._httpclient.post('http://localhost:31029/api/order/confirm?userId=' + userId, body, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }


}
