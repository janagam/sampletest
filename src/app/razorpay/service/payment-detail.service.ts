import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
@Injectable()
export class PaymentDetailService {

  constructor(private _http: Http) { }

  RazorPayPaymentDetails(paymentId: string, orderId: string, mailbody: string): Observable<string> {
    const user_AccesToken = sessionStorage.getItem('userToken');
    const userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const body = JSON.stringify(mailbody);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._http.post('http://localhost:31029/api/order/razorPayDetails?paymentId=' + paymentId + '&orderId=' + orderId + '&userId='
      + userId, body, options)
      .map((response: Response) => <string>response.json());
  }
}

