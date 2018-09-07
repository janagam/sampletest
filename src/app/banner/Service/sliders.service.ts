import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Isliders } from '../Model/slider';

@Injectable()
export class SlidersService {
constructor(private _http: Http) { }

  GetHomePageSlider(): Observable<Isliders[]> {
    return this._http.get ('http://localhost:31029/api/home/sliders')
    .map((response: Response) => <Isliders[]>response.json()).catch(this.handleError);

  }
  handleError(error: Response) {
   return Observable.throw(error);
  }
}


