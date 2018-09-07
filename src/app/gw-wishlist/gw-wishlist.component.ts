import { Component, OnInit } from '@angular/core';
import { WishlistObj, WishListVm, ProductsVm } from '../gw-ltst-prdcts/Model/latestprodutmodel';
import { CartService } from '../Common/cart/cart.service';
import { NavbarService } from '../navbar/Services/navbar.service';
import { UserService } from '../login/Services/user.service';
import { UserCartData } from '../login/Model/login.model';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-gw-wishlist',
  templateUrl: './gw-wishlist.component.html',
  styleUrls: ['./gw-wishlist.component.css']
})
export class GwWishlistComponent implements OnInit {
  wishlist_count = 0;
  count = 0;
  wishlist_TotalAmount = 0;
  wishlist_DiscountAmunt = 0;
  wishlit_ActualAmount = 0;
  wishlist: WishlistObj[] = [];
  Message: string;
  userdata: UserCartData;
  token = sessionStorage.getItem('userToken');
  constructor(private _cartservice: CartService, private _navbar: NavbarService,
    private notifications: NotificationsService,
    private userservice: UserService) { }

  ngOnInit() {
    this.LoadCartItem();
  }

  LoadCartItem(): WishlistObj {
    if (this.token === null || this.token === '') {
      const wishlist_Obj: any = JSON.parse(localStorage.getItem('wishlistobj'));
      this.wishlist_count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
      if (this.wishlist_count > 0) {
        for (let i = 0; i < wishlist_Obj.length; i++) {
          const item: WishlistObj = JSON.parse(wishlist_Obj[i]);
          this.wishlit_ActualAmount += ((item.Price * item.quantity));
          this.wishlist_DiscountAmunt += (item.Price - item.OriginalPrice) * item.quantity;
          this.wishlist_TotalAmount += (item.OriginalPrice * item.quantity);
          this.wishlist.push(item);
        }
        return wishlist_Obj;
      } else {
        this.Message = 'No Items In whishlist';
      }
    } else {
      const wishlist_Obj: any = JSON.parse(sessionStorage.getItem('userWhishList'));
      this.wishlist_count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
      this.count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
      if (this.wishlist_count > 0) {
        for (let i = 0; i < wishlist_Obj.length; i++) {
          const item: WishlistObj = wishlist_Obj[i];
          this.wishlit_ActualAmount += ((item.Price * item.quantity));
          this.wishlist_DiscountAmunt += (item.Price - item.OriginalPrice) * item.quantity;
          this.wishlist_TotalAmount += (item.OriginalPrice * item.quantity);
          this.wishlist.push(item);
        }
        return wishlist_Obj;
      } else {
        this.Message = 'No Items In whishlist';
      }

    }
  }

  UpdateWishlistItem(item: WishlistObj) {
    const localstorageCartObj = this._cartservice.UpdateWishlistQuantity(item);
    const cartTotal = this.GetCartTotal();
    return localstorageCartObj;
  }

  DeletewishlistItem(item: WishListVm) {
    const localstorageCartObj = this._cartservice.DeletewishlistQuantity(item);
    const cartTotal = this.GetCartTotal();
    return localstorageCartObj;
  }

  GetCartTotal(): WishListVm {
    this.wishlist_TotalAmount = 0;
    this.wishlist_DiscountAmunt = 0;
    this.wishlit_ActualAmount = 0;
    if (this.token === null || this.token === '') {
      const wishlist_Obj: any = JSON.parse(localStorage.getItem('wishlistobj'));
      for (let i = 0; i < wishlist_Obj.length; i++) {
        const obj: WishlistObj = JSON.parse(wishlist_Obj[i]);
        this.wishlit_ActualAmount += ((obj.Price * obj.quantity));
        this.wishlist_DiscountAmunt += (obj.Price - obj.OriginalPrice) * obj.quantity;
        this.wishlist_TotalAmount += (obj.OriginalPrice * obj.quantity);
      }
      return wishlist_Obj;
    } else {
      const wishlist_Obj: any = JSON.parse(sessionStorage.getItem('userWhishList'));
      this.wishlist_count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
      this.count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
      if (this.wishlist_count > 0) {
        for (let i = 0; i < wishlist_Obj.length; i++) {
          const obj: WishlistObj = wishlist_Obj[i];
          this.wishlit_ActualAmount += ((obj.Price * obj.quantity));
          this.wishlist_DiscountAmunt += (obj.Price - obj.OriginalPrice) * obj.quantity;
          this.wishlist_TotalAmount += (obj.OriginalPrice * obj.quantity);
        }
        return wishlist_Obj;
      } else {
        this.Message = 'No Items In whishlist';
      }


    }
  }

