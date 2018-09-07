import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CategoryproductVM } from '../Model/categoryproduct';
import { Http, Response} from '@angular/http';

@Injectable()
export class SubcategoryProudctService {

  constructor(private _http: Http) { }
  GetsubCatProducts(catId: string , subcatId: string): Observable<CategoryproductVM> {
    const category_Id = +catId;
    const subcategory_Id = +subcatId;

    return this._http.get('http://localhost:31029/api/product/subcatproduct?cat=' + category_Id + '&scat=' + subcategory_Id)
    .map((response: Response) => <CategoryproductVM>response.json()).catch(this.handleError);

  }
  GetCatProducts(catId: string): Observable<CategoryproductVM> {
    const category_Id = +catId;

    return this._http.get('http://localhost:31029/api/product/categoryproduct?cat=' + category_Id)
    .map((response: Response) => <CategoryproductVM>response.json()).catch(this.handleError);

  }
  handleError(error: Response) {
    alert('here is response' + error);
    console.error(error);
    return Observable.throw(error);
  }
}
