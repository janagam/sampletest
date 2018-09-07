import { Injectable } from '@angular/core';
import { ProductsVm, Cartobject, WishListVm, WishlistObj } from '../../gw-ltst-prdcts/Model/latestprodutmodel';
import { CartVm } from '../../gw-ltst-prdcts/Model/latestprodutmodel';
// import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { UserCartData } from '../../login/Model/login.model';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CartService {
  debugger: any;
  private itemsInCart: ProductsVm[] = [];
  count = 0;
  cartdata: Cartobject;
  wishlistdata: WishlistObj;

  constructor(private _http: Http) { }
  LoadCart(): string[] {
    if (localStorage.getItem('cartobj') != null) {
      this.count = JSON.parse(localStorage.getItem('cartobj')).length;
      return JSON.parse(localStorage.getItem('cartobj'));
    } else {
      return null;
    }
  }
  addToCart(products: ProductsVm, type: string) {
    const tokenvalue = sessionStorage.getItem('userToken');
    if (type === 'cartItem') {
      if (tokenvalue === null || tokenvalue === '') {
        const storage_Cart = localStorage.getItem('cartobj');
        const stroage_CartItems = JSON.parse(storage_Cart);
        if (localStorage.getItem('cartobj') == null) {
          const cartobj: any = [];
          const DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp));
          if (products.quantity === null || products.quantity === undefined) {
            products.quantity = 1;
          }
          const cartItems: CartVm = {
            id: products.id.toString(),
            ItemName: products.name,
            quantity: products.quantity,
            AttrId: products.attrId,
            Price: products.Msrp,
            ItemType: products.itemType,
            DiscountInPercent: DiscountInPercentvalue,
            TotalDiscount: (products.Msrp * 1) - (this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity)),
            TotalPrice: this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity),
            OriginalPrice: (products.unitPrice * 1),
            catId: products.catId
          };
          cartobj.push(JSON.stringify(cartItems));
          localStorage.setItem('cartobj', JSON.stringify(cartobj));
          this.count = 1;
        } else {
          const cartobj: any = JSON.parse(localStorage.getItem('cartobj'));
          let index = -1;
          this.count = cartobj.length;
          for (let i = 0; i < cartobj.length; i++) {
            const item: Cartobject = JSON.parse(cartobj[i]);
            if (item.id === (products.id.toString())) {
              index = i;
              break;
            }
          }
          if (index === -1) {
            const DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp)
            );
            if (products.quantity === null || products.quantity === undefined) {
              products.quantity = 1;
            }
            const cartItems: CartVm = {
              id: products.id.toString(),
              ItemName: products.name,
              quantity: products.quantity,
              AttrId: products.attrId,
              Price: products.Msrp,
              ItemType: products.itemType,
              DiscountInPercent: DiscountInPercentvalue,
              TotalDiscount: (products.Msrp * 1) - (this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity)),
              TotalPrice: this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity),
              OriginalPrice: (products.unitPrice * 1),
              catId: products.catId
            };
            cartobj.push(JSON.stringify(cartItems));
            localStorage.setItem('cartobj', JSON.stringify(cartobj));
          } else {
            const item: Cartobject = JSON.parse(cartobj[index]);
            if (products.quantity != null) {
              item.quantity = item.quantity + products.quantity;

            } else {
              item.quantity += 1;
            }
            cartobj[index] = JSON.stringify(item);
            localStorage.setItem('cartobj', JSON.stringify(cartobj));
          }
        }

      } else {
        const storage_Cart = sessionStorage.getItem('userCartITem');
        const stroage_CartItems = JSON.parse(storage_Cart);
        if (sessionStorage.getItem('userCartITem') === 'null' || sessionStorage.getItem('userCartITem') === null) {
          const userCartITem: any = [];
          const DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp));
          if (products.quantity === null || products.quantity === undefined) {
            products.quantity = 1;
          }
          const cartItems: CartVm = {
            id: products.id.toString(),
            ItemName: products.name,
            quantity: products.quantity,
            AttrId: products.attrId,
            Price: products.Msrp,
            ItemType: products.itemType,
            DiscountInPercent: DiscountInPercentvalue,
            TotalDiscount: (products.Msrp * 1) - (this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity)),
            TotalPrice: this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity),
            OriginalPrice: (products.unitPrice * 1),
            catId: products.catId
          };
          userCartITem.push(cartItems);
          sessionStorage.setItem('userCartITem', JSON.stringify(userCartITem));
          this.count = 1;
        } else {
          const userCartITem: any = JSON.parse(sessionStorage.getItem('userCartITem'));
          let index = -1;
          this.count = userCartITem.length;
          for (let i = 0; i < userCartITem.length; i++) {
            const item: Cartobject = userCartITem[i];
            if (item.id === (products.id.toString())) {
              index = i;
              break;
            }
          }
          if (index === -1) {
            const DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp)
            );
            if (products.quantity === null || products.quantity === undefined) {
              products.quantity = 1;
            }
            const CartITem: CartVm = {
              id: products.id.toString(),
              ItemName: products.name,
              quantity: products.quantity,
              AttrId: products.attrId,
              Price: products.Msrp,
              ItemType: products.itemType,
              DiscountInPercent: DiscountInPercentvalue,
              TotalDiscount: (products.Msrp * 1) - (this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity)),
              TotalPrice: this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity),
              OriginalPrice: (products.unitPrice * 1),
              catId: products.catId
            };
            userCartITem.push(CartITem);
            sessionStorage.setItem('userCartITem', JSON.stringify(userCartITem));
          } else {
            const item: Cartobject = userCartITem[index];
            if (products.quantity != null) {
              item.quantity = item.quantity + products.quantity;

            } else {
              item.quantity += 1;
            }
            userCartITem[index] = item;
            sessionStorage.setItem('userCartITem', JSON.stringify(userCartITem));
          }

        }
      }
      //  end cart within session and without session
    } else {
      const token = sessionStorage.getItem('userToken');
      if (token === null || token === 'undefined' || token === '') {
        const storage_Wishlist = localStorage.getItem('wishlistobj');
        const stroage_WishlistItem = JSON.parse(storage_Wishlist);
        if (products.quantity === null || products.quantity === undefined) {
          products.quantity = 1;
        }
        if (localStorage.getItem('wishlistobj') == null) {
          const wishlistobj: any = [];
          const DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp));
          if (products.quantity === null || products.quantity === undefined) {
            products.quantity = 1;
          }
          const wishListItems: WishListVm = {
            id: products.id.toString(),
            ItemName: products.name,
            quantity: products.quantity,
            AttrId: products.attrId,
            Price: products.Msrp,
            ItemType: products.itemType,
            DiscountInPercent: DiscountInPercentvalue,
            TotalDiscount: (products.Msrp * 1) - (this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity)),
            TotalPrice: this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity),
            OriginalPrice: (products.unitPrice * 1)
          };
          wishlistobj.push(JSON.stringify(wishListItems));
          localStorage.setItem('wishlistobj', JSON.stringify(wishlistobj));
          this.count = 1;
        } else {
          {
            const wishlistobj: any = JSON.parse(localStorage.getItem('wishlistobj'));
            let index = -1;
            this.count = wishlistobj.length;
            for (let i = 0; i < wishlistobj.length; i++) {
              const item: WishlistObj = JSON.parse(wishlistobj[i]);
              if (item.id === (products.id.toString())) {
                index = i;
                break;
              }
            }
            if (index === -1) {
              const DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp)
              );
              if (products.quantity === null || products.quantity === undefined) {
                products.quantity = 1;
              }
              const wishlistItems: WishListVm = {
                id: products.id.toString(),
                ItemName: products.name,
                quantity: products.quantity,
                AttrId: products.attrId,
                Price: products.Msrp,
                ItemType: products.itemType,
                DiscountInPercent: DiscountInPercentvalue,
                TotalDiscount: (products.Msrp * 1) - (this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity)),
                TotalPrice: this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity),
                OriginalPrice: (products.unitPrice * 1)
              };
              wishlistobj.push(JSON.stringify(wishlistItems));
              localStorage.setItem('wishlistobj', JSON.stringify(wishlistobj));
            } else {
              const item: WishlistObj = JSON.parse(wishlistobj[index]);
              if (products.quantity != null) {
                item.quantity = item.quantity + products.quantity;

              } else {
                item.quantity += 1;
              }
              wishlistobj[index] = JSON.stringify(item);
              localStorage.setItem('wishlistobj', JSON.stringify(wishlistobj));
            }
          }
        }
      } else {      // end with out session
        const storage_WishList = sessionStorage.getItem('userWhishList');
        const storage_WishLists = JSON.parse(storage_WishList);
        if (sessionStorage.getItem('userWhishList') === 'null' || sessionStorage.getItem('userWhishList') === null) {
          const userWhishList: any = [];
          const DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp));
          if (products.quantity === null || products.quantity === undefined) {
            products.quantity = 1;
          }
          const cartItems: WishListVm = {
            id: products.id.toString(),
            ItemName: products.name,
            quantity: products.quantity,
            AttrId: products.attrId,
            Price: products.Msrp,
            ItemType: products.itemType,
            DiscountInPercent: DiscountInPercentvalue,
            TotalDiscount: (products.Msrp * 1) - (this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity)),
            TotalPrice: this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity),
            OriginalPrice: (products.unitPrice * 1)
          };
          userWhishList.push(cartItems);
          sessionStorage.setItem('userWhishList', JSON.stringify(userWhishList));
          this.count = 1;
        } else {
          const userWhishList: any = JSON.parse(sessionStorage.getItem('userWhishList'));
          let index = -1;
          this.count = userWhishList.length;
          for (let i = 0; i < userWhishList.length; i++) {
            const item: WishlistObj = userWhishList[i];
            if (item.id === (products.id.toString())) {
              index = i;
              break;
            }
          }
          if (index === -1) {
            const DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp)
            );
            if (products.quantity === null || products.quantity === undefined) {
              products.quantity = 1;
            }
            const CartITem: WishListVm = {
              id: products.id.toString(),
              ItemName: products.name,
              quantity: products.quantity,
              AttrId: products.attrId,
              Price: products.Msrp,
              ItemType: products.itemType,
              DiscountInPercent: DiscountInPercentvalue,
              TotalDiscount: (products.Msrp * 1) - (this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity)),
              TotalPrice: this.GettoalValuePrice(DiscountInPercentvalue, products.Msrp, products.quantity),
              OriginalPrice: (products.unitPrice * 1)
            };
            userWhishList.push(CartITem);
            sessionStorage.setItem('userWhishList', JSON.stringify(userWhishList));
          } else {
            const item: WishlistObj = userWhishList[index];
            if (products.quantity != null) {
              item.quantity = item.quantity + products.quantity;

            } else {
              item.quantity += 1;
            }
            userWhishList[index] = item;
            sessionStorage.setItem('userWhishList', JSON.stringify(userWhishList));
          }
        }
      }
    }
  }
  public GettoalValuePrice(DiscountInPercent: number, Msrp: number, quantity: number): number {
    if (quantity == null || quantity === 0) {
      quantity = 1;
    }
    return (Msrp - ((Msrp * DiscountInPercent) / 100)) * quantity;
  }

  public RemoveCartQuantity(cartItem: CartVm) {
    const token = sessionStorage.getItem('userToken');
    if (token === null || token === '') {
      const cartobj: any = JSON.parse(localStorage.getItem('cartobj'));
      let index = -1;
      this.count = cartobj.length;
      for (let i = 0; i < cartobj.length; i++) {
        const items: Cartobject = JSON.parse(cartobj[i]);
        if (items.id === (cartItem.id.toString())) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        const iteme: Cartobject = JSON.parse(cartobj[index]);
        cartItem.quantity -= 1;
        if (cartItem.quantity === 0) {
          cartItem.quantity = 1;
        } else {
          cartobj[index] = JSON.stringify(cartItem);
        }
        localStorage.setItem('cartobj', JSON.stringify(cartobj));
      }
      return cartobj;
    } else {
      {
        const cartobj: any = JSON.parse(sessionStorage.getItem('userCartITem'));
        let index = -1;
        this.count = cartobj.length;
        for (let i = 0; i < cartobj.length; i++) {
          const items: Cartobject = cartobj[i];
          if (items.id === (cartItem.id.toString())) {
            index = i;
            break;
          }
        }
        if (index !== -1) {
          const iteme: Cartobject = cartobj[index];
          cartItem.quantity -= 1;
          if (cartItem.quantity === 0) {
            cartItem.quantity = 1;
          } else {
            cartobj[index] = cartItem;
          }
          sessionStorage.setItem('userCartITem', JSON.stringify(cartobj));
        }
        return cartobj;
      }
    }
  }
  public UpdateCartQuantity(cartItem: CartVm) {
    const token = sessionStorage.getItem('userToken');
    if (token === null || token === '') {
      const cartobj: any = JSON.parse(localStorage.getItem('cartobj'));
      let index = -1;
      this.count = cartobj.length;
      for (let i = 0; i < cartobj.length; i++) {
        const items: Cartobject = JSON.parse(cartobj[i]);
        if (items.id === (cartItem.id.toString())) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        const iteme: Cartobject = JSON.parse(cartobj[index]);
        cartItem.quantity += 1;
        cartobj[index] = JSON.stringify(cartItem);
        localStorage.setItem('cartobj', JSON.stringify(cartobj));
      }
      return cartobj;
    } else {
      const cartobj: any = JSON.parse(sessionStorage.getItem('userCartITem'));
      let index = -1;
      this.count = cartobj.length;
      for (let i = 0; i < cartobj.length; i++) {
        const items: Cartobject = cartobj[i];
        if (items.id === (cartItem.id.toString())) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        const iteme: Cartobject = cartobj[index];
        cartItem.quantity += 1;
        cartobj[index] = cartItem;
        sessionStorage.setItem('userCartITem', JSON.stringify(cartobj));
      }
      return cartobj;

    }
  }

  public UpdateWishlistQuantity(wishlistItem: WishListVm) {
    const token = sessionStorage.getItem('userToken');
    if (token === null || token === '') {
      const wishlistobj: any = JSON.parse(localStorage.getItem('wishlistobj'));
      let index = -1;
      this.count = wishlistobj.length;
      for (let i = 0; i < wishlistobj.length; i++) {
        const item: WishlistObj = JSON.parse(wishlistobj[i]);
        if (item.id === (wishlistItem.id.toString())) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        const item: WishlistObj = JSON.parse(wishlistobj[index]);
        wishlistItem.quantity += 1;
        wishlistobj[index] = JSON.stringify(wishlistItem);
        localStorage.setItem('wishlistobj', JSON.stringify(wishlistobj));
      }
      return wishlistobj;
    } else {
      const userWhishList: any = JSON.parse(sessionStorage.getItem('userWhishList'));
      let index = -1;
      this.count = userWhishList.length;
      for (let i = 0; i < userWhishList.length; i++) {
        const item: WishlistObj = userWhishList[i];
        if (item.id === (wishlistItem.id.toString())) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        const item: WishlistObj = userWhishList[index];
        wishlistItem.quantity += 1;
        userWhishList[index] = wishlistItem;
        sessionStorage.setItem('userWhishList', JSON.stringify(userWhishList));
      }
      return userWhishList;

    }
  }
  public DeletewishlistQuantity(wishlistItem: WishListVm) {
    // tslint:disable-next-line:no-debugger
    debugger;
    const token = sessionStorage.getItem('userToken');
    if (token === null || token === '') {
      const wishlistobj: any = JSON.parse(localStorage.getItem('wishlistobj'));
      let index = -1;
      this.count = wishlistobj.length;
      for (let i = 0; i < wishlistobj.length; i++) {
        const item: WishlistObj = JSON.parse(wishlistobj[i]);
        if (item.id === (wishlistItem.id.toString())) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        const iteme: WishlistObj = JSON.parse(wishlistobj[index]);
        wishlistItem.quantity -= 1;
        if (wishlistItem.quantity === 0) {
          wishlistItem.quantity = 1;
        } else {
          wishlistobj[index] = JSON.stringify(wishlistItem);
        }
        localStorage.setItem('wishlistobj', JSON.stringify(wishlistobj));
      }
      return wishlistobj;
    } else {
      const userWhishList: any = JSON.parse(sessionStorage.getItem('userWhishList'));
      let index = -1;
      this.count = userWhishList.length;
      for (let i = 0; i < userWhishList.length; i++) {
        const item: WishlistObj = userWhishList[i];
        if (item.id === (wishlistItem.id.toString())) {
          index = i;
          break;
        }
      }

      if (index !== -1) {
        const item: WishlistObj = userWhishList[index];
        wishlistItem.quantity -= 1;
        if (wishlistItem.quantity === 0) {
          wishlistItem.quantity = 1;
        } else {
          userWhishList[index] = wishlistItem;
        }
        sessionStorage.setItem('userWhishList', JSON.stringify(userWhishList));
      }
      return userWhishList;

    }
  }

  public DeleteCartItem(cartItem: CartVm, type: string) {
    const token = sessionStorage.getItem('userToken');
    if (token === null || token === '') {
      if (type === 'cart') {
        const cartobj: any = JSON.parse(localStorage.getItem('cartobj'));
        this.count = cartobj.length;
        for (let i = 0; i < cartobj.length; i++) {
          const items: Cartobject = JSON.parse(cartobj[i]);
          if (items.id === (cartItem.id.toString())) {
            cartobj.splice(i, 1);
            localStorage.setItem('cartobj', JSON.stringify(cartobj));
            break;
          }
        }
        return cartobj;
      } else {
        const wishlistobj: any = JSON.parse(localStorage.getItem('wishlistobj'));

        this.count = wishlistobj.length;
        for (let i = 0; i < wishlistobj.length; i++) {
          const item: WishlistObj = JSON.parse(wishlistobj[i]);
          if (item.id === (cartItem.id.toString())) {
            wishlistobj.splice(i, 1);
            localStorage.setItem('wishlistobj', JSON.stringify(wishlistobj));
            break;
          }
        }
        return wishlistobj;

      }
    }
  }
  DeleteItem(cartItem: CartVm, type: string): Observable<string> {
      // tslint:disable-next-line:no-unused-expression
      this.debugger;
    const token = sessionStorage.getItem('userToken');
    if (type === 'cart') {
      this.cartdata = {
        id: cartItem.id,
        ItemName: cartItem.ItemName,
        ItemType: cartItem.ItemType,
        Price: cartItem.Price,
        DiscountInPercent: cartItem.DiscountInPercent,
        TotalPrice: cartItem.TotalPrice,
        TotalDiscount: cartItem.TotalDiscount,
        OriginalPrice: cartItem.TotalPrice,
        quantity: cartItem.quantity,
        AttrId: cartItem.AttrId,
        Acutalcarttotal: 0,
        cartdiscounttotal: 0,
        Maincart_total: 0,
        catId: cartItem.catId
      };

      if (token !== null) {
        const userId = + JSON.parse(sessionStorage.getItem('customerdata')).userId;
        const body = JSON.stringify(this.cartdata);
        const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + token);
        const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
        return this._http.post('http://localhost:31029/api/Cart/deleteCartItem?userId=' + userId, body, options)
          .map((res => {
            const data = res.json();
            if (data === 200) {
              alert('no error');
            } else {
              return data;
            }
          }));
      }
    }
  }
  DeleteWhishListItem(cartItem: WishlistObj, type: string): Observable<string> {
    const token = sessionStorage.getItem('userToken');
    this.wishlistdata = {
      id: cartItem.id,
      ItemName: cartItem.ItemName,
      ItemType: cartItem.ItemType,
      Price: cartItem.Price,
      DiscountInPercent: cartItem.DiscountInPercent,
      TotalPrice: cartItem.TotalPrice,
      TotalDiscount: cartItem.TotalDiscount,
      OriginalPrice: cartItem.TotalPrice,
      quantity: cartItem.quantity,
      AttrId: cartItem.AttrId,
      Acutalwishlisttotal: 0,
      wishlistdiscounttotal: 0,
      mainwishlist_total: 0,
      catId: cartItem.catId
    };

    const userId = + JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const body = JSON.stringify(this.wishlistdata);
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    headers.append('withCredentials', 'true');
    headers.append('Authorization', 'Bearer ' + token);
    const options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this._http.post('http://localhost:31029/api/Cart/deleteWhistItem?userId=' + userId, body, options)
      .map((res => {
        const data = res.json();
        if (data === 200) {
          alert('no error');
        } else {
          return data;
        }
      }));
  }

  public DeleteItemCart(cartItem: CartVm) {
    // tslint:disable-next-line:no-unused-expression
    this.debugger;
    const token = sessionStorage.getItem('userToken');
    if (token !== null || token !== '') {
      const cartobj: any = JSON.parse(sessionStorage.getItem('userCartITem'));
      let index = -1;
      this.count = cartobj.length;
      for (let i = 0; i < cartobj.length; i++) {
        const items: Cartobject = cartobj[i];
        if (items.id === (cartItem.id.toString())) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        const iteme: Cartobject = cartobj[index];
        cartobj.splice(index, 1);
        sessionStorage.setItem('userCartITem', JSON.stringify(cartobj));
      }
      return cartobj;
    }
  }
  public DeleteItemWhishlist(cartItem: WishlistObj) {
    // tslint:disable-next-line:no-unused-expression
    this.debugger;
    const token = sessionStorage.getItem('userToken');
    if (token !== null || token !== '') {
      const userWhishList: any = JSON.parse(sessionStorage.getItem('userWhishList'));
      let index = -1;
      this.count = userWhishList.length;
      for (let i = 0; i < userWhishList.length; i++) {
        const items: WishlistObj = userWhishList[i];
        if (items.id === (cartItem.id.toString())) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        const iteme: WishlistObj = userWhishList[index];
        userWhishList.splice(index, 1);
        sessionStorage.setItem('userWhishList', JSON.stringify(userWhishList));
      }
      return userWhishList;
    }
  }
}
