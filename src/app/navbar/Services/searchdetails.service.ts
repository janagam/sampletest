import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { SearchViewModel } from '../Models/search-view-model';
import { CategoryproductVM } from '../../subcategory-list/Model/categoryproduct';

@Injectable()
export class SearchdetailsService {

  constructor(private http: Http) { }

  SearchTermProduct(searchTerm: string): Observable<SearchViewModel[]> {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const urlSearchParams = new URLSearchParams();
     urlSearchParams.append('Searhterm', searchTerm);
    const options = new RequestOptions({ headers: myHeaders, params: urlSearchParams });
    return this.http.get('http://localhost:31029/api/product/Searhterm?searchterm=' + searchTerm, options)
    .map((response: Response) => <SearchViewModel[]>response.json()).catch(this.handleError);
  }
  handleError(error: Response) {
    return Observable.throw(error);
  }
  CompositionSearch(searchTerm: string): Observable<CategoryproductVM> {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const urlSearchParams = new URLSearchParams();
     urlSearchParams.append('Searhterm', searchTerm);
    const options = new RequestOptions({ headers: myHeaders, params: urlSearchParams });
    return this.http.get('http://localhost:31029/api/product/CompositionSearch?SO=' + searchTerm, options)
    .map((response: Response) => <CategoryproductVM>response.json());
  }

  AlphabeticalSearch(searchTerm: string): Observable<SearchViewModel[]> {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const urlSearchParams = new URLSearchParams();
     urlSearchParams.append('Searhterm', searchTerm);
    const options = new RequestOptions({ headers: myHeaders, params: urlSearchParams });
    return this.http.get('http://localhost:31029/api/product/AlphabticalSearhterm?searchterm=' + searchTerm, options)
    .map((response: Response) => <SearchViewModel[]>response.json()).catch(this.handleError);
  }





}
