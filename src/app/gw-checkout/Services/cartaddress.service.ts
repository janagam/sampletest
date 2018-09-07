import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/observable';
import { ICartAddress, State, StateCities, AddressVm } from '../Models/address';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { UserCartData } from '../../login/Model/login.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CartaddressService {

  constructor(private _httpclient: Http) { }
  GetCartAdderss(user_AccesToken: string, userId: number, subtotal: number,
    userCartData: UserCartData): Observable<ICartAddress> {
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const body = JSON.stringify(userCartData);
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._httpclient.post('http://localhost:31029/api/customer/address?userId=' + userId + '&subtotal=' + subtotal, body, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      )).catch(this.handleError);
  }
  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }

  GetStates(user_AccesToken: string, countryId: string): Observable<State> {
    const CountryId = + countryId;
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this._httpclient.get('http://localhost:31029/api/customer/stateList?countryId=' + CountryId, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }

  GetCities(user_AccesToken: string, statesId: string): Observable<StateCities[]> {
    const Id = + statesId;
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this._httpclient.get('http://localhost:31029/api/customer/cityList?stateId=' + Id, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }
  AddAddress(addressVm: AddressVm, user_AccesToken: string): Observable<string> {
    const userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const body = JSON.stringify(addressVm);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._httpclient.post('http://localhost:31029/api/customer/addAddress?userId=' + userId, body, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }

  EditAddress(addressId: number, user_AccesToken: string): Observable<AddressVm> {
    const userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this._httpclient.get('http://localhost:31029/api/customer/editAddress?userId=' + userId + '&addressId=' + addressId, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }
  DeleteAddress(addressId: number, user_AccesToken: string): Observable<string> {
    const userId = + JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this._httpclient.get('http://localhost:31029/api/customer/deleteAddress?userId=' + userId + '&&addressId=' + addressId, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }

  UpdateAddress(addressVm: AddressVm, user_AccesToken: string): Observable<string> {
    const userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const body = JSON.stringify(addressVm);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._httpclient.post('http://localhost:31029/api/customer/updateAddress?userId=' + userId, body, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }

  MakeDefaultAddress(addressId: number, user_AccesToken: string): Observable<ICartAddress> {
    const userId = + JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    // console.log('this is body' + body + 'this is token ' + { headers : headers} );
    return this._httpclient.get('http://localhost:31029/api/customer/makeDefault?userId=' + userId + '&&addressId=' + addressId, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }
  GetAddressList(user_AccesToken: string, userId: number, subtotal: number,
    userCartData: UserCartData): Observable<ICartAddress> {
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const body = JSON.stringify(userCartData);
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._httpclient.post('http://localhost:31029/api/customer/Addresses?userId=' + userId + '&subtotal=' + subtotal, body, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }
}
