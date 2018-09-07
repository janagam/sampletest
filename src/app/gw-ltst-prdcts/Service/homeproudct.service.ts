import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IRootObject } from '../Model/latestprodutmodel';


@Injectable()
export class HomeproudctService {
  private data: any = undefined;
  Productdetails: ProductId;


  constructor(private _http: Http) { }
  GetHomeProduct(): Observable<IRootObject[]> {

    return this._http.get('http://localhost:31029/api/home/products').
      map((response: Response) => <IRootObject[]>response.json().productCategoryVm)
      .catch(this.handleError);
  }
  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }
  setData(data: any) {
    this.Productdetails = data;
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