  AddtoCart(wishlist: WishlistObj): void {
    const type = 'cartItem';
    const Product: ProductsVm = {
      id: parseInt(wishlist.id, 10),
      name: wishlist.ItemName,
      itemType: wishlist.ItemType,
      quantityPerUnit: 1,
      unitPrice: wishlist.OriginalPrice,
      Msrp: wishlist.Price,
      picture: null,
      ranking: null,
      isVerified: 0,
      isPrdAttr: false,
      attrId: wishlist.AttrId,
      quantity: wishlist.quantity,
      catId: wishlist.catId
    };
    this._cartservice.addToCart(Product, type);
    this.notifications.success(
      'Success',
      '1 item is added to cart',
      {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 50
      }
    );
    this._navbar.change();
  }

  // DeleteWhistListItem(item: WishlistObj) {
  //   const type = 'wishListItem';
  //   this.wishlist = [];
  //   this.wishlist_TotalAmount = 0;
  //   this.wishlist_DiscountAmunt = 0;
  //   this.wishlit_ActualAmount = 0;
  //   if (this.token === null || this.token === '') {
  //     const localstorageCartObj = this._cartservice.DeleteCartItem(item, type);
  //     this._navbar.change();
  //     const wishlist_Obj: any = JSON.parse(localStorage.getItem('wishlistobj'));
  //     this.wishlist_count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
  //     this.count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
  //     if (this.wishlist_count > 0) {
  //       for (let i = 0; i < wishlist_Obj.length; i++) {
  //         const items: WishlistObj = JSON.parse(wishlist_Obj[i]);
  //         this.wishlit_ActualAmount += ((items.Price * items.quantity));
  //         this.wishlist_DiscountAmunt += (items.Price - items.OriginalPrice) * items.quantity;
  //         this.wishlist_TotalAmount += (items.OriginalPrice * items.quantity);
  //         this.wishlist.push(items);
  //       }
  //       this.notifications.error(
  //         'Deleted',
  //         '1 item is removed from whishlist',
  //         {
  //           timeOut: 3000,
  //           showProgressBar: true,
  //           pauseOnHover: false,
  //           clickToClose: true,
  //           maxLength: 50
  //         }
  //       );
  //       return wishlist_Obj;
  //     } else {
  //       this.Message = 'No Items In whishList';
  //     }
  //   } else {
  //     this._cartservice.DeleteWhishListItem(item, type).toPromise().then((respe) => {
  //       if (respe === '200') {
  //         const token = sessionStorage.getItem('userToken');
  //         const userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
  //         this.userservice.GetUserCartData(token, userId).subscribe((resp) => {
  //           this.userdata = resp;
  //           sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
  //           sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
  //           this._navbar.name = this.userdata.customerdata.firstname;
  //           this.notifications.error(
  //             'Deleted',
  //             '1 item is removed from whishlist',
  //             {
  //               timeOut: 3000,
  //               showProgressBar: true,
  //               pauseOnHover: false,
  //               clickToClose: true,
  //               maxLength: 50
  //             }
  //           );
  //           this._navbar.change();
  //           this.LoadCartItem();
  //         });
  //       }
  //     });
  //   }
  DeleteWhistListItem(item: WishlistObj) {
    const type = 'wishListItem';
    this.wishlist = [];
    this.wishlist_TotalAmount = 0;
    this.wishlist_DiscountAmunt = 0;
    this.wishlit_ActualAmount = 0;
    if (this.token === null || this.token === '') {
      const localstorageCartObj = this._cartservice.DeleteCartItem(item, type);
      this._navbar.change();
      const wishlist_Obj: any = JSON.parse(localStorage.getItem('wishlistobj'));
      this.wishlist_count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
      this.count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
      if (this.wishlist_count > 0) {
        for (let i = 0; i < wishlist_Obj.length; i++) {
          const items: WishlistObj = JSON.parse(wishlist_Obj[i]);
          this.wishlit_ActualAmount += ((items.Price * items.quantity));
          this.wishlist_DiscountAmunt += (items.Price - items.OriginalPrice) * items.quantity;
          this.wishlist_TotalAmount += (items.OriginalPrice * items.quantity);
          this.wishlist.push(items);
        }
        this.notifications.error(
          'Deleted',
          '1 item is removed from whishlist',
          {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
          }
        );
        return wishlist_Obj;
      } else {
        this.Message = 'No Items In whishList';
      }
    } else {
      this._cartservice.DeleteWhishListItem(item, type).toPromise().then((respe) => {
        if (respe === '200') {

          const token = sessionStorage.getItem('userToken');
          const userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
          this.userservice.GetUserCartData(token, userId).subscribe((resp) => {
            this.userdata = resp;
            sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
            sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
            this._navbar.name = this.userdata.customerdata.firstname;
            this.notifications.info(
              'Deleted',
              '1 item is removed from whishlist',
              {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 50
              }
            );
            this._navbar.change();
            this.LoadCartItem();
          });
        } else {
          // tslint:disable-next-line:no-debugger
          debugger;
          this._cartservice.DeleteItemWhishlist(item);
          this.notifications.error(
            'Deleted',
            '1 item is removed from whishlist',
            {
              timeOut: 3000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: true,
              maxLength: 50
            }
          );
          this._navbar.change();
          this.LoadCartItem();
        }
      });
    }
  }

}
