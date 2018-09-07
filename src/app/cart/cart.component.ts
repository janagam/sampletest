import { Component, OnInit } from '@angular/core';
import { CartVm, ProductsVm } from '../gw-ltst-prdcts/Model/latestprodutmodel';
import { Cartobject } from '../gw-ltst-prdcts/Model/latestprodutmodel';
import { CartService } from '../Common/cart/cart.service';
import { NavbarService } from '../navbar/Services/navbar.service';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { UserService } from '../login/Services/user.service';
import { UserCartData } from '../login/Model/login.model';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {

  list_Items: CartVm[] = [];
  cartList: Cartobject[] = [];
  cart_TotalAmount = 0;
  cart_DiscountAmunt = 0;
  cart_ActualAmount = 0;
  cart_count: number;
  count: number;
  type: string;
  Message: string;
  userdata: UserCartData;
  token = sessionStorage.getItem('userToken');

  constructor(private _cartservice: CartService, private _navabar: NavbarService,
    private notifications: NotificationsService,
    private userservice: UserService) {
  }
  ngOnInit() {
    this.LoadCartItem();
  }
  IncreaseQuantity(item: Cartobject) {
    this.type = 'cart';
    if (this.token === null || this.token === '') {
      const localstorageCartObj = this._cartservice.UpdateCartQuantity(item);
      const cartTotal = this.GetCartTotal();
      return localstorageCartObj;
    } else {
      const storageCartObj = this._cartservice.UpdateCartQuantity(item);
      const cartTotal = this.GetCartTotal();
      return storageCartObj;
    }
  }

  DecreaseQuantity(item: CartVm) {
    const localstorageCartObj = this._cartservice.RemoveCartQuantity(item);
    const cartTotal = this.GetCartTotal();
    return localstorageCartObj;
  }

  DeleteCartItem(item: Cartobject) {
    this.cartList = [];
    this.cart_TotalAmount = 0;
    this.cart_DiscountAmunt = 0;
    this.cart_ActualAmount = 0;
    const type = 'cart';
  status = '0';
    if (this.token === null || this.token === '') {
      const localstorageCartObj = this._cartservice.DeleteCartItem(item, type);
      this._navabar.change();
      const cartobj: any = JSON.parse(localStorage.getItem('cartobj'));
      this.cart_count = cartobj === null ? 0 : cartobj.length;
      this.count = cartobj.length;
      if (this.cart_count > 0) {
        for (let i = 0; i < cartobj.length; i++) {
          const itemes: Cartobject = JSON.parse(cartobj[i]);
          this.cart_ActualAmount += (itemes.Price * itemes.quantity);
          this.cart_DiscountAmunt += (itemes.Price - itemes.OriginalPrice) * itemes.quantity;
          this.cart_TotalAmount += (itemes.OriginalPrice * itemes.quantity);

          this.cartList.push(itemes);
        }
        this.notifications.error(
          'Deleted',
          '1 item is removed from cart',
          {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
          }
        );
        return cartobj;
      } else {
        this.Message = 'No Items In cart';
      }
    } else {
      this._cartservice.DeleteItem(item, type).toPromise().then((respe) => {
        if (respe === '200') {
          const token = sessionStorage.getItem('userToken');
          const userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
          status = '1';
          this.userservice.GetUserCartData(token, userId).subscribe((resp) => {
            this.userdata = resp;
            sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
            sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
            this._navabar.name = this.userdata.customerdata.firstname;
            this.notifications.error(
              'Deleted',
              '1 item is removed from cart',
              {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 50
              }
            );
            this._navabar.change();
            this.LoadCartItem();
          });
        } else {

          this._cartservice.DeleteItemCart(item);
          const userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
            this.notifications.error(
              'Deleted',
              '1 item is removed from cart',
              {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 50
              }
            );
             this._navabar.change();
            this.LoadCartItem();
        }
      });
      // if (status !== '1') {
      //   // tslint:disable-next-line:no-debugger
      //   debugger;
      //   this._cartservice.DeleteItemCart(item);
      //   const userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
      //   // this.userservice.GetUserCartData(this.token, userId).subscribe((resp) => {
      //   //   this.userdata = resp;
      //     // sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
      //     // sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
      //     // this._navabar.name = this.userdata.customerdata.firstname;
      //      this._navabar.change();
      //     this.LoadCartItem();
      //   // });
      // }

    }
  }

  LoadCartItem(): Cartobject {

    if (this.token === null || this.token === '') {
      const cartobj: any = JSON.parse(localStorage.getItem('cartobj'));
      this.cart_count = cartobj === null ? 0 : cartobj.length;
      this.count = cartobj === null ? 0 : cartobj.length;
      if (this.cart_count > 0) {
        for (let i = 0; i < cartobj.length; i++) {
          const item: Cartobject = JSON.parse(cartobj[i]);
          this.cart_ActualAmount += (item.Price * item.quantity);
          this.cart_DiscountAmunt += (item.Price - item.OriginalPrice) * item.quantity;
          this.cart_TotalAmount += (item.OriginalPrice * item.quantity);

          this.cartList.push(item);
        }
        return cartobj;
      } else {
        this.Message = 'No Items In cart';
      }
    } else {

      const cartobj: any = JSON.parse(sessionStorage.getItem('userCartITem'));
      this.cart_count = cartobj === null ? 0 : cartobj.length;
      this.count = cartobj === null ? 0 : cartobj.length;
      if (this.cart_count > 0) {
        for (let i = 0; i < cartobj.length; i++) {
          const item: Cartobject = cartobj[i];
          this.cart_ActualAmount += (item.Price * item.quantity);
          this.cart_DiscountAmunt += (item.Price - item.OriginalPrice);
          this.cart_TotalAmount += (item.OriginalPrice * item.quantity);
          this.cartList.push(item);
        }

        return cartobj;
      } else {
        this.Message = 'No Items In cart';
      }
    }

  }
  GetCartTotal(): CartVm {
    let cartobj: any;
    this.cart_TotalAmount = 0;
    this.cart_DiscountAmunt = 0;
    this.cart_ActualAmount = 0;
    if (this.token === null || this.token === '') {
      cartobj = JSON.parse(localStorage.getItem('cartobj'));
      for (let i = 0; i < cartobj.length; i++) {
        const obj: Cartobject = JSON.parse(cartobj[i]);
        this.cart_ActualAmount += (obj.Price * obj.quantity);
        this.cart_DiscountAmunt += (obj.Price - obj.OriginalPrice) * obj.quantity;
        this.cart_TotalAmount += (obj.OriginalPrice * obj.quantity);
      }
    } else {
      cartobj = JSON.parse(sessionStorage.getItem('userCartITem'));
      for (let i = 0; i < cartobj.length; i++) {
        const obj: Cartobject = cartobj[i];
        obj.TotalDiscount = (obj.TotalDiscount * obj.Price);
        this.cart_ActualAmount += ((obj.Price * obj.quantity));
        this.cart_DiscountAmunt += (obj.Price - obj.OriginalPrice) * obj.quantity;
        this.cart_TotalAmount += (obj.OriginalPrice * obj.quantity);
      }

    }
    return cartobj;
  }
  AddtoWhishlists(cartObject: Cartobject): void {
    const type = 'wishListItem';
    const Product: ProductsVm = {
      id: parseInt(cartObject.id, 10),
      name: cartObject.ItemName,
      itemType: cartObject.ItemType,
      quantityPerUnit: 1,
      unitPrice: cartObject.OriginalPrice,
      Msrp: cartObject.Price,
      picture: null,
      ranking: null,
      isVerified: 0,
      isPrdAttr: false,
      attrId: cartObject.AttrId,
      quantity: cartObject.quantity,
      catId: cartObject.catId
    };
    this._cartservice.addToCart(Product, type);
    this.notifications.success(
      'Whishlist',
      '1 item is added to Whishlist',
      {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 50
      }
    );
    this._navabar.change();
  }
}
