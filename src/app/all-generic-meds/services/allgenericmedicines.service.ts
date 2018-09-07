import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Drugs } from '../../sidebar/Model/categoryproduct';
import { ICategory } from '../../sidebar/Model/categorymodel';

@Injectable()
export class AllgenericmedicinesService {

  constructor(private _http: Http) { }

  GetGenericDrugs(): Observable<Drugs[]> {

    return this._http.get('http://localhost:31029/api/home/generiMedicines')
      .map((response: Response) => <Drugs[]>response.json()).catch(this.handleError);
  }
  GetDOlfday(): Observable<Drugs[]> {

    return this._http.get('http://localhost:31029/api/home/dlofDay')
      .map((response: Response) => <Drugs[]>response.json()).catch(this.handleError);
  }

  GetProductList(): Observable<ICategory[]> {
    return this._http.get('http://localhost:31029/api/product/List')
      .map((response: Response) => <ICategory[]>response.json()).catch(this.handleError);
  }
  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }

}
