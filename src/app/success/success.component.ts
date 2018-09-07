import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/Services/navbar.service';
import { WindowRef } from '../razorpay/service/window';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  Message: string;
  orderId: string;
  constructor(private _navabar: NavbarService, private _windowref: WindowRef) {
    this.orderId = this._windowref.returnOrderId();

   }

  ngOnInit() {

    this._navabar.change();
    this.orderId = this._windowref.returnOrderId();
    this.Message = 'Your order is successfull confirmed';
  }

}
