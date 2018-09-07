import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { UserMedicine, Userprescription } from '../Models/prescription';

@Injectable()
export class PrescriptionService {

  constructor(private _httpclient: Http) { }


  AddPrescription(prescription: UserMedicine): Observable<string> {
    let userId = 0;
    if ((JSON.parse(sessionStorage.getItem('customerdata')) !== null)) {
      userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
    }
    const body = JSON.stringify(prescription);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    console.log('this is body' + body + 'this is token ' + { headers: headers });
    return this._httpclient.post('http://localhost:31029/api/prescription/addmedicines?userId=' + userId, body, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));
  }
  UploadPrescription(Name: string, DoctorName: string, formdata: FormData): Observable<string> {
    let userId = 0;
    if ((JSON.parse(sessionStorage.getItem('customerdata')) !== null)) {
      userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
    }
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    return this._httpclient.post('http://localhost:31029/api/prescription/file?userId=' + userId +
      '&name=' + Name + '&docName=' + DoctorName, formdata, options)
      .map(res => res.json());
  }

  GetListOfPrescritption(): Observable<Userprescription[]> {
    const userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const user_AccesToken = sessionStorage.getItem('userToken');
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + user_AccesToken);
    const options = new RequestOptions({ method: RequestMethod.Get, headers: headers });
    return this._httpclient.get('http://localhost:31029/api/prescription/Prescriptions?userId=' + userId, options)
      .map((res => {
        const data = res.json();
        return data;
      }
      ));

  }
}
