import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Drugs } from '../../sidebar/Model/categoryproduct';

@Injectable()
export class DolfdayService {

  constructor(private _http: Http) { }


  GetDOlfday(): Observable<Drugs[]> {

    return this._http.get('http://localhost:31029/api/home/dlofDay')
      .map((response: Response) => <Drugs[]>response.json()).catch(this.handleError);
  }
  handleError(error: Response) {
    return Observable.throw(error);
  }

}
