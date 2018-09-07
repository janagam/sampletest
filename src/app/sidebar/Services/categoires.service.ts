import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ICategory } from '../Model/categorymodel';


@Injectable()
 export class CategoryService {
  private data: any = undefined;

  ParacategorId: ParacategorId;

  constructor(private _http: Http) {
 }

GetCategoriesList(): Observable<ICategory[]> {
     return this._http.get('http://localhost:31029/api/home/categories')
     .map((response: Response) => <ICategory[]>response.json()).catch(this.handleError);
   }
   handleError(error: Response) {
     console.error(error);
     return Observable.throw(error);
   }
   setData(data: any) {
       this.ParacategorId = data;
   }

   getData(): any {
       return this.ParacategorId;
   }
}

export interface ParacategorId {
  // name: string;
  subcatId: string;
  catId: string;
 status: boolean;
}



