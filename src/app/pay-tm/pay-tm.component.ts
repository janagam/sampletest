import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRef } from '../razorpay/service/window';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/observable';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

@Component({
  selector: 'app-pay-tm',
  templateUrl: './pay-tm.component.html',
  styleUrls: ['./pay-tm.component.css']
})
export class PayTmComponent implements OnInit {
  Message: string;
  data: any;
  paymentDetails: any;
  orderId: string;
  mailbody: string;
  modalclsoe: true;
   paytm: any;
   myForm: FormGroup;

  constructor(private router: Router, private winRef: WindowRef , private _http: Http) { }

  ngOnInit() {
    this.data = this.winRef.returnPayTmData();
    this.Message = 'Paytm';
    this.mailbody = this.data.mailbody;
    this.PAYNOW();
  }
  PAYNOW() {
    // tslint:disable-next-line:no-debugger
    debugger;
     console.log(this.data);
    let form = '<form method="post" action="' + this.data.routeUrl + ' name="paytm-payment-form"> ';
      form = form + '<input type="hidden" name="MID" value=' + this.data.routeUrl + '>';
      form = form + '<input type="hidden" name="CHANNEL_ID" value=' + this.data.Channel_id + '>';
      form = form +  '<input type="hidden" name="INDUSTRY_TYPE_ID" value=' + this.data.Industry_type_id + '>';
      form = form + '<input type="hidden" name="WEBSITE" value=' + this.data.Website + '>';
      form = form + '<input type="hidden" name="EMAIL" value=' + this.data.email + '>';
      form = form + '<input type="hidden" name="MOBILE_NO" value=' + this.data.phoneNo + '>';
      form = form + '<input type="hidden" name="CUST_ID" value=' + this.data.cust_id + '>';
      form = form + '<input type="hidden" name="ORDER_ID" value=' + this.data.orderid + ' >';
      form = form + '<input type="hidden" name="TXN_AMOUNT" value=' + this.data.amount + ' >';
      form = form + '<input type="hidden" name="CHECKSUMHASH" value=' + this.data.checksum + ' >';
      console.log(form);
      // form.concat('body').submit();


      const body = JSON.stringify(this.data);
      const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
      headers.append('withCredentials', 'false');

      const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
       // tslint:disable-next-line:no-debugger
       debugger;
     this._http.post('https://secure.paytm.in/oltp-web/processTransaction?orderid=' + this.data.orderid , body, options)
        .map((response: Response) => {
          // tslint:disable-next-line:no-debugger
          debugger;
        const data = response.json();
        console.log(data);
        });

  }
}
