import { Injectable } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Productdetials } from '../Model/productdetials';

@Injectable()
export class ProductDetailsService {
  private data: any = undefined;
  Productdetails: ProductId;
  compostionsearch: Compostion;

  constructor(private http: Http) { }
  GetProductDetails(productId: number, itemType: string): Observable<Productdetials> {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('hdnItemCode', productId.toString());
    urlSearchParams.append('hdnItemType', itemType.toString());
    urlSearchParams.append('size', '');
    urlSearchParams.append('color', '');
    const options = new RequestOptions({ headers: myHeaders, params: urlSearchParams });
    const data = this.http.get('http://localhost:31029/api/product/details', options)
      .map((response: Response) => response.json()).catch(this.handleError);
    return data;
  }
  handleError(error: Response) {
    return Observable.throw(error);
  }
  setData(data: any) {
    this.Productdetails = data;
  }
  SetCompostionSearch(data: any) {
    this.compostionsearch = data;
  }
  GetCompostionSearch() {
    return this.compostionsearch;
  }


  getData(): any {
    return this.Productdetails;
  }
}
export interface ProductId {
  // name: string;
  prodId: string;
  itemType: string;
}
export interface Compostion {
  name: string;
  // prodId: string;
  // itemType: string;
}
