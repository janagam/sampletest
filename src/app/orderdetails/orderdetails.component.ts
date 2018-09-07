import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrderdetailsService } from './Service/orderdetails.service';
import { OrderDetailsVm, TrackOrderItems, TrackOrder } from './Model/order-details-vm';
import { UserService } from '../login/Services/user.service';
import { NavbarService } from '../navbar/Services/navbar.service';
import { UserCartData } from '../login/Model/login.model';


@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  id: any;
  order_detailsVm: OrderDetailsVm;
  userdata: UserCartData;
  access_Token: string;
  constructor(private activeatedRoute: ActivatedRoute, private _orderDetials: OrderdetailsService,
    private router: Router, private userservice: UserService, private _navbar: NavbarService) { }

  ngOnInit() {
    this.activeatedRoute.params.subscribe((params: Params) => {
      this.id = params['order_id'];
    });
    const token = sessionStorage.getItem('userToken');
    this.access_Token = token;
    this._orderDetials.GetOrderDetials(token, this.id).subscribe(data => {
      this.order_detailsVm = data;
    });
  }
  ReOrder(orderItems: TrackOrder) {
    this._orderDetials.ReOrder(this.access_Token, orderItems).subscribe(data => {
      const userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
      if (data === '201') {
        this.userservice.GetUserCartData(this.access_Token, userId).subscribe((respe) => {
          this.userdata = respe;
          sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
          sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
          this._navbar.name = this.userdata.customerdata.firstname;
          this._navbar.change();
        });
        this.router.navigate(['/Home']);
      }
    });

  }

}
