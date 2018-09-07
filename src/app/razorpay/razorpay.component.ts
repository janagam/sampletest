import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRef } from './service/window';
import { Http } from '@angular/http';
import { PaymentDetailService } from './service/payment-detail.service';
import { NavbarService } from '../navbar/Services/navbar.service';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.component.html',
  styleUrls: ['./razorpay.component.css']
})


export class RazorpayComponent implements OnInit {
  Message: string;
  Razorpay: any;
  data: any;
  paymentDetails: any;
  orderId: string;
  mailbody: string;
  modalclsoe: true;
  constructor(private router: Router, private winRef: WindowRef, private _http: Http,
    private _PaymentDetailService: PaymentDetailService, private _navabar: NavbarService,
    private _ngZone: NgZone) { }

  ngOnInit() {

    this.data = this.winRef.getData();
    this.Message = 'RazorPayment';
    this.mailbody = this.data.mailbody;
    this.PAYNOW();
  }
  PAYNOW(): void {
    this.data.amount = (this.data.amount);
    this.orderId = this.data.receipt;
    const options = {
      'key': this.data.key,
      'amount': this.data.amount,
      'name': 'Genericwala',
      'description': this.data.receipt,
      'image': 'https://genericwala.com/Images/Logo.png',
      'handler': this.paymentCapture.bind(this),
      // function (response) {
      //     // tslint:disable-next-line:no-debugger
      //     debugger;
      //     const id = response.razorpay_payment_id;
      //   if (id !== null) {
      //     // tslint:disable-next-line:no-debugger
      //     debugger;
      //     this.RazorPayPaymentDetails();
      //   }
      // },
      'modal': {
        'ondismiss': this.closePop.bind(this),
      },
      // 'modal': {
      //   'escape': false,
      //   'ondismiss': function () {
      //     // tslint:disable-next-line:no-debugger
      //     debugger;
      //     const id = null;
      //     window.location.href = 'Charge.aspx?id=' + id + '&orderId=' + this.data.receipt;
      //   }
      // },
      'prefill': {
        'email': this.data.email,
        'contact': this.data.phoneNo
      },

      'theme': {
        'color': '#F37254'
      }
    };
    // console.log(options);
    const rzp1 = new this.winRef.nativeWindow.Razorpay(options);
    rzp1.open();
  }
  paymentCapture(response) {
    // console.log(response);
    const paymentId = response.razorpay_payment_id;
    this._PaymentDetailService.RazorPayPaymentDetails(paymentId, this.orderId, this.mailbody).subscribe(data => {
      if (data !== 'Failure') {
        this.success();
      }
    });
  }

  closePop(): void {
    this._ngZone.run(() => {
      this.router.navigate(['/Failure']);
    });

  }

  success(): void {
    const retrieveArray = JSON.parse(sessionStorage.getItem('userCartITem'));
    for (let i = 0; i < retrieveArray.length; i++) {
      retrieveArray.slice(i);
    }
    sessionStorage.removeItem('userCartITem');
    this._navabar.change();
    this.winRef.setOrderId(this.orderId);
    this._ngZone.run(() => {
      this.router.navigate(['/Success']);
    });
  }
}
