webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Common/cart/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartService = /** @class */ (function () {
    function CartService(_http) {
        this._http = _http;
        this.itemsInCart = [];
        this.count = 0;
    }
    CartService.prototype.LoadCart = function () {
        if (localStorage.getItem('cartobj') != null) {
            this.count = JSON.parse(localStorage.getItem('cartobj')).length;
            return JSON.parse(localStorage.getItem('cartobj'));
        }
        else {
            return null;
        }
    };
    CartService.prototype.addToCart = function (products, type) {
        var tokenvalue = sessionStorage.getItem('userToken');
        if (type === 'cartItem') {
            if (tokenvalue === null || tokenvalue === '') {
                var storage_Cart = localStorage.getItem('cartobj');
                var stroage_CartItems = JSON.parse(storage_Cart);
                if (localStorage.getItem('cartobj') == null) {
                    var cartobj = [];
                    var DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp));
                    if (products.quantity === null || products.quantity === undefined) {
                        products.quantity = 1;
                    }
                    var cartItems = {
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
                }
                else {
                    var cartobj = JSON.parse(localStorage.getItem('cartobj'));
                    var index = -1;
                    this.count = cartobj.length;
                    for (var i = 0; i < cartobj.length; i++) {
                        var item = JSON.parse(cartobj[i]);
                        if (item.id === (products.id.toString())) {
                            index = i;
                            break;
                        }
                    }
                    if (index === -1) {
                        var DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp));
                        if (products.quantity === null || products.quantity === undefined) {
                            products.quantity = 1;
                        }
                        var cartItems = {
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
                    }
                    else {
                        var item = JSON.parse(cartobj[index]);
                        if (products.quantity != null) {
                            item.quantity = item.quantity + products.quantity;
                        }
                        else {
                            item.quantity += 1;
                        }
                        cartobj[index] = JSON.stringify(item);
                        localStorage.setItem('cartobj', JSON.stringify(cartobj));
                    }
                }
            }
            else {
                var storage_Cart = sessionStorage.getItem('userCartITem');
                var stroage_CartItems = JSON.parse(storage_Cart);
                if (sessionStorage.getItem('userCartITem') === 'null' || sessionStorage.getItem('userCartITem') === null) {
                    var userCartITem = [];
                    var DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp));
                    if (products.quantity === null || products.quantity === undefined) {
                        products.quantity = 1;
                    }
                    var cartItems = {
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
                }
                else {
                    var userCartITem = JSON.parse(sessionStorage.getItem('userCartITem'));
                    var index = -1;
                    this.count = userCartITem.length;
                    for (var i = 0; i < userCartITem.length; i++) {
                        var item = userCartITem[i];
                        if (item.id === (products.id.toString())) {
                            index = i;
                            break;
                        }
                    }
                    if (index === -1) {
                        var DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp));
                        if (products.quantity === null || products.quantity === undefined) {
                            products.quantity = 1;
                        }
                        var CartITem = {
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
                    }
                    else {
                        var item = userCartITem[index];
                        if (products.quantity != null) {
                            item.quantity = item.quantity + products.quantity;
                        }
                        else {
                            item.quantity += 1;
                        }
                        userCartITem[index] = item;
                        sessionStorage.setItem('userCartITem', JSON.stringify(userCartITem));
                    }
                }
            }
            //  end cart within session and without session
        }
        else {
            var token = sessionStorage.getItem('userToken');
            if (token === null || token === 'undefined' || token === '') {
                var storage_Wishlist = localStorage.getItem('wishlistobj');
                var stroage_WishlistItem = JSON.parse(storage_Wishlist);
                if (products.quantity === null || products.quantity === undefined) {
                    products.quantity = 1;
                }
                if (localStorage.getItem('wishlistobj') == null) {
                    var wishlistobj = [];
                    var DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp));
                    if (products.quantity === null || products.quantity === undefined) {
                        products.quantity = 1;
                    }
                    var wishListItems = {
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
                }
                else {
                    {
                        var wishlistobj = JSON.parse(localStorage.getItem('wishlistobj'));
                        var index = -1;
                        this.count = wishlistobj.length;
                        for (var i = 0; i < wishlistobj.length; i++) {
                            var item = JSON.parse(wishlistobj[i]);
                            if (item.id === (products.id.toString())) {
                                index = i;
                                break;
                            }
                        }
                        if (index === -1) {
                            var DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp));
                            if (products.quantity === null || products.quantity === undefined) {
                                products.quantity = 1;
                            }
                            var wishlistItems = {
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
                        }
                        else {
                            var item = JSON.parse(wishlistobj[index]);
                            if (products.quantity != null) {
                                item.quantity = item.quantity + products.quantity;
                            }
                            else {
                                item.quantity += 1;
                            }
                            wishlistobj[index] = JSON.stringify(item);
                            localStorage.setItem('wishlistobj', JSON.stringify(wishlistobj));
                        }
                    }
                }
            }
            else {
                var storage_WishList = sessionStorage.getItem('userWhishList');
                var storage_WishLists = JSON.parse(storage_WishList);
                if (sessionStorage.getItem('userWhishList') === 'null' || sessionStorage.getItem('userWhishList') === null) {
                    var userWhishList = [];
                    var DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp));
                    if (products.quantity === null || products.quantity === undefined) {
                        products.quantity = 1;
                    }
                    var cartItems = {
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
                }
                else {
                    var userWhishList = JSON.parse(sessionStorage.getItem('userWhishList'));
                    var index = -1;
                    this.count = userWhishList.length;
                    for (var i = 0; i < userWhishList.length; i++) {
                        var item = userWhishList[i];
                        if (item.id === (products.id.toString())) {
                            index = i;
                            break;
                        }
                    }
                    if (index === -1) {
                        var DiscountInPercentvalue = (((products.Msrp - (products.unitPrice * products.quantityPerUnit)) * 100 / products.Msrp));
                        if (products.quantity === null || products.quantity === undefined) {
                            products.quantity = 1;
                        }
                        var CartITem = {
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
                    }
                    else {
                        var item = userWhishList[index];
                        if (products.quantity != null) {
                            item.quantity = item.quantity + products.quantity;
                        }
                        else {
                            item.quantity += 1;
                        }
                        userWhishList[index] = item;
                        sessionStorage.setItem('userWhishList', JSON.stringify(userWhishList));
                    }
                }
            }
        }
    };
    CartService.prototype.GettoalValuePrice = function (DiscountInPercent, Msrp, quantity) {
        if (quantity == null || quantity === 0) {
            quantity = 1;
        }
        return (Msrp - ((Msrp * DiscountInPercent) / 100)) * quantity;
    };
    CartService.prototype.RemoveCartQuantity = function (cartItem) {
        var token = sessionStorage.getItem('userToken');
        if (token === null || token === '') {
            var cartobj = JSON.parse(localStorage.getItem('cartobj'));
            var index = -1;
            this.count = cartobj.length;
            for (var i = 0; i < cartobj.length; i++) {
                var items = JSON.parse(cartobj[i]);
                if (items.id === (cartItem.id.toString())) {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                var iteme = JSON.parse(cartobj[index]);
                cartItem.quantity -= 1;
                if (cartItem.quantity === 0) {
                    cartItem.quantity = 1;
                }
                else {
                    cartobj[index] = JSON.stringify(cartItem);
                }
                localStorage.setItem('cartobj', JSON.stringify(cartobj));
            }
            return cartobj;
        }
        else {
            {
                var cartobj = JSON.parse(sessionStorage.getItem('userCartITem'));
                var index = -1;
                this.count = cartobj.length;
                for (var i = 0; i < cartobj.length; i++) {
                    var items = cartobj[i];
                    if (items.id === (cartItem.id.toString())) {
                        index = i;
                        break;
                    }
                }
                if (index !== -1) {
                    var iteme = cartobj[index];
                    cartItem.quantity -= 1;
                    if (cartItem.quantity === 0) {
                        cartItem.quantity = 1;
                    }
                    else {
                        cartobj[index] = cartItem;
                    }
                    sessionStorage.setItem('userCartITem', JSON.stringify(cartobj));
                }
                return cartobj;
            }
        }
    };
    CartService.prototype.UpdateCartQuantity = function (cartItem) {
        var token = sessionStorage.getItem('userToken');
        if (token === null || token === '') {
            var cartobj = JSON.parse(localStorage.getItem('cartobj'));
            var index = -1;
            this.count = cartobj.length;
            for (var i = 0; i < cartobj.length; i++) {
                var items = JSON.parse(cartobj[i]);
                if (items.id === (cartItem.id.toString())) {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                var iteme = JSON.parse(cartobj[index]);
                cartItem.quantity += 1;
                cartobj[index] = JSON.stringify(cartItem);
                localStorage.setItem('cartobj', JSON.stringify(cartobj));
            }
            return cartobj;
        }
        else {
            var cartobj = JSON.parse(sessionStorage.getItem('userCartITem'));
            var index = -1;
            this.count = cartobj.length;
            for (var i = 0; i < cartobj.length; i++) {
                var items = cartobj[i];
                if (items.id === (cartItem.id.toString())) {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                var iteme = cartobj[index];
                cartItem.quantity += 1;
                cartobj[index] = cartItem;
                sessionStorage.setItem('userCartITem', JSON.stringify(cartobj));
            }
            return cartobj;
        }
    };
    CartService.prototype.UpdateWishlistQuantity = function (wishlistItem) {
        var token = sessionStorage.getItem('userToken');
        if (token === null || token === '') {
            var wishlistobj = JSON.parse(localStorage.getItem('wishlistobj'));
            var index = -1;
            this.count = wishlistobj.length;
            for (var i = 0; i < wishlistobj.length; i++) {
                var item = JSON.parse(wishlistobj[i]);
                if (item.id === (wishlistItem.id.toString())) {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                var item = JSON.parse(wishlistobj[index]);
                wishlistItem.quantity += 1;
                wishlistobj[index] = JSON.stringify(wishlistItem);
                localStorage.setItem('wishlistobj', JSON.stringify(wishlistobj));
            }
            return wishlistobj;
        }
        else {
            var userWhishList = JSON.parse(sessionStorage.getItem('userWhishList'));
            var index = -1;
            this.count = userWhishList.length;
            for (var i = 0; i < userWhishList.length; i++) {
                var item = userWhishList[i];
                if (item.id === (wishlistItem.id.toString())) {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                var item = userWhishList[index];
                wishlistItem.quantity += 1;
                userWhishList[index] = wishlistItem;
                sessionStorage.setItem('userWhishList', JSON.stringify(userWhishList));
            }
            return userWhishList;
        }
    };
    CartService.prototype.DeletewishlistQuantity = function (wishlistItem) {
        // tslint:disable-next-line:no-debugger
        debugger;
        var token = sessionStorage.getItem('userToken');
        if (token === null || token === '') {
            var wishlistobj = JSON.parse(localStorage.getItem('wishlistobj'));
            var index = -1;
            this.count = wishlistobj.length;
            for (var i = 0; i < wishlistobj.length; i++) {
                var item = JSON.parse(wishlistobj[i]);
                if (item.id === (wishlistItem.id.toString())) {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                var iteme = JSON.parse(wishlistobj[index]);
                wishlistItem.quantity -= 1;
                if (wishlistItem.quantity === 0) {
                    wishlistItem.quantity = 1;
                }
                else {
                    wishlistobj[index] = JSON.stringify(wishlistItem);
                }
                localStorage.setItem('wishlistobj', JSON.stringify(wishlistobj));
            }
            return wishlistobj;
        }
        else {
            var userWhishList = JSON.parse(sessionStorage.getItem('userWhishList'));
            var index = -1;
            this.count = userWhishList.length;
            for (var i = 0; i < userWhishList.length; i++) {
                var item = userWhishList[i];
                if (item.id === (wishlistItem.id.toString())) {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                var item = userWhishList[index];
                wishlistItem.quantity -= 1;
                if (wishlistItem.quantity === 0) {
                    wishlistItem.quantity = 1;
                }
                else {
                    userWhishList[index] = wishlistItem;
                }
                sessionStorage.setItem('userWhishList', JSON.stringify(userWhishList));
            }
            return userWhishList;
        }
    };
    CartService.prototype.DeleteCartItem = function (cartItem, type) {
        var token = sessionStorage.getItem('userToken');
        if (token === null || token === '') {
            if (type === 'cart') {
                var cartobj = JSON.parse(localStorage.getItem('cartobj'));
                this.count = cartobj.length;
                for (var i = 0; i < cartobj.length; i++) {
                    var items = JSON.parse(cartobj[i]);
                    if (items.id === (cartItem.id.toString())) {
                        cartobj.splice(i, 1);
                        localStorage.setItem('cartobj', JSON.stringify(cartobj));
                        break;
                    }
                }
                return cartobj;
            }
            else {
                var wishlistobj = JSON.parse(localStorage.getItem('wishlistobj'));
                this.count = wishlistobj.length;
                for (var i = 0; i < wishlistobj.length; i++) {
                    var item = JSON.parse(wishlistobj[i]);
                    if (item.id === (cartItem.id.toString())) {
                        wishlistobj.splice(i, 1);
                        localStorage.setItem('wishlistobj', JSON.stringify(wishlistobj));
                        break;
                    }
                }
                return wishlistobj;
            }
        }
    };
    CartService.prototype.DeleteItem = function (cartItem, type) {
        // tslint:disable-next-line:no-unused-expression
        this.debugger;
        var token = sessionStorage.getItem('userToken');
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
                var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
                var body = JSON.stringify(this.cartdata);
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
                headers.append('withCredentials', 'true');
                headers.append('Authorization', 'Bearer ' + token);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: headers });
                return this._http.post('http://localhost:31029/api/Cart/deleteCartItem?userId=' + userId, body, options)
                    .map((function (res) {
                    var data = res.json();
                    if (data === 200) {
                        alert('no error');
                    }
                    else {
                        return data;
                    }
                }));
            }
        }
    };
    CartService.prototype.DeleteWhishListItem = function (cartItem, type) {
        var token = sessionStorage.getItem('userToken');
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
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var body = JSON.stringify(this.wishlistdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._http.post('http://localhost:31029/api/Cart/deleteWhistItem?userId=' + userId, body, options)
            .map((function (res) {
            var data = res.json();
            if (data === 200) {
                alert('no error');
            }
            else {
                return data;
            }
        }));
    };
    CartService.prototype.DeleteItemCart = function (cartItem) {
        // tslint:disable-next-line:no-unused-expression
        this.debugger;
        var token = sessionStorage.getItem('userToken');
        if (token !== null || token !== '') {
            var cartobj = JSON.parse(sessionStorage.getItem('userCartITem'));
            var index = -1;
            this.count = cartobj.length;
            for (var i = 0; i < cartobj.length; i++) {
                var items = cartobj[i];
                if (items.id === (cartItem.id.toString())) {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                var iteme = cartobj[index];
                cartobj.splice(index, 1);
                sessionStorage.setItem('userCartITem', JSON.stringify(cartobj));
            }
            return cartobj;
        }
    };
    CartService.prototype.DeleteItemWhishlist = function (cartItem) {
        // tslint:disable-next-line:no-unused-expression
        this.debugger;
        var token = sessionStorage.getItem('userToken');
        if (token !== null || token !== '') {
            var userWhishList = JSON.parse(sessionStorage.getItem('userWhishList'));
            var index = -1;
            this.count = userWhishList.length;
            for (var i = 0; i < userWhishList.length; i++) {
                var items = userWhishList[i];
                if (items.id === (cartItem.id.toString())) {
                    index = i;
                    break;
                }
            }
            if (index !== -1) {
                var iteme = userWhishList[index];
                userWhishList.splice(index, 1);
                sessionStorage.setItem('userWhishList', JSON.stringify(userWhishList));
            }
            return userWhishList;
        }
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/HttpInterceptors/request.interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestInterceptorService = /** @class */ (function () {
    function RequestInterceptorService() {
    }
    RequestInterceptorService.prototype.intercept = function (request, next) {
        // tslint:disable-next-line:no-debugger
        debugger;
        var authheader = 'Bearer ' + this.GetToken();
        var reqAuthicateHeader = request.clone({ setHeaders: { Authorization: authheader } });
        console.log('hi this interceptor');
        return next.handle(reqAuthicateHeader);
    };
    RequestInterceptorService.prototype.GetToken = function () {
        var token = localStorage.getItem('userToken');
        return token;
    };
    RequestInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RequestInterceptorService);
    return RequestInterceptorService;
}());



/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\"><a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a></li>\n                    <li class=\"breadcrumb-item active\"><a routerLink=\"/about-us\">about us</a></li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <h3>About Genericwala.com</h3>\n\n            <p>\n                Generiwala.com was started by a Health care BPO Company having more than 20 years of experience in Health care Industry.\n            </p>\n            <p>\n                Generiwala.com is an onpne pharmacy, we provide you quapty generic medicines that are produced by reputed Companies at affordable price. We also provide the latest news and updated about generic medicines. Our aim is to reduce healthcare expenses.\n            </p>\n            <p>\n                You will find branded good quapty generic medicines in our website, If you specify the brand name in our search option, you will get the equivalent generic medicine available with us. You can place an onpne order and get them depvery to your door steps\n                provide you upload the medical prescription or else pick the medicines from your nearest generic store. We tie-up with local generic stores near to you and get the medicines to your door steps.\n            </p>\n            <h3>Benefits of Genericwala.com :\n            </h3>\n\n            <p>\n                <span>Search with branded drugs and get equapng good quapty generic drugs with discounted prices.</span>\n            </p>\n            <p>\n                <span>Get information about generic medicines. Eg:- Composition, Side Effects etc.</span>\n            </p>\n            <p>\n                <span>High quapty generic medicines would be sold at low prices.</span>\n            </p>\n            <p>\n                <span>Order onpne and can collect from your nearest generic store.</span>\n            </p>\n            <p>\n                <span>You can upload you prescription and save it in your login for future use.</span>\n            </p>\n            <p>\n                <span>Reduce medical expenses.  Save time.        Save transport.</span>\n            </p>\n\n        </div>\n\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__("./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__("./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/account/account.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/account\">Profile</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-5 col-sm-offset-3 col-md-4 col-md-offset-4\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4>Profile Info</h4>\n                </div>\n                <div class=\"panel-body\">\n                    <!-- <div *ngIf=\"isLoginError\" class=\"alert alert-danger\"> \n                        <p>invalid username and password</p>\n                    </div> -->\n                    <form #Profile=\"ngForm\" class=\"col s12 white\" (ngSubmit)=\"submitForm(Profile)\">\n                        <div class=\"form-group\">\n                            <label for=\"username\">First Name</label>\n                            <input type=\"text\" class=\"form-control\" name=\"firstName\" id=\"firstName\" placeholder=\"firstName\" [(ngModel)]=\"profile.firstName\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"lastName\">Last Name</label>\n                            <input type=\"lastName\" class=\"form-control\" name=\"lastName\" id=\"lastName\" [(ngModel)]=\"profile.lastName\" placeholder=\"lastName\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"middleName\">Middle Name</label>\n                            <input type=\"middleName\" class=\"form-control\" name=\"middleName\" id=\"middleName\" [(ngModel)]=\"profile.middleName\" placeholder=\"middleName\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"lastName\">Mobile Number</label>\n                            <input type=\"lastName\" class=\"form-control\" name=\"mobile\" id=\"mobile\" [(ngModel)]=\"profile.mobile\" placeholder=\"mobile\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"middleName\">Date Of Birth</label>\n                            <input type=\"date\" class=\"form-control\" name=\"dob\" id=\"dob\" (ngModelChange)=\"profile.dob = $event\" [ngModel]=\"profile.dob | date:'yyyy-MM-dd'\" placeholder=\"dob\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"middleName\">Gender</label>\n                            <label>\n                  <input id=\"billing-no\" type=\"radio\" name=\"gender\" [checked]=\"profile.male\"  value=\"male\"  (click)=\"ChangeGender($event)\" />Male</label>\n                            <label><input id=\"billing-yes\" type=\"radio\" name=\"gender\" [checked]=\"profile.female\" value=\"female\"  (click)=\"ChangeGender($event)\" />Female</label>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary btn-sbmt\" [disabled]=\"!Profile.form.valid\" (onclick)=\"UpdateProfile()\">Submit </button>\n                        <button type=\"button\" class=\"btn btn-success\"><a routerLink=\"/Home\">Home</a></button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_account_service__ = __webpack_require__("./src/app/account/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = /** @class */ (function () {
    function AccountComponent(_accountservice, router) {
        this._accountservice = _accountservice;
        this.router = router;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = sessionStorage.getItem('userToken');
        this.accessToken = token;
        this._accountservice.GetProfile(token).subscribe(function (data) {
            _this.profile = data;
            if (_this.profile.gender === true) {
                _this.profile.male = true;
                _this.profile.female = false;
            }
            else {
                _this.profile.male = false;
                _this.profile.female = true;
            }
        });
    };
    AccountComponent.prototype.submitForm = function (form) {
        var _this = this;
        this._accountservice.UpdateProfile(this.profile, this.accessToken).subscribe(function (resp) {
            if (resp === '401') {
                _this.router.navigate(['/Home']);
            }
        });
    };
    AccountComponent.prototype.ChangeGender = function (event) {
        if (event.target.value === 'female') {
            this.profile.gender = false;
            this.profile.female = true;
            this.profile.male = false;
        }
        else {
            this.profile.gender = true;
            this.profile.female = false;
            this.profile.male = true;
        }
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__("./src/app/account/account.component.html"),
            styles: [__webpack_require__("./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/account/service/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountService = /** @class */ (function () {
    function AccountService(_httpclient) {
        this._httpclient = _httpclient;
    }
    AccountService.prototype.GetProfile = function (user_AccesToken) {
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this._httpclient.get('http://localhost:31029/api/Account/GetProfile?userId=' + userId, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    AccountService.prototype.UpdateProfile = function (profile, user_AccesToken) {
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var body = JSON.stringify(profile);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._httpclient.post('http://localhost:31029/api/Account/updateProfile?userId=' + userId, body, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/addresses/addresses.component.css":
/***/ (function(module, exports) {

module.exports = ".add-addrs i,\r\n.dlt-addrs i {\r\n    color: #ddd;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n}\r\n\r\n.add-addrs i:hover,\r\n.dlt-addrs i:hover {\r\n    color: #ec8558;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n}\r\n\r\n.btn-sbmt {\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/addresses/addresses.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/Address/Addresses\">Address Info</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n\n                    <h4>Address Info</h4>\n                </div>\n                <div class=\"panel-body\">\n                    <div id=\"ShippingAddress\" class=\"tab-pane fade in active col-md-12\">\n\n                        <div class=\"row\">\n                            <div class=\"col-md-12 col-xs-12\">\n                                <button class=\"btn btn-primary btn-sbmt pull-right\" (click)=\"toggle(add)\">{{buttonName}}</button>\n                            </div>\n                            <div class=\"col-md-12 col-xs-12\" *ngIf=\"UserAddress.ListAddressVm.count !== 0  && IsHidden === true\">\n                                <div class=\"col-md-6 col-xs-12\" *ngFor=\"let address of  UserAddress.ListAddressVm\">\n                                    <div class=\"panel panel-default\">\n                                        <div class=\"panel-body\">\n                                            <span *ngIf=\"address.isDefault === true\">\n                                            <input type=\"checkbox\" value=\"{{address.AddressId}}\" name=\"chk_Checked\" checked=\"checked\" (change)=\"updateCheckedOptions(chk_Checked, $event)\"\n                                            />\n                                        </span>\n                                            <span *ngIf=\"address.isDefault === false\">\n                                            <input type=\"checkbox\" value=\"{{address.AddressId}}\" name=\"chk_Checked\" (change)=\"updateCheckedOptions(chk_Checked, $event)\"\n                                            />\n                                        </span>\n                                            <div class=\"text-right\">\n                                                <a class=\"add-addrs\" (click)=\"EditAddress(address.AddressId)\">\n                                                    <i class=\"material-icons\">create</i>\n                                                </a>\n                                                <a class=\"dlt-addrs\" (click)=\"DeleteAddress(address.AddressId,address.isDefault)\">\n                                                    <i class=\"material-icons\">delete</i>\n                                                </a>\n                                            </div>\n\n                                            <address>\n                                            <h5> {{address.title}}</h5>\n                                            {{address.address1}},\n                                            <br /> {{address.address2}}, {{address.city}}\n                                            <br /> {{address.country}}, {{address.stateName}}\n                                            <br /> pincode:{{address.zipcode}}\n                                        </address>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <form class=\"col-md-4 col-md-offset-4 col-xs-12\" #AddressForm=\"ngForm\" (ngSubmit)=\"submitForm(AddressForm)\" *ngIf=\"UserAddress.ListAddressVm.count === 0 || IsHidden === false\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"Home, Ofc etc\" #title=\"ngModel\" [(ngModel)]=\"addressvm.title\" pattern=\"[a-zA-Z][a-zA-Z ]+\" required>\n\n                                <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n                                    <div [hidden]=\"!title.hasError('required')\">Name is required</div>\n                                    <div [hidden]=\"!title.hasError('pattern')\">Only alphabetsallowed</div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" id=\"address1\" name=\"address1\" placeholder=\"Address1\" #address1=\"ngModel\" [(ngModel)]=\"addressvm.address1\" required>\n\n                                <div [hidden]=\"address1.valid || address1.pristine\" class=\"alert alert-danger\">\n                                    <div [hidden]=\"!address1.hasError('required')\">address1 is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" id=\"address2\" name=\"address2\" placeholder=\"Address2\" #address2=\"ngModel\" [(ngModel)]=\"addressvm.address2\" required>\n\n                                <div [hidden]=\"address2.valid || address2.pristine\" class=\"alert alert-danger\">\n                                    <div [hidden]=\"!address2.hasError('required')\">address2 is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <select type=\"country\" class=\"form-control\" id=\"country\" (change)=\"onCountryChange($event.target.value)\" name=\"country\" placeholder=\"Select Country\" #country=\"ngModel\" [(ngModel)]=\"addressvm.country\" required>\n                                <option value=\"-1\" selected=\"selected\" disabled=\"disabled\">Select state</option>\n                                <option value=\"1\">India</option>\n                            </select>\n                                <div [hidden]=\"country.valid || country.pristine\" class=\"alert alert-danger\">\n                                    <div [hidden]=\"country.hasError('required')\">country is required</div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"EditAddAddress === false\">\n                                <div class=\"form-group\">\n                                    <select type=\"state\" class=\"form-control\" id=\"stateId\" (change)=\"onstateChange($event.target.value)\" name=\"stateId\" placeholder=\"Select state\" #state=\"ngModel\" [(ngModel)]=\"addressvm.stateId\" required>\n                                    <option *ngFor=\"let opt of statesList\" [value]=\"opt.state_id\" [selected]=\"opt.state1 === addressvm.stateId\">{{opt.state1}}</option>\n                                </select>\n\n                                    <div [hidden]=\"state.valid || state.pristine\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!state.hasError('required')\">state is required</div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <select type=\"city\" class=\"form-control\" id=\"city\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"addressvm.city\" placeholder=\"Select City\" required>\n                                    <option *ngFor=\"let opt of citiesList \" [value]=\"opt.city_id\">{{opt.city}}</option>\n                                </select>\n                                    <div [hidden]=\"city.valid || city.pristine\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!city.hasError('required')\">city is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"EditAddAddress === true\">\n                                <div class=\"form-group\">\n                                    <select type=\"stateId\" class=\"form-control\" id=\"stateId\" (change)=\"onstateChange1($event.target.value)\" name=\"stateId\" placeholder=\"Select state\" #state=\"ngModel\" [(ngModel)]=\"addressvm.stateId\" required>\n                                    <option *ngFor=\"let opt of addressvm.statesList\" [value]=\"opt.state_id\" [selected]=\"opt.state1 === addressvm.stateId\">{{opt.state1}}</option>\n                                </select>\n\n                                    <div [hidden]=\"state.valid || state.pristine\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!state.hasError('required')\">state is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select type=\"city\" class=\"form-control\" id=\"city\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"addressvm.city\" placeholder=\"Select City\" required>\n                                    <option *ngFor=\"let opt of addressvm.citiesList \" [value]=\"opt.city_id\" [selected]=\"opt.city_id === addressvm.city\">{{opt.city}}</option>\n                                </select>\n                                    <div [hidden]=\"city.valid || city.pristine\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!city.hasError('required')\">city is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n\n                                <input type=\"text\" class=\"form-control\" id=\"zipcode\" name=\"zipcode\" placeholder=\"Pincode\" #zipcode=\"ngModel\" [(ngModel)]=\"addressvm.zipcode\" required maxlength=\"6\" minlength=\"6\">\n\n                                <div [hidden]=\"zipcode.valid || zipcode.pristine\" class=\"alert alert-danger\">\n                                    <div [hidden]=\"!zipcode.hasError('maxlength')\">zipcode should be 6 digit</div>\n                                    <div [hidden]=\"!zipcode.hasError('minlength')\">zipcode should be 6 digit</div>\n                                </div>\n\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" id=\"Mobile\" name=\"Mobile\" placeholder=\"Mobile Number\" #Mobile=\"ngModel\" [(ngModel)]=\"addressvm.Mobile\" pattern=\"[0-9]*\" required maxlength=\"10\" minlength=\"10\">\n                                <div [hidden]=\"Mobile.valid || Mobile.pristine\" class=\"alert alert-danger\">\n                                    <div [hidden]=\"!Mobile.hasError('minlength')\">Mobile should be 10digit</div>\n                                    <div [hidden]=\"!Mobile.hasError('required')\">Mobile is required</div>\n                                    <div [hidden]=\"!Mobile.hasError('pattern')\">Mobile numberr should be only numbers</div>\n                                </div>\n\n                            </div>\n                            <div class=\"form-group\">\n                                <button type=\"submit\" class=\"btn btn-warning\" [disabled]=\"!AddressForm.form.valid\" (onclick)=\"LoginMe()\">Submit</button>\n                                <button type=\"button\" class=\"btn btn-warning\" (click)=\"Cancel()\">Cancel</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/addresses/addresses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gw_checkout_Services_cartaddress_service__ = __webpack_require__("./src/app/gw-checkout/Services/cartaddress.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddressesComponent = /** @class */ (function () {
    function AddressesComponent(cartAddressService) {
        this.cartAddressService = cartAddressService;
        this.buttonName = 'Add Address';
        this.IsHidden = true;
        this.user_AccesToken = sessionStorage.getItem('userToken');
        this.citiesList = [];
        this.addressvm = {
            AddressId: 0,
            title: '',
            address1: '',
            address2: '',
            country: '',
            stateId: '',
            stateName: '',
            city: '',
            CityId: '',
            zipcode: '',
            Mobile: '',
            longitude: 0,
            latitude: 0,
            isDefault: false,
            createdOn: Date.UTC.toString(),
            modifiedOn: Date.UTC.toString(),
            countriesList: [],
            statesList: null,
            citiesList: null,
        };
    }
    AddressesComponent.prototype.ngOnInit = function () {
        this.CartAddress();
    };
    AddressesComponent.prototype.CartAddress = function () {
        var _this = this;
        var user_AccesToken = sessionStorage.getItem('userToken');
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        this.cartAddressService.GetAddressList(user_AccesToken, userId, 0, null).toPromise().then(function (resp) {
            _this.UserAddress = resp;
            _this.UserAddress.shippingCharge = resp.ShippingCharge;
            if (_this.UserAddress.ListAddressVm.length > 0) {
                _this.IsHidden = true;
                for (var i = 0; i < _this.UserAddress.ListAddressVm.length; i++) {
                    if (_this.UserAddress.ListAddressVm[i].isDefault === true) {
                        _this.defaultAddress = _this.UserAddress.ListAddressVm[i];
                    }
                }
            }
        });
    };
    AddressesComponent.prototype.toggle = function (operation) {
        this.IsHidden = !this.IsHidden;
        if (this.IsHidden) {
            this.buttonName = 'Add Address';
        }
        else {
            if (operation === 'edit') {
                this.EditAddAddress = true;
                this.addressvm = this.addressvm;
                this.buttonName = 'Add Address';
            }
            else {
                this.addressvm = this.RestInputFields();
                this.EditAddAddress = false;
            }
        }
    };
    AddressesComponent.prototype.RestInputFields = function () {
        var addressvm = {
            AddressId: 0,
            title: '',
            address1: '',
            address2: '',
            country: '',
            stateId: '',
            stateName: '',
            city: '',
            CityId: '',
            zipcode: '',
            Mobile: '',
            longitude: 0,
            latitude: 0,
            isDefault: false,
            createdOn: Date.UTC.toString(),
            modifiedOn: Date.UTC.toString(),
            countriesList: [],
            statesList: null,
            citiesList: null,
        };
        return addressvm;
    };
    AddressesComponent.prototype.onCountryChange = function (countryId) {
        var _this = this;
        if (countryId === '0') {
            this.statesList = null;
            this.citiesList = null;
        }
        else {
            this.cartAddressService.GetStates(this.user_AccesToken, countryId).subscribe(function (res) {
                _this.statesList = res;
            });
        }
    };
    AddressesComponent.prototype.onstateChange = function (stateId) {
        var _this = this;
        if (stateId === '0') {
            this.citiesList = null;
        }
        else {
            this.cartAddressService.GetCities(this.user_AccesToken, stateId).subscribe(function (res) {
                _this.citiesList = res;
            });
        }
    };
    AddressesComponent.prototype.onstateChange1 = function (stateId) {
        var _this = this;
        if (stateId === '0') {
            this.citiesList = null;
        }
        else {
            this.cartAddressService.GetCities(this.user_AccesToken, stateId).subscribe(function (res) {
                _this.addressvm.citiesList = res;
            });
        }
    };
    AddressesComponent.prototype.submitForm = function (form) {
        var _this = this;
        if (this.addressvm.AddressId !== null && this.addressvm.AddressId !== 0) {
            this.cartAddressService.UpdateAddress(this.addressvm, this.user_AccesToken).subscribe(function (resp) {
                if (resp === '204') {
                    _this.CartAddress();
                    _this.RestInputFields();
                }
            });
        }
        else {
            this.cartAddressService.AddAddress(this.addressvm, this.user_AccesToken).subscribe(function (resp) {
                if (resp === '200') {
                    _this.CartAddress();
                }
            });
        }
    };
    AddressesComponent.prototype.EditAddress = function (addressId) {
        var _this = this;
        var addId = +addressId;
        this.cartAddressService.EditAddress(addId, this.user_AccesToken).subscribe(function (resp) {
            _this.addressvm = resp;
            _this.toggle('edit');
        });
    };
    AddressesComponent.prototype.DeleteAddress = function (addressId, isDefault) {
        var _this = this;
        var addId = +addressId;
        if (isDefault === false) {
            this.cartAddressService.DeleteAddress(addId, this.user_AccesToken).subscribe(function (resp) {
                if (resp === '204') {
                    _this.CartAddress();
                }
            });
        }
        else {
            alert('you cant delete the default');
        }
    };
    AddressesComponent.prototype.updateCheckedOptions = function (option, event) {
        var _this = this;
        var chk_Id = +event.target.value;
        this.cartAddressService.MakeDefaultAddress(chk_Id, this.user_AccesToken).subscribe(function (resp) {
            if (resp === '201') {
                _this.CartAddress();
            }
        });
    };
    AddressesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addresses',
            template: __webpack_require__("./src/app/addresses/addresses.component.html"),
            styles: [__webpack_require__("./src/app/addresses/addresses.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__gw_checkout_Services_cartaddress_service__["a" /* CartaddressService */]])
    ], AddressesComponent);
    return AddressesComponent;
}());



/***/ }),

/***/ "./src/app/all-generic-meds/all-generic-meds.component.css":
/***/ (function(module, exports) {

module.exports = ".tabletbody td,\r\n.table thead>tr>th {\r\n    border-bottom-width: 1px;\r\n    text-align: center\r\n}\r\n\r\n.item-brdr {\r\n    padding: 10px;\r\n    -webkit-box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .16), 0 2px 5px 0 rgba(0, 0, 0, .12);\r\n            box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .16), 0 2px 5px 0 rgba(0, 0, 0, .12);\r\n    margin-bottom: 10px;\r\n    cursor: pointer;\r\n    color: #747d98;\r\n    -webkit-transition: all 0.1s;\r\n    transition: all 0.1s;\r\n}\r\n\r\n.item-brdr:hover {\r\n    background-color: #e1e7ec;\r\n}\r\n\r\n.mt-0 {\r\n    margin-top: 0;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.item-brdr p {\r\n    color: #747d98;\r\n}\r\n\r\n.add-to-cart i {\r\n    font-size: 14px;\r\n    vertical-align: -2px;\r\n    cursor: pointer;\r\n}\r\n\r\n.mrgn-lft {\r\n    margin-left: 25px;\r\n}\r\n\r\n.item-brdr ul,\r\n.mrgn-btm {\r\n    margin-bottom: 0;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n}\r\n\r\n.mrgn-btm a i {\r\n    color: #747d89;\r\n    font-weight: normal !important;\r\n}\r\n\r\n.item-brdr ul li {\r\n    color: #747d98;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.item-brdr ul li:hover {\r\n    color: #fff;\r\n    background-color: #ec8558;\r\n    border-color: #ec8558;\r\n}"

/***/ }),

/***/ "./src/app/all-generic-meds/all-generic-meds.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/AllgenericMeds\">All Generic Medicines</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 col-xs-12\">\n                <h4 class=\"mt-0\"> LIST OF ALL GENERIC MEDICINES</h4>\n            </div>\n        </div>\n        <div class=\"row\">\n                <simple-notifications></simple-notifications>\n            <div class=\"col-md-6\" *ngFor=\"let item of pagedItems\">\n                <div class=\"item-brdr\">\n\n\n                    <p class=\"mrgn-btm\">\n                        <a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.ItemName)\">\n\n                            <span *ngIf=\"item.PurchaseUnitModel === 'STRIP'\">\n                            <i class=\"flaticon-medical-11\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel === 'SYRUP'\">\n                            <i class=\"flaticon-medical-9\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'BOTTLE'\">\n                            <i class=\"flaticon-medical-16\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'Tablet'\">\n                            <i class=\"flaticon-medical-9\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'strip'\">\n                            <i class=\"flaticon-medical-11\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'tube'\">\n                            <i class=\"flaticon-tube-icon\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'TUBE'\">\n                            <i class=\"flaticon-tube-icon\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'INJ'\">\n                            <i class=\"flaticon-medical-8\"></i>\n                        </span> {{item.ItemName}}\n                            <span>\n                            <small> - {{item.Manufacturer}}</small>\n                        </span>\n                        </a>\n                    </p>\n\n                    <p class=\"mrgn-lft\">\n                        <small>{{item.Composition}}</small>\n                    </p>\n                    <ul class=\"list-inline list-unstyled text-right\">\n                        <li>\n                            <span>MRP:\n                            <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.MRP | number : '1.2-2' }}</span>\n                        </li>\n                        <li>\n                            <span>Our Price:\n                            <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.SellingPrice | number : '1.2-2'}}</span>\n                        </li>\n                        <li>\n                            <a (click)=\"AddtoDrugCart(item)\">\n                                <span class=\"add-to-cart\">\n                                <i class=\"material-icons add-to-cart\">shopping_cart</i>\n                            </span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                    <div class=\"pull-left\">\n                            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n                                <!-- <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                                <a (click)=\"setPage(1)\">First</a>\n                            </li> -->\n                                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                                    <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n                                </li>\n                                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n                                    <a (click)=\"setPage(page)\">{{page}}</a>\n                                </li>\n                                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                                    <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n                                </li>\n                                <!-- <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                                <a (click)=\"setPage(pager.totalPages)\">Last</a>\n                            </li> -->\n                            </ul>\n                        </div>\n\n            </div>\n        </div>\n        <hr/>\n\n    </div>\n\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/all-generic-meds/all-generic-meds.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllGenericMedsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_allgenericmedicines_service__ = __webpack_require__("./src/app/all-generic-meds/services/allgenericmedicines.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Common_cart_cart_service__ = __webpack_require__("./src/app/Common/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gw_prdct_dscrptn_Services_product_details_service__ = __webpack_require__("./src/app/gw-prdct-dscrptn/Services/product-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pageservice_pager_service_service__ = __webpack_require__("./src/app/pageservice/pager-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AllGenericMedsComponent = /** @class */ (function () {
    function AllGenericMedsComponent(allgenericmedicineservice, cartService, NavbarServices, notifications, _productService, router, _pageService) {
        this.allgenericmedicineservice = allgenericmedicineservice;
        this.cartService = cartService;
        this.NavbarServices = NavbarServices;
        this.notifications = notifications;
        this._productService = _productService;
        this.router = router;
        this._pageService = _pageService;
        this.drugs = [];
        this.pager = {};
    } // page service calling
    AllGenericMedsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allgenericmedicineservice.GetGenericDrugs().subscribe(function (catdata) {
            _this.drugs = catdata;
            // implementing pagination
            _this.itemcount = _this.drugs.length;
            _this.setPage(1);
        }, function (error) {
            _this.statusMesssage = 'There is problem with service';
        });
    };
    AllGenericMedsComponent.prototype.ProductDetails = function (ItemCode, itemType, iteName) {
        this.produtDetial = {
            prodId: ItemCode,
            itemType: itemType
        };
        // tslint:disable-next-line:no-debugger
        debugger;
        iteName = iteName.substr(0, iteName.length - 1);
        iteName = iteName.replace(/\s/g, '-');
        var first = iteName.charAt(0);
        if (iteName.charAt(0) === '-') {
            iteName = iteName.replace(/^-+/, '');
        }
        this._productService.setData(this.produtDetial);
        this.router.navigate(['/ItemDetails', iteName]);
    };
    AllGenericMedsComponent.prototype.setPage = function (page) {
        this.pager = this._pageService.getPager(this.itemcount, page);
        this.pagedItems = this.drugs.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    AllGenericMedsComponent.prototype.AddtoDrugCart = function (Drug, catId) {
        var type = 'cartItem';
        var ProductVm = {
            id: +Drug.ItemCode,
            name: Drug.ItemName,
            itemType: Drug.ItemType,
            quantityPerUnit: 1,
            unitPrice: Drug.SellingPrice,
            Msrp: Drug.MRP,
            picture: Drug.ImageName,
            ranking: 0,
            isVerified: 0,
            isPrdAttr: true,
            attrId: 0,
            quantity: 1,
            catId: +catId
        };
        this.cartService.addToCart(ProductVm, type);
        this.notifications.success('Success', '1 item is added to cart', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
        });
        this.NavbarServices.change();
    };
    AllGenericMedsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-all-generic-meds',
            template: __webpack_require__("./src/app/all-generic-meds/all-generic-meds.component.html"),
            styles: [__webpack_require__("./src/app/all-generic-meds/all-generic-meds.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_allgenericmedicines_service__["a" /* AllgenericmedicinesService */],
            __WEBPACK_IMPORTED_MODULE_2__Common_cart_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_3__navbar_Services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_4__gw_prdct_dscrptn_Services_product_details_service__["a" /* ProductDetailsService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__pageservice_pager_service_service__["a" /* PagerServiceService */]])
    ], AllGenericMedsComponent);
    return AllGenericMedsComponent;
}());



/***/ }),

/***/ "./src/app/all-generic-meds/services/allgenericmedicines.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllgenericmedicinesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllgenericmedicinesService = /** @class */ (function () {
    function AllgenericmedicinesService(_http) {
        this._http = _http;
    }
    AllgenericmedicinesService.prototype.GetGenericDrugs = function () {
        return this._http.get('http://localhost:31029/api/home/generiMedicines')
            .map(function (response) { return response.json(); }).catch(this.handleError);
    };
    AllgenericmedicinesService.prototype.GetDOlfday = function () {
        return this._http.get('http://localhost:31029/api/home/dlofDay')
            .map(function (response) { return response.json(); }).catch(this.handleError);
    };
    AllgenericmedicinesService.prototype.GetProductList = function () {
        return this._http.get('http://localhost:31029/api/product/List')
            .map(function (response) { return response.json(); }).catch(this.handleError);
    };
    AllgenericmedicinesService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    AllgenericmedicinesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AllgenericmedicinesService);
    return AllgenericmedicinesService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar [count]=\"count\"></app-navbar>\n\n\n<div id=\"wrapper\">\n    <!-- Sidebar -->\n    <app-sidebar></app-sidebar>\n    <!-- Page Content -->\n    <div id=\"page-content-wrapper\">\n       \n        <router-outlet> </router-outlet>\n  \n    </div>\n    <!-- /#page-content-wrapper -->\n    <app-chat></app-chat>\n</div>\n\n<!-- /#wrapper -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router, activate) {
        this.router = router;
        this.activate = activate;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
        var urlParams = [];
        window.location.search.replace('?', '').split('&').forEach(function (e, i) {
            var p = e.split('=');
            urlParams[p[0]] = p[1];
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__ = __webpack_require__("./node_modules/angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gnrc_services_gnrc_services_component__ = __webpack_require__("./src/app/gnrc-services/gnrc-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gw_ltst_prdcts_gw_ltst_prdcts_component__ = __webpack_require__("./src/app/gw-ltst-prdcts/gw-ltst-prdcts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gw_pplr_prdcts_gw_pplr_prdcts_component__ = __webpack_require__("./src/app/gw-pplr-prdcts/gw-pplr-prdcts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__banner_banner_component__ = __webpack_require__("./src/app/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__cart_cart_component__ = __webpack_require__("./src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sidebar_Services_categoires_service__ = __webpack_require__("./src/app/sidebar/Services/categoires.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__gw_prdct_dscrptn_gw_prdct_dscrptn_component__ = __webpack_require__("./src/app/gw-prdct-dscrptn/gw-prdct-dscrptn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__gw_checkout_gw_checkout_component__ = __webpack_require__("./src/app/gw-checkout/gw-checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__gw_wishlist_gw_wishlist_component__ = __webpack_require__("./src/app/gw-wishlist/gw-wishlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__gw_add_prescription_gw_add_prescription_component__ = __webpack_require__("./src/app/gw-add-prescription/gw-add-prescription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__gw_srch_gw_srch_component__ = __webpack_require__("./src/app/gw-srch/gw-srch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Common_cart_cart_service__ = __webpack_require__("./src/app/Common/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__gw_prdct_dscrptn_Services_product_details_service__ = __webpack_require__("./src/app/gw-prdct-dscrptn/Services/product-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__HttpInterceptors_request_interceptor_service__ = __webpack_require__("./src/app/HttpInterceptors/request.interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__login_Services_user_service__ = __webpack_require__("./src/app/login/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__signup_Services_sign_up_service__ = __webpack_require__("./src/app/signup/Services/sign-up.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ask_expert_ask_expert_component__ = __webpack_require__("./src/app/ask-expert/ask-expert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__contact_us_contact_us_component__ = __webpack_require__("./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__faqs_faqs_component__ = __webpack_require__("./src/app/faqs/faqs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__gnrc_drug_lnks_gnrc_drug_lnks_component__ = __webpack_require__("./src/app/gnrc-drug-lnks/gnrc-drug-lnks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__gnrc_drugs_india_gnrc_drugs_india_component__ = __webpack_require__("./src/app/gnrc-drugs-india/gnrc-drugs-india.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__hstry_of_gnrc_drugs_hstry_of_gnrc_drugs_component__ = __webpack_require__("./src/app/hstry-of-gnrc-drugs/hstry-of-gnrc-drugs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__lst_of_mdcns_lst_of_mdcns_component__ = __webpack_require__("./src/app/lst-of-mdcns/lst-of-mdcns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__privacy_policy_privacy_policy_component__ = __webpack_require__("./src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__return_policy_return_policy_component__ = __webpack_require__("./src/app/return-policy/return-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__terms_and_conditions_terms_and_conditions_component__ = __webpack_require__("./src/app/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__why_gnrc_mdcn_why_gnrc_mdcn_component__ = __webpack_require__("./src/app/why-gnrc-mdcn/why-gnrc-mdcn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__subcategory_list_subcategory_list_component__ = __webpack_require__("./src/app/subcategory-list/subcategory-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__subcategory_list_Service_subcategory_proudct_service__ = __webpack_require__("./src/app/subcategory-list/Service/subcategory-proudct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__gw_checkout_Services_cartaddress_service__ = __webpack_require__("./src/app/gw-checkout/Services/cartaddress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__gw_checkout_Services_prescription_service__ = __webpack_require__("./src/app/gw-checkout/Services/prescription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__gw_checkout_Services_order_service__ = __webpack_require__("./src/app/gw-checkout/Services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__razorpay_razorpay_component__ = __webpack_require__("./src/app/razorpay/razorpay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__razorpay_service_window__ = __webpack_require__("./src/app/razorpay/service/window.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__razorpay_service_payment_detail_service__ = __webpack_require__("./src/app/razorpay/service/payment-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__success_success_component__ = __webpack_require__("./src/app/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__failure_failure_component__ = __webpack_require__("./src/app/failure/failure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__navbar_Services_searchdetails_service__ = __webpack_require__("./src/app/navbar/Services/searchdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__compostionsearch_compostionsearch_component__ = __webpack_require__("./src/app/compostionsearch/compostionsearch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__addresses_addresses_component__ = __webpack_require__("./src/app/addresses/addresses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__account_account_component__ = __webpack_require__("./src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__account_service_account_service__ = __webpack_require__("./src/app/account/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__track_track_component__ = __webpack_require__("./src/app/track/track.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__track_Services_trackorder_service__ = __webpack_require__("./src/app/track/Services/trackorder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__orderdetails_orderdetails_component__ = __webpack_require__("./src/app/orderdetails/orderdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__orderdetails_Service_orderdetails_service__ = __webpack_require__("./src/app/orderdetails/Service/orderdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__shop_header_shop_header_component__ = __webpack_require__("./src/app/shop-header/shop-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__wholesale_wholesale_component__ = __webpack_require__("./src/app/wholesale/wholesale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__dlof_day_dlof_day_component__ = __webpack_require__("./src/app/dlof-day/dlof-day.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__all_generic_meds_all_generic_meds_component__ = __webpack_require__("./src/app/all-generic-meds/all-generic-meds.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__all_generic_meds_services_allgenericmedicines_service__ = __webpack_require__("./src/app/all-generic-meds/services/allgenericmedicines.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__dlof_day_services_dolfday_service__ = __webpack_require__("./src/app/dlof-day/services/dolfday.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69_ngx_carousel__ = __webpack_require__("./node_modules/ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_70_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71_ngx_tooltip__ = __webpack_require__("./node_modules/ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_71_ngx_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pageservice_pager_service_service__ = __webpack_require__("./src/app/pageservice/pager-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__popular_brands_popular_brands_component__ = __webpack_require__("./src/app/popular-brands/popular-brands.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pay_tm_pay_tm_component__ = __webpack_require__("./src/app/pay-tm/pay-tm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_75_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__chat_chat_component__ = __webpack_require__("./src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__chat_chatservice_chatservice_service__ = __webpack_require__("./src/app/chat/chatservice/chatservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































































// import { LstOfMdcnsComponent } from './al';









var social_config = new __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["GoogleLoginProvider"]('829332795153-igvu3h2pb7ksk0njnp8cbre06kboi9m6.apps.googleusercontent.com')
    },
    {
        id: __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["FacebookLoginProvider"]('186606445390076')
    }
]);
var appRoutes = [
    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */] },
    // { path: 'home', children [
    //   { path: '' component:  }
    // ]},
    //   children: [
    //   { path: '', redirectTo: '', pathMatch: 'full' },
    //   { path: 'sidebar', component: SidebarComponent },
    //   { path: 'navbar', component: NavbarComponent },
    // ] },
    { path: 'Login/Login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'Signup/Signup', component: __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'sidebar', component: __WEBPACK_IMPORTED_MODULE_10__sidebar_sidebar_component__["a" /* SidebarComponent */] },
    { path: 'Cart/Cart', component: __WEBPACK_IMPORTED_MODULE_18__cart_cart_component__["a" /* CartComponent */] },
    { path: 'WishList/WishList', component: __WEBPACK_IMPORTED_MODULE_22__gw_wishlist_gw_wishlist_component__["a" /* GwWishlistComponent */] },
    { path: 'ItemDetails/:productname', component: __WEBPACK_IMPORTED_MODULE_20__gw_prdct_dscrptn_gw_prdct_dscrptn_component__["a" /* GwPrdctDscrptnComponent */] },
    { path: 'Checkout', component: __WEBPACK_IMPORTED_MODULE_21__gw_checkout_gw_checkout_component__["a" /* GwCheckoutComponent */] },
    { path: 'gw-add-prescription', component: __WEBPACK_IMPORTED_MODULE_23__gw_add_prescription_gw_add_prescription_component__["a" /* GwAddPrescriptionComponent */] },
    { path: 'Product/:category/:subcategory', component: __WEBPACK_IMPORTED_MODULE_44__subcategory_list_subcategory_list_component__["a" /* SubcategoryListComponent */] },
    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_32__about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'faqs', component: __WEBPACK_IMPORTED_MODULE_35__faqs_faqs_component__["a" /* FaqsComponent */] },
    { path: 'terms-and-conditions', component: __WEBPACK_IMPORTED_MODULE_42__terms_and_conditions_terms_and_conditions_component__["a" /* TermsAndConditionsComponent */] },
    { path: 'privacy-policy', component: __WEBPACK_IMPORTED_MODULE_40__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */] },
    { path: 'return-policy', component: __WEBPACK_IMPORTED_MODULE_41__return_policy_return_policy_component__["a" /* ReturnPolicyComponent */] },
    { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_34__contact_us_contact_us_component__["a" /* ContactUsComponent */] },
    { path: 'why-gnrc-mdcn', component: __WEBPACK_IMPORTED_MODULE_43__why_gnrc_mdcn_why_gnrc_mdcn_component__["a" /* WhyGnrcMdcnComponent */] },
    { path: 'hstry-of-gnrc-drugs', component: __WEBPACK_IMPORTED_MODULE_38__hstry_of_gnrc_drugs_hstry_of_gnrc_drugs_component__["a" /* HstryOfGnrcDrugsComponent */] },
    { path: 'gnrc-drugs-india', component: __WEBPACK_IMPORTED_MODULE_37__gnrc_drugs_india_gnrc_drugs_india_component__["a" /* GnrcDrugsIndiaComponent */] },
    { path: 'ask-expert', component: __WEBPACK_IMPORTED_MODULE_33__ask_expert_ask_expert_component__["a" /* AskExpertComponent */] },
    { path: 'lst-of-mdcns', component: __WEBPACK_IMPORTED_MODULE_39__lst_of_mdcns_lst_of_mdcns_component__["a" /* LstOfMdcnsComponent */] },
    { path: 'gnrc-drug-lnks', component: __WEBPACK_IMPORTED_MODULE_36__gnrc_drug_lnks_gnrc_drug_lnks_component__["a" /* GnrcDrugLnksComponent */] },
    { path: 'Product/:category', component: __WEBPACK_IMPORTED_MODULE_44__subcategory_list_subcategory_list_component__["a" /* SubcategoryListComponent */] },
    { path: 'razorPay', component: __WEBPACK_IMPORTED_MODULE_49__razorpay_razorpay_component__["a" /* RazorpayComponent */] },
    { path: 'Success', component: __WEBPACK_IMPORTED_MODULE_52__success_success_component__["a" /* SuccessComponent */] },
    { path: 'Failure', component: __WEBPACK_IMPORTED_MODULE_53__failure_failure_component__["a" /* FailureComponent */] },
    { path: 'Search/:productname', component: __WEBPACK_IMPORTED_MODULE_55__compostionsearch_compostionsearch_component__["a" /* CompostionsearchComponent */] },
    { path: 'Address/Addresses', component: __WEBPACK_IMPORTED_MODULE_56__addresses_addresses_component__["a" /* AddressesComponent */] },
    { path: 'Account/update', component: __WEBPACK_IMPORTED_MODULE_57__account_account_component__["a" /* AccountComponent */] },
    { path: 'Track/TrackOrders', component: __WEBPACK_IMPORTED_MODULE_59__track_track_component__["a" /* TrackComponent */] },
    { path: 'Track/OrderDetails/:order_id', component: __WEBPACK_IMPORTED_MODULE_61__orderdetails_orderdetails_component__["a" /* OrderdetailsComponent */] },
    { path: 'Home/DlofDay', component: __WEBPACK_IMPORTED_MODULE_65__dlof_day_dlof_day_component__["a" /* DlofDayComponent */] },
    { path: 'Home/AllGenericMed', component: __WEBPACK_IMPORTED_MODULE_66__all_generic_meds_all_generic_meds_component__["a" /* AllGenericMedsComponent */] },
    { path: 'PayTm', component: __WEBPACK_IMPORTED_MODULE_74__pay_tm_pay_tm_component__["a" /* PayTmComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__gnrc_services_gnrc_services_component__["a" /* GnrcServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__gw_ltst_prdcts_gw_ltst_prdcts_component__["a" /* GwLtstPrdctsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__gw_pplr_prdcts_gw_pplr_prdcts_component__["a" /* GwPplrPrdctsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_20__gw_prdct_dscrptn_gw_prdct_dscrptn_component__["a" /* GwPrdctDscrptnComponent */],
                __WEBPACK_IMPORTED_MODULE_21__gw_checkout_gw_checkout_component__["a" /* GwCheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_22__gw_wishlist_gw_wishlist_component__["a" /* GwWishlistComponent */],
                __WEBPACK_IMPORTED_MODULE_23__gw_add_prescription_gw_add_prescription_component__["a" /* GwAddPrescriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_24__gw_srch_gw_srch_component__["a" /* GwSrchComponent */],
                __WEBPACK_IMPORTED_MODULE_32__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__ask_expert_ask_expert_component__["a" /* AskExpertComponent */],
                __WEBPACK_IMPORTED_MODULE_34__contact_us_contact_us_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__faqs_faqs_component__["a" /* FaqsComponent */],
                __WEBPACK_IMPORTED_MODULE_36__gnrc_drug_lnks_gnrc_drug_lnks_component__["a" /* GnrcDrugLnksComponent */],
                __WEBPACK_IMPORTED_MODULE_37__gnrc_drugs_india_gnrc_drugs_india_component__["a" /* GnrcDrugsIndiaComponent */],
                __WEBPACK_IMPORTED_MODULE_38__hstry_of_gnrc_drugs_hstry_of_gnrc_drugs_component__["a" /* HstryOfGnrcDrugsComponent */],
                __WEBPACK_IMPORTED_MODULE_39__lst_of_mdcns_lst_of_mdcns_component__["a" /* LstOfMdcnsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_41__return_policy_return_policy_component__["a" /* ReturnPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_42__terms_and_conditions_terms_and_conditions_component__["a" /* TermsAndConditionsComponent */],
                __WEBPACK_IMPORTED_MODULE_43__why_gnrc_mdcn_why_gnrc_mdcn_component__["a" /* WhyGnrcMdcnComponent */],
                __WEBPACK_IMPORTED_MODULE_44__subcategory_list_subcategory_list_component__["a" /* SubcategoryListComponent */],
                __WEBPACK_IMPORTED_MODULE_49__razorpay_razorpay_component__["a" /* RazorpayComponent */],
                __WEBPACK_IMPORTED_MODULE_52__success_success_component__["a" /* SuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_53__failure_failure_component__["a" /* FailureComponent */],
                __WEBPACK_IMPORTED_MODULE_55__compostionsearch_compostionsearch_component__["a" /* CompostionsearchComponent */],
                __WEBPACK_IMPORTED_MODULE_56__addresses_addresses_component__["a" /* AddressesComponent */],
                __WEBPACK_IMPORTED_MODULE_57__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_59__track_track_component__["a" /* TrackComponent */],
                __WEBPACK_IMPORTED_MODULE_61__orderdetails_orderdetails_component__["a" /* OrderdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_63__shop_header_shop_header_component__["a" /* ShopHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_64__wholesale_wholesale_component__["a" /* WholesaleComponent */],
                __WEBPACK_IMPORTED_MODULE_65__dlof_day_dlof_day_component__["a" /* DlofDayComponent */],
                __WEBPACK_IMPORTED_MODULE_66__all_generic_meds_all_generic_meds_component__["a" /* AllGenericMedsComponent */],
                __WEBPACK_IMPORTED_MODULE_73__popular_brands_popular_brands_component__["a" /* PopularBrandsComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pay_tm_pay_tm_component__["a" /* PayTmComponent */],
                __WEBPACK_IMPORTED_MODULE_76__chat_chat_component__["a" /* ChatComponent */]
                // imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular4_social_login__["SocialLoginModule"].initialize(social_config),
                __WEBPACK_IMPORTED_MODULE_75_angular2_notifications__["SimpleNotificationsModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_69_ngx_carousel__["a" /* NgxCarouselModule */], __WEBPACK_IMPORTED_MODULE_71_ngx_tooltip__["TooltipModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__sidebar_Services_categoires_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_25__Common_cart_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_26__gw_prdct_dscrptn_Services_product_details_service__["a" /* ProductDetailsService */], __WEBPACK_IMPORTED_MODULE_27__navbar_Services_navbar_service__["a" /* NavbarService */], __WEBPACK_IMPORTED_MODULE_30__login_Services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_31__signup_Services_sign_up_service__["a" /* SignUpService */],
                __WEBPACK_IMPORTED_MODULE_45__subcategory_list_Service_subcategory_proudct_service__["a" /* SubcategoryProudctService */], __WEBPACK_IMPORTED_MODULE_46__gw_checkout_Services_cartaddress_service__["a" /* CartaddressService */], __WEBPACK_IMPORTED_MODULE_47__gw_checkout_Services_prescription_service__["a" /* PrescriptionService */], __WEBPACK_IMPORTED_MODULE_48__gw_checkout_Services_order_service__["a" /* OrderService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_29__HttpInterceptors_request_interceptor_service__["a" /* RequestInterceptorService */],
                    multi: true
                }, __WEBPACK_IMPORTED_MODULE_50__razorpay_service_window__["a" /* WindowRef */], __WEBPACK_IMPORTED_MODULE_51__razorpay_service_payment_detail_service__["a" /* PaymentDetailService */], __WEBPACK_IMPORTED_MODULE_54__navbar_Services_searchdetails_service__["a" /* SearchdetailsService */], __WEBPACK_IMPORTED_MODULE_58__account_service_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_60__track_Services_trackorder_service__["a" /* TrackorderService */], __WEBPACK_IMPORTED_MODULE_62__orderdetails_Service_orderdetails_service__["a" /* OrderdetailsService */],
                __WEBPACK_IMPORTED_MODULE_67__all_generic_meds_services_allgenericmedicines_service__["a" /* AllgenericmedicinesService */], __WEBPACK_IMPORTED_MODULE_68__dlof_day_services_dolfday_service__["a" /* DolfdayService */], __WEBPACK_IMPORTED_MODULE_72__pageservice_pager_service_service__["a" /* PagerServiceService */], __WEBPACK_IMPORTED_MODULE_77__chat_chatservice_chatservice_service__["a" /* ChatserviceService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ask-expert/ask-expert.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ask-expert/ask-expert.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\"><a routerLink=\"/Ask expert\">Ask expert</a></li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <h3>Ask The Expert</h3>\n\n            <p>\n                Generiwala.com was started by a Health care BPO Company having more than 20 years of experience in Health care Industry.\n            </p>\n            <p>\n                Generiwala.com is an onpne pharmacy, we provide you quapty generic medicines that are produced by reputed Companies at affordable price. We also provide the latest news and updated about generic medicines. Our aim is to reduce healthcare expenses.\n            </p>\n            <p>\n                You will find branded good quapty generic medicines in our website, If you specify the brand name in our search option, you will get the equivalent generic medicine available with us. You can place an onpne order and get them depvery to your door steps\n                provide you upload the medical prescription or else pick the medicines from your nearest generic store. We tie-up with local generic stores near to you and get the medicines to your door steps.\n            </p>\n            <h3>Benefits of Genericwala.com :\n            </h3>\n\n            <p>\n                <span>Search with branded drugs and get equapng good quapty generic drugs with discounted prices.</span>\n            </p>\n            <p>\n                <span>Get information about generic medicines. Eg:- Composition, Side Effects etc.</span>\n            </p>\n            <p>\n                <span>High quapty generic medicines would be sold at low prices.</span>\n            </p>\n            <p>\n                <span>Order onpne and can collect from your nearest generic store.</span>\n            </p>\n            <p>\n                <span>You can upload you prescription and save it in your login for future use.</span>\n            </p>\n            <p>\n                <span>Reduce medical expenses.         Save time.        Save transport.</span>\n            </p>\n\n        </div>\n\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/ask-expert/ask-expert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskExpertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AskExpertComponent = /** @class */ (function () {
    function AskExpertComponent() {
    }
    AskExpertComponent.prototype.ngOnInit = function () {
    };
    AskExpertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ask-expert',
            template: __webpack_require__("./src/app/ask-expert/ask-expert.component.html"),
            styles: [__webpack_require__("./src/app/ask-expert/ask-expert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AskExpertComponent);
    return AskExpertComponent;
}());



/***/ }),

/***/ "./src/app/banner/Service/sliders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SlidersService = /** @class */ (function () {
    function SlidersService(_http) {
        this._http = _http;
    }
    SlidersService.prototype.GetHomePageSlider = function () {
        return this._http.get('http://localhost:31029/api/home/sliders')
            .map(function (response) { return response.json(); }).catch(this.handleError);
    };
    SlidersService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    SlidersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SlidersService);
    return SlidersService;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/***/ (function(module, exports) {

module.exports = ".carousel-inner {\r\n    position: relative;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background-color: antiquewhite;\r\n}\r\n\r\n.carousel .item img {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n}\r\n\r\n.carousel .item img {\r\n    margin: 0 auto;\r\n}\r\n\r\n.carousel-indicators {\r\n    margin-left: 0;\r\n}\r\n\r\n.carousel-indicators li {\r\n    display: inline-block;\r\n    width: 18px;\r\n    height: 4px;\r\n    margin-left: 10px;\r\n    text-indent: -999px;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    border: none;\r\n    border-radius: 0px;\r\n}\r\n\r\n.carousel-indicators .active {\r\n    width: 18px;\r\n    height: 5px;\r\n    background-color: #ec8558;\r\n    margin-left: 10px;\r\n}\r\n\r\n.carousel-control .material-icons,\r\n.carousel-control .material-icons,\r\n.carousel-control .icon-next,\r\n.carousel-control .icon-prev {\r\n    position: absolute;\r\n    top: 50%;\r\n    z-index: 5;\r\n    display: inline-block;\r\n    margin-top: -10px;\r\n}\r\n\r\n.no-gutter>[class*='col-'] {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n}"

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"arrayRange != []\">\n    <div class=\"row no-gutter\">\n        <div class=\"col-md-12\">\n            <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n                <ol class=\"carousel-indicators hidden-xs\">\n                    <li data-target=\"#myCarousel\" *ngFor=\"let image of homePage_Sliders;let i = index\" [attr.data-slide-to]=\"i\" ngClass=\"i == 0 ? 'active' : ''\"></li>\n                </ol>\n\n                <div class=\"carousel-inner\" role=\"listbox\">\n                    <div *ngFor=\"let image of homePage_Sliders; let k = index\" [ngClass]=\"k == 0 ? 'item active' : 'item'\">\n                        <img src=\"https://genericwala.com/Images/slider/{{image.image_name}}\" alt=\"Event Image\">\n                    </div>\n                </div>\n\n                <a class=\"left carousel-control hidden-lg hidden-md hidden-sm\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n                    <i class=\"material-icons media-object\">arrow_back</i>\n                    <span class=\"sr-only\">Previous</span>\n                </a>\n                <a class=\"right carousel-control hidden-lg hidden-md hidden-sm\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n                    <i class=\"material-icons media-object\">arrow_forward</i>\n                    <span class=\"sr-only\">Next</span>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_sliders_service__ = __webpack_require__("./src/app/banner/Service/sliders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BannerComponent = /** @class */ (function () {
    function BannerComponent(_sliderserverice) {
        this._sliderserverice = _sliderserverice;
    }
    BannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sliderserverice.GetHomePageSlider().subscribe(function (sliders) { return _this.homePage_Sliders = sliders; }, function (error) { return _this.statusMessage = 'There is Problem with this service'; });
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__("./src/app/banner/banner.component.html"),
            styles: [__webpack_require__("./src/app/banner/banner.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__Service_sliders_service__["a" /* SlidersService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Service_sliders_service__["a" /* SlidersService */]])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/***/ (function(module, exports) {

module.exports = ".cart-table thead tr th {\r\n    text-align: center;\r\n}\r\n\r\n.gw-add-btn {\r\n    background-color: #fff;\r\n    color: #0e76bc;\r\n    border: 1px solid #e1e7ec;\r\n}\r\n\r\n.table-fixed>tbody>tr>td,\r\n.table-fixed>tbody>tr>th,\r\n.table-fixed>tfoot>tr>td,\r\n.table-fixed>tfoot>tr>th,\r\n.table-fixed>thead>tr>td,\r\n.table-fixed>thead>tr>th {\r\n    padding: 8px;\r\n    line-height: 1.42857143;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #ddd;\r\n    color: #747d89;\r\n}\r\n\r\n.table-fixed>tbody>tr>td:first-child,\r\n.table-fixed>tbody>tr>th:first-child,\r\n.table-fixed>tfoot>tr>td:first-child,\r\n.table-fixed>tfoot>tr>th:first-child,\r\n.table-fixed>thead>tr>td:first-child,\r\n.table-fixed>thead>tr>th:first-child {\r\n    width: 35%;\r\n}\r\n\r\n.cart-div,\r\n.prdct-dtls {\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    z-index: 101;\r\n}\r\n\r\n.u-save {\r\n    margin-top: 5px;\r\n}\r\n\r\n.add-dlt-icon {\r\n    position: absolute;\r\n    right: 15px;\r\n    bottom: 5px;\r\n}\r\n\r\n.cstm-pnl-ht {\r\n    -webkit-box-shadow: 2px 2px 2px 0px #ddd;\r\n            box-shadow: 2px 2px 2px 0px #ddd;\r\n    border: 1px solid #ddd;\r\n    background-color: #fff;\r\n}\r\n\r\n.u-save>i {\r\n    padding-right: 5px;\r\n}\r\n\r\n.cart-div h4 {\r\n    margin-top: 0;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.value-of-prdcts {\r\n    border: 1px solid #ddd;\r\n    margin-top: 10px;\r\n}\r\n\r\n.value-of-prdcts h4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.cstm-pnl-ht .mrgn-top-xs {\r\n    margin-top: 46px;\r\n}\r\n\r\n.table-fixed tbody td,\r\n.table-fixed thead>tr>th {\r\n    border-bottom-width: 1px;\r\n    text-align: center\r\n}\r\n\r\n.empty-cart {\r\n    height: 320px;\r\n}\r\n\r\n.empty-cart .empty-cart-heading {\r\n    margin-top: 114px;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .add-dlt-icon {\r\n        position: relative;\r\n        bottom: 0;\r\n        right: 0;\r\n    }\r\n    .gw-add-dlt-icns i {\r\n        margin: 0px;\r\n        font-size: 14px;\r\n    }\r\n    .gw-add-btn {\r\n        padding: 3px;\r\n    }\r\n    .cstm-pnl-ht {\r\n        -webkit-box-shadow: none;\r\n                box-shadow: none;\r\n        border: none;\r\n    }\r\n    .chck-dlvry-info {\r\n        margin-bottom: 20px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/Cart/Cart\">Cart</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <div class=\"row cstm-pnl-ht\">\n        <div class=\"col-md-12 cart-div\" *ngIf='cart_count > 0'>\n            <h4 class=\"col-sm-4\">\n                <span class=\"space-tp-rt\">\n                        <simple-notifications></simple-notifications>\n                    <i class=\"material-icons pull-left\">shopping_cart</i>\n                </span> My Cart (\n                <span>{{cart_count}}</span> Items)</h4>\n            <!-- <div class=\"input-group col-sm-3 pull-right chck-dlvry-info\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Check Delivery Info\">\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-primary\" type=\"button\">Go!</button>\n                </span>\n            </div> -->\n            <table class=\"table  table-fixed  table-bordered text-center\">\n                <thead>\n                    <tr>\n                        <th>Description</th>\n                        <th>Quantity</th>\n                        <th colspan=\"3\"> Price</th>\n                    </tr>\n                    <tr>\n                        <th colspan=\"2\" style=\"border:none\"></th>\n                        <th>MRP</th>\n                        <th>Discount</th>\n                        <th>Total</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of cartList\">\n                        <td style=\"position: relative;\">\n                            <p>{{item.ItemName}}</p>\n                            <p class=\"u-save text-primary\">\n                                <!-- <i class=\"material-icons\">enhanced_encryption</i> -->\n                                <i class=\"fa fa-fire\" aria-hidden=\"true\"></i>You save:\n                                <span class=\"\">\n                                    <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{(item.Price-item.OriginalPrice) * item.quantity | number:'1.2-2'}}</span>\n                            </p>\n                            <span class=\"add-dlt-icon\">\n                                <a title=\"Add to wishlist\">\n                           \n                                    <i class=\"fa fa-heart-o\" aria-hidden=\"true\"  (click)=\"AddtoWhishlists(item)\"></i>\n                                </a>\n                                <a title=\"Delete Item\">\n                                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)=\"DeleteCartItem(item)\"></i>\n                                </a>\n                            </span>\n                        </td>\n                        <td>\n\n                            <div class=\"btn-group\">\n                                <span class=\"btn btn-primary gw-add-btn\" (click)=\"DecreaseQuantity(item)\">-</span>\n                                <span class=\"btn btn-primary gw-add-btn\">{{item.quantity}}</span>\n                                <span class=\"btn btn-primary gw-add-btn\" (click)=\"IncreaseQuantity(item)\">+</span>\n                            </div>\n\n\n                        </td>\n                        <td>\n                            <p>\n                                <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{item.Price | number:'1.2-2'}}</p>\n                        </td>\n                        <td>\n                            <p>\n                                <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{(item.Price-item.OriginalPrice) * item.quantity | number:'1.2-2'}}</p>\n                        </td>\n                        <td>\n                            <p>\n                                <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{item.quantity * item.OriginalPrice | number:'1.2-2'}}</p>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"col-sm-2 text-center value-of-prdcts\">\n                <h5>Value of Products</h5>\n\n                <h4>\n                    <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{cart_ActualAmount | number:'1.2-2' }}</h4>\n            </div>\n            <div class=\"col-sm-2 text-center value-of-prdcts\">\n                <h5>Your Savings(-)</h5>\n                <h4>\n                    <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{cart_DiscountAmunt | number:'1.2-2'}}</h4>\n            </div>\n            <div class=\"col-sm-2 text-center value-of-prdcts\">\n                <h5>Final Payment</h5>\n                <h4>\n                    <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{cart_TotalAmount | number:'1.2-2'}}</h4>\n            </div>\n\n            <div class=\"text-right\">\n                <button type=\"button\" class=\"btn btn-success mrgn-top-xs\" routerLink=\"/Home\">Continue Shopping</button>\n                <button type=\"button\" class=\"btn btn-primary btn-sbmt mrgn-top-xs\" routerLink=\"/Checkout\">Check Out</button>\n            </div>\n\n        </div>\n        <div class=\"col-md-12 cart-div empty-cart text-center\" *ngIf='cart_count === 0'>\n            <h4 class=\"empty-cart-heading\">\n                <i class=\"material-icons\">shopping_cart</i>\n                <br/> {{Message}}\n            </h4>\n        </div>\n    </div>\n\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Common_cart_cart_service__ = __webpack_require__("./src/app/Common/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_Services_user_service__ = __webpack_require__("./src/app/login/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartComponent = /** @class */ (function () {
    function CartComponent(_cartservice, _navabar, notifications, userservice) {
        this._cartservice = _cartservice;
        this._navabar = _navabar;
        this.notifications = notifications;
        this.userservice = userservice;
        this.list_Items = [];
        this.cartList = [];
        this.cart_TotalAmount = 0;
        this.cart_DiscountAmunt = 0;
        this.cart_ActualAmount = 0;
        this.token = sessionStorage.getItem('userToken');
    }
    CartComponent.prototype.ngOnInit = function () {
        this.LoadCartItem();
    };
    CartComponent.prototype.IncreaseQuantity = function (item) {
        this.type = 'cart';
        if (this.token === null || this.token === '') {
            var localstorageCartObj = this._cartservice.UpdateCartQuantity(item);
            var cartTotal = this.GetCartTotal();
            return localstorageCartObj;
        }
        else {
            var storageCartObj = this._cartservice.UpdateCartQuantity(item);
            var cartTotal = this.GetCartTotal();
            return storageCartObj;
        }
    };
    CartComponent.prototype.DecreaseQuantity = function (item) {
        var localstorageCartObj = this._cartservice.RemoveCartQuantity(item);
        var cartTotal = this.GetCartTotal();
        return localstorageCartObj;
    };
    CartComponent.prototype.DeleteCartItem = function (item) {
        var _this = this;
        this.cartList = [];
        this.cart_TotalAmount = 0;
        this.cart_DiscountAmunt = 0;
        this.cart_ActualAmount = 0;
        var type = 'cart';
        status = '0';
        if (this.token === null || this.token === '') {
            var localstorageCartObj = this._cartservice.DeleteCartItem(item, type);
            this._navabar.change();
            var cartobj = JSON.parse(localStorage.getItem('cartobj'));
            this.cart_count = cartobj === null ? 0 : cartobj.length;
            this.count = cartobj.length;
            if (this.cart_count > 0) {
                for (var i = 0; i < cartobj.length; i++) {
                    var itemes = JSON.parse(cartobj[i]);
                    this.cart_ActualAmount += (itemes.Price * itemes.quantity);
                    this.cart_DiscountAmunt += (itemes.Price - itemes.OriginalPrice) * itemes.quantity;
                    this.cart_TotalAmount += (itemes.OriginalPrice * itemes.quantity);
                    this.cartList.push(itemes);
                }
                this.notifications.error('Deleted', '1 item is removed from cart', {
                    timeOut: 3000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    clickToClose: true,
                    maxLength: 50
                });
                return cartobj;
            }
            else {
                this.Message = 'No Items In cart';
            }
        }
        else {
            this._cartservice.DeleteItem(item, type).toPromise().then(function (respe) {
                if (respe === '200') {
                    var token = sessionStorage.getItem('userToken');
                    var userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
                    status = '1';
                    _this.userservice.GetUserCartData(token, userId).subscribe(function (resp) {
                        _this.userdata = resp;
                        sessionStorage.setItem('userCartITem', JSON.stringify(_this.userdata.userCartList));
                        sessionStorage.setItem('userWhishList', JSON.stringify(_this.userdata.userWishlist));
                        _this._navabar.name = _this.userdata.customerdata.firstname;
                        _this.notifications.error('Deleted', '1 item is removed from cart', {
                            timeOut: 3000,
                            showProgressBar: true,
                            pauseOnHover: false,
                            clickToClose: true,
                            maxLength: 50
                        });
                        _this._navabar.change();
                        _this.LoadCartItem();
                    });
                }
                else {
                    _this._cartservice.DeleteItemCart(item);
                    var userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
                    _this.notifications.error('Deleted', '1 item is removed from cart', {
                        timeOut: 3000,
                        showProgressBar: true,
                        pauseOnHover: false,
                        clickToClose: true,
                        maxLength: 50
                    });
                    _this._navabar.change();
                    _this.LoadCartItem();
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
    };
    CartComponent.prototype.LoadCartItem = function () {
        if (this.token === null || this.token === '') {
            var cartobj = JSON.parse(localStorage.getItem('cartobj'));
            this.cart_count = cartobj === null ? 0 : cartobj.length;
            this.count = cartobj === null ? 0 : cartobj.length;
            if (this.cart_count > 0) {
                for (var i = 0; i < cartobj.length; i++) {
                    var item = JSON.parse(cartobj[i]);
                    this.cart_ActualAmount += (item.Price * item.quantity);
                    this.cart_DiscountAmunt += (item.Price - item.OriginalPrice) * item.quantity;
                    this.cart_TotalAmount += (item.OriginalPrice * item.quantity);
                    this.cartList.push(item);
                }
                return cartobj;
            }
            else {
                this.Message = 'No Items In cart';
            }
        }
        else {
            var cartobj = JSON.parse(sessionStorage.getItem('userCartITem'));
            this.cart_count = cartobj === null ? 0 : cartobj.length;
            this.count = cartobj === null ? 0 : cartobj.length;
            if (this.cart_count > 0) {
                for (var i = 0; i < cartobj.length; i++) {
                    var item = cartobj[i];
                    this.cart_ActualAmount += (item.Price * item.quantity);
                    this.cart_DiscountAmunt += (item.Price - item.OriginalPrice);
                    this.cart_TotalAmount += (item.OriginalPrice * item.quantity);
                    this.cartList.push(item);
                }
                return cartobj;
            }
            else {
                this.Message = 'No Items In cart';
            }
        }
    };
    CartComponent.prototype.GetCartTotal = function () {
        var cartobj;
        this.cart_TotalAmount = 0;
        this.cart_DiscountAmunt = 0;
        this.cart_ActualAmount = 0;
        if (this.token === null || this.token === '') {
            cartobj = JSON.parse(localStorage.getItem('cartobj'));
            for (var i = 0; i < cartobj.length; i++) {
                var obj = JSON.parse(cartobj[i]);
                this.cart_ActualAmount += (obj.Price * obj.quantity);
                this.cart_DiscountAmunt += (obj.Price - obj.OriginalPrice) * obj.quantity;
                this.cart_TotalAmount += (obj.OriginalPrice * obj.quantity);
            }
        }
        else {
            cartobj = JSON.parse(sessionStorage.getItem('userCartITem'));
            for (var i = 0; i < cartobj.length; i++) {
                var obj = cartobj[i];
                obj.TotalDiscount = (obj.TotalDiscount * obj.Price);
                this.cart_ActualAmount += ((obj.Price * obj.quantity));
                this.cart_DiscountAmunt += (obj.Price - obj.OriginalPrice) * obj.quantity;
                this.cart_TotalAmount += (obj.OriginalPrice * obj.quantity);
            }
        }
        return cartobj;
    };
    CartComponent.prototype.AddtoWhishlists = function (cartObject) {
        var type = 'wishListItem';
        var Product = {
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
        this.notifications.success('Whishlist', '1 item is added to Whishlist', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
        });
        this._navabar.change();
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/cart/cart.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__Common_cart_cart_service__["a" /* CartService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Common_cart_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_2__navbar_Services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_3__login_Services_user_service__["a" /* UserService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: #202020;\r\n  }\r\n  #livechat-compact-container {\r\n    height: 153px;\r\n    position: fixed;\r\n    right: 0;\r\n    top: 200px;\r\n    top: 30vh;\r\n    z-index: 10000;\r\n  }\r\n  .btn-chat a {\r\n    font-family: arial;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background: #1798F7;\r\n    padding: 24px 20px 8px;\r\n    display: block;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    -webkit-box-shadow: 0 0 0 1px #03b2ff inset;\r\n            box-shadow: 0 0 0 1px #03b2ff inset;\r\n    border: 1px solid #144866;\r\n    border-radius: 2px;\r\n    -webkit-transform: rotate(90deg) translate(0, -20px);\r\n    transform: rotate(90deg) translate(0, -20px);\r\n    position: relative;\r\n    right: -27px;\r\n    -webkit-transition: background 0.2s, right 0.2s;\r\n    transition: background 0.2s, right 0.2s;\r\n  }\r\n  .btn-chat a:hover {\r\n    background: #47B6F5;\r\n    right: -20px;\r\n    -webkit-transition: background 0.2s, right 0.2s;\r\n    transition: background 0.2s, right 0.2s;\r\n  }\r\n  #wplc_hovercard{\r\n    position: fixed;\r\n    bottom: -12px;\r\n    right: 20px;\r\n    width: 300px;\r\n    height: 145px;\r\n    background-color:  #fff ;\r\n    border-radius: 5px;\r\n    z-index: 9999999;\r\n    height: auto;\r\n    border: 1px solid #000;\r\n  }\r\n  #wp_live_chat{\r\n    position: fixed;\r\n    z-index: 9999999;\r\n    /* display: block; */\r\n    border-radius: 5px 5px 0 0;\r\n    color: #fff ;\r\n    \r\n      \r\n  }\r\n  .well {\r\n    min-height: 20px;\r\n    padding: 19px;\r\n    margin-bottom: 20px;\r\n    background-color: rgb(245, 249, 252);\r\n    border: 1px solid #fff ;\r\n    border-radius: 4px;\r\n    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!username && showdiv === true\" class=\"col-lg-6\" id=\"wplc_hovercard\">\n  <form name=\"userInputForm\" (submit)=\"saveUsername()\">\n    <div class=\"form-group\">\n      <label class=\"control-label\">\n        <h4>Enter Username</h4>\n      </label>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"glyphicon glyphicon-user\"></i>\n        </span>\n        <input [(ngModel)]=\"userInput\" name=\"userInput\" type=\"text\" class=\"form-control\" autocomplete=\"off\">\n        <span class=\"input-group-btn\">\n          <button [disabled]=\"!userInput\" class=\"btn btn-default\" type=\"submit\">Enter</button>\n        </span>\n      </div>\n    </div>\n  </form>\n</div>\n<!-- <div data-reactroot=\"\" class=\"widget-container body-font Brandon\">\n  <div style=\"position: fixed; left: -10000px; visibility: hidden;\">\n    <span style=\"font-weight: 400;\"></span>\n    <span style=\"font-weight: 500;\"></span>\n    <span style=\"font-weight: 600;\"></span>\n  </div>\n  <div class=\"_2ngXYtlcHXA-EjBwuz_RKI\">\n    <span class=\"_3KIigMno8L7h1L-RI5I_KX\" style=\"width: 100%;\"></span>\n    <button class=\"_2So8ItJQ9P6IqaCUlCO-2f flex-center CHAT _3S6qOFxcrgO0yM2f9_l6JZ _364Vk0R65B1GXViJwyA9fM\" aria-label=\"Begin an instant message conversation\"\n      style=\"background-color: rgb(114, 164, 223); fill: rgb(255, 255, 255);\">\n      <i class=\"_1ZSagdd_Wbj_ZKw0RkZfOn\">\n        <svg width=\"25\" height=\"23\" viewBox=\"0 0 25 23\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M24.516 9.953C24.516 4.453 19.04 0 12.258 0 5.476 0 0 4.452 0 9.953c0 3.318 1.986 6.24 5.05 8.053-.34 2.552-1.815 4.055-1.844 4.084-.14.14-.17.368-.113.567a.524.524 0 0 0 .482.312c2.95 0 5.335-1.93 6.612-3.206.652.086 1.362.142 2.07.142 6.783 0 12.26-4.452 12.26-9.953z\"\n            fill=\"#FFF\" fill-rule=\"evenodd\"></path>\n        </svg>\n      </i>\n    </button>\n  </div>\n</div> -->\n\n\n<div class=\"btn-chat\" id=\"livechat-compact-container\" style=\"visibility: visible; opacity: 1;\">\n  <div class=\"btn-holder\">\n    <a (click)=\"openpopup()\" class=\"link\">Live Chat</a>\n  </div>\n</div>\n\n<!-- <button class=\"_2So8ItJQ9P6IqaCUlCO-2f flex-center CHAT _3S6qOFxcrgO0yM2f9_l6JZ _364Vk0R65B1GXViJwyA9fM\" aria-label=\"Begin an instant message conversation\"\n  style=\"background-color: rgb(114, 164, 223); fill: rgb(255, 255, 255);\">\n  <i class=\"_1ZSagdd_Wbj_ZKw0RkZfOn\">\n    <svg width=\"25\" height=\"23\" viewBox=\"0 0 25 23\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M24.516 9.953C24.516 4.453 19.04 0 12.258 0 5.476 0 0 4.452 0 9.953c0 3.318 1.986 6.24 5.05 8.053-.34 2.552-1.815 4.055-1.844 4.084-.14.14-.17.368-.113.567a.524.524 0 0 0 .482.312c2.95 0 5.335-1.93 6.612-3.206.652.086 1.362.142 2.07.142 6.783 0 12.26-4.452 12.26-9.953z\"\n        fill=\"#FFF\" fill-rule=\"evenodd\"></path>\n    </svg>\n  </i>\n</button> -->\n\n\n\n<div *ngIf=\"username && showdiv === true\"  id=\"wp_live_chat\" style=\"margin-bottom: 0px; right: 20px; bottom: 0px; display: block;\">\n  <div class=\"well\">\n    <div class=\"panel panel-default\">\n      <!-- Default panel contents -->\n      <div class=\"panel-heading\">\n        Chat Now\n      </div>\n    </div>\n\n    <p *ngFor=\"let message of messages\">\n      <strong>\n        <span class=\"glyphicon glyphicon-user\"></span> {{ message.username }}</strong> {{message.text}}\n    </p>\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"well bs-component\">\n        <form class=\"form-horizontal\" (submit)=\"sendMessage()\">\n          <fieldset>\n            <legend>Message</legend>\n            <div class=\"form-group\">\n              <label for=\"message\" class=\"col-lg-2 control-label\">\n                <span class=\"glyphicon glyphicon-comment\"></span>\n              </label>\n              <div class=\"col-lg-10\">\n                <input [(ngModel)]=\"message\" name=\"message\" placeholder=\"enter message here\" class=\"form-control\" autocomplete=\"off\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-lg-10 col-lg-offset-2\">\n                <button [disabled]=\"!message\" type=\"submit\" class=\"btn btn-lg btn-info\">Send</button>\n              </div>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n    <!-- <div class=\"col-lg-6\">\n      <div class=\"well bs-component\">\n        <form class=\"form-horizontal\" (submit)=\"sendMessage()\">\n          <fieldset>\n            <legend>Users Online</legend>\n            <div class=\"form-group\">\n              <label for=\"message\" class=\"col-lg-2 control-label\">\n                <span class=\"glyphicon glyphicon-user\"></span>\n              </label>\n              <div class=\"col-lg-10\">\n                <select multiple=\"\" class=\"form-control\">\n                  <option *ngFor=\"let client of users\">{{ client.username }}</option>\n                </select>\n              </div>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n    </div> -->\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chatservice_chatservice_service__ = __webpack_require__("./src/app/chat/chatservice/chatservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatservice) {
        this.chatservice = chatservice;
        this.messages = [];
        this.showdiv = false;
    }
    ChatComponent.prototype.onExit = function () {
        if (this.username) {
            this.chatservice.exitSession(this.username);
        }
    };
    ChatComponent.prototype.sendMessage = function () {
        this.chatservice.sendMessage(this.message, this.username);
        this.message = '';
        if (this.messages.length > 8) {
            this.messages.splice(0, 1);
        }
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectionMessage = this.chatservice.getMessages().subscribe(function (message) {
            _this.messages.push(message);
        });
        this.connectionUsers = this.chatservice.getUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    ChatComponent.prototype.saveUsername = function () {
        if (this.userInput.length > 0) {
            this.username = this.userInput;
            this.chatservice.saveUsername(this.username);
        }
    };
    ChatComponent.prototype.openpopup = function () {
        // tslint:disable-next-line:no-debugger
        debugger;
        if (this.showdiv === false) {
            this.showdiv = true;
        }
        else {
            this.showdiv = false;
        }
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.connectionMessage.unsubscribe();
        this.connectionUsers.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChatComponent.prototype, "onExit", null);
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chatservice_chatservice_service__["a" /* ChatserviceService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/chatservice/chatservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatserviceService = /** @class */ (function () {
    function ChatserviceService() {
    }
    ChatserviceService.prototype.sendMessage = function (message, username) {
        this.socket.emit('add-message', message, username);
        this.socket.emit('users');
    };
    ChatserviceService.prototype.saveUsername = function (username) {
        this.socket.emit('saveUser', username);
    };
    ChatserviceService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatserviceService.prototype.getUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl);
            _this.socket.on('users', function (data) {
                var myArray = [];
                for (var i = 0; i < data.users.length; i++) {
                    var user = {
                        username: String
                    };
                    user.username = data.users[i];
                    myArray.push(user);
                }
                observer.next(myArray);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatserviceService.prototype.exitSession = function (username) {
        this.socket.emit('exitSession', username);
    };
    ChatserviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ChatserviceService);
    return ChatserviceService;
}());



/***/ }),

/***/ "./src/app/compostionsearch/compostionsearch.component.css":
/***/ (function(module, exports) {

module.exports = ".tabletbody td,\r\n.table thead>tr>th {\r\n    border-bottom-width: 1px;\r\n    text-align: center\r\n}\r\n\r\n.item-brdr {\r\n    padding: 10px;\r\n    -webkit-box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .16), 0 2px 5px 0 rgba(0, 0, 0, .12);\r\n            box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .16), 0 2px 5px 0 rgba(0, 0, 0, .12);\r\n    margin-bottom: 10px;\r\n    cursor: pointer;\r\n    color: #747d98;\r\n    -webkit-transition: all 0.1s;\r\n    transition: all 0.1s;\r\n}\r\n\r\n.item-brdr:hover {\r\n    background-color: #eee;\r\n}\r\n\r\n.mt-0 {\r\n    margin-top: 0;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.item-brdr p {\r\n    color: #747d98;\r\n}\r\n\r\n.add-to-cart i {\r\n    font-size: 14px;\r\n    vertical-align: -2px;\r\n    cursor: pointer;\r\n}\r\n\r\n.mrgn-lft {\r\n    margin-left: 25px;\r\n}\r\n\r\n.item-brdr ul,\r\n.mrgn-btm {\r\n    margin-bottom: 0;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n}\r\n\r\n.mrgn-btm a i {\r\n    color: #747d89;\r\n    font-weight: normal !important;\r\n}\r\n\r\n.item-brdr ul li {\r\n    color: #747d98;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.item-brdr ul li:hover {\r\n    color: #fff;\r\n    background-color: #ec8558;\r\n    border-color: #ec8558;\r\n}\r\n\r\n@media screen and (max-width:468px) {\r\n    .banner-bg {\r\n        height: 60px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/compostionsearch/compostionsearch.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\">\n                        Search Results:\n                        <a routerLink=\"/home\">{{data}}</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/about-us\">{{data}} </a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\" *ngIf=\"categoryProducts.Drugs !== null && categoryProducts.Drugs.length>0\">\n    <h5>Brand</h5>\n    <hr/>\n    <div class=\"row\">\n        <div class=\"col-md-6\" *ngFor=\"let item of categoryProducts.Drugs\">\n            <div class=\"item-brdr\">\n\n\n                <p class=\"mrgn-btm\">\n                    <a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.ItemName)\">\n\n                        <span *ngIf=\"item.PurchaseUnitModel === 'STRIP'\">\n                            <i class=\"flaticon-medical-11\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel === 'SYRUP'\">\n                            <i class=\"flaticon-medical-9\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'BOTTLE'\">\n                            <i class=\"flaticon-medical-16\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'Tablet'\">\n                            <i class=\"flaticon-medical-9\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'strip'\">\n                            <i class=\"flaticon-medical-11\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'tube'\">\n                            <i class=\"flaticon-tube-icon\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'TUBE'\">\n                            <i class=\"flaticon-tube-icon\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'INJ'\">\n                            <i class=\"flaticon-medical-8\"></i>\n                        </span> {{item.ItemName}}\n                        <span>\n                            <small> - {{item.Manufacturer}}</small>\n                        </span>\n                    </a>\n                </p>\n\n                <p class=\"mrgn-lft\">\n                    <small>{{item.Composition}}</small>\n                </p>\n                <ul class=\"list-inline list-unstyled text-right\">\n                    <li>\n                        <span>MRP:\n                            <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.MRP | number : '1.2-2' }}</span>\n                    </li>\n                    <li>\n                        <span>Our Price:\n                            <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.SellingPrice | number : '1.2-2'}}</span>\n                    </li>\n                    <li>\n                        <a (click)=\"AddtoDrugCart(item)\">\n                            <span class=\"add-to-cart\">\n                                <i class=\"material-icons add-to-cart\">shopping_cart</i>\n                            </span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <hr/>\n    <h4 class=\"mt-0\" *ngIf=\"categoryProducts.Products?.length >0 && categoryProducts.Products !== null\">Products</h4>\n\n    <div class=\"row\">\n        <div class=\"col-md-6\" *ngFor=\"let item of categoryProducts.Products\">\n            <div class=\"item-brdr\">\n\n                <p class=\"mrgn-btm\">\n                    <a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.ItemName)\">\n\n                        <span *ngIf=\"item.PurchaseUnitModel === 'STRIP'\">\n                            <i class=\"flaticon-medical-11\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel === 'SYRUP'\">\n                            <i class=\"flaticon-medical-9\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'BOTTLE'\">\n                            <i class=\"flaticon-medical-16\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'Tablet'\">\n                            <i class=\"flaticon-medical-9\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'strip'\">\n                            <i class=\"flaticon-medical-11\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'tube'\">\n                            <i class=\"flaticon-tube-icon\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'TUBE'\">\n                            <i class=\"flaticon-tube-icon\"></i>\n                        </span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'INJ'\">\n                            <i class=\"flaticon-medical-8\"></i>\n                        </span> {{item.Name}}\n                        <span *ngIf=\"item.model !== null\">- {{item.model}}</span>\n                        <span>\n                            <small> - {{item.VendorName}}</small>\n                        </span>\n                    </a>\n                </p>\n\n                <p class=\"mrgn-lft\">\n                    <small>{{item.Name}}</small>\n                </p>\n                <ul class=\"list-inline list-unstyled text-right\">\n                    <li>\n                        <span>MRP:\n                            <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.MSRP | number : '1.2-2' }}</span>\n                    </li>\n                    <li>\n                        <span>Our Price:\n                            <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.SellingPrice | number : '1.2-2'}}</span>\n                    </li>\n                    <li>\n\n                        <a (click)=\"AddProductToCart(item)\">\n                            <span class=\"add-to-cart\">\n                                <i class=\"material-icons add-to-cart\">shopping_cart</i>\n                            </span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\" *ngIf=\"categoryProducts.Drugs === null || categoryProducts.Drugs.length === 0\">\n    <h4>No Drugs Found..</h4>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/compostionsearch/compostionsearch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompostionsearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gw_prdct_dscrptn_Services_product_details_service__ = __webpack_require__("./src/app/gw-prdct-dscrptn/Services/product-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_Services_searchdetails_service__ = __webpack_require__("./src/app/navbar/Services/searchdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Common_cart_cart_service__ = __webpack_require__("./src/app/Common/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompostionsearchComponent = /** @class */ (function () {
    function CompostionsearchComponent(productDetialService, cartService, NavbarServices, _SearchdetailsService, router) {
        this.productDetialService = productDetialService;
        this.cartService = cartService;
        this.NavbarServices = NavbarServices;
        this._SearchdetailsService = _SearchdetailsService;
        this.router = router;
    }
    CompostionsearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = this.productDetialService.GetCompostionSearch();
        this._SearchdetailsService.CompositionSearch(this.data)
            .subscribe(function (data) {
            _this.categoryProducts = data;
        });
    };
    CompostionsearchComponent.prototype.AddtoDrugCart = function (Drug, catId) {
        var type = 'cartItem';
        var ProductVm = {
            id: +Drug.ItemCode,
            name: Drug.ItemName,
            itemType: Drug.ItemType,
            quantityPerUnit: 1,
            unitPrice: Drug.SellingPrice,
            Msrp: Drug.MRP,
            picture: Drug.ImageName,
            ranking: 0,
            isVerified: 0,
            isPrdAttr: true,
            attrId: 0,
            quantity: 1,
            catId: +catId
        };
        this.cartService.addToCart(ProductVm, type);
        this.NavbarServices.change();
    };
    CompostionsearchComponent.prototype.AddProductToCart = function (item, catId) {
        var type = 'cartItem';
        var ProductVm = {
            id: +item.ItemCode,
            name: item.Name,
            itemType: item.ItemType,
            quantityPerUnit: 1,
            unitPrice: item.SellingPrice,
            Msrp: item.MSRP,
            picture: item.Picture,
            ranking: 0,
            isVerified: 0,
            isPrdAttr: true,
            attrId: 0,
            quantity: 1,
            catId: +catId
        };
        this.cartService.addToCart(ProductVm, type);
        this.NavbarServices.change();
    };
    CompostionsearchComponent.prototype.ProductDetails = function (ItemCode, itemType, iteName) {
        this.produtDetial = {
            prodId: ItemCode,
            itemType: itemType
        };
        iteName = iteName.replace(/\s/g, '-');
        this.productDetialService.setData(this.produtDetial);
        this.router.navigate(['/ItemDetails', iteName]);
    };
    CompostionsearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-compostionsearch',
            template: __webpack_require__("./src/app/compostionsearch/compostionsearch.component.html"),
            styles: [__webpack_require__("./src/app/compostionsearch/compostionsearch.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__gw_prdct_dscrptn_Services_product_details_service__["a" /* ProductDetailsService */],
            __WEBPACK_IMPORTED_MODULE_3__Common_cart_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_4__navbar_Services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_2__navbar_Services_searchdetails_service__["a" /* SearchdetailsService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], CompostionsearchComponent);
    return CompostionsearchComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/contact-us\">Contact us</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h3>Contact Us</h3>\n        </div>\n        <div class=\"col-md-6 col-xs-12\">\n            <form>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"\" value=\"\" placeholder=\"Name\" required>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control\" name=\"\" value=\"\" placeholder=\"E-mail\" required>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"tel\" class=\"form-control\" name=\"\" value=\"\" placeholder=\"Phone\" required>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"\" value=\"\" placeholder=\"Subject\" required>\n                </div>\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" name=\"\" rows=\"3\" placeholder=\"Message\"></textarea>\n                </div>\n                <button class=\"btn btn-primary btn-sbmt\" type=\"submit\" name=\"button\">\n                    Submit\n                </button>\n            </form>\n        </div>\n        <div class=\"col-md-6 col-xs-12 mrgn-top-xs\">\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5918969781856!2d78.45021400000005!3d17.431362000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90ca2f33506d%3A0xdb1eda9f12c5c365!2sVasavi+Prosoft+Transcription+Limited!5e0!3m2!1sen!2sin!4v1438756351386\"\n                width=\"100%\" height=\"200\" frameborder=\"0\" style=\"border: 0\" allowfullscreen=\"\"></iframe>\n        </div>\n        <div class=\"col-xs-12\">\n\n            <h6>If you have any query or need our help, please let us know. Simply call on\n                <b>040-66666591</b> or mail us at\n                <a href=\"#\" maiito=\"\">support@genericwala.com.</a> Please fill and submit the form. Our experts will get back to you soon!!\n            </h6>\n        </div>\n\n\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__("./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__("./src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/dlof-day/dlof-day.component.css":
/***/ (function(module, exports) {

module.exports = ".img-box {\r\n    height: 120px;\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.item img,\r\n.item img {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    display: inline-block;\r\n    position: absolute;\r\n    bottom: 0;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 10px;\r\n}\r\n\r\n.thumb-wrapper {\r\n    border: 1px solid #e1e7ec;\r\n}\r\n\r\n.carousel .wish-icon {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    z-index: 99;\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n    color: #abb0b8;\r\n}\r\n\r\n.carousel .item h4 {\r\n    font-size: 1em;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.carousel .item h4,\r\n.carousel .item p,\r\n.carousel .item ul {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.item {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.carousel .thumb-content .btn {\r\n    color: #f67f57;\r\n    font-size: 13px;\r\n    text-transform: uppercase;\r\n    background: none;\r\n    border: none;\r\n    padding: 6px 14px;\r\n    margin-top: 5px;\r\n    line-height: 16px;\r\n    border-radius: 0px;\r\n}\r\n\r\n.carousel .thumb-content .btn:hover,\r\n.carousel .thumb-content .btn:focus {\r\n    color: #fff;\r\n    background: #f67f57;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n}\r\n\r\n.cart-icon i:hover,\r\n.wish-icon i:hover {\r\n    color: #f67f57;\r\n}\r\n\r\n.carousel .item-price {\r\n    font-size: 13px;\r\n    padding: 2px 0;\r\n}\r\n\r\n.carousel .item-price strike {\r\n    opacity: 0.7;\r\n    margin-right: 5px;\r\n}"

/***/ }),

/***/ "./src/app/dlof-day/dlof-day.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/offer\">Offers</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 col-xs-12\">\n                <h4 class=\"mt-0\"> Special Discount Offers</h4>\n            </div>\n        </div>\n        <!-- <div class=\"row\">\n            <div class=\"col-md-6\" *ngFor=\"let item of drug\">\n                <div class=\"item-brdr\" *ngIf=\"item !== null\">\n                    <div class=\"thumbnail thmbnl-height\" *ngIf=\"item.ImageName !== null && item.ImageName !== ''  && item.ItemType === 0\">\n                        <div class=\"div-brdr\">\n\n                            <img style=\"height: 55px;\" src=\"http://stores.genericwala.com/Uploads/drugImageUploads/{{item.ImageName}}\" class=\"img-responsive img-fluid center-block\">\n                        </div>\n                    </div>\n                    <div class=\"thumbnail thmbnl-height\" *ngIf=\"item.ImageName ===  null || item.ImageName=== '' \">\n                        <div class=\"div-brdr\">\n                            <a href=\"\">\n\n                                <img src=\"http://placehold.it/320x200\" alt=\"\">\n\n                            </a>\n                        </div>\n                    </div>\n                    <p class=\"mrgn-btm\">\n\n                        <a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.ItemName)\">\n\n                            <span *ngIf=\"item.PurchaseUnitModel === 'STRIP'\">\n                            <i class=\"flaticon-medical-11\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel === 'SYRUP'\">\n                            <i class=\"flaticon-medical-9\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'BOTTLE'\">\n                            <i class=\"flaticon-medical-16\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'Tablet'\">\n                            <i class=\"flaticon-medical-9\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'strip'\">\n                            <i class=\"flaticon-medical-11\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'tube'\">\n                            <i class=\"flaticon-tube-icon\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'TUBE'\">\n                            <i class=\"flaticon-tube-icon\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'INJ'\">\n                            <i class=\"flaticon-medical-8\"></i>\n                        </span> {{item.ItemName}}\n                            <span>\n                            <small> - {{item.Manufacturer}}</small>\n                        </span>\n                        </a>\n                    </p>\n\n                    <p class=\"mrgn-lft\">\n                        <small>{{item.Composition}}</small>\n                    </p>\n                    <ul class=\"list-inline list-unstyled text-right\">\n                        <li>\n                            <span>MRP:\n                            <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.MRP | number : '1.2-2' }}</span>\n                        </li>\n                        <li>\n                            <span>Our Price:\n                            <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.SellingPrice | number : '1.2-2'}}</span>\n                        </li>\n                        <li>\n                            <a (click)=\"AddtoDrugCart(item,item.categoryid)\">\n                                <span class=\"add-to-cart\">\n                                <i class=\"material-icons add-to-cart\">shopping_cart</i>\n                            </span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div> -->\n        <simple-notifications></simple-notifications>\n        <div class=\"row carousel\">\n\n            <div class=\"col-md-4 col-sm-6 col-xs-12 item\" *ngFor=\"let item of drug\">\n                <div class=\"thumb-wrapper\" *ngIf=\"item !== null\">\n                    <!-- <a class=\"wish-icon\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Add to wish list\" (click)=\"AddtoWhishlists(products)\">\n                        <i class=\"glyphicon glyphicon-heart\"></i>\n                    </a> -->\n\n                    <div class=\"img-box\" *ngIf=\"item.ImageName !== null && item.ImageName !== ''  && item.ItemType === 0\">\n                        <img src=\"http://stores.genericwala.com/Uploads/drugImageUploads/{{item.ImageName}}\" class=\"img-responsive img-fluid\" alt=\"\">\n                    </div>\n                    <div class=\"thumb-content\"></div>\n                    <p class=\"\">\n\n                        <a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.ItemName)\">\n\n                            <span *ngIf=\"item.PurchaseUnitModel === 'STRIP'\">\n                            <i class=\"flaticon-medical-11\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel === 'SYRUP'\">\n                            <i class=\"flaticon-medical-9\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'BOTTLE'\">\n                            <i class=\"flaticon-medical-16\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'Tablet'\">\n                            <i class=\"flaticon-medical-9\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'strip'\">\n                            <i class=\"flaticon-medical-11\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'tube'\">\n                            <i class=\"flaticon-tube-icon\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'TUBE'\">\n                            <i class=\"flaticon-tube-icon\"></i>\n                        </span>\n                            <span *ngIf=\"item.PurchaseUnitModel == 'INJ'\">\n                            <i class=\"flaticon-medical-8\"></i>\n                        </span> {{item.ItemName}}\n                            <span><br/>\n                            <small>  {{item.Manufacturer}}</small>\n                        </span>\n                        </a>\n                    </p>\n                    <p class=\"\">\n                        <small>{{item.Composition}}</small>\n                    </p>\n                    <ul class=\"list-inline list-unstyled\">\n                        <li>\n                            <span>MRP:\n                            <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.MRP | number : '1.2-2' }}</span>\n                        </li>\n                        <li>\n                            <span>Our Price:\n                            <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.SellingPrice | number : '1.2-2'}}</span>\n                        </li>\n\n                    </ul>\n                    <a class=\"btn btn-default\" (click)=\"AddtoDrugCart(item,item.categoryid)\">Add to Cart</a>\n                    <!-- <a class=\"btn btn-primary add-to-cart-btn\" [routerLink]=\"['/gw-prdct-dscrptn',products.id,products.itemType]\">product Details</a> -->\n                    <a class=\"btn btn-default\" (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.ItemName)\">product Details</a>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/dlof-day/dlof-day.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DlofDayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_generic_meds_services_allgenericmedicines_service__ = __webpack_require__("./src/app/all-generic-meds/services/allgenericmedicines.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gw_prdct_dscrptn_Services_product_details_service__ = __webpack_require__("./src/app/gw-prdct-dscrptn/Services/product-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Common_cart_cart_service__ = __webpack_require__("./src/app/Common/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DlofDayComponent = /** @class */ (function () {
    function DlofDayComponent(allgenericmedicineservice, router, cartService, NavbarServices, notifications, _productService) {
        this.allgenericmedicineservice = allgenericmedicineservice;
        this.router = router;
        this.cartService = cartService;
        this.NavbarServices = NavbarServices;
        this.notifications = notifications;
        this._productService = _productService;
        this.drug = [];
    }
    DlofDayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allgenericmedicineservice.GetDOlfday().subscribe(function (catdata) {
            _this.drug = catdata;
            console.log(_this.drug);
        }, function (error) {
            _this.statusMesssage = 'There is problem with service';
        });
    };
    DlofDayComponent.prototype.ProductDetails = function (ItemCode, itemType, iteName) {
        this.produtDetial = {
            prodId: ItemCode,
            itemType: itemType
        };
        iteName = iteName.replace(/\s/g, '-');
        iteName = iteName.substr(0, iteName.length - 1);
        this._productService.setData(this.produtDetial);
        this.router.navigate(['/ItemDetails', iteName]);
    };
    DlofDayComponent.prototype.AddtoDrugCart = function (Drug, catId) {
        var type = 'cartItem';
        var ProductVm = {
            id: +Drug.ItemCode,
            name: Drug.ItemName,
            itemType: Drug.ItemType,
            quantityPerUnit: 1,
            unitPrice: Drug.SellingPrice,
            Msrp: Drug.MRP,
            picture: Drug.ImageName,
            ranking: 0,
            isVerified: 0,
            isPrdAttr: true,
            attrId: 0,
            quantity: 1,
            catId: +catId
        };
        this.notifications.success('Success', '1 item is added to cart', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
        });
        this.cartService.addToCart(ProductVm, type);
        this.NavbarServices.change();
    };
    DlofDayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dlof-day',
            template: __webpack_require__("./src/app/dlof-day/dlof-day.component.html"),
            styles: [__webpack_require__("./src/app/dlof-day/dlof-day.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__all_generic_meds_services_allgenericmedicines_service__["a" /* AllgenericmedicinesService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__Common_cart_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_5__navbar_Services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_2__gw_prdct_dscrptn_Services_product_details_service__["a" /* ProductDetailsService */]])
    ], DlofDayComponent);
    return DlofDayComponent;
}());



/***/ }),

/***/ "./src/app/dlof-day/services/dolfday.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DolfdayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DolfdayService = /** @class */ (function () {
    function DolfdayService(_http) {
        this._http = _http;
    }
    DolfdayService.prototype.GetDOlfday = function () {
        return this._http.get('http://localhost:31029/api/home/dlofDay')
            .map(function (response) { return response.json(); }).catch(this.handleError);
    };
    DolfdayService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    DolfdayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DolfdayService);
    return DolfdayService;
}());



/***/ }),

/***/ "./src/app/failure/failure.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron p {\r\n    font-size: 16px;\r\n    font-weight: normal\r\n}"

/***/ }),

/***/ "./src/app/failure/failure.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron  pad-top login\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 main\">\n                <h1 class=\"text-center\"><span class=\"text-danger\"><i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i></span>\n                </h1>\n\n                <h3 class=\"text-center\">\n                    you have cancelled payment before paying... </h3>\n                <p class=\"text-center\">Please try again....</p>\n\n\n                <div class=\"text-center pad-top\">\n                    <a class=\"btn btn-success\" routerLink=\"/Home\"><span style=\"padding-right: 10px;\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></span>Back to Home</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/failure/failure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FailureComponent = /** @class */ (function () {
    function FailureComponent() {
    }
    FailureComponent.prototype.ngOnInit = function () {
    };
    FailureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-failure',
            template: __webpack_require__("./src/app/failure/failure.component.html"),
            styles: [__webpack_require__("./src/app/failure/failure.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FailureComponent);
    return FailureComponent;
}());



/***/ }),

/***/ "./src/app/faqs/faqs.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-title a {\r\n    font-weight: normal;\r\n}\r\n\r\n.panel-title>a:before {\r\n    float: right !important;\r\n    font-family: FontAwesome;\r\n    content: \"\\f106\";\r\n    padding-right: 5px;\r\n}\r\n\r\n.panel-title>a.collapsed:before {\r\n    font-family: FontAwesome;\r\n    float: right !important;\r\n    content: \"\\f107\";\r\n}\r\n\r\n.panel-title>a:hover,\r\n.panel-title>a:active,\r\n.panel-title>a:focus {\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/faqs/faqs.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/faq\">Faq</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <h3>Faq's</h3>\n            <h3 class=\"text-center\">Generic Medicines</h3>\n            <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnOne\" aria-expanded=\"true\" aria-controls=\"accrdnOne\">\n                                Q.What are generic medicines?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"accrdnOne\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>Generic medicines are defined as “a drug product that is comparable to a brand/reference listed drug product in dosage form, strength, quality, performance, and intended use.\"</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnTwo\">\n                                Q.Describe briefly the origin of a generic drug and when does it come to the market?\n                            </a>\n                        </h4>\n\n                    </div>\n                    <div id=\"accrdnTwo\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>The Research and Development Departments in pharmaceutical and medicine manufacturing firms are mainly responsible for starting their drug discovery, development, and finally marketing the new patent drugs after the approval\n                                of the FDA (Food and Drug Administration). The patent drug usually lasts for some years to give the company a chance to recoup its research investment. Once the patent drug completes its period in the market, a generic\n                                version of the same drug is made available in the market. Generics are marketed under the drug's chemical or generic name and meet the same FDA quality and standards of the original drug.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnThree\">\n                                Q.Why are generic drugs safe and effective as brand drugs?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnThree\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>Generic drugs have been approved by the FDA to be safe and effective as brand drugs because they\n                            </p>\n                            <p>Contain the same active ingredients.</p>\n                            <p>They are identical in strength, dosage form, and route of administration.</p>\n                            <p>Have the same indications, dosing and labeling.</p>\n                            <p>Provides the same efficacy and safety profile to patients and hence called to be “bioequivalent”.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnFour\">\n                                Q.Are generic drugs strong as brand named drugs?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnFour\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>Yes! Generic drugs are strong as brand named drugs. They have been approved by the FDA to have same quantity, strength and stability as brand named drugs.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnFive\">\n                                Q.Do generic drugs take longer to work in the body than the brand drugs?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnFive\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>No, generic drugs work in the same way and in the same amount of time as the brand named drugs.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnSix\">\n                                Q.Explain why generic drugs are less expensive than brand drugs?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnSix\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>The generic drugs are less expensive than the brand drugs because they do not have the investment cost of research, development, and marketing. Generic drug manufacturers rarely spend money on advertising and marketing which\n                                is another important way of keeping the costs down. Brand drug manufacturers invest billions of dollars in research, development and marketing their drugs to the doctors in order to make their drug public.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnSeven\">\n                                Q.Are brand named drugs made better factors than generic drugs?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnSeven\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>No. Generic drugs meet the same standards as the brand drugs because they have been approved by the FDA.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnEight\">\n                                Q.Are generic drugs made by the same companies that make brand-name drugs?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnEight\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>In some cases, Yes. Brand-named companies make about half of the generic drugs.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnNine\">\n                                Q.Is a generic drug available for my brand-named prescription?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnNine\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>Yes! A generic drug is available for the brand named prescription.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnTen\">\n                                Q.How do you find out the availability of the generic drugs?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnTen\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>The easiest way to find out the availability is to simply ask your doctor or your pharmacist at your nearest pharmacy. Another effective tool to help you identify whether your brand-name drug has any “therapeutic equivalent\"\n                                version is to visit online Genericwala.com home page which gives you the equivalent generic drug available in the market.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-12 col-xs-12\">\n\n            <h3 class=\"text-center\">Genericwala.com</h3>\n            <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnEleven\" aria-expanded=\"true\" aria-controls=\"accrdnEleven\">\n                                Q.What is Genericwala.com?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnEleven\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"accrdnEleven\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>Genericwala is an online pharmacy. The main objective of Genricwala is to reduce the healthcare expenses for its customers. We are into generic medicines, specialty medicines like Cancer medicines, Anti Diabetic medicines,\n                                etc. We also deal with Wellness products, Healthcare Accessories, Surgical products and hospital equipment. We are coming up with healthcare discount deals shortly.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnTwelve\">\n                                Q.What are the benefits of ordering online?\n                            </a>\n                        </h4>\n\n                    </div>\n                    <div id=\"accrdnTwelve\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>You can save time and money by ordering online. We offer discount on quality medicines and surgical products. The discount is generally 10% to 80% on existing MRP price. We have home delivery option for PAN INDIA. You can find\n                                all the Product information about the products online.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnThirteen\">\n                                Q.How can I search for generic medicines in Genericwala.com?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnThirteen\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p> All you have to do is to go to the search tool in Genericwala.com home page and type the medicine name or composition to get the equaling generic medicines and branded medicines that are available with us. We also provide all\n                                the details like dosage, intended use, side effects, route of administration, composition, price, etc. You can also select the appropriate generic medians from category section. We have segregated the medicines based on\n                                category of aliment. If you did not find the medicine in the search or category section, you can contact us by calling our land line: 040-66666591, or Cell No : 08885916591, or Whatup or email : support@genericwala.com\n                                or online chat to consult out qualified pharmacists to enquire about the availability of the medicines or product.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnFourteen\">\n                                Q.How to place an online order in Genericwala.com?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnFourteen\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>For placing a new order, kindly follow the guidelines.</p>\n                            <p>Type the name of the product you wish to purchase in the search.</p>\n                            <p>Select from the displayed options.</p>\n                            <p>Review the product details.</p>\n                            <p> Enter the quantity and add to the cart.</p>\n                            <p>Once all the required items are added to the cart</p>\n                            <p> Proceed to place order.</p>\n                            <p>If new user, Signup and existing user login in.</p>\n                            <p>Conform your address.</p>\n                            <p>Upload your latest doctor prescription.</p>\n                            <p>Verify the order.</p>\n                            <p>Submit the order.</p>\n                            <p> Make the payment online using our payment options.</p>\n                            <p>Once you have submitted and made the payment, you will receive a confirmation mail to your registered email ID with the order details. You will also receive a call or SMS when the order is ready for dispatch.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnFifteen\">\n                                Q.What are the delivery options at Genericwala.com ?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnFifteen\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>You will be contacted once the order is ready for dispatch. We have cash on delivery option for some locations only. All orders from Hyderabad location, will be fulfilled within 4 hours or less during the regular business hours\n                                and on the next day in case of late and weekend orders. For outstation orders, once payment conformation is done, we will dispatch the products by Courier or Speed post and based on the distance it may take 2 to 3 working\n                                days. The courier/Speed post tracking number is sent by SMS once the dispatch is done.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnSixteen\">\n                                Q.How can you get help from your online pharmacist?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnSixteen\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>We have qualified Pharmacist to guide and advice you. You can consult our online pharmacist for drug information, clarifications, drugs intake, etc. You can contact us by calling our land line : 040-66666591, or Cell No : 08885916591,\n                                or Whatsup or email : support@genericwala.com</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnSeventeen\">\n                                Q.What kind of payment options do you have?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnSeventeen\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>We have payment gateway option with Netbanking, Debit card and Credit card payment. You can also make payment online by the following options:</p>\n                            <p>1) You can make payment online using Instamojo (India’s Largest Multi-Channel Payment Solution) link : https://www.instamojo.com/@rxshopy (please mention your order number in \"purpose\" field while making payment) </p>\n                            <p>You can make online payment (NEFT/IMPS) to our bank account, our bank account details are: (Please note that IMPS payment are done fast)\n                                <br/> Account Holder Name: RXSHOPY INDIA PRIVIATE LIMITED\n                                <br/> Current Account No.: 1490135000003918\n                                <br/> Bank Name and address : Karur Vysya Bank, Ameepet Branch, Hyderabad -500073\n                                <br/> IFSC Code : KVBL0001490\n                                <br/> Once the payment is received, we will inform you by SMS or email about the receipt of the payment and the details about the dispatch of the products.\n                            </p>\n                            <p>3) Cash on delivery is also available for Hyderabad orders and for some most locations in India.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" role=\"tab\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#accrdnEighten\">\n                                Q.Why do we require prescription for ordered generic medicines?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"accrdnEighten\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <span class=\"label label-primary\">Answer</span>\n                            <br/>\n                            <br/>\n                            <p>As per the drug controller (The Regulator of Drug Manufacturing & Distribution in India) all drugs other than OTC medicines have to be sold on receipt of a valid prescription only. You can upload a copy of your prescription\n                                using the upload prescription function. If you have not uploaded a prescription, you can send a soft copy of the prescription to us by email or Whatsapp.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faqs/faqs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqsComponent = /** @class */ (function () {
    function FaqsComponent() {
    }
    FaqsComponent.prototype.ngOnInit = function () {
    };
    FaqsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faqs',
            template: __webpack_require__("./src/app/faqs/faqs.component.html"),
            styles: [__webpack_require__("./src/app/faqs/faqs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqsComponent);
    return FaqsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".fa-facebook-square,\r\n.fa-google-plus-square,\r\n.fa-twitter-square {\r\n    color: #ddd;\r\n    -webkit-transition: ease-in-out .5s;\r\n    transition: ease-in-out .5s;\r\n}\r\n\r\n.footer-info {\r\n    font-size: 13px;\r\n}\r\n\r\n.fa-facebook-square:hover {\r\n    color: #3b5998;\r\n}\r\n\r\n.fa-google-plus-square:hover {\r\n    color: #db4437;\r\n}\r\n\r\n.fa-twitter-square:hover {\r\n    color: #1da1f2;\r\n}\r\n\r\n.footer-info h3 {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n}\r\n\r\n.back-to-top {\r\n    cursor: pointer;\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    display: none;\r\n    z-index: 101;\r\n    background-color: #f67f57;\r\n    border-color: #f67f57;\r\n}\r\n\r\n.footer-links .list li a {\r\n    color: #747d89;\r\n    font-size: 13px;\r\n    -webkit-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.footer-links .list li a:hover {\r\n    color: #f67f57;\r\n}\r\n\r\n.footer-links .list li a:hover::before {\r\n    content: \"\\f101\";\r\n    font-family: FontAwesome;\r\n    padding-right: 5px;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer-info\">\n    <hr/>\n    <div class=\"row\">\n        <div class=\"col-sm-3 col-md-3 col-lg-3\">\n            <div class=\"footer-links\">\n                <h3 class=\"\">genericwala.com</h3>\n                <p> Generiwala.com was started by a Health care BPO Company having more than 20 years of experience in Health care Industry.</p>\n\n                <p>Generiwala.com is an online pharmacy, we provide you quality generic medicines that are produced by reputed Companies at affordable price.</p>\n                <p> We also provide the latest news and updated about generic medicines. Our aim is to reduce healthcare expenses. </p>\n\n            </div>\n        </div>\n        <div class=\"col-sm-3 col-md-3 col-lg-3\">\n            <div class=\"footer-links\">\n                <h3 class=\"\">Contact Us</h3>\n                <div class=\"box-contact\">\n                    <p class=\"address\"><span class=\"fa fa-map-marker\"></span> Badeti's Mansion, # 6-3-712/135,\n                        <br/>Panjagutta Colony,<br/> Hyderabad - 500 082, <br/> Telangana,India.\n                    </p>\n                    <p class=\"phone\"><span class=\"fa fa-phone\"></span> 040-66666591<br/> +91-8885916591</p>\n                    <p class=\"email\"><span class=\"fa fa-envelope\"></span> <span class=\"text\"> support@genericwala.com</span></p>\n                </div>\n                <ul class=\"list-unstyled list-inline\">\n                    <h3>Connect With Us</h3>\n\n                    <li>\n                        <a href=\"https://www.facebook.com/genericwala\" target=\"_blank\"><i class=\"fa fa-facebook-square fa-2x\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li><a href=\"https://plus.google.com/+Genericwalaonlinepharmacy\" target=\"_blank\"><i class=\"fa fa-google-plus-square fa-2x\" aria-hidden=\"true\"></i></a></li>\n                    <li><a href=\"https://twitter.com/genericwala\" target=\"_blank\"><i class=\"fa fa-twitter-square fa-2x\" aria-hidden=\"true\"></i></a></li>\n                </ul>\n            </div>\n        </div>\n\n        <div class=\"col-sm-3 col-md-3 col-lg-3\">\n            <div class=\"footer-links\">\n                <h3 class=\"\">Why buy from us</h3>\n                <ul class=\"list-unstyled list\">\n                    <li><a routerLink=\"/about-us\">About Us</a></li>\n                    <li><a routerLink=\"/about-us\">Blog</a></li>\n                    <li><a routerLink=\"/faqs\">F.A.Q.’s</a></li>\n                    <li><a routerLink=\"/terms-and-conditions\">Terms and Conditions</a></li>\n                    <li><a routerLink=\"/privacy-policy\">Privacy Policy</a></li>\n                    <li><a routerLink=\"/return-policy\">Return Policy</a></li>\n                    <li><a routerLink=\"/contact-us\">Contact Us</a></li>\n\n\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-sm-3 col-md-3 col-lg-3\">\n            <div class=\"footer-links\">\n                <h3 class=\"\">Support</h3>\n                <ul class=\"list-unstyled list\">\n                    <li><a routerLink=\"/why-gnrc-mdcn\">Why Generic Medicines ?</a></li>\n                    <li><a routerLink=\"/hstry-of-gnrc-drugs\">History of generic drugs</a></li>\n                    <li><a routerLink=\"/gnrc-drugs-india\">Generic drugs in India</a></li>\n                    <li><a routerLink=\"/gnrc-drug-lnks\">Generic drugs links</a></li>\n                    <li><a routerLink=\"/lst-of-mdcns\">List of Medicines</a></li>\n                    <li><a routerLink=\"/ask-expert\">Ask the Experts</a></li>\n\n                </ul>\n            </div>\n            <h3 class=\"title mobile\">Payment Methods</h3>\n            <a class=\"\" href=\"#\"><img src=\"../../assets/img/payment-options.png\" class=\"img-responsive pull-right\" alt=\"\"></a>\n        </div>\n    </div>\n    <hr/>\n    <div class=\"row text-center\">\n        <div class=\"col-xs-12\">\n            <small class=\"copyright\">\n                <p>Copyright © 2018 Genericwala.com, Inc. All rights reserved.</p>\n                <a id=\"back-to-top\" href=\"\" class=\"btn btn-warning  back-to-top\" role=\"button\" title=\"Click to return top page\" data-toggle=\"tooltip\" data-placement=\"left\"><i _ngcontent-c1=\"\" class=\"material-icons\">arrow_upward</i></a>\n\t\t\t\t\t</small>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gnrc-drug-lnks/gnrc-drug-lnks.component.css":
/***/ (function(module, exports) {

module.exports = ".drug-lnk-lst {\r\n    list-style-type: square;\r\n}\r\n\r\n.drug-lnk-lst li {\r\n    margin: 15px;\r\n}"

/***/ }),

/***/ "./src/app/gnrc-drug-lnks/gnrc-drug-lnks.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/gnrc-drug-lnks\">Generic drug links</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <h3>Generic Drug Links</h3>\n\n            <ul class=\"drug-lnk-lst\" style=\"list-style-type:square\">\n                <li class=\"text-primary\">\n                    <a target=\"_blank\" href=\"https://ispub.com/IJTWM/8/1/10060\">Opportunities for Generic Drugs in India -P Sharma, S Kumar, R Pahwa, A Sharma </a>\n                </li>\n                <li class=\"text-primary\">\n                    <a target=\"_blank\" href=\"http://www.ibpcosaka.or.jp/network/e_abg/e_india_abg_pharmacy_report200803.pdf\">Overview of Indian Pharmaceutical Industry, Asia business generator project, by Tata Strategic Management\n                        Group\n                        <br>\n                    </a>\n                </li>\n                <li class=\"text-primary\">\n                    <a target=\"_blank\" href=\"https://ispub.com/IJTWM/8/1/10060\">Opportunities for Generic Drugs in India\n                    </a>\n                </li>\n                <li class=\"text-primary\">\n                    <a target=\"_blank\" href=\"http://www.thehindu.com/news/cities/Delhi/doctors-at-aiims-directed-to-prescribe-generic-drugs-in-opd/article6390219.ece\">Doctors at AIIMS directed to prescribe generic drugs in OPD.\n                        <br>\n                    </a>\n                </li>\n                <li class=\"text-primary\">\n                    <a target=\"_blank\" href=\"http://theconversation.com/health-check-how-do-generic-medicines-compare-with-the-big-brands-42472\">Health Check: how do generic medicines compare with the big brands?\n                        <br>\n                    </a>\n                </li>\n                <li class=\"text-primary\">\n                    <a target=\"_blank\" href=\"http://indianexpress.com/article/cities/ahmedabad/centre-plans-to-open-over-1000-generic-medicine-stores-in-june/#sthash.XGeK4yWK.dpuf\">Centre plans to open over 1,000 generic medicine stores in June\n                        <br>\n                    </a>\n                </li>\n            </ul>\n\n        </div>\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/gnrc-drug-lnks/gnrc-drug-lnks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GnrcDrugLnksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GnrcDrugLnksComponent = /** @class */ (function () {
    function GnrcDrugLnksComponent() {
    }
    GnrcDrugLnksComponent.prototype.ngOnInit = function () {
    };
    GnrcDrugLnksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gnrc-drug-lnks',
            template: __webpack_require__("./src/app/gnrc-drug-lnks/gnrc-drug-lnks.component.html"),
            styles: [__webpack_require__("./src/app/gnrc-drug-lnks/gnrc-drug-lnks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GnrcDrugLnksComponent);
    return GnrcDrugLnksComponent;
}());



/***/ }),

/***/ "./src/app/gnrc-drugs-india/gnrc-drugs-india.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gnrc-drugs-india/gnrc-drugs-india.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/Generic Drugs in India\">Generic Drugs in India</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container trmsandcndtns\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <h3>Generic Drugs in India</h3>\n\n            <h4>Definition of Drug:</h4>\n\n            <p>According to U.S. Food and Drug Administration (US FDA), any substance intended for use in the diagnosis, cure, relief, treatment or prevention of disease is called as a drug.</p>\n\n            <h4>Branded Drug and Generic Drug:</h4>\n\n            <p>The drug which is protected by patent is a branded drug and the drug which is a copy of branded drug and is equivalent in terms of safety, efficacy, dosage and use is called a generic drug. General generic drugs will cost less.\n            </p>\n            <p>Generic drugs have the same active ingredients as brand names drugs, both are approved by the Food and Drug Administration (FDA). Generics only become available after patent expires. Patent periods may last upto 20 years on drugs. The same\n                company that manufactures the brand drug may also manufacture the generic version or, a different company might manufacture. </p>\n\n            <h4>Role of Generic Drugs in India:</h4>\n\n            <p>Indian pharmaceutical industry has become an important hub in production of generic drugs from last some decades. Total global generic drugs market constituted USD 92 billion and is expected to grow at more than 11%. India is the 4th largest\n                market in terms of production and ranks 13th in terms of consumption value. Moreover, India accounts for 22% of the world market of generic drugs. </p>\n            <p>Today 95% of the country’s medical needs are served by Indian Pharmaceutical industry. Indian pharma sector exports 32%, of which 90% is generic and growth is about 20% per annum.</p>\n            <p>There are several multinational pharmaceutical companies like Pfizer, Aventis, Medley, GlaxoSmithKline etc. which have set up operations in India and are expanding their existing business.</p>\n            <p>In the third world countries, a large number of people are living below poverty line. They are not able to afford branded drugs because many a times these drugs are too much expensive. Therefore, generic drugs become the preferred alternatives.\n                Generic drugs are as effective and safe as branded drugs, so physicians must prefer generic drugs. Due to an increase in competition between domestic companies and multinational companies, the cost of generic drug gets reduced. Indian\n                pharmaceutical companies are primarily generic based; they spend time and money on generic research. Generic market has now also increased due to expiry and shortcoming of patents.</p>\n\n            <h4>References</h4>\n\n\n            <p>Jain N.K., (2006) A Text Book of Forensic Pharmacy, Vallabh Prakashan, New&nbsp;Delhi, p. 252.</p>\n            <p>Generic Drug, Available at:\n                <a class=\"text-primary\" href=\"httsp://www.en.wikipedia.org/wiki/generic_drug\"> https://www.en.wikipedia.org/wiki/generic_drug </a>, retrieved on 20th Mar 2009.</p>\n\n            <p>Indus View, Special Report: Opportunities for India in Generic Drug space, Available at:\n                <br>\n                <a class=\"text-primary\" href=\"https://www.theindusview.com/vol2Issue8/pdf/Vol2Issue8Special_report_NA.pdf\">http://www.theindusview.com/vol2Issue8/pdf/Vol2Issue8Special_report_NA.pdf </a>, retrieved on 14th Apr 2009.</p>\n            <p>Overview of Indian Pharmaceutical Industry, Asia business generator project, by Tata Strategic Management Group -\n                <br>\n                <a class=\"text-primary\" href=\"https://www.ibpcosaka.or.jp/network/e_abg/e_india_abg_pharmacy_report200803.pdf\">http://www.ibpcosaka.or.jp/network/e_abg/e_india_abg_pharmacy_report200803.pdf </a>\n            </p>\n\n\n\n        </div>\n\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/gnrc-drugs-india/gnrc-drugs-india.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GnrcDrugsIndiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GnrcDrugsIndiaComponent = /** @class */ (function () {
    function GnrcDrugsIndiaComponent() {
    }
    GnrcDrugsIndiaComponent.prototype.ngOnInit = function () {
    };
    GnrcDrugsIndiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gnrc-drugs-india',
            template: __webpack_require__("./src/app/gnrc-drugs-india/gnrc-drugs-india.component.html"),
            styles: [__webpack_require__("./src/app/gnrc-drugs-india/gnrc-drugs-india.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GnrcDrugsIndiaComponent);
    return GnrcDrugsIndiaComponent;
}());



/***/ }),

/***/ "./src/app/gnrc-services/gnrc-services.component.css":
/***/ (function(module, exports) {

module.exports = ".srvc-hvr a,\r\n.srvc-hvr a p {\r\n    color: #747d89;\r\n}\r\n\r\n.srvc-hvr:hover {\r\n    /* background-color: #828282; */\r\n    color: #ddd;\r\n    -webkit-transition: all 1s;\r\n    transition: all 1s;\r\n    cursor: pointer;\r\n}\r\n\r\n.i-rounded {\r\n    width: 90px;\r\n    height: 90px;\r\n    border-radius: 100%;\r\n    border: 1px solid #e1e7ec;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    margin-bottom: 10px;\r\n    background-color: #fff;\r\n}\r\n\r\n.i-rounded a i {\r\n    margin-top: 25px;\r\n    color: #e1e7ec;\r\n}\r\n\r\n.i-rounded a i:hover {\r\n    color: #d4d4d4;\r\n}"

/***/ }),

/***/ "./src/app/gnrc-services/gnrc-services.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- /#Services Section -->\n<section class=\"gnrc-services\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-6 text-center srvc-hvr\">\n                <div class=\"i-rounded\">\n                    <a href=\"#\">\n                        <i class=\"material-icons media-object\">local_shipping</i>\n                    </a>\n                </div>\n\n                <h4 class=\"media-heading\">Free Shipping</h4>\n                <p>On all Order Above 300 (in Hyderabad)</p>\n            </div>\n            <div class=\"col-md-3 col-sm-6 text-center srvc-hvr\">\n                <div class=\"i-rounded\">\n                    <a href=\"#\">\n                        <i class=\"material-icons media-object\">update</i>\n                    </a>\n                </div>\n                <h4 class=\"media-heading\">On Time</h4>\n                <p>We Deliver On Time</p>\n            </div>\n            <div class=\"col-md-3 col-sm-6 text-center srvc-hvr\">\n                <div class=\"i-rounded\">\n                    <a href=\"#\">\n                        <i class=\"material-icons media-object\">headset_mic</i>\n                    </a>\n                </div>\n                <h4 class=\"media-heading\">24/7 support</h4>\n                <p>Online pharmacist</p>\n            </div>\n            <div class=\"col-md-3 col-sm-6 text-center srvc-hvr\">\n                <div class=\"i-rounded\">\n                    <a href=\"#\">\n                        <i class=\"material-icons media-object\">camera</i>\n                    </a>\n                </div>\n                <h4 class=\"media-heading\">Safe Shopping</h4>\n                <p>Safe Shopping Guarantee</p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- /#Services Section Ends -->"

/***/ }),

/***/ "./src/app/gnrc-services/gnrc-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GnrcServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GnrcServicesComponent = /** @class */ (function () {
    function GnrcServicesComponent() {
    }
    GnrcServicesComponent.prototype.ngOnInit = function () {
    };
    GnrcServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gnrc-services',
            template: __webpack_require__("./src/app/gnrc-services/gnrc-services.component.html"),
            styles: [__webpack_require__("./src/app/gnrc-services/gnrc-services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GnrcServicesComponent);
    return GnrcServicesComponent;
}());



/***/ }),

/***/ "./src/app/gw-add-prescription/gw-add-prescription.component.css":
/***/ (function(module, exports) {

module.exports = ".input-group {\r\n    position: relative;\r\n    display: table;\r\n    border-collapse: separate;\r\n}\r\n.btn-file input[type=file]{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    min-width: 100%;\r\n    /* min-height: 100%;\r\n    font-size: 100px; */\r\n    text-align: right;\r\n    filter: alpha(opacity=0);\r\n    opacity: 0;\r\n    outline: none;\r\n    background: white;\r\n    cursor: inherit;\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/gw-add-prescription/gw-add-prescription.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/gw-add-prescription\">Add Prescription</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12 gw-crt-dtls\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-6\">\n                            <h4>Add Prescription</h4>\n                        </div>\n\n                        <div class=\"col-xs-6 text-right\" *ngIf=\"hidediv === true\">\n                            <button class=\"btn btn-warning btn-bk\" (click)=\"toggle(add)\">{{buttonName}}</button>\n                        </div>\n                    </div>\n\n\n                </div>\n                <div class=\"panel-body cstm-pnl-ht\" *ngIf=\"isloggeIn === false && isShowiv ===false\">\n                    <div class=\"col-md-4 col-md-offset-4\">\n                        <form [formGroup]=\"userPrescriptionForm\" (ngSubmit)=\"submit(userPrescriptionForm.value)\" enctype=\"multipart/form-data\">\n\n                            <div class=\"form-group\">\n                                <input type=\"text\" formControlName=\"Name\" class=\"form-control\" placeholder=\"Name\">\n                                <div *ngIf=\"userPrescriptionForm.controls.Name.errors &&(!userPrescriptionForm.controls.Name.pristine ||userPrescriptionForm.controls.Name.touched)\"\n                                    class=\"error-msg\">\n                                    <div [hidden]=\"!userPrescriptionForm.controls.Name.errors.required\">Name is required.</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" formControlName=\"Email\" class=\"form-control\" placeholder=\"Email\">\n                                <div *ngIf=\"userPrescriptionForm.controls.Email.errors &&(!userPrescriptionForm.controls.Email.pristine ||userPrescriptionForm.controls.Email.touched)\"\n                                    class=\"error-msg\">\n                                    <div [hidden]=\"!userPrescriptionForm.controls.Email.errors.required\">Email is required.</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" formControlName=\"PhoneNumber\" class=\"form-control\" placeholder=\"Phone Number\">\n                                <div *ngIf=\"userPrescriptionForm.controls.PhoneNumber.errors &&(!userPrescriptionForm.controls.PhoneNumber.pristine ||userPrescriptionForm.controls.PhoneNumber.touched)\"\n                                    class=\"error-msg\">\n                                    <div [hidden]=\"!userPrescriptionForm.controls.PhoneNumber.errors.required\">Phone Number is required.</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" formControlName=\"DoctorName\" class=\"form-control\" placeholder=\"Doctor Name\">\n                                <div *ngIf=\"userPrescriptionForm.controls.DoctorName.errors &&(!userPrescriptionForm.controls.DoctorName.pristine ||userPrescriptionForm.controls.DoctorName.touched)\"\n                                    class=\"error-msg\">\n                                    <div [hidden]=\"!userPrescriptionForm.controls.DoctorName.errors.required\">Doctor Name is required.</div>\n                                </div>\n                            </div>\n                            <div formArrayName=\"tabletName\" class=\"form-group\">\n                                <div class=\"text-right col-xs-12\" style=\"padding-right: 0; margin-bottom: 15px;\">\n                                    <a class=\"btn btn-success pull-right\" (click)=\"addFieldValue()\">Add Medicine</a>\n                                </div>\n\n                                <div class=\"form-group\" *ngFor=\"let item of userPrescriptionForm.get('tabletName').controls;let i = index \">\n                                    <div class=\"input-group\">\n                                        <input type=\"text\" [formControlName]=\"i\" class=\"form-control\" placeholder=\"Medicine Name\">\n                                        <span class=\"input-group-btn\">\n                                            <button class=\"btn btn-danger\" type=\"button\" (click)=\"Delete(i)\">\n                                                <span class=\"glyphicon glyphicon-trash\"></span>\n                                            </button>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <input id=\"\" type=\"text\" class=\"form-control\" name=\"email\" formControlName=\"Upload\" />\n                                    <span class=\"input-group-addon btn btn-default btn-file\">Upload\n                                        <input type=\"file\" (change)=\"fileChange($event)\" name=\"file\" formControlName=\"Upload\" />\n                                    </span>\n                                </div>\n                            </div> -->\n                            <div class=\"form-group\">\n                                    <div class=\"input-group\">\n                                        <input id=\"\" type=\"text\" class=\"form-control\" name=\"email\" formControlName=\"Upload\" value=\"{{FileName}}\">\n                                        <span class=\"input-group-addon btn btn-default btn-file\">Upload\n                                            <input type=\"file\" (change)=\"fileChange($event)\" name=\"file\" formControlName=\"Upload\" />\n                                        </span>\n                                    </div>\n                                </div>\n                        \n                            <div class=\"form-group\">\n                                <button type=\"submit\" class=\"btn btn-primary btn-sbmt\" [disabled]=\"!userPrescriptionForm.valid\">Submit</button>\n                                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!userPrescriptionForm.valid\">Next</button>\n\n                                <div *ngIf=\"message\" class=\"alert alert-success box-msg\" role=\"alert\">\n                                    <strong></strong> {{message}}\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n\n                <div *ngIf=\"isloggeIn === true && isShowiv ===true\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>Prescription Name</th>\n                                <th>Doctor Name</th>\n                                <th>Date Of Prescription</th>\n                                <th></th>\n                                <th></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let item of prescription_list\">\n                                <td>{{item.PrescriptionName}}</td>\n                                <td>{{item.DoctorName}}</td>\n                                <td>{{item.DateOfPrescription | date:'yyyy-MM-dd'}}</td>\n                                <td>{{item.fileName}}</td>\n                                <td>{{item.DateOfPrescription | date:'yyyy-MM-dd'}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/gw-add-prescription/gw-add-prescription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GwAddPrescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gw_checkout_Services_prescription_service__ = __webpack_require__("./src/app/gw-checkout/Services/prescription.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GwAddPrescriptionComponent = /** @class */ (function () {
    function GwAddPrescriptionComponent(_prescriptionService) {
        this._prescriptionService = _prescriptionService;
        this.TabletNameList = [];
        this.prescription_list = [];
        this.buttonName = 'Add Prescription';
    }
    GwAddPrescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isShowiv = false;
        this.isloggeIn = false;
        this.hidediv = false;
        var user_AccesToken = sessionStorage.getItem('userToken');
        if (user_AccesToken !== null) {
            this.buttonName = 'Add Prescription';
            this.isShowiv = true;
            this.isloggeIn = true;
            this.hidediv = true;
            this._prescriptionService.GetListOfPrescritption().subscribe(function (resp) {
                _this.prescription_list = resp;
            });
        }
        this.userPrescriptionForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            Name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            Email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            PhoneNumber: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            DoctorName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            tabletName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]([]),
            Upload: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
        });
    };
    GwAddPrescriptionComponent.prototype.addFieldValue = function () {
        this.userPrescriptionForm.get('tabletName').push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''));
    };
    GwAddPrescriptionComponent.prototype.Delete = function (index) {
        this.userPrescriptionForm.get('tabletName').removeAt(index);
    };
    GwAddPrescriptionComponent.prototype.submit = function (form, event) {
        var _this = this;
        // tslint:disable-next-line:no-debugger
        debugger;
        var user_AccesToken = sessionStorage.getItem('userToken');
        this.TabletNameList = [];
        if (form.tabletName.length > 0) {
            for (var i = 0; i < form.tabletName.length; i++) {
                var tablelist = {
                    tbtName: form.tabletName[i]
                };
                this.TabletNameList.push(tablelist);
            }
        }
        var prescription_list = {
            UserID: null,
            UserName: form.Name,
            tabletName: this.TabletNameList,
            Email: form.Email,
            PhoneNumber: form.PhoneNumber,
            DoctorName: form.DoctorName
        };
        console.log(prescription_list);
        console.log(this.fileupload);
        if (this.fileupload === undefined) {
            this._prescriptionService.AddPrescription(prescription_list).subscribe(function (resp) {
                if (resp === '200') {
                    _this.userPrescriptionForm.reset();
                    _this.message = 'Uploaded successfully';
                    setTimeout(function () {
                        this.message = '';
                    }.bind(_this), 3000);
                }
            });
        }
        else {
            this._prescriptionService.UploadPrescription(form.Name, form.DoctorName, this.fileupload).subscribe(function (resp) {
                if (resp === '200') {
                    _this.userPrescriptionForm.reset();
                    _this.message = 'Uploaded successfully';
                    setTimeout(function () {
                        this.message = '';
                    }.bind(_this), 3000);
                }
            });
        }
    };
    GwAddPrescriptionComponent.prototype.fileChange = function (event) {
        // tslint:disable-next-line:no-debugger
        debugger;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            this.FileName = file.name;
            formData.append('UploadedImage', file, file.name);
            this.fileupload = formData;
        }
    };
    GwAddPrescriptionComponent.prototype.GetListOfPrescritption = function () {
        var _this = this;
        this._prescriptionService.GetListOfPrescritption().subscribe(function (resp) {
            _this.prescription_list = resp;
        });
    };
    GwAddPrescriptionComponent.prototype.toggle = function (operation) {
        if (this.isShowiv === false) {
            this.buttonName = 'Add Prescription';
            this.isShowiv = true;
            this.hidediv = true;
            this.isloggeIn = true;
        }
        else {
            this.buttonName = 'Show List';
            this.isShowiv = false;
            this.hidediv = true;
            this.isloggeIn = false;
        }
    };
    GwAddPrescriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gw-add-prescription',
            template: __webpack_require__("./src/app/gw-add-prescription/gw-add-prescription.component.html"),
            styles: [__webpack_require__("./src/app/gw-add-prescription/gw-add-prescription.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__gw_checkout_Services_prescription_service__["a" /* PrescriptionService */]])
    ], GwAddPrescriptionComponent);
    return GwAddPrescriptionComponent;
}());



/***/ }),

/***/ "./src/app/gw-checkout/Services/cartaddress.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartaddressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable__ = __webpack_require__("./node_modules/rxjs/observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartaddressService = /** @class */ (function () {
    function CartaddressService(_httpclient) {
        this._httpclient = _httpclient;
    }
    CartaddressService.prototype.GetCartAdderss = function (user_AccesToken, userId, subtotal, userCartData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var body = JSON.stringify(userCartData);
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._httpclient.post('http://localhost:31029/api/customer/address?userId=' + userId + '&subtotal=' + subtotal, body, options)
            .map((function (res) {
            var data = res.json();
            return data;
        })).catch(this.handleError);
    };
    CartaddressService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_observable__["Observable"].throw(error);
    };
    CartaddressService.prototype.GetStates = function (user_AccesToken, countryId) {
        var CountryId = +countryId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this._httpclient.get('http://localhost:31029/api/customer/stateList?countryId=' + CountryId, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    CartaddressService.prototype.GetCities = function (user_AccesToken, statesId) {
        var Id = +statesId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this._httpclient.get('http://localhost:31029/api/customer/cityList?stateId=' + Id, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    CartaddressService.prototype.AddAddress = function (addressVm, user_AccesToken) {
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var body = JSON.stringify(addressVm);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._httpclient.post('http://localhost:31029/api/customer/addAddress?userId=' + userId, body, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    CartaddressService.prototype.EditAddress = function (addressId, user_AccesToken) {
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this._httpclient.get('http://localhost:31029/api/customer/editAddress?userId=' + userId + '&addressId=' + addressId, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    CartaddressService.prototype.DeleteAddress = function (addressId, user_AccesToken) {
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this._httpclient.get('http://localhost:31029/api/customer/deleteAddress?userId=' + userId + '&&addressId=' + addressId, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    CartaddressService.prototype.UpdateAddress = function (addressVm, user_AccesToken) {
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var body = JSON.stringify(addressVm);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._httpclient.post('http://localhost:31029/api/customer/updateAddress?userId=' + userId, body, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    CartaddressService.prototype.MakeDefaultAddress = function (addressId, user_AccesToken) {
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        // console.log('this is body' + body + 'this is token ' + { headers : headers} );
        return this._httpclient.get('http://localhost:31029/api/customer/makeDefault?userId=' + userId + '&&addressId=' + addressId, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    CartaddressService.prototype.GetAddressList = function (user_AccesToken, userId, subtotal, userCartData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var body = JSON.stringify(userCartData);
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._httpclient.post('http://localhost:31029/api/customer/Addresses?userId=' + userId + '&subtotal=' + subtotal, body, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    CartaddressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], CartaddressService);
    return CartaddressService;
}());



/***/ }),

/***/ "./src/app/gw-checkout/Services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderService = /** @class */ (function () {
    function OrderService(_httpclient) {
        this._httpclient = _httpclient;
    }
    OrderService.prototype.ApplyPromoCode = function (userCartData, promovalue) {
        var user_AccesToken = sessionStorage.getItem('userToken');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var body = JSON.stringify(userCartData);
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._httpclient.post('http://localhost:31029/api/order/applyPromo?Promo=' + promovalue, body, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    OrderService.prototype.OrderConfrim = function (FinalOrderdata) {
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var user_AccesToken = sessionStorage.getItem('userToken');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var body = JSON.stringify(FinalOrderdata);
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._httpclient.post('http://localhost:31029/api/order/confirm?userId=' + userId, body, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/gw-checkout/Services/prescription.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrescriptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrescriptionService = /** @class */ (function () {
    function PrescriptionService(_httpclient) {
        this._httpclient = _httpclient;
    }
    PrescriptionService.prototype.AddPrescription = function (prescription) {
        var userId = 0;
        if ((JSON.parse(sessionStorage.getItem('customerdata')) !== null)) {
            userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        }
        var body = JSON.stringify(prescription);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        console.log('this is body' + body + 'this is token ' + { headers: headers });
        return this._httpclient.post('http://localhost:31029/api/prescription/addmedicines?userId=' + userId, body, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    PrescriptionService.prototype.UploadPrescription = function (Name, DoctorName, formdata) {
        var userId = 0;
        if ((JSON.parse(sessionStorage.getItem('customerdata')) !== null)) {
            userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this._httpclient.post('http://localhost:31029/api/prescription/file?userId=' + userId +
            '&name=' + Name + '&docName=' + DoctorName, formdata, options)
            .map(function (res) { return res.json(); });
    };
    PrescriptionService.prototype.GetListOfPrescritption = function () {
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var user_AccesToken = sessionStorage.getItem('userToken');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this._httpclient.get('http://localhost:31029/api/prescription/Prescriptions?userId=' + userId, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    PrescriptionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PrescriptionService);
    return PrescriptionService;
}());



/***/ }),

/***/ "./src/app/gw-checkout/gw-checkout.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-tabs {\r\n    border-bottom: none;\r\n}\r\n\r\n.nav-tabs>li.active>a,\r\n.nav-tabs>li.active>a:focus,\r\n.nav-tabs>li.active>a:hover {\r\n    color: #0e76bc;\r\n    cursor: default;\r\n    /* background-color: rgb(0, 170, 255);\r\n    border: 1px solid rgb(0, 170, 255); */\r\n    border: none;\r\n    border-bottom: 2px solid #0e76bc;\r\n    border-radius: 0;\r\n}\r\n\r\n.nav .active,\r\n.nav-tabs {\r\n    border-bottom: none !important;\r\n}\r\n\r\n.nav-tabs>li>a {\r\n    border-radius: 0;\r\n    border: none\r\n}\r\n\r\n.panel-default {\r\n    border-color: #ddd;\r\n    -webkit-box-shadow: 2px 2px 2px 0px #ddd;\r\n            box-shadow: 2px 2px 2px 0px #ddd;\r\n    border: 1px solid #ddd;\r\n    background-color: #fff;\r\n    border-radius: 0;\r\n}\r\n\r\n.btn-bk {\r\n    background-color: #ec8558;\r\n    border-color: #ec8558;\r\n}\r\n\r\n.btn-file {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.btn-file input[type=file] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    min-width: 100%;\r\n    /* min-height: 100%;\r\n    font-size: 100px; */\r\n    text-align: right;\r\n    filter: alpha(opacity=0);\r\n    opacity: 0;\r\n    outline: none;\r\n    background: white;\r\n    cursor: inherit;\r\n    display: block;\r\n}\r\n\r\ninput[type=checkbox],\r\ninput[type=radio] {\r\n    margin: 4px 5px 0;\r\n    margin-top: 1px\\9;\r\n    line-height: normal;\r\n}\r\n\r\n.add-addrs i,\r\n.dlt-addrs i {\r\n    color: #ddd;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n}\r\n\r\n.add-addrs i:hover,\r\n.dlt-addrs i:hover {\r\n    color: #ec8558;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n}\r\n\r\n.radio {\r\n    position: relative;\r\n    padding-left: 30px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.btn-sbmt,\r\n.btn-success {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/* Hide the browser's default radio button */\r\n\r\n.radio input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Create a custom radio button */\r\n\r\n.checkround {\r\n    position: absolute;\r\n    top: 6px;\r\n    left: 0;\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: #fff;\r\n    border-color: #00aaff;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* When the radio button is checked, add a blue background */\r\n\r\n.radio input:checked~.checkround {\r\n    background-color: #fff;\r\n}\r\n\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n\r\n.checkround:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n/* Show the indicator (dot/circle) when checked */\r\n\r\n.radio input:checked~.checkround:after {\r\n    display: block;\r\n}\r\n\r\n/* Style the indicator (dot/circle) */\r\n\r\n.radio .checkround:after {\r\n    left: 3px;\r\n    top: 3px;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    background: #00aaff;\r\n}\r\n\r\n@media (max-width:767px) and (min-width:320px) {\r\n    .cstm-tab>li>a {\r\n        padding: 10px 2px;\r\n    }\r\n    .mrgn-top-xs {\r\n        margin-top: 10px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/gw-checkout/gw-checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Cart/Cart\">Cart</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/Checkout\">Check Out</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <ul class=\"nav nav-tabs cstm-tab\">\n                        <!-- <li [class.active]=\"selectedtabIndex === i\">\n                            <a data-toggle=\"tab\" href=\"#ShippingAddress\">Shipping Address</a>\n                        </li>\n                        <li [class.active]=\"selectedtabIndex === i\">\n                            <a data-toggle=\"tab\" href=\"#Prescription\">Prescription</a>\n                        </li>\n                        <li [class.active]=\"selectedtabIndex === i\">\n                            <a data-toggle=\"tab\" href=\"#OrderSummary\">Order Summary</a>\n                        </li>\n                        <li [class.active]=\"selectedtabIndex === i\">\n                            <a data-toggle=\"tab\" href=\"#PaymentOptions\"> Payment Options</a>\n                        </li> -->\n                        <li *ngFor=\"let menu of tabs;let i = index\" [class.active]=\"selectedtabIndex === i\" (click)=\" setTab(i)\">\n                            <a data-toggle=\"tab\" href=\"#{{menu}}\">{{menu}}</a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"panel-body\">\n\n                    <div class=\"tab-content\">\n                        <div id=\"ShippingAddress\" class=\"tab-pane col-md-12\" [class.active]=\"selectedtabIndex === 0\">\n                            <h3 class=\"text-center\">Address Info</h3>\n                            <div class=\"row\">\n                                <div class=\"col-md-12 text-right\">\n                                    <button class=\"btn btn-primary btn-sbmt\" (click)=\"toggle(add)\">{{buttonName}}</button>\n                                    <a type=\"submit\" class=\"btn btn-success\" data-toggle=\"tab\" href=\"#Prescription\" (click)=\"Next(1)\">Next </a>\n                                </div>\n                                <div class=\"col-md-12\" *ngIf=\"UserAddress.ListAddressVm.count !== 0  && IsHidden === true\">\n                                    <div class=\"col-md-6\" *ngFor=\"let address of  UserAddress.ListAddressVm\">\n                                        <div class=\"panel panel-default\">\n                                            <div class=\"panel-body\">\n                                                <span *ngIf=\"address.isDefault === true\">\n                                                    <input type=\"checkbox\" value=\"{{address.AddressId}}\" name=\"chk_Checked\" checked=\"checked\" (change)=\"updateCheckedOptions(chk_Checked, $event)\"\n                                                    />\n                                                </span>\n                                                <span *ngIf=\"address.isDefault === false\">\n                                                    <input type=\"checkbox\" value=\"{{address.AddressId}}\" name=\"chk_Checked\" (change)=\"updateCheckedOptions(chk_Checked, $event)\"\n                                                    />\n                                                </span>\n                                                <div class=\"text-right\">\n                                                    <a class=\"add-addrs\" (click)=\"EditAddress(address.AddressId)\">\n                                                        <i class=\"material-icons\">create</i>\n                                                    </a>\n                                                    <a class=\"dlt-addrs\" (click)=\"DeleteAddress(address.AddressId,address.isDefault)\">\n                                                        <i class=\"material-icons\">delete</i>\n                                                    </a>\n                                                </div>\n\n                                                <address>\n                                                    <h5> {{address.title}}</h5>\n                                                    {{address.address1}},\n                                                    <br /> {{address.address2}}, {{address.city}}\n                                                    <br /> {{address.country}}, {{address.stateName}}\n                                                    <br /> pincode:{{address.zipcode}}\n                                                </address>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <form class=\"col-md-4 col-md-offset-4\" #AddressForm=\"ngForm\" (ngSubmit)=\"submitForm(AddressForm)\" *ngIf=\"UserAddress.ListAddressVm.count === 0 || IsHidden === false\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"Home, Ofc etc\" #title=\"ngModel\" [(ngModel)]=\"addressvm.title\" pattern=\"[a-zA-Z][a-zA-Z ]+\" required>\n\n                                    <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!title.hasError('required')\">Name is required</div>\n                                        <div [hidden]=\"!title.hasError('pattern')\">Only alphabetsallowed</div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"address1\" name=\"address1\" placeholder=\"Address1\" #address1=\"ngModel\" [(ngModel)]=\"addressvm.address1\" required>\n\n                                    <div [hidden]=\"address1.valid || address1.pristine\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!address1.hasError('required')\">address1 is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"address2\" name=\"address2\" placeholder=\"Address2\" #address2=\"ngModel\" [(ngModel)]=\"addressvm.address2\" required>\n\n                                    <div [hidden]=\"address2.valid || address2.pristine\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!address2.hasError('required')\">address2 is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <select type=\"country\" class=\"form-control\" id=\"country\" (change)=\"onCountryChange($event.target.value)\" name=\"country\" placeholder=\"Select Country\" #country=\"ngModel\" [(ngModel)]=\"addressvm.country\" required>\n                                        <option value=\"-1\" selected=\"selected\" disabled=\"disabled\">Select state</option>\n                                        <option value=\"1\">India</option>\n                                    </select>\n                                    <div [hidden]=\"country.valid || country.pristine\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"country.hasError('required')\">country is required</div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"EditAddAddress === false\">\n                                    <div class=\"form-group\">\n                                        <select type=\"state\" class=\"form-control\" id=\"stateId\" (change)=\"onstateChange($event.target.value)\" name=\"stateId\" placeholder=\"Select state\" #state=\"ngModel\" [(ngModel)]=\"addressvm.stateId\" required>\n                                            <option *ngFor=\"let opt of statesList\" [value]=\"opt.state_id\" [selected]=\"opt.state1 === addressvm.stateId\">{{opt.state1}}</option>\n                                        </select>\n\n                                        <div [hidden]=\"state.valid || state.pristine\" class=\"alert alert-danger\">\n                                            <div [hidden]=\"!state.hasError('required')\">state is required</div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                        <select type=\"city\" class=\"form-control\" id=\"city\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"addressvm.city\" placeholder=\"Select City\" required>\n                                            <option *ngFor=\"let opt of citiesList \" [value]=\"opt.city_id\">{{opt.city}}</option>\n                                        </select>\n                                        <div [hidden]=\"city.valid || city.pristine\" class=\"alert alert-danger\">\n                                            <div [hidden]=\"!city.hasError('required')\">city is required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"EditAddAddress === true\">\n                                    <div class=\"form-group\">\n                                        <select type=\"stateId\" class=\"form-control\" id=\"stateId\" (change)=\"onstateChange1($event.target.value)\" name=\"stateId\" placeholder=\"Select state\" #state=\"ngModel\" [(ngModel)]=\"addressvm.stateId\" required>\n                                            <option *ngFor=\"let opt of addressvm.statesList\" [value]=\"opt.state_id\" [selected]=\"opt.state1 === addressvm.stateId\">{{opt.state1}}</option>\n                                        </select>\n\n                                        <div [hidden]=\"state.valid || state.pristine\" class=\"alert alert-danger\">\n                                            <div [hidden]=\"!state.hasError('required')\">state is required</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <select type=\"city\" class=\"form-control\" id=\"city\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"addressvm.city\" placeholder=\"Select City\" required>\n                                            <option *ngFor=\"let opt of addressvm.citiesList \" [value]=\"opt.city_id\" [selected]=\"opt.city_id === addressvm.city\">{{opt.city}}</option>\n                                        </select>\n                                        <div [hidden]=\"city.valid || city.pristine\" class=\"alert alert-danger\">\n                                            <div [hidden]=\"!city.hasError('required')\">city is required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n\n                                    <input type=\"text\" class=\"form-control\" id=\"zipcode\" name=\"zipcode\" placeholder=\"Pincode\" #zipcode=\"ngModel\" [(ngModel)]=\"addressvm.zipcode\" required maxlength=\"6\" minlength=\"6\">\n\n                                    <div [hidden]=\"zipcode.valid || zipcode.pristine\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!zipcode.hasError('maxlength')\">zipcode should be 6 digit</div>\n                                        <div [hidden]=\"!zipcode.hasError('minlength')\">zipcode should be 6 digit</div>\n                                    </div>\n\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" id=\"Mobile\" name=\"Mobile\" placeholder=\"Mobile Number\" #Mobile=\"ngModel\" [(ngModel)]=\"addressvm.Mobile\" pattern=\"[0-9]*\" required maxlength=\"10\" minlength=\"10\">\n                                    <div [hidden]=\"Mobile.valid || Mobile.pristine\" class=\"alert alert-danger\">\n                                        <div [hidden]=\"!Mobile.hasError('minlength')\">Mobile should be 10digit</div>\n                                        <div [hidden]=\"!Mobile.hasError('required')\">Mobile is required</div>\n                                        <div [hidden]=\"!Mobile.hasError('pattern')\">Mobile numberr should be only numbers</div>\n                                    </div>\n\n                                </div>\n                                <div class=\"form-group\">\n                                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!AddressForm.form.valid\" (onclick)=\"LoginMe()\">Submit</button>\n                                    <button type=\"button\" class=\"btn btn-primary btn-sbmt\" (click)=\"Cancel()\">Cancel</button>\n                                </div>\n                            </form>\n\n\n                        </div>\n                        <div id=\"Prescription\" class=\"tab-pane col-md-4 col-md-offset-4\" [class.active]=\"selectedtabIndex === 1\">\n                            <h3 class=\"text-center\">Add Prescription</h3>\n                            <form [formGroup]=\"userPrescriptionForm\" (ngSubmit)=\"submit(userPrescriptionForm.value)\" enctype=\"multipart/form-data\">\n\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"Name\" class=\"form-control\" placeholder=\"Name\">\n                                    <div *ngIf=\"userPrescriptionForm.controls.Name.errors &&(!userPrescriptionForm.controls.Name.pristine ||userPrescriptionForm.controls.Name.touched)\" class=\"error-msg\">\n                                        <div [hidden]=\"!userPrescriptionForm.controls.Name.errors.required\">Name is required.</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"Email\" class=\"form-control\" placeholder=\"Email\">\n                                    <div *ngIf=\"userPrescriptionForm.controls.Email.errors &&(!userPrescriptionForm.controls.Email.pristine ||userPrescriptionForm.controls.Email.touched)\" class=\"error-msg\">\n                                        <div [hidden]=\"!userPrescriptionForm.controls.Email.errors.required\">Email is required.</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"PhoneNumber\" class=\"form-control\" placeholder=\"Phone Number\">\n                                    <div *ngIf=\"userPrescriptionForm.controls.PhoneNumber.errors &&(!userPrescriptionForm.controls.PhoneNumber.pristine ||userPrescriptionForm.controls.PhoneNumber.touched)\" class=\"error-msg\">\n                                        <div [hidden]=\"!userPrescriptionForm.controls.PhoneNumber.errors.required\">Phone Number is required.</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"DoctorName\" class=\"form-control\" placeholder=\"Doctor Name\">\n                                    <div *ngIf=\"userPrescriptionForm.controls.DoctorName.errors &&(!userPrescriptionForm.controls.DoctorName.pristine ||userPrescriptionForm.controls.DoctorName.touched)\" class=\"error-msg\">\n                                        <div [hidden]=\"!userPrescriptionForm.controls.DoctorName.errors.required\">Doctor Name is required.</div>\n                                    </div>\n                                </div>\n                                <div formArrayName=\"tabletName\" class=\"form-group\">\n                                    <div class=\"text-right col-xs-12\" style=\"padding-right: 0; margin-bottom: 15px;\">\n                                        <a class=\"btn btn-success pull-right\" (click)=\"addFieldValue()\">Add Medicine</a>\n                                    </div>\n\n                                    <div class=\"form-group\" *ngFor=\"let item of userPrescriptionForm.get('tabletName').controls;let i = index \">\n                                        <div class=\"input-group\">\n                                            <input type=\"text\" [formControlName]=\"i\" class=\"form-control\" placeholder=\"Medicine Name\">\n                                            <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-danger\" type=\"button\" (click)=\"Delete(i)\">\n                                                    <span class=\"glyphicon glyphicon-trash\"></span>\n                                            </button>\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"input-group\">\n                                        <input id=\"\" type=\"text\" class=\"form-control\" name=\"email\" formControlName=\"Upload\" value=\"{{FileName}}\">\n                                        <span class=\"input-group-addon btn btn-default btn-file\">Upload\n                                            <input type=\"file\" (change)=\"fileChange($event)\" name=\"file\" formControlName=\"Upload\" />\n                                        </span>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <a type=\"submit\" class=\"btn btn-primary btn-sbmt\" data-toggle=\"tab\" href=\"#ShippingAddress\" (click)=\"Prev(0)\"> Previous</a>\n                                    <button type=\"submit\" class=\"btn btn-primary btn-sbmt\" [disabled]=\"!userPrescriptionForm.valid\">Submit</button>\n                                    <a type=\"submit\" class=\"btn btn-success\" data-toggle=\"tab\" href=\"#OrderSummary\" (click)=\"Next(2)\">Next </a>\n                                    <div *ngIf=\"message\" class=\"alert alert-success box-msg\" role=\"alert\">\n                                        <strong></strong> {{message}}\n                                    </div>\n                                </div>\n                            </form>\n\n                        </div>\n                        <div id=\"OrderSummary\" class=\"tab-pane col-md-12\" [class.active]=\"selectedtabIndex === 2\">\n                            <h3 class=\"text-center\">Products in your Order</h3>\n                            <table class=\"table table-bordered table-condensed\">\n                                <thead class=\"text-center\">\n                                    <tr>\n                                        <th>Product Name</th>\n                                        <th>MRP</th>\n                                        <th>Discopunt</th>\n                                        <th>Price</th>\n                                        <th>Quantity </th>\n                                        <th>Sub Total</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n\n                                    <tr *ngFor=\"let item of cartList\">\n                                        <td>{{item.ItemName}}</td>\n                                        <td>{{item.Price}}</td>\n                                        <td>{{(item.Price-item.OriginalPrice) | number:'1.2-2'}}</td>\n                                        <td> {{item.OriginalPrice | number:'1.2-2'}}</td>\n                                        <td>{{item.quantity}} </td>\n                                        <td>{{item.quantity * item.OriginalPrice | number:'1.2-2'}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <p class=\"text-danger\">\n                                <a class=\"\" data-toggle=\"tab\" href=\"#Prescription\">Upload Prescription for this item mandatory*</a>\n                            </p>\n                            <div class=\"pull-right\">\n                                <button type=\"button\" class=\"btn btn-primary btn-sbmt\" (click)=\"GoCart()\">Change Order Items</button>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-primary btn-sbmt\" data-toggle=\"tab\" href=\"#Prescription\" (click)=\"Prev(1)\"> Previous</button>\n                            <a type=\"submit\" class=\"btn btn-success\" data-toggle=\"tab\" href=\"#PaymentOptions\" (click)=\"Next(3)\">Next </a>\n\n\n                        </div>\n                        <div id=\"PaymentOptions\" class=\"tab-pane col-md-12\" [class.active]=\"selectedtabIndex === 3\">\n                            <h3 class=\"text-center\">Payment Options</h3>\n                            <div class=\"col-md-6 col-md-offset-3 pad-top\">\n                                <form class=\"form-horizontal\" action=\"\" method=\"\">\n\n                                    <div class=\"form-group\">\n                                        <label class=\"col-md-4\" style=\"padding-top: 6px;\">Promotional Coupon</label>\n                                        <div class=\"col-md-5\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Promotional Code\" name=\"PromoValue\" [(ngModel)]=\"PromoValue\">\n                                            <span class=\"alert-danger\">{{promoMessage}}</span>\n                                        </div>\n\n                                        <button *ngIf=\"PromoValue===''||PromoValue===null\" type=\"button\" class=\"btn btn-success col-md-2 mrgn-top-xs\" (click)='ApplyPromo(paymentType,PromoValue)'>Apply</button>\n                                    </div>\n\n\n                                    <div class=\"form-group\" *ngFor=\"let promos of activePromos.activePromosVM\">\n\n                                        <label class=\"radio\">\n                                            <input type=\"radio\" value=\"{{promos.promo_Code}}\" id=\"rbPromo\" [(ngModel)]=\"PromoChecked\" name=\"Promos\" class=\"Promos\" (click)=\"ApplyPromoCode(paymentType,$event,promos.promo_Code)\">{{promos.promo_Code}}\n                                            <span class=\"checkround\"></span>\n                                        </label>\n\n                                        <p>\n                                            {{promoMessage}}\n                                        </p>\n\n                                        <span class=\"label label-danger\">Terms & Conditions</span>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label class=\"checkbox-inline radio\">\n                                            <input type=\"radio\" id=\"rbOnline\" name=\"delivery\" class=\"raddelvr\" checked=\"checked\" value=\"ONLINE\" (click)=\"PaymentType($event)\">Online Banking\n                                            <span class=\"checkround\"></span>\n                                        </label>\n\n                                        <label class=\"checkbox-inline radio\">\n                                            <input type=\"radio\" id=\"rbCOD\" name=\"delivery\" class=\"raddelvr\" value=\"COD\" (click)=\"PaymentType($event)\">Cash on delivery\n                                            <span class=\"checkround\"></span>\n                                        </label>\n                                    </div>\n                                    <div *ngIf=\"show_PaymentDiv === true\">\n                                        <div class=\"form-group\">\n                                            <label class=\"checkbox-inline radio\">\n                                                <input type=\"radio\" value=\"RAZORPAY\" id=\"rbzPay\" class=\"radPaytm\" name=\"onlinepayment\" checked=\"checked\" (click)=\"SubPaymentType($event)\">Razarpay\n                                                <span class=\"checkround\"></span>\n                                            </label>\n                                            <label class=\"checkbox-inline radio\">\n                                                <input type=\"radio\" value=\"PAYTM\" id=\"rbPaytm\" name=\"onlinepayment\" class=\"radPaytm\" (click)=\"SubPaymentType($event)\">Paytm\n                                                <span class=\"checkround\"></span>\n                                            </label>\n                                        </div>\n                                    </div>\n                                    <table class=\"table table-bordered\">\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    Subtotal:\n                                                </td>\n                                                <td>{{cart_TotalAmount | number:'1.2-2'}}</td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    Promo Discount:\n                                                </td>\n                                                <td>{{promoDiscount | number:'1.2-2'}}</td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    Shipping Cost:\n                                                    <p>(Upto 500g)</p>\n                                                </td>\n                                                <td>{{shipCost}}</td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    COD Charges:\n                                                </td>\n                                                <td>{{codeCharge}}</td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    Total\n                                                </td>\n                                                <td>{{Total | number:'1.2-2'}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                    <div class=\"form-group\">\n                                        <label class=\"checkbox-inline radio\">\n                                            <input type=\"radio\" name=\"chk_Confirm\" [checked]=\"confirmchecked\" (change)=\"ConfirmCheckedOptions(isPrescriptionRequired, $event)\">I Agree To Terms And Conditions\n                                            <span class=\"checkround\"></span>\n                                        </label>\n                                    </div>\n                                    \n                                    <div class=\"form-group text-center\" *ngIf=\"isPrescriptionRequired === true\">\n                                        <button [disabled]=\"isPrescriptionRequired\" class=\"btn btn-success\" (click)=\"OrderConfirm(shipCost,codeCharge,paymentType,promoDiscount,subPaymentType,PromoValue)\">Confirm</button>\n                                    </div>\n<!-- \n                                    <div class=\"form-group text-center\" *ngIf=\"UserAddress.ListAddressVm.count==0 || UserAddress.ListAddressVm.count==0>\n                                        <button [disabled]=\"isPrescriptionRequired\" class=\"btn btn-success\" (click)=\"OrderConfirm(shipCost,codeCharge,paymentType,promoDiscount,subPaymentType,PromoValue)\">Confirm</button>\n                                    </div> -->\n                                    <div class=\"form-group text-center\" *ngIf=\"isPrescriptionRequired === false\">\n                                        <button [disabled]=\"!confirmchecked\" class=\"btn btn-success\" (click)=\"OrderConfirm(shipCost,codeCharge,paymentType,promoDiscount,subPaymentType,PromoValue)\">Confirm</button>\n                                        <a type=\"submit\" class=\"btn btn-primary btn-sbmt\" data-toggle=\"tab\" href=\"#OrderSummary\" (click)=\"Prev(2)\"> Previous</a>\n                                    </div>\n                                    <div class=\"alert alert-danger alert-dismissible fade in\" *ngIf=\"uploadPrescription === false && isAlertboxshow === true\">\n                                        <strong>{{uploadPrescriptionMessage}}</strong>\n                                    </div>\n                                </form>\n\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/gw-checkout/gw-checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GwCheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_Services_user_service__ = __webpack_require__("./src/app/login/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_cartaddress_service__ = __webpack_require__("./src/app/gw-checkout/Services/cartaddress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_prescription_service__ = __webpack_require__("./src/app/gw-checkout/Services/prescription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Services_order_service__ = __webpack_require__("./src/app/gw-checkout/Services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__razorpay_service_window__ = __webpack_require__("./src/app/razorpay/service/window.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { ReactiveFormsModule } from '@angular/forms';




var GwCheckoutComponent = /** @class */ (function () {
    function GwCheckoutComponent(userService, _navbar, cartAddressService, _prescriptionService, _orderService, http, router, _window, _navabar) {
        this.userService = userService;
        this._navbar = _navbar;
        this.cartAddressService = cartAddressService;
        this._prescriptionService = _prescriptionService;
        this._orderService = _orderService;
        this.http = http;
        this.router = router;
        this._window = _window;
        this._navabar = _navabar;
        this.TabletNameList = [];
        this.paymentType = 'ONLINE';
        this.show_PaymentDiv = true;
        this.subPaymentType = 'RAZORPAY';
        this.confirmchecked = false;
        this.promoDiscount = 0;
        this.cart_TotalAmount = 0;
        this.cart_DiscountAmunt = 0;
        this.cart_ActualAmount = 0;
        this.cartList = [];
        this.usercartdata = [];
        this.userwhishlistdata = [];
        this.IsHidden = true;
        this.isAlertboxshow = true;
        this.citiesList = [];
        this.onlinePayment = true;
        this.addressvm = {
            AddressId: 0,
            title: '',
            address1: '',
            address2: '',
            country: '',
            stateId: '',
            stateName: '',
            city: '',
            CityId: '',
            zipcode: '',
            Mobile: '',
            longitude: 0,
            latitude: 0,
            isDefault: false,
            createdOn: Date.UTC.toString(),
            modifiedOn: Date.UTC.toString(),
            countriesList: [],
            statesList: null,
            citiesList: null,
        };
        this.buttonName = 'Add Address';
        this.user_AccesToken = sessionStorage.getItem('userToken');
        this.tabs = [];
        this.selectedtabIndex = 0;
        this.selectedtabvalues = 'ShippingAddress';
        // dynamically adding tab
        this.tabs = ['ShippingAddress', 'Prescription', 'OrderSummary', 'PaymentOptions'];
        //   this.tabs = [ {
        //     'tabId': 1,
        //     'item': 'ShippingAddress',
        //     'link': ['/ShippingAddress']
        //   },
        //   {
        //     'tabId': 2,
        //     'item': 'Prescription',
        //     'link': ['/Prescription']
        //   },
        //   {
        //     'tabId': 3,
        //     'item': 'OrderSummary',
        //     'link': ['/OrderSummary']
        //   },
        //   {
        //     'tabId': 4,
        //     'item': 'PaymentOptions',
        //     'link': ['/PaymentOptions']
        //   }
        // ];
    }
    GwCheckoutComponent.prototype.ngOnInit = function () {
        var user_AccesToken = sessionStorage.getItem('userToken');
        if (user_AccesToken != null) {
            this.PostCartData();
            this.LoadCartItem();
            this.CartAddress();
            this.promoDiscount = 0;
            this.userPrescriptionForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormGroup */]({
                Name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
                Email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
                PhoneNumber: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
                DoctorName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]),
                tabletName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormArray */]([]),
                Upload: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](''),
            });
            this.titleAlert = 'this field is required';
            this.confirmchecked = false;
        }
        else {
            this.router.navigate(['/Login/Login']);
        }
    };
    GwCheckoutComponent.prototype.LoadCartItem = function () {
        var cartobj = JSON.parse(sessionStorage.getItem('userCartITem'));
        for (var i = 0; i < cartobj.length; i++) {
            var item = cartobj[i];
            this.cart_ActualAmount += (item.Price * item.quantity);
            this.cart_DiscountAmunt += (item.Price - item.OriginalPrice);
            this.cart_TotalAmount += (item.OriginalPrice * item.quantity);
            this.cartList.push(item);
        }
        this.subtotal = this.cart_TotalAmount;
        return cartobj;
    };
    GwCheckoutComponent.prototype.PostCartData = function () {
        var _this = this;
        var user_AccesToken = sessionStorage.getItem('userToken');
        if (user_AccesToken != null) {
            var userId_1 = JSON.parse(sessionStorage.getItem('customerdata')).userId;
            var userCartITem = JSON.parse(sessionStorage.getItem('userCartITem'));
            var userWhishList = JSON.parse(sessionStorage.getItem('userWhishList'));
            this.userdata = {
                userCartList: [],
                userWishlist: [],
                customerdata: null
            };
            this.usercartdata = [];
            this.userwhishlistdata = [];
            if (userCartITem !== null) {
                for (var i = 0; i < userCartITem.length; i++) {
                    var item = userCartITem[i];
                    this.usercartdata.push(item);
                }
            }
            else {
                this.usercartdata = [];
            }
            if (userWhishList !== null) {
                for (var i = 0; i < userWhishList.length; i++) {
                    var item = userWhishList[i];
                    this.userwhishlistdata.push(item);
                }
            }
            else {
                this.userwhishlistdata = [];
            }
            this.userdata = {
                userCartList: this.usercartdata,
                userWishlist: this.userwhishlistdata,
                customerdata: null
            };
            this.userService.UserCartData(this.userdata, user_AccesToken, userId_1).toPromise().then(function (resp) {
                if (resp === '200') {
                    _this.userService.GetUserCartData(user_AccesToken, userId_1).subscribe(function (respe) {
                        _this.userdata = respe;
                        sessionStorage.setItem('userCartITem', JSON.stringify(_this.userdata.userCartList));
                        sessionStorage.setItem('userWhishList', JSON.stringify(_this.userdata.userWishlist));
                        _this._navbar.name = _this.userdata.customerdata.firstname;
                        _this._navbar.change();
                    });
                }
            });
            //  }
        }
    };
    GwCheckoutComponent.prototype.CartAddress = function () {
        var _this = this;
        var user_AccesToken = sessionStorage.getItem('userToken');
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        this.cartItems();
        this.cartAddressService.GetCartAdderss(user_AccesToken, userId, this.subtotal, this.cartItems()).toPromise().then(function (resp) {
            // tslint:disable-next-line:no-debugger
            debugger;
            _this.UserAddress = resp;
            console.log(_this.UserAddress);
            _this.UserAddress.shippingCharge = resp.ShippingCharge;
            _this.activePromos = resp.ActivePromos;
            _this.PromoChecked = false;
            if (_this.UserAddress.ListAddressVm.length > 0) {
                _this.IsshippingAddressAvailable = true;
                _this.IsHidden = true;
                for (var i = 0; i < _this.UserAddress.ListAddressVm.length; i++) {
                    if (_this.UserAddress.ListAddressVm[i].isDefault === true) {
                        _this.defaultAddress = _this.UserAddress.ListAddressVm[i];
                        _this.CalculateShippingCharge(_this.UserAddress.shippingCharge, _this.defaultAddress, _this.paymentType);
                        _this.isPrescriptionRequired = _this.UserAddress.isPrescriptionRequired;
                    }
                }
            }
            else {
                _this.IsHidden = false;
                _this.EditAddAddress = false;
                _this.IsshippingAddressAvailable = false;
            }
        }, function (error) {
            alert('Session Expired');
            _this.router.navigate(['/login']);
        });
    };
    GwCheckoutComponent.prototype.AddAddress = function () {
        this.IsHidden = false;
        return this.IsHidden;
    };
    GwCheckoutComponent.prototype.toggle = function (operation) {
        this.IsHidden = !this.IsHidden;
        if (this.IsHidden) {
            this.buttonName = 'Add Address';
        }
        else {
            if (operation === 'edit') {
                this.EditAddAddress = true;
                this.addressvm = this.addressvm;
                this.buttonName = 'Add Address';
            }
            else {
                this.addressvm = this.RestInputFields();
                this.EditAddAddress = false;
            }
        }
    };
    GwCheckoutComponent.prototype.onCountryChange = function (countryId) {
        var _this = this;
        if (countryId === '0') {
            this.statesList = null;
            this.citiesList = null;
        }
        else {
            this.cartAddressService.GetStates(this.user_AccesToken, countryId).subscribe(function (res) {
                _this.statesList = res;
            });
        }
    };
    GwCheckoutComponent.prototype.onstateChange = function (stateId) {
        var _this = this;
        if (stateId === '0') {
            this.citiesList = null;
        }
        else {
            this.cartAddressService.GetCities(this.user_AccesToken, stateId).subscribe(function (res) {
                _this.citiesList = res;
            });
        }
    };
    GwCheckoutComponent.prototype.onstateChange1 = function (stateId) {
        var _this = this;
        if (stateId === '0') {
            this.citiesList = null;
        }
        else {
            this.cartAddressService.GetCities(this.user_AccesToken, stateId).subscribe(function (res) {
                _this.addressvm.citiesList = res;
            });
        }
    };
    GwCheckoutComponent.prototype.submitForm = function (form) {
        var _this = this;
        if (this.addressvm.AddressId !== null && this.addressvm.AddressId !== 0) {
            this.cartAddressService.UpdateAddress(this.addressvm, this.user_AccesToken).subscribe(function (resp) {
                if (resp === '204') {
                    _this.CartAddress();
                    _this.RestInputFields();
                }
            });
        }
        else {
            this.cartAddressService.AddAddress(this.addressvm, this.user_AccesToken).subscribe(function (resp) {
                if (resp === '200') {
                    _this.CartAddress();
                }
            });
        }
    };
    GwCheckoutComponent.prototype.EditAddress = function (addressId) {
        var _this = this;
        var addId = +addressId;
        this.cartAddressService.EditAddress(addId, this.user_AccesToken).subscribe(function (resp) {
            _this.addressvm = resp;
            _this.toggle('edit');
        });
    };
    GwCheckoutComponent.prototype.DeleteAddress = function (addressId, isDefault) {
        var _this = this;
        var addId = +addressId;
        if (isDefault === false) {
            this.cartAddressService.DeleteAddress(addId, this.user_AccesToken).subscribe(function (resp) {
                if (resp === '204') {
                    _this.CartAddress();
                }
            });
        }
        else {
            alert('you can`t delete the default');
        }
    };
    GwCheckoutComponent.prototype.updateCheckedOptions = function (option, event) {
        var _this = this;
        var chk_Id = +event.target.value;
        this.cartAddressService.MakeDefaultAddress(chk_Id, this.user_AccesToken).subscribe(function (resp) {
            if (resp === '201') {
                _this.CartAddress();
            }
        });
    };
    // upload prescription data
    GwCheckoutComponent.prototype.addFieldValue = function () {
        this.userPrescriptionForm.get('tabletName').push(new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](''));
    };
    GwCheckoutComponent.prototype.Delete = function (index) {
        this.userPrescriptionForm.get('tabletName').removeAt(index);
    };
    GwCheckoutComponent.prototype.submit = function (form, event) {
        var _this = this;
        var user_AccesToken = sessionStorage.getItem('userToken');
        this.TabletNameList = [];
        if (form.tabletName.length > 0) {
            for (var i = 0; i < form.tabletName.length; i++) {
                var tablelist = {
                    tbtName: form.tabletName[i]
                };
                this.TabletNameList.push(tablelist);
            }
        }
        var prescription_list = {
            UserID: null,
            UserName: form.Name,
            tabletName: this.TabletNameList,
            Email: form.Email,
            PhoneNumber: form.PhoneNumber,
            DoctorName: form.DoctorName
        };
        if (this.fileupload === undefined) {
            this._prescriptionService.AddPrescription(prescription_list).subscribe(function (resp) {
                if (resp === '200') {
                    _this.userPrescriptionForm.reset();
                    _this.message = 'Uploaded successfully';
                    _this.uploadPrescription = false;
                    _this.isPrescriptionRequired = false;
                    _this.confirmchecked = false;
                    setTimeout(function () {
                        this.message = '';
                    }.bind(_this), 3000);
                }
            });
        }
        else {
            this._prescriptionService.UploadPrescription(form.Name, form.DoctorName, this.fileupload).subscribe(function (resp) {
                if (resp === '200') {
                    _this.userPrescriptionForm.reset();
                    _this.message = 'Uploaded successfully';
                    _this.uploadPrescription = false;
                    _this.isPrescriptionRequired = false;
                    _this.confirmchecked = false;
                    setTimeout(function () {
                        this.message = '';
                    }.bind(_this), 3000);
                }
            });
        }
    };
    GwCheckoutComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            this.FileName = file.name;
            formData.append('UploadedImage', file, file.name);
            this.fileupload = formData;
        }
    };
    GwCheckoutComponent.prototype.RestInputFields = function () {
        var addressvm = {
            AddressId: 0,
            title: '',
            address1: '',
            address2: '',
            country: '',
            stateId: '',
            stateName: '',
            city: '',
            CityId: '',
            zipcode: '',
            Mobile: '',
            longitude: 0,
            latitude: 0,
            isDefault: false,
            createdOn: Date.UTC.toString(),
            modifiedOn: Date.UTC.toString(),
            countriesList: [],
            statesList: null,
            citiesList: null,
        };
        return addressvm;
    };
    GwCheckoutComponent.prototype.Cancel = function () {
        this.router.navigate(['/Checkout']);
    };
    GwCheckoutComponent.prototype.GoCart = function () {
        this.router.navigate(['/Cart/Cart']);
    };
    GwCheckoutComponent.prototype.CalculateShippingCharge = function (shippingCharge, address, Type) {
        this.Total = 0;
        if (this.onlinePayment === true && Type === 'ONLINE') {
            if (address.stateName === 'Hyderabad' || address.city === 'Secunderabad' ||
                address.CityId === '4460' || address.CityId === '4496') {
                if (this.subtotal < 300) {
                    this.shipCost = shippingCharge.localshippingCharges;
                    this.Total = this.subtotal;
                }
                else {
                    this.shipCost = 0;
                    this.Total = this.subtotal;
                }
            }
            else {
                this.Total = this.subtotal;
                this.shipCost = shippingCharge.othershippingCharges;
                if (this.subtotal > 3000) {
                    this.Total = this.subtotal;
                }
            }
            this.codeCharge = 0;
            this.Total = this.Total + this.shipCost - this.promoDiscount;
        }
        else {
            if (address.city === 'Hyderabad' || address.city === 'Secunderabad' ||
                address.CityId === '4460' || address.CityId === '4496') {
                if (this.subtotal < 300) {
                    this.Total = this.subtotal + shippingCharge.codCharges;
                    this.shipCost = shippingCharge.localshippingCharges;
                }
                else {
                    this.shipCost = 0;
                    this.Total = this.subtotal;
                }
            }
            else {
                if (address.stateName === 'Telangana') {
                    if (this.subtotal < 300) {
                        this.shipCost = shippingCharge.othershippingCharges;
                        this.codeCharge = shippingCharge.codCharges;
                        this.Total = this.subtotal + this.codeCharge;
                    }
                    else {
                        this.shipCost = shippingCharge.othershippingCharges;
                        this.codeCharge = 0;
                        this.Total = this.subtotal + this.codeCharge;
                    }
                }
                else {
                    this.codeCharge = shippingCharge.codCharges;
                    this.Total = this.subtotal + this.codeCharge;
                    this.shipCost = shippingCharge.othershippingCharges;
                }
            }
            this.Total = this.Total + this.shipCost;
        }
    };
    GwCheckoutComponent.prototype.PaymentType = function (event) {
        if (event.target.value === 'ONLINE') {
            this.show_PaymentDiv = true;
            this.paymentType = 'ONLINE';
            this.subPaymentType = 'RAZORPAY';
            this.onlinePayment = true;
            this.CalculateShippingCharge(this.UserAddress.shippingCharge, this.defaultAddress, this.paymentType);
            this.PromoChecked = false;
        }
        else {
            this.show_PaymentDiv = false;
            this.paymentType = 'COD';
            this.subPaymentType = 'COD';
            this.onlinePayment = false;
            this.promoDiscount = 0;
            this.CalculateShippingCharge(this.UserAddress.shippingCharge, this.defaultAddress, this.paymentType);
            this.PromoValue = '';
            this.PromoChecked = false;
            this.confirmchecked = false;
        }
    };
    GwCheckoutComponent.prototype.SubPaymentType = function (event) {
        if (event.target.value === 'RAZORPAY') {
            this.subPaymentType = event.target.value;
            this.PromoChecked = false;
            this.confirmchecked = false;
        }
        else {
            this.subPaymentType = event.target.value;
            this.PromoChecked = false;
            this.confirmchecked = false;
        }
    };
    GwCheckoutComponent.prototype.ConfirmCheckedOptions = function (isPrescriptionRequired, event) {
        // tslint:disable-next-line:no-debugger
        debugger;
        if (this.UserAddress.ListAddressVm.length === 0) {
            this.IsshippingAddressAvailable = false;
            this.uploadPrescription = false;
            this.confirmchecked = true;
            this.isAlertboxshow = true;
            this.uploadPrescriptionMessage = 'Add Shipping Address';
            setTimeout(function () {
                this.confirmchecked = false;
                this.isAlertboxshow = false;
                this.uploadPrescriptionMessage = '';
            }.bind(this), 3000);
        }
        else {
            if (isPrescriptionRequired === true) {
                this.uploadPrescription = false;
                this.confirmchecked = true;
                this.isAlertboxshow = true;
                this.uploadPrescriptionMessage = 'Please Upload Prescription';
                setTimeout(function () {
                    this.confirmchecked = false;
                    this.isAlertboxshow = false;
                    this.uploadPrescriptionMessage = '';
                }.bind(this), 3000);
            }
            else {
                this.IsshippingAddressAvailable = true;
                this.confirmchecked = true;
                this.uploadPrescription = true;
                this.isPrescriptionRequired = false;
            }
        }
    };
    //  promo code functionality
    GwCheckoutComponent.prototype.ApplyPromo = function (paymentType, promoCode) {
        var _this = this;
        console.log(this.PromoValue);
        if (this.paymentType === 'ONLINE') {
            this._orderService.ApplyPromoCode(this.cartItems(), this.PromoValue).subscribe(function (resp) {
                if (resp > 0) {
                    _this.promoDiscount = resp;
                    _this.promoMessage = 'Applied successfully';
                    _this.PromoValue = promoCode;
                    setTimeout(function () {
                        this.promoMessage = '';
                        // this.PromoChecked = true;
                    }.bind(_this), 3000);
                }
                else {
                    _this.promoMessage = 'Only applicable for surgical Items Only';
                    _this.PromoValue = ' ';
                    setTimeout(function () {
                        this.promoMessage = '';
                        this.PromoChecked = false;
                    }.bind(_this), 3000);
                    _this.promoDiscount = resp;
                    _this.CalculateShippingCharge(_this.UserAddress.shippingCharge, _this.defaultAddress, _this.paymentType);
                }
            });
        }
        else {
            this.promoMessage = 'You cant Apply promo for cash on delivery';
            this.PromoValue = ' ';
            setTimeout(function () {
                this.promoMessage = '';
            }.bind(this), 3000);
        }
    };
    GwCheckoutComponent.prototype.ApplyPromoCode = function (PaymentType, event, promoCode) {
        if (this.paymentType === 'ONLINE') {
            this.PromoValue = promoCode;
            this.ApplyPromo(this.paymentType, promoCode);
        }
        else {
            this.promoMessage = 'You cant Apply promo for cash on delivery';
            setTimeout(function () {
                this.PromoChecked = false;
            }.bind(this), 0);
            setTimeout(function () {
                this.promoMessage = '';
            }.bind(this), 3000);
        }
    };
    GwCheckoutComponent.prototype.OrderConfirm = function (shipCost, codeCharge, paymentType, promoDiscount, subPaymentType, PromoValue) {
        var _this = this;
        var finalOrder = {
            hdnCodCharges: codeCharge,
            hdnshippingCharges: shipCost,
            hdnOnlinePayment: paymentType,
            hdnSubPaymentType: subPaymentType,
            hdnPrmoAmount: promoDiscount,
            hdnPromoCode: PromoValue,
            subtotal: this.subtotal,
            UserCartData: this.cartItems(),
            shippingCharge: this.defaultAddress
        };
        this._orderService.OrderConfrim(finalOrder).subscribe(function (resp) {
            if (resp !== '204' && _this.subPaymentType !== 'RAZORPAY' && _this.subPaymentType !== 'COD') {
                var parameters = new Map();
                _this.paytmVM = resp;
                parameters.set('MID', _this.paytmVM.MID);
                parameters.set('CHANNEL_ID', _this.paytmVM.Channel_id);
                parameters.set('INDUSTRY_TYPE_ID', _this.paytmVM.Industry_type_id);
                parameters.set('WEBSITE', _this.paytmVM.Website);
                parameters.set('EMAIL', _this.paytmVM.email);
                parameters.set('MOBILE_NO', _this.paytmVM.phoneNo);
                parameters.set('ORDER_ID', _this.paytmVM.orderid);
                parameters.set('TXN_AMOUNT', _this.paytmVM.amount);
                parameters.set('CALLBACK_URL', 'http://localhost:4200/gw-checkout');
                parameters.set('patymrouteUrl', _this.paytmVM.patymrouteUrl);
                // parameters.set('outputhtml', this.paytmVM.outputhtml);
                //  this._window.setPayTmData(this.paytmVM);
                //  this.router.navigate(['/PayTm']);
                // tslint:disable-next-line:no-debugger
                //  window.location.href = 'ttps://secure.paytm.in/oltp-web/processTransaction?orderid=' + this.paytmVM.orderid;
            }
            else if (resp !== '204' && _this.subPaymentType === 'RAZORPAY') {
                _this.razorVM = resp;
                var parameters = new Map();
                parameters.set('amount', _this.razorVM.amount.toString()); // this amount should be same as transaction amount
                parameters.set('currency', _this.razorVM.currency);
                parameters.set('receipt', _this.razorVM.receipt);
                parameters.set('secret', _this.razorVM.secret);
                parameters.set('phoneNo', _this.razorVM.phoneNo);
                parameters.set('key', _this.razorVM.key);
                parameters.set('mailbody', _this.razorVM.mailbody);
                parameters.set('productinfo', _this.razorVM.productinfo);
                _this._window.setData(_this.razorVM);
                _this.router.navigate(['/razorPay']);
            }
            else {
                var retrieveArray = JSON.parse(sessionStorage.getItem('userCartITem'));
                for (var i = 0; i < retrieveArray.length; i++) {
                    retrieveArray.slice(i);
                }
                sessionStorage.removeItem('userCartITem');
                _this._navabar.change();
                _this._navabar.change();
                _this._window.setOrderId(resp.orderid);
                _this.router.navigate(['/Success']);
            }
        });
    };
    GwCheckoutComponent.prototype.cartItems = function () {
        var user_AccesToken = sessionStorage.getItem('userToken');
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var userCartITem = JSON.parse(sessionStorage.getItem('userCartITem'));
        this.userdata = {
            userCartList: [],
            userWishlist: [],
            customerdata: null
        };
        this.usercartdata = [];
        this.userwhishlistdata = [];
        if (userCartITem !== null) {
            for (var i = 0; i < userCartITem.length; i++) {
                var item = userCartITem[i];
                this.usercartdata.push(item);
            }
        }
        else {
            this.usercartdata = [];
        }
        this.userdata = {
            userCartList: this.usercartdata,
            userWishlist: null,
            customerdata: null
        };
        return this.userdata;
    };
    GwCheckoutComponent.prototype.setTab = function (index) {
        // tslint:disable-next-line:no-debugger
        debugger;
        this.selectedtabIndex = index;
    };
    //   next() {
    //     // tslint:disable-next-line:no-debugger
    //     debugger;
    //     if (this.selectedTab < this.tabs.length) {
    //       this.selectedTab++;
    //       this.router.navigate(this.tabs[this.selectedTab].link);
    //     }
    //   }
    //   back() {
    //     if (this.selectedTab > 0) {
    //       this.selectedTab--;
    //       this.router.navigate(this.tabs[this.selectedTab].link);
    //     }
    // }
    GwCheckoutComponent.prototype.Next = function (selected) {
        this.selectedtabIndex = selected;
    };
    GwCheckoutComponent.prototype.Prev = function (selected) {
        this.selectedtabIndex = selected;
    };
    GwCheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gw-checkout',
            template: __webpack_require__("./src/app/gw-checkout/gw-checkout.component.html"),
            styles: [__webpack_require__("./src/app/gw-checkout/gw-checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_Services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__navbar_Services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_3__Services_cartaddress_service__["a" /* CartaddressService */], __WEBPACK_IMPORTED_MODULE_5__Services_prescription_service__["a" /* PrescriptionService */],
            __WEBPACK_IMPORTED_MODULE_8__Services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_9__razorpay_service_window__["a" /* WindowRef */],
            __WEBPACK_IMPORTED_MODULE_2__navbar_Services_navbar_service__["a" /* NavbarService */]])
    ], GwCheckoutComponent);
    return GwCheckoutComponent;
}());



/***/ }),

/***/ "./src/app/gw-ltst-prdcts/Service/homeproudct.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeproudctService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeproudctService = /** @class */ (function () {
    function HomeproudctService(_http) {
        this._http = _http;
        this.data = undefined;
    }
    HomeproudctService.prototype.GetHomeProduct = function () {
        return this._http.get('http://localhost:31029/api/home/products').
            map(function (response) { return response.json().productCategoryVm; })
            .catch(this.handleError);
    };
    HomeproudctService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    HomeproudctService.prototype.setData = function (data) {
        this.Productdetails = data;
    };
    HomeproudctService.prototype.getData = function () {
        return this.Productdetails;
    };
    HomeproudctService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HomeproudctService);
    return HomeproudctService;
}());



/***/ }),

/***/ "./src/app/gw-ltst-prdcts/gw-ltst-prdcts.component.css":
/***/ (function(module, exports) {

module.exports = ".gw-ltst-prdcts hr {\r\n    margin-top: -16px;\r\n}\r\n\r\n.ngxcarouselcJIzks>.ngxcarousel>.ngxcarousel-inner>.ngxcarousel-items>.item {\r\n    width: auto;\r\n}\r\n\r\n.tile {\r\n    -webkit-box-shadow: none !important;\r\n            box-shadow: none !important;\r\n}\r\n\r\n.ngxcarouselPointDefault .ngxcarouselPoint li {\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    background: #ddd !important;\r\n    padding: 4px;\r\n    margin: 0 4px;\r\n    -webkit-transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);\r\n            transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);\r\n    -webkit-transition: 0.4s;\r\n    transition: 0.4s;\r\n}\r\n\r\nngxcarouselPointDefault .ngxcarouselPoint li.active {\r\n    background: #f67f57;\r\n    -webkit-transform: scale(1.8);\r\n            transform: scale(1.8);\r\n}\r\n\r\n.leftRs {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: -42px;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n    border-radius: 999px;\r\n    left: -80px;\r\n    border: 1px solid #ddd;\r\n    color: #f67f57;\r\n    background: none;\r\n}\r\n\r\n.rightRs {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: -42px;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n    border-radius: 999px;\r\n    right: -80px;\r\n    border: 1px solid #ddd;\r\n    color: #f67f57;\r\n    background: none;\r\n}\r\n\r\n.leftRs:hover,\r\n.rightRs:hover {\r\n    background-color: #f67f57;\r\n    color: #fff;\r\n}\r\n\r\n.btn-default {\r\n    color: #777;\r\n    border: 1px solid #e1e7ec;\r\n}"

/***/ }),

/***/ "./src/app/gw-ltst-prdcts/gw-ltst-prdcts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container  gw-ltst-prdcts\" *ngFor=\"let item of productList; let i = index;\">\n    <div *ngIf=\"item.productImageCount>5\">\n            <simple-notifications></simple-notifications>\n        <h2 class=\"text-center\">{{item.name}}</h2>\n\n        <div id=\"myCarousel-ltst-prdcts\" class=\"carousel slide\">\n\n            <ngx-carousel [inputs]=\"carouselTile\">\n                <ngx-tile NgxCarouselItem *ngFor=\"let products of item.productsVm;\">\n                    <div class=\"item carousel-item\">\n\n                        <div class=\"thumb-wrapper\">\n\n                            <!-- <a class=\"wish-icon\" data-placement=\"left\" data-toggle=\"tooltip\" title=\"Add to wish list\" (click)=\"AddtoWhishlists(products)\">\n                                <i class=\"glyphicon glyphicon-heart\"></i>\n                            </a> -->\n                            <a class=\"wish-icon\" data-toggle=\"tooltip\" title=\"Add to wish list\" (click)=\"AddtoWhishlists(products)\">\n                                <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n                            </a>\n\n                            <div class=\"img-box\">\n                                <img alt=\"\" class=\"img-responsive img-fluid\" src=\"http://stores.genericwala.com/Uploads/Products/{{products.picture}}\">\n                            </div>\n                            <div class=\"thumb-content\"></div>\n                            <h4>{{products.name}}</h4>\n\n                            <p class=\"item-price\">\n                                <b>\n                                    <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{products.quantityPerUnit * products.unitPrice | number:'1.2-2'}}</b>\n                            </p>\n                            <a class=\"btn btn-default\" (click)=\"AddtoCart(products,item.id)\">Add to Cart</a>\n                            <a class=\"btn btn-default\" (click)=\"ProductDetails(products.name,products.itemType,products.id)\">product Details</a>\n                        </div>\n                    </div>\n                </ngx-tile>\n                <button NgxCarouselPrev class=\"leftRs hidden-sm hidden-md hidden-xs\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></button>\n                <button NgxCarouselNext class=\"rightRs hidden-sm hidden-md hidden-xs\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></button>\n            </ngx-carousel>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/gw-ltst-prdcts/gw-ltst-prdcts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GwLtstPrdctsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_homeproudct_service__ = __webpack_require__("./src/app/gw-ltst-prdcts/Service/homeproudct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Common_cart_cart_service__ = __webpack_require__("./src/app/Common/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gw_prdct_dscrptn_Services_product_details_service__ = __webpack_require__("./src/app/gw-prdct-dscrptn/Services/product-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HomeproudctService, ProductId } from './serviceproudct.service';






var GwLtstPrdctsComponent = /** @class */ (function () {
    function GwLtstPrdctsComponent(_homeService, cartService, _navbar, router, activate, notifications, productDescription) {
        this._homeService = _homeService;
        this.cartService = cartService;
        this._navbar = _navbar;
        this.router = router;
        this.activate = activate;
        this.notifications = notifications;
        this.productDescription = productDescription;
        this.cartCount = 0;
        this.cartList = [];
        this.whishList = [];
        this.cartItems = [];
        this.wishListItems = [];
        this.count = 0;
        this.carouselTileItems = [];
        this.messageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GwLtstPrdctsComponent.prototype.LoadCart = function () {
        if (localStorage.getItem('cartobj') != null) {
            this.count = JSON.parse(localStorage.getItem('cartobj')).length;
            return JSON.parse(localStorage.getItem('cartobj'));
        }
        else {
            return null;
        }
    };
    GwLtstPrdctsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carouselTile = {
            grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
            speed: 600,
            interval: 3000,
            point: {
                visible: true,
                pointStyles: "\n        .tile {\n          box-shadow: none !important;\n          border: 1px solid #e1e7ec;\n          border-radius: 4px;\n        }\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n         }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            background: #ddd;\n            padding:3px;\n            margin: 0 3px;\n            transition: .4s;\n            cursor:pointer\n          }\n          .ngxcarouselPoint li.active {\n            background: #f67f57;\n              transform: scale(1.2);\n            }\n        "
            },
            load: 2,
            loop: true,
            touch: true,
            easing: 'ease',
            animation: 'lazy'
        };
        this._homeService.GetHomeProduct().subscribe(function (homedata) {
            _this.productList = homedata;
            var items = _this.carouselTileLoad(_this.productList);
        }, function (error) { _this.statusMesssage = 'There is problem with service'; });
    };
    // adding product to cart
    GwLtstPrdctsComponent.prototype.AddtoCart = function (products, catId) {
        products.catId = catId;
        this.type = 'cartItem';
        this.cartService.addToCart(products, this.type);
        this.notifications.success('Success', '1 item is added to cart', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
        });
        this._navbar.change();
    };
    GwLtstPrdctsComponent.prototype.carouselTileLoad = function (productList) {
        var len = this.productList.length;
        if (len <= 30) {
            for (var i = 0; i < len; i++) {
                console.log(this.productList[i]);
                this.carouselTileItems.push(this.productList[i]);
            }
        }
        return this.carouselTileItems;
    };
    // adding product to cart
    GwLtstPrdctsComponent.prototype.AddtoWhishlists = function (products) {
        this.type = 'wishListItem';
        this.cartService.addToCart(products, this.type);
        this.notifications.success('Success', '1 item is added to Whishlist', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
        });
        this._navbar.change();
    };
    GwLtstPrdctsComponent.prototype.ProductDetails = function (productname, itemType, id) {
        this.produtDetial = {
            prodId: id,
            itemType: itemType
        };
        productname = productname.replace(/\s/g, '-');
        productname = productname.substr(0, productname.length - 1);
        this.productDescription.setData(this.produtDetial);
        this.router.navigate(['/ItemDetails', productname]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GwLtstPrdctsComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GwLtstPrdctsComponent.prototype, "messageEvent", void 0);
    GwLtstPrdctsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gw-ltst-prdcts',
            template: __webpack_require__("./src/app/gw-ltst-prdcts/gw-ltst-prdcts.component.html"),
            styles: [__webpack_require__("./src/app/gw-ltst-prdcts/gw-ltst-prdcts.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__Service_homeproudct_service__["a" /* HomeproudctService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Service_homeproudct_service__["a" /* HomeproudctService */], __WEBPACK_IMPORTED_MODULE_2__Common_cart_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_3__navbar_Services_navbar_service__["a" /* NavbarService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_5__gw_prdct_dscrptn_Services_product_details_service__["a" /* ProductDetailsService */]])
    ], GwLtstPrdctsComponent);
    return GwLtstPrdctsComponent;
}());



/***/ }),

/***/ "./src/app/gw-pplr-prdcts/gw-pplr-prdcts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gw-pplr-prdcts/gw-pplr-prdcts.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \n            <div class=\"container  gw-pplr-prdcts\">\n      \n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <h2 class=\"text-center\">Popular Products</h2>\n\n                        <div id=\"myCarousel-pplr-prdcts\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"0\">\n                        <div class=\"controls text-right\">\n                            <a class=\"left\" href=\"#myCarousel-pplr-prdcts\" data-slide=\"prev\">\n                                <i class=\"material-icons media-object\">arrow_back</i>\n                            </a>\n                            <a class=\"right\" href=\"#myCarousel-pplr-prdcts\" data-slide=\"next\">\n                                <i class=\"material-icons media-object\">arrow_forward</i>\n                            </a>\n                        </div>\n\n                            Wrapper for carousel items \n                            <div class=\"carousel-inner\">\n                                <div class=\"item carousel-item active\">\n\n                                    <div class=\"row\">\n\n                                        <div class=\"col-sm-4\">\n                                        <a class=\"\" href=\"#\">\n                                            <div class=\"thumb-wrapper\">\n                                                <a class=\"cart-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add to cart\"><i class=\"material-icons\">shopping_cart</i></a>\n                                                <a class=\"wish-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Add to wish list\"><i class=\"material-icons\">favorite_border</i></a>\n                                                <div class=\"img-box\">\n <img src=\"http://placehold.it/350x260\" class=\"img-responsive img-fluid\" alt=\"\">\n                                                </div>\n                                                <div class=\"thumb-content\">\n                                                    <h4>Apple iPad</h4>\n\n                                                    <p class=\"item-price\"><s><i class=\"fa fa-inr\"></i> 400.00</s> <b>$369.00</b></p>\n                                                    <a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n                                                     <a href=\"#\" class=\"btn btn-primary\">product Details</a>\n                                                </div>\n                                            </div>\n                                        </a>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                        <a class=\"\" href=\"#\">\n                                            <div class=\"thumb-wrapper\">\n                                                <a class=\"cart-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add to cart\"><i class=\"material-icons\">shopping_cart</i></a>\n                                                <a class=\"wish-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Add to wish list\"><i class=\"material-icons\">favorite_border</i></a>\n                                                <div class=\"img-box\">\n                                                    <img src=\"http://placehold.it/350x260\" class=\"img-responsive img-fluid\" alt=\"\">\n                                                </div>\n                                                <div class=\"thumb-content\">\n                                                    <h4>Sony Headphone</h4>\n\n                                                    <p class=\"item-price\"><s>$25.00</s> <b>$23.99</b></p>\n                                                    <a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n                                                     <a href=\"#\" class=\"btn btn-primary\">product Details</a>\n                                                </div>\n                                            </div>\n                                        </a>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                        <a class=\"\" href=\"#\">\n                                            <div class=\"thumb-wrapper\">\n                                                <a class=\"cart-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add to cart\"><i class=\"material-icons\">shopping_cart</i></a>\n                                                <a class=\"wish-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Add to wish list\"><i class=\"material-icons\">favorite_border</i></a>\n                                                <div class=\"img-box\">\n                                                    <img src=\"http://placehold.it/350x260\" class=\"img-responsive img-fluid\" alt=\"\">\n                                                </div>\n                                                <div class=\"thumb-content\">\n                                                    <h4>Macbook Air</h4>\n\n                                                    <p class=\"item-price\"><s>$899.00</s> <b>$649.00</b></p>\n                                                    <a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n                                                     <a href=\"#\" class=\"btn btn-primary\">product Details</a>\n                                                </div>\n                                            </div>\n                                        </a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                                <div class=\"item carousel-item\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-4\">\n                                        <a class=\"\" href=\"#\">\n                                            <div class=\"thumb-wrapper\">\n                                                <a class=\"cart-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add to cart\"><i class=\"material-icons\">shopping_cart</i></a>\n                                                <a class=\"wish-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Add to wish list\"><i class=\"material-icons\">favorite_border</i></a>\n                                                <div class=\"img-box\">\n                                                    <img src=\"http://placehold.it/350x260\" class=\"img-responsive img-fluid\" alt=\"\">\n                                                </div>\n                                                <div class=\"thumb-content\">\n                                                    <h4>Sony Play Station</h4>\n                                                    <p class=\"item-price\"><s>$289.00</s> <span>$269.00</span></p>\n\n                                                    <a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n                                                     <a href=\"#\" class=\"btn btn-primary\">product Details</a>\n                                                </div>\n                                            </div>\n                                        </a>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                        <a class=\"\" href=\"#\">\n                                            <div class=\"thumb-wrapper\">\n                                                <a class=\"cart-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add to cart\"><i class=\"material-icons\">shopping_cart</i></a>\n                                                <a class=\"wish-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Add to wish list\"><i class=\"material-icons\">favorite_border</i></a>\n                                                <div class=\"img-box\">\n                                                    <img src=\"http://placehold.it/350x260\" class=\"img-responsive img-fluid\" alt=\"\">\n                                                </div>\n                                                <div class=\"thumb-content\">\n                                                    <h4>Macbook Pro</h4>\n                                                    <p class=\"item-price\"><s>$1099.00</s> <span>$869.00</span></p>\n\n                                                    <a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n                                                     <a href=\"#\" class=\"btn btn-primary\">product Details</a>\n                                                </div>\n                                            </div>\n                                        </a>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                        <a class=\"\" href=\"#\">\n                                            <div class=\"thumb-wrapper\">\n                                                <a class=\"cart-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add to cart\"><i class=\"material-icons\">shopping_cart</i></a>\n                                                <a class=\"wish-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Add to wish list\"><i class=\"material-icons\">favorite_border</i></a>\n                                                <div class=\"img-box\">\n                                                    <img src=\"http://placehold.it/350x260\" class=\"img-responsive img-fluid\" alt=\"\">\n                                                </div>\n                                                <div class=\"thumb-content\">\n                                                    <h4>Bose Speaker</h4>\n                                                    <p class=\"item-price\"><s>$109.00</s> <span>$99.00</span></p>\n\n                                                    <a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n                                                     <a href=\"#\" class=\"btn btn-primary\">product Details</a>\n                                                </div>\n                                            </div>\n                                        </a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                                <div class=\"item carousel-item\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-4\">\n                                        <a class=\"\" href=\"#\">\n                                            <div class=\"thumb-wrapper\">\n                                                <a class=\"cart-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add to cart\"><i class=\"material-icons\">shopping_cart</i></a>\n                                                <a class=\"wish-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Add to wish list\"><i class=\"material-icons\">favorite_border</i></a>\n                                                <div class=\"img-box\">\n                                                    <img src=\"http://placehold.it/350x260\" class=\"img-responsive img-fluid\" alt=\"\">\n                                                </div>\n                                                <div class=\"thumb-content\">\n                                                    <h4>Apple iPhone</h4>\n                                                    <p class=\"item-price\"><s>$369.00</s> <span>$349.00</span></p>\n\n                                                    <a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n                                                     <a href=\"#\" class=\"btn btn-primary\">product Details</a>\n                                                </div>\n                                            </div>\n                                        </a>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                        <a class=\"\" href=\"#\">\n                                            <div class=\"thumb-wrapper\">\n                                                <a class=\"cart-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add to cart\"><i class=\"material-icons\">shopping_cart</i></a>\n                                                <a class=\"wish-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Add to wish list\"><i class=\"material-icons\">favorite_border</i></a>\n                                                <div class=\"img-box\">\n                                                    <img src=\"http://placehold.it/350x260\" class=\"img-responsive img-fluid\" alt=\"\">\n                                                </div>\n                                                <div class=\"thumb-content\">\n                                                    <h4>Canon DSLR</h4>\n                                                    <p class=\"item-price\"><s>$315.00</s> <span>$250.00</span></p>\n\n                                                    <a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n                                                     <a href=\"#\" class=\"btn btn-primary\">product Details</a>\n                                                </div>\n                                            </div>\n                                        </a>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                        <a class=\"\" href=\"#\">\n                                            <div class=\"thumb-wrapper\">\n                                                <a class=\"cart-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add to cart\"><i class=\"material-icons\">shopping_cart</i></a>\n                                                <a class=\"wish-icon\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Add to wish list\"><i class=\"material-icons\">favorite_border</i></a>\n                                                <div class=\"img-box\">\n                                                    <img src=\"http://placehold.it/350x260\" class=\"img-responsive img-fluid\" alt=\"\">\n                                                </div>\n                                                <div class=\"thumb-content\">\n                                                    <h4>Google Pixel</h4>\n                                                    <p class=\"item-price\"><s>$450.00</s> <span>$418.00</span></p>\n\n                                                    <a href=\"#\" class=\"btn btn-primary\">Add to Cart</a>\n                                                     <a href=\"#\" class=\"btn btn-primary\">product Details</a>\n                                                </div>\n                                            </div>\n                                        </a>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n               \n            </div>\n   -->"

/***/ }),

/***/ "./src/app/gw-pplr-prdcts/gw-pplr-prdcts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GwPplrPrdctsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GwPplrPrdctsComponent = /** @class */ (function () {
    function GwPplrPrdctsComponent() {
    }
    GwPplrPrdctsComponent.prototype.ngOnInit = function () {
    };
    GwPplrPrdctsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gw-pplr-prdcts',
            template: __webpack_require__("./src/app/gw-pplr-prdcts/gw-pplr-prdcts.component.html"),
            styles: [__webpack_require__("./src/app/gw-pplr-prdcts/gw-pplr-prdcts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GwPplrPrdctsComponent);
    return GwPplrPrdctsComponent;
}());



/***/ }),

/***/ "./src/app/gw-prdct-dscrptn/Services/product-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailsService = /** @class */ (function () {
    function ProductDetailsService(http) {
        this.http = http;
        this.data = undefined;
    }
    ProductDetailsService.prototype.GetProductDetails = function (productId, itemType) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        myHeaders.append('Content-Type', 'application/json');
        var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["f" /* URLSearchParams */]();
        urlSearchParams.append('hdnItemCode', productId.toString());
        urlSearchParams.append('hdnItemType', itemType.toString());
        urlSearchParams.append('size', '');
        urlSearchParams.append('color', '');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* RequestOptions */]({ headers: myHeaders, params: urlSearchParams });
        var data = this.http.get('http://localhost:31029/api/product/details', options)
            .map(function (response) { return response.json(); }).catch(this.handleError);
        return data;
    };
    ProductDetailsService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    ProductDetailsService.prototype.setData = function (data) {
        this.Productdetails = data;
    };
    ProductDetailsService.prototype.SetCompostionSearch = function (data) {
        this.compostionsearch = data;
    };
    ProductDetailsService.prototype.GetCompostionSearch = function () {
        return this.compostionsearch;
    };
    ProductDetailsService.prototype.getData = function () {
        return this.Productdetails;
    };
    ProductDetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
    ], ProductDetailsService);
    return ProductDetailsService;
}());



/***/ }),

/***/ "./src/app/gw-prdct-dscrptn/gw-prdct-dscrptn.component.css":
/***/ (function(module, exports) {

module.exports = ".cstm-thumbnail {\r\n    display: block;\r\n    padding: 20px;\r\n    margin-bottom: 20px;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    border-radius: 4px;\r\n    -webkit-transition: border .2s ease-in-out;\r\n    transition: border .2s ease-in-out;\r\n}\r\n\r\n.pad-top {\r\n    padding-top: 20px;\r\n}\r\n\r\n.thumbnail {\r\n    -webkit-box-shadow: 2px 2px 2px #ddd;\r\n            box-shadow: 2px 2px 2px #ddd;\r\n}\r\n\r\n.tab-content {\r\n    border: 1px solid #ddd;\r\n    padding: 20px;\r\n    border-top: none;\r\n}\r\n\r\n.gw-add-btn {\r\n    background-color: #fff;\r\n    color: #0e76bc;\r\n    border: 1px solid #e1e7ec;\r\n}\r\n\r\n.gw-add-dlt-icns i {\r\n    margin: 10px;\r\n    color: #ddd;\r\n}\r\n\r\n.nav-tabs>li.active>a,\r\n.nav-tabs>li.active>a:focus,\r\n.nav-tabs>li.active>a:hover {\r\n    cursor: default;\r\n    border-top: 3px solid #f67f57;\r\n    border-bottom: none;\r\n}\r\n\r\n.thmbnl-height img {\r\n    height: 250px;\r\n    width: 250px;\r\n    -o-object-fit: scale-down;\r\n       object-fit: scale-down;\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .thmbnl-height img {\r\n        height: 220px;\r\n        width: 220px;\r\n        -o-object-fit: scale-down;\r\n           object-fit: scale-down;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/gw-prdct-dscrptn/gw-prdct-dscrptn.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pad-top\">\n    <div class=\"row\">\n            <simple-notifications></simple-notifications>\n        <div class=\"col-lg-4 col-md-5 col-sm-6\" *ngIf=\"Productdetials.ItemDetails !== null\">\n            <div class=\"thumbnail thmbnl-height\" *ngIf=\"Productdetials.ItemDetails.Image !== null && Productdetials.ItemDetails.Image !== ''  && itemType === 1\">\n                <div class=\"div-brdr\">\n                    <img src=\"http://stores.genericwala.com/Uploads/ProductImages/{{Productdetials.ItemDetails.Image}}\" class=\"img-responsive img-fluid center-block\">\n                </div>\n            </div>\n            <div class=\"thumbnail thmbnl-height\" *ngIf=\"Productdetials.ItemDetails.Image !== null && Productdetials.ItemDetails.Image !== ''  && itemType === 0\">\n                <div class=\"div-brdr\">\n                    <img src=\"http://stores.genericwala.com/Uploads/drugImageUploads/{{Productdetials.ItemDetails.Image}}\" class=\"img-responsive img-fluid center-block\">\n                </div>\n            </div>\n            <div class=\"thumbnail thmbnl-height\" *ngIf=\"Productdetials.ItemDetails.Image ===  null || Productdetials.ItemDetails.Image === '' \">\n                <div class=\"div-brdr\">\n                    <a href=\"\">\n                        <img src=\"http://placehold.it/320x200\" alt=\"\">\n                    </a>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n\n                    <button class=\"btn btn-primary btn-sbmt text-right\" (click)=\"AddtoCart(Productdetials.ItemDetails,quantity)\">Add to Cart</button>\n                    <button class=\"btn btn-warning btn-bk\" (click)=\"AddtoWhishlist(Productdetials.ItemDetails,quantity)\">Add to Wishlist</button>\n                    <button class=\"btn btn-success\" routerLink=\"/Cart/Cart\">Buy Now</button>\n\n                </div>\n            </div>\n\n        </div>\n        <div class=\"col-lg-8 col-md-7 col-sm-6 cstm-thumbnail  clearfix\">\n            <h4 class=\"\">{{Productdetials.ItemDetails.Name}}</h4>\n            <p>Sold By {{Productdetials.ItemDetails.CompanyBrand}}</p>\n            <ul class=\"list-inline list-unstyled v-align\">\n                <li>\n                    <a>\n                        <i class=\"material-icons\">star_border</i>\n                    </a>\n                </li>\n                <li>\n                    <a>\n                        <i class=\"material-icons\">star_border</i>\n                    </a>\n                </li>\n                <li>\n                    <a>\n                        <i class=\"material-icons\">star_border</i>\n                    </a>\n                </li>\n                <li>\n                    <a>\n                        <i class=\"material-icons\">star_border</i>\n                    </a>\n                </li>\n                <li>\n                    <a>\n                        <i class=\"material-icons\">star_border</i>\n                    </a>\n                </li>\n                <li>\n                    <a>Based on 0 Rating</a>\n                </li>\n                <li class=\"\">\n\n                    <button type=\"button\" class=\"btn btn-success mrgn-top-xs\">Write Review</button>\n                </li>\n            </ul>\n\n            <ul class=\"list-inline\">\n                <li>\n                    <h5 class=\"text-left\">Rs {{Productdetials.ItemDetails.TotalPrice | number:'1.0-2' }}</h5>\n                </li>\n                <li>\n                    <h5>\n                        <s>Rs {{Productdetials.ItemDetails.Price | number:'1.0-2' }}</s>\n                    </h5>\n                </li>\n                <li>\n                    <a class=\"btn btn-warning btn-bk\">{{Productdetials.ItemDetails.DiscountInPercent | number:'1.0-2' }}% off</a>\n                </li>\n            </ul>\n            <h5>You Save : Rs {{Productdetials.ItemDetails.TotalDiscount | number:'1.0-2'}}</h5>\n            <hr/>\n            <input type=\"hidden\" name=\"kraj-dokument\" id=\"kraj-dokument\" value=\"{{ Productdetials.ItemDetails.Price  }}\" />\n\n            <h5>Quantity</h5>\n            <div class=\"btn-group\">\n                <span class=\"btn btn-primary gw-add-btn\" (click)=\"DecreaseProductQuantity(Productdetials.ItemDetails)\">-</span>\n                <span class=\"btn btn-primary gw-add-btn\">{{quantity}}</span>\n                <span class=\"btn btn-primary gw-add-btn\" (click)=\"IncreaseProductQuantity(Productdetials.ItemDetails,Productdetials.ItemDetails.Code)\">+</span>\n            </div>\n            <p class=\"text-right text-danger\" style=\"margin-top: 20px;\">\n                <small>* Prices are subjected to change and will be reconfirmed prior to processing your order. </small>\n            </p>\n\n            <!-- <div class=\"pull-right\">\n                <button class=\"btn btn-primary btn-sbmt text-right mrgn-top-xs\" (click)=\"AddtoCart(Productdetials.ItemDetails,quantity)\">Add to Cart</button>\n                <button class=\"btn btn-warning btn-bk mrgn-top-xs\" (click)=\"AddtoWhishlist(Productdetials.ItemDetails,quantity)\">Add to Wishlist</button>\n                <button class=\"btn btn-success mrgn-top-xs\">Buy Now</button>\n            </div> -->\n\n\n        </div>\n\n        <div class=\"col-md-12\">\n\n            <div *ngIf=\"Productdetials.ItemDetails.Type\">\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"active\">\n                        <a data-toggle=\"tab\" href=\"#sectionF\">Description</a>\n                    </li>\n                    <li>\n                        <a data-toggle=\"tab\" href=\"#sectionG\">Information</a>\n                    </li>\n                    <li>\n                        <a data-toggle=\"tab\" href=\"#sectionH\"> Review</a>\n                    </li>\n                    <li>\n                        <a data-toggle=\"tab\" href=\"#sectionI\">Extra Information</a>\n                    </li>\n                    <li>\n                        <a data-toggle=\"tab\" href=\"#sectionJ\">Guarantees</a>\n                    </li>\n                </ul>\n                <div class=\"tab-content\" *ngIf=\"Productdetials.ItemDetails.Type === 1\">\n                    <div id=\"sectionF\" class=\"tab-pane fade in active\">\n                        <p>\n                            {{Productdetials.prodInfo.productDescription}}\n                        </p>\n                    </div>\n                    <div id=\"sectionG\" class=\"tab-pane fade\">\n\n                        <p *ngIf='Productdetials.prodInfo.Composition !== null'>\n                            <span>Composition</span>\n                            <br> {{Productdetials.prodInfo.Composition}}\n                        </p>\n                        <p *ngIf='Productdetials.prodInfo.Composition==null'>\n                            <span>Composition</span>\n                            <br> No Compostion\n                        </p>\n\n                        <p *ngIf='Productdetials.prodInfo.OtherInformation !== null'>\n                            <span>OtherInformation</span>\n                            <br> {{Productdetials.prodInfo.OtherInformation}}\n                        </p>\n                        <p *ngIf='Productdetials.prodInfo.OtherInformation==null'>\n                            <span>OtherInformation</span>\n                            <br> No OtherInformation\n                        </p>\n                    </div>\n                    <div id=\"sectionH\" class=\"tab-pane fade\">\n\n                        <br> No Review\n\n                    </div>\n                    <div id=\"sectionI\" class=\"tab-pane fade\">\n                        No Information\n                    </div>\n                    <div id=\"sectionJ\" class=\"tab-pane fade\">\n                        No Information\n                    </div>\n\n                </div>\n            </div>\n\n            <div *ngIf=\"!Productdetials.ItemDetails.Type\">\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"active\">\n                        <a data-toggle=\"tab\" href=\"#sectionA\">Description</a>\n                    </li>\n                    <li>\n                        <a data-toggle=\"tab\" href=\"#sectionB\">Composition</a>\n                    </li>\n                    <li>\n                        <a data-toggle=\"tab\" href=\"#sectionC\"> Mechanism</a>\n                    </li>\n                    <li>\n                        <a data-toggle=\"tab\" href=\"#sectionD\">Metabolism</a>\n                    </li>\n                    <li>\n                        <a data-toggle=\"tab\" href=\"#sectionE\">Side Effects</a>\n                    </li>\n                </ul>\n\n                <!-- druggs -->\n                <div class=\"tab-content\" *ngIf=\"Productdetials.ItemDetails.Type === 0\">\n                    <div id=\"sectionA\" class=\"tab-pane fade in active\">\n\n                        <p *ngIf='Productdetials.drugSpecification.Description'>\n                            <span>Description</span>\n                            <br> {{Productdetials.drugSpecification.Description}}\n                        </p>\n                        <p *ngIf='Productdetials.drugSpecification.Categories'>\n                            <span>Categories</span>\n                            <br> {{Productdetials.drugSpecification.Categories}}\n                        </p>\n                        <p *ngIf='Productdetials.drugSpecification.Chemical_Formula'>\n                            <span>Chemical_Formula</span>\n                            <br> {{Productdetials.drugSpecification.Chemical_Formula}}\n                        </p>\n                    </div>\n                    <div id=\"sectionB\" class=\"tab-pane fade\">\n                        <p *ngIf='Productdetials.drugSpecification.Composition'>\n                            <span>Composition</span>\n                            <br/> {{Productdetials.drugSpecification.Composition}}\n                        </p>\n\n                        <p *ngIf='Productdetials.drugSpecification.Indication'>\n                            <span>Indication</span>\n                            <br/> {{Productdetials.drugSpecification.Indication}}\n                        </p>\n                        <p *ngIf='Productdetials.drugSpecification.Pharmacodynamics'>\n                            <span>Pharmacodynamics</span>\n                            <br/> {{Productdetials.drugSpecification.Pharmacodynamics}}\n                        </p>\n                    </div>\n\n                    <div id=\"sectionC\" class=\"tab-pane fade\">\n                        <p *ngIf='Productdetials.drugSpecification.Mechanism'>\n                            <span>Mechanism</span>\n                            <br/> {{Productdetials.drugSpecification.Mechanism}}\n                        </p>\n\n                        <p *ngIf='Productdetials.drugSpecification.Absorption'>\n                            <span>Absorption</span>\n                            <br/> {{Productdetials.drugSpecification.Absorption}}\n                        </p>\n                        <p *ngIf='Productdetials.drugSpecification.Volume_Distribution'>\n                            <span>Volume_Distribution</span>\n                            <br/> {{Productdetials.drugSpecification.Volume_Distribution}}\n                        </p>\n                    </div>\n                    <div id=\"sectionD\" class=\"tab-pane fade\">\n                        <p *ngIf='Productdetials.drugSpecification.Metabolism'>\n                            <span>Metabolism</span>\n                            <br/> {{Productdetials.drugSpecification.Metabolism}}\n                        </p>\n\n                        <p *ngIf='Productdetials.drugSpecification.Half_Life'>\n                            <span>Half_Life</span>\n                            <br/> {{Productdetials.drugSpecification.Half_Life}}\n                        </p>\n                    </div>\n                    <div id=\"sectionE\" class=\"tab-pane fade\">\n\n                        <p *ngIf='Productdetials.drugSpecification.Toxicity'>\n                            <span>Toxicity</span>\n                            <br/> {{Productdetials.drugSpecification.Toxicity}}\n                        </p>\n\n                        <p *ngIf='Productdetials.drugSpecification.Food_Interactions'>\n                            <span>Food_Interactions</span>\n                            <br/> {{Productdetials.drugSpecification.Food_Interactions}}\n                        </p>\n\n                        <p *ngIf='Productdetials.drugSpecification.SideEffects'>\n                            <span>SideEffects</span>\n                            <br/> {{Productdetials.drugSpecification.SideEffects}}\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/gw-prdct-dscrptn/gw-prdct-dscrptn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GwPrdctDscrptnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_product_details_service__ = __webpack_require__("./src/app/gw-prdct-dscrptn/Services/product-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Common_cart_cart_service__ = __webpack_require__("./src/app/Common/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GwPrdctDscrptnComponent = /** @class */ (function () {
    function GwPrdctDscrptnComponent(activeatedRoute, productDetialService, router, _navbar, notifications, cartService) {
        this.activeatedRoute = activeatedRoute;
        this.productDetialService = productDetialService;
        this.router = router;
        this._navbar = _navbar;
        this.notifications = notifications;
        this.cartService = cartService;
    }
    GwPrdctDscrptnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = this.productDetialService.getData();
        this.id = +this.data.prodId;
        this.itemType = this.data.itemType;
        this.productDetialService.GetProductDetails(this.id, this.itemType)
            .subscribe(function (data) {
            _this.Productdetials = data;
        });
        this.quantity = 1;
    };
    GwPrdctDscrptnComponent.prototype.IncreaseProductQuantity = function (items, itemcode) {
        this.quantity = this.quantity + 1;
        this.Productdetials.ItemDetail = items;
        this.Productdetials.ItemDetail.TotalPrice = this.Productdetials.ItemDetail.TotalPrice +
            (this.Productdetials.ItemDetail.retailerPrice * 1);
        this.Productdetials.ItemDetail.Price = this.Productdetials.ItemDetail.Price +
            (this.Productdetials.ItemDetail.acutalPrice * 1);
        this.Productdetials.ItemDetail.TotalDiscount = (this.Productdetials.ItemDetail.TotalDiscount * 1) +
            (this.Productdetials.ItemDetail.acutalPrice - this.Productdetials.ItemDetail.retailerPrice);
    };
    GwPrdctDscrptnComponent.prototype.DecreaseProductQuantity = function (items) {
        this.quantity = this.quantity - 1;
        if (this.quantity === 0) {
            this.quantity = 1;
            this.Productdetials.ItemDetail = items;
            this.Productdetials.ItemDetail.TotalPrice = this.Productdetials.ItemDetail.TotalPrice;
            this.Productdetials.ItemDetail.Price = this.Productdetials.ItemDetail.Price;
            this.Productdetials.ItemDetail.TotalDiscount = (this.Productdetials.ItemDetail.TotalDiscount * 1);
        }
        else {
            this.Productdetials.ItemDetail = items;
            this.Productdetials.ItemDetail.TotalPrice = this.Productdetials.ItemDetail.TotalPrice -
                (this.Productdetials.ItemDetail.retailerPrice * 1);
            this.Productdetials.ItemDetail.Price = this.Productdetials.ItemDetail.Price -
                (this.Productdetials.ItemDetail.acutalPrice * 1);
            this.Productdetials.ItemDetail.TotalDiscount = (this.Productdetials.ItemDetail.TotalDiscount * 1) -
                (this.Productdetials.ItemDetail.acutalPrice - this.Productdetials.ItemDetail.retailerPrice);
        }
        return this.itemsDetails;
    };
    GwPrdctDscrptnComponent.prototype.AddtoCart = function (products, _quantity) {
        this.type = 'cartItem';
        var ProductVm = {
            id: +products.Code,
            name: products.Name,
            itemType: products.Type,
            quantityPerUnit: products.itemsPerPiece,
            unitPrice: products.retailerPrice * products.itemsPerPiece,
            Msrp: products.acutalPrice,
            picture: products.Image,
            ranking: products.ranking,
            isVerified: 0,
            isPrdAttr: true,
            attrId: 0,
            quantity: _quantity,
            catId: products.category
        };
        this.cartService.addToCart(ProductVm, this.type);
        this.notifications.success('Success', '1 item is added to cart', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
        });
        this._navbar.change();
    };
    GwPrdctDscrptnComponent.prototype.AddtoWhishlist = function (products, _quantity) {
        this.type = 'wishListItem';
        var ProductVm = {
            id: +products.Code,
            name: products.Name,
            itemType: products.Type,
            quantityPerUnit: products.itemsPerPiece,
            unitPrice: products.retailerPrice,
            Msrp: products.acutalPrice,
            picture: products.Image,
            ranking: products.ranking,
            isVerified: 0,
            isPrdAttr: true,
            attrId: 0,
            quantity: _quantity,
            catId: products.category
        };
        this.cartService.addToCart(ProductVm, this.type);
        this.notifications.success('Success', '1 item is added to Whishlist', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
        });
        this._navbar.change();
    };
    GwPrdctDscrptnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gw-prdct-dscrptn',
            template: __webpack_require__("./src/app/gw-prdct-dscrptn/gw-prdct-dscrptn.component.html"),
            styles: [__webpack_require__("./src/app/gw-prdct-dscrptn/gw-prdct-dscrptn.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__Services_product_details_service__["a" /* ProductDetailsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__navbar_Services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_3__Common_cart_cart_service__["a" /* CartService */]])
    ], GwPrdctDscrptnComponent);
    return GwPrdctDscrptnComponent;
}());



/***/ }),

/***/ "./src/app/gw-srch/gw-srch.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gw-srch/gw-srch.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  gw-srch works!\n</p>\n"

/***/ }),

/***/ "./src/app/gw-srch/gw-srch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GwSrchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GwSrchComponent = /** @class */ (function () {
    function GwSrchComponent() {
    }
    GwSrchComponent.prototype.ngOnInit = function () {
    };
    GwSrchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gw-srch',
            template: __webpack_require__("./src/app/gw-srch/gw-srch.component.html"),
            styles: [__webpack_require__("./src/app/gw-srch/gw-srch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GwSrchComponent);
    return GwSrchComponent;
}());



/***/ }),

/***/ "./src/app/gw-wishlist/gw-wishlist.component.css":
/***/ (function(module, exports) {

module.exports = ".pad-top {\r\n    padding-top: 40px;\r\n}\r\n\r\n.cart-table thead tr th {\r\n    text-align: center;\r\n}\r\n\r\n.gw-add-btn {\r\n    background-color: #fff;\r\n    color: #0e76bc;\r\n    border: 1px solid #e1e7ec;\r\n}\r\n\r\n.table-fixed>tbody>tr>td,\r\n.table-fixed>tbody>tr>th,\r\n.table-fixed>tfoot>tr>td,\r\n.table-fixed>tfoot>tr>th,\r\n.table-fixed>thead>tr>td,\r\n.table-fixed>thead>tr>th {\r\n    padding: 8px;\r\n    line-height: 1.42857143;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #ddd;\r\n    color: #747d89;\r\n}\r\n\r\n.table-fixed>tbody>tr>td:first-child,\r\n.table-fixed>tbody>tr>th:first-child,\r\n.table-fixed>tfoot>tr>td:first-child,\r\n.table-fixed>tfoot>tr>th:first-child,\r\n.table-fixed>thead>tr>td:first-child,\r\n.table-fixed>thead>tr>th:first-child {\r\n    width: 35%;\r\n}\r\n\r\n.cart-div,\r\n.prdct-dtls {\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    z-index: 101;\r\n}\r\n\r\n.u-save {\r\n    margin-top: 5px;\r\n}\r\n\r\n.add-dlt-icon {\r\n    position: absolute;\r\n    right: 15px;\r\n    bottom: 5px;\r\n}\r\n\r\n.cstm-pnl-ht {\r\n    -webkit-box-shadow: 2px 2px 2px 0px #ddd;\r\n            box-shadow: 2px 2px 2px 0px #ddd;\r\n    border: 1px solid #ddd;\r\n    background-color: #fff;\r\n}\r\n\r\n.u-save>i {\r\n    padding-right: 5px;\r\n}\r\n\r\n.cart-div h4 {\r\n    margin-top: 0;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.value-of-prdcts {\r\n    border: 1px solid #ddd;\r\n    margin-top: 10px;\r\n}\r\n\r\n.value-of-prdcts h4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.cstm-pnl-ht .mrgn-top-xs {\r\n    margin-top: 20px;\r\n}\r\n\r\n.table-fixed tbody td,\r\n.table-fixed thead>tr>th {\r\n    border-bottom-width: 1px;\r\n    text-align: center\r\n}\r\n\r\n.empty-cart {\r\n    height: 320px;\r\n}\r\n\r\n.empty-cart .empty-cart-heading {\r\n    margin-top: 114px;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .gw-add-dlt-icns i {\r\n        margin: 0px;\r\n        font-size: 14px;\r\n    }\r\n    .gw-add-btn {\r\n        padding: 3px;\r\n    }\r\n    .cstm-pnl-ht {\r\n        -webkit-box-shadow: none;\r\n                box-shadow: none;\r\n        border: none;\r\n    }\r\n    .chck-dlvry-info {\r\n        margin-bottom: 20px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/gw-wishlist/gw-wishlist.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/Wishlist/Wishlist\">Wishlist</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n\n<div class=\"container\">\n    <div class=\"row cstm-pnl-ht\">\n        <div class=\"col-md-12 cart-div\" *ngIf='wishlist_count > 0'>\n                <simple-notifications></simple-notifications>\n            <h4 class=\"col-sm-4\">\n                <span class=\"space-tp-rt\">\n                    <i class=\"material-icons pull-left\">favorite</i>\n                </span> Wishlist (\n                <span>{{wishlist_count}}</span> Items)</h4>\n\n            <table class=\"table table-fixed  table-bordered text-center\">\n                <thead>\n                    <tr>\n                        <th>Description</th>\n                        <th>Quantity</th>\n                        <th colspan=\"3\"> Price</th>\n                    </tr>\n                    <tr>\n                        <th colspan=\"2\" style=\"border:none\"></th>\n                        <th>MRP</th>\n                        <th>Discount</th>\n                        <th>Total</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of wishlist\">\n                        <td style=\"position: relative;\">\n                            <p>{{item.ItemName}}</p>\n                            <p class=\"u-save text-primary\">\n                                <!-- <i class=\"material-icons\">enhanced_encryption</i> -->\n                                <i class=\"fa fa-fire\" aria-hidden=\"true\"></i>You save:\n                                <span>\n                                    <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                                    {{item.Price-item.OriginalPrice | number:'1.1-2'}}\n                                </span>\n                            </p>\n\n                            <span class=\"add-dlt-icon\">\n                                <a title=\"Add to cart\">\n                                    <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\" (click)=\"AddtoCart(item)\"></i>\n                                </a>\n                                <a title=\"Delete Item\">\n                                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)=\"DeleteWhistListItem(item)\"></i>\n                                </a>\n                            </span>\n                        </td>\n                        <td>\n                            <div class=\"btn-group\">\n                                <span class=\"btn btn-primary gw-add-btn\" (click)=\"DeletewishlistItem(item)\">-</span>\n                                <span class=\"btn btn-primary gw-add-btn\">{{item.quantity}}</span>\n                                <span class=\"btn btn-primary gw-add-btn\" (click)=\"UpdateWishlistItem(item)\">+</span>\n                            </div>\n\n\n                        </td>\n                        <td>\n\n                            <p>\n                                <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{item.Price}}</p>\n\n                        </td>\n                        <td>\n                            <p>\n                                <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{(item.Price-item.OriginalPrice) * item.quantity | number:'1.1-2'}}</p>\n                        </td>\n                        <td>\n                            <p>\n                                <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{item.quantity * item.OriginalPrice | number:'1.0-2'}}</p>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n        <div class=\"col-md-12 cart-div empty-cart text-center\" *ngIf='wishlist_count === 0'>\n            <h4 class=\"empty-cart-heading\">\n                <i class=\"material-icons\">shopping_cart</i>\n                <br/> {{Message}}\n            </h4>\n        </div>\n\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/gw-wishlist/gw-wishlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GwWishlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Common_cart_cart_service__ = __webpack_require__("./src/app/Common/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_Services_user_service__ = __webpack_require__("./src/app/login/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GwWishlistComponent = /** @class */ (function () {
    function GwWishlistComponent(_cartservice, _navbar, notifications, userservice) {
        this._cartservice = _cartservice;
        this._navbar = _navbar;
        this.notifications = notifications;
        this.userservice = userservice;
        this.wishlist_count = 0;
        this.count = 0;
        this.wishlist_TotalAmount = 0;
        this.wishlist_DiscountAmunt = 0;
        this.wishlit_ActualAmount = 0;
        this.wishlist = [];
        this.token = sessionStorage.getItem('userToken');
    }
    GwWishlistComponent.prototype.ngOnInit = function () {
        this.LoadCartItem();
    };
    GwWishlistComponent.prototype.LoadCartItem = function () {
        if (this.token === null || this.token === '') {
            var wishlist_Obj = JSON.parse(localStorage.getItem('wishlistobj'));
            this.wishlist_count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
            if (this.wishlist_count > 0) {
                for (var i = 0; i < wishlist_Obj.length; i++) {
                    var item = JSON.parse(wishlist_Obj[i]);
                    this.wishlit_ActualAmount += ((item.Price * item.quantity));
                    this.wishlist_DiscountAmunt += (item.Price - item.OriginalPrice) * item.quantity;
                    this.wishlist_TotalAmount += (item.OriginalPrice * item.quantity);
                    this.wishlist.push(item);
                }
                return wishlist_Obj;
            }
            else {
                this.Message = 'No Items In whishlist';
            }
        }
        else {
            var wishlist_Obj = JSON.parse(sessionStorage.getItem('userWhishList'));
            this.wishlist_count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
            this.count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
            if (this.wishlist_count > 0) {
                for (var i = 0; i < wishlist_Obj.length; i++) {
                    var item = wishlist_Obj[i];
                    this.wishlit_ActualAmount += ((item.Price * item.quantity));
                    this.wishlist_DiscountAmunt += (item.Price - item.OriginalPrice) * item.quantity;
                    this.wishlist_TotalAmount += (item.OriginalPrice * item.quantity);
                    this.wishlist.push(item);
                }
                return wishlist_Obj;
            }
            else {
                this.Message = 'No Items In whishlist';
            }
        }
    };
    GwWishlistComponent.prototype.UpdateWishlistItem = function (item) {
        var localstorageCartObj = this._cartservice.UpdateWishlistQuantity(item);
        var cartTotal = this.GetCartTotal();
        return localstorageCartObj;
    };
    GwWishlistComponent.prototype.DeletewishlistItem = function (item) {
        var localstorageCartObj = this._cartservice.DeletewishlistQuantity(item);
        var cartTotal = this.GetCartTotal();
        return localstorageCartObj;
    };
    GwWishlistComponent.prototype.GetCartTotal = function () {
        this.wishlist_TotalAmount = 0;
        this.wishlist_DiscountAmunt = 0;
        this.wishlit_ActualAmount = 0;
        if (this.token === null || this.token === '') {
            var wishlist_Obj = JSON.parse(localStorage.getItem('wishlistobj'));
            for (var i = 0; i < wishlist_Obj.length; i++) {
                var obj = JSON.parse(wishlist_Obj[i]);
                this.wishlit_ActualAmount += ((obj.Price * obj.quantity));
                this.wishlist_DiscountAmunt += (obj.Price - obj.OriginalPrice) * obj.quantity;
                this.wishlist_TotalAmount += (obj.OriginalPrice * obj.quantity);
            }
            return wishlist_Obj;
        }
        else {
            var wishlist_Obj = JSON.parse(sessionStorage.getItem('userWhishList'));
            this.wishlist_count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
            this.count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
            if (this.wishlist_count > 0) {
                for (var i = 0; i < wishlist_Obj.length; i++) {
                    var obj = wishlist_Obj[i];
                    this.wishlit_ActualAmount += ((obj.Price * obj.quantity));
                    this.wishlist_DiscountAmunt += (obj.Price - obj.OriginalPrice) * obj.quantity;
                    this.wishlist_TotalAmount += (obj.OriginalPrice * obj.quantity);
                }
                return wishlist_Obj;
            }
            else {
                this.Message = 'No Items In whishlist';
            }
        }
    };
    GwWishlistComponent.prototype.AddtoCart = function (wishlist) {
        var type = 'cartItem';
        var Product = {
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
        this.notifications.success('Success', '1 item is added to cart', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
        });
        this._navbar.change();
    };
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
    GwWishlistComponent.prototype.DeleteWhistListItem = function (item) {
        var _this = this;
        var type = 'wishListItem';
        this.wishlist = [];
        this.wishlist_TotalAmount = 0;
        this.wishlist_DiscountAmunt = 0;
        this.wishlit_ActualAmount = 0;
        if (this.token === null || this.token === '') {
            var localstorageCartObj = this._cartservice.DeleteCartItem(item, type);
            this._navbar.change();
            var wishlist_Obj = JSON.parse(localStorage.getItem('wishlistobj'));
            this.wishlist_count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
            this.count = wishlist_Obj === null ? 0 : wishlist_Obj.length;
            if (this.wishlist_count > 0) {
                for (var i = 0; i < wishlist_Obj.length; i++) {
                    var items = JSON.parse(wishlist_Obj[i]);
                    this.wishlit_ActualAmount += ((items.Price * items.quantity));
                    this.wishlist_DiscountAmunt += (items.Price - items.OriginalPrice) * items.quantity;
                    this.wishlist_TotalAmount += (items.OriginalPrice * items.quantity);
                    this.wishlist.push(items);
                }
                this.notifications.error('Deleted', '1 item is removed from whishlist', {
                    timeOut: 3000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    clickToClose: true,
                    maxLength: 50
                });
                return wishlist_Obj;
            }
            else {
                this.Message = 'No Items In whishList';
            }
        }
        else {
            this._cartservice.DeleteWhishListItem(item, type).toPromise().then(function (respe) {
                if (respe === '200') {
                    var token = sessionStorage.getItem('userToken');
                    var userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
                    _this.userservice.GetUserCartData(token, userId).subscribe(function (resp) {
                        _this.userdata = resp;
                        sessionStorage.setItem('userCartITem', JSON.stringify(_this.userdata.userCartList));
                        sessionStorage.setItem('userWhishList', JSON.stringify(_this.userdata.userWishlist));
                        _this._navbar.name = _this.userdata.customerdata.firstname;
                        _this.notifications.info('Deleted', '1 item is removed from whishlist', {
                            timeOut: 3000,
                            showProgressBar: true,
                            pauseOnHover: false,
                            clickToClose: true,
                            maxLength: 50
                        });
                        _this._navbar.change();
                        _this.LoadCartItem();
                    });
                }
                else {
                    // tslint:disable-next-line:no-debugger
                    debugger;
                    _this._cartservice.DeleteItemWhishlist(item);
                    _this.notifications.error('Deleted', '1 item is removed from whishlist', {
                        timeOut: 3000,
                        showProgressBar: true,
                        pauseOnHover: false,
                        clickToClose: true,
                        maxLength: 50
                    });
                    _this._navbar.change();
                    _this.LoadCartItem();
                }
            });
        }
    };
    GwWishlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gw-wishlist',
            template: __webpack_require__("./src/app/gw-wishlist/gw-wishlist.component.html"),
            styles: [__webpack_require__("./src/app/gw-wishlist/gw-wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Common_cart_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_2__navbar_Services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_3__login_Services_user_service__["a" /* UserService */]])
    ], GwWishlistComponent);
    return GwWishlistComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n<app-gnrc-services></app-gnrc-services>\n<app-gw-ltst-prdcts></app-gw-ltst-prdcts>\n<app-gw-pplr-prdcts></app-gw-pplr-prdcts>\n\n\n<app-popular-brands></app-popular-brands>\n\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/hstry-of-gnrc-drugs/hstry-of-gnrc-drugs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hstry-of-gnrc-drugs/hstry-of-gnrc-drugs.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/History Of Generic Drugs\">History Of Generic Drugs</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container trmsandcndtns\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <h3>History Of Generic Drugs</h3>\n\n            <p>\n                The origin of Generic Drugs can be found from 1920s, Bayer a Pharmaceutical Company that produces Aspirin fought vigorously to keep generic versions off the shelves. Bayer lost in court, and consumers suddenly had an array of choices in generic aspirin.\n                Today, generic drugs are both widely available and carefully regulated. This wasn't always the case. Before some decades back, drug companies could release new products with far less testing than is required today. The real test of a drug's\n                safety and effectiveness came after its entry into the market. If too many patients had bad reactions, the drug could be pulled off the shelves. The danger of this approach became tragically clear when the sedative Thalidomide caused thousands\n                of devastating birth defects in Europe, Canada, Latin America, Africa, and Asia.\n            </p>\n            <h4>New regulations</h4>\n            <p>\n                Those days effectively ended in 1962 when the Food and Drug Administration dramatically revamped the Federal Food, Drug, and Cosmetic Act, originally passed in 1938. It strengthened the drug testing laws already on the books, and for the first time, companies\n                were required to prove that a drug was both safe and effective before it reached the market place. All new drugs had to go through a lengthy and expensive process that included large-scale human trials.\n            </p>\n\n\n            <p>\n                The new regulations applied to both brand name and generic drugs, a fact that slowed the release of new generics to a trickle. New generic drug’s had to go through the same investigational trials as any other drugs, even if its active ingredients were\n                identical to an already established brand name drug. Companies also had to wait for the brand name patent to expire before they could even do the testing required to produce a generic. Most companies did not bother. By 1983, only 35 percent\n                of the top-selling drugs with expired patents had a generic competitor, according to the Congressional Budget Office.\n            </p>\n            <h4>Stiff competition</h4>\n            <p>\n                Today, the rate of competition is closer to 100%. Generic versions crop up almost immediately after the patent on a brand name drug expires. The floodgates opened in 1984 with the passage of the Drug Price Competition and Patent Term Restoration Act,\n                commonly known as the Hatch-Waxman Act. The FDA calls it \"one of the most successful pieces of legislation ever passed.\"\n            </p>\n            <p>\n                The new law made it much easier and cheaper to bring a new generic drug to market. Instead of going through lengthy human trials, companies merely had to prove that their drug had the same active ingredients and that they performed in the body the same\n                way as the brand-name drug. The act also increased the amount of time a company could hold an exclusive patent on a new drug. Within a year, the FDA received more than 1,000 applications for new generic drugs, and the Generic Drug industry\n                was born.\n            </p>\n            <p>\n                The act dramatically changed the face of medicine. We've come a long way since the time when generic aspirin first hit the shelves.\n            </p>\n            <h4>References:</h4>\n            <p>\n                U.S. Food and Drug Administration. Generic Drugs: Myths and Facts. July 2009.\n            </p>\n            <p>\n                Food and Drug Administration. Consumer Education: What You Should Know About Buying and Using Generic Drugs. July 2009.\n            </p>\n            <p>Russell Mokhiber. The Tragic Children of Thalidomide. The Multinational Monitor. April 1987. Volume 8, Number4.</p>\n            <p>U.S. Food and Drug Administration. Generic Drugs. 2009.</p>\n            <p>Nolan S . What every physician should know about generic drugs. Family Practice Management. March, 2002. 9(3): 45-46.\n            </p>\n            <p>American Academy of Family Physicians. Position paper. Drugs, Generic. 2001.</p>\n            <p>Consumers Union. Low-cost generic antidepressants could save consumers $1,200 a year or more. February 2005.</p>\n            <p>Pharmacy Checker.com. November 2010.</p>\n            <p>American Academy of Family Physicians. Position paper. Drugs, Generic. 2001.</p>\n            <p>Mofsen, R et al. Case reports of the reemergence of psychotic symptoms after conversion from brand name clozapine to a generic formulation. Clinic Ther 2001, Oct; 23(10): 1720-31.</p>\n            <p>Mohler P and S Nolan. What every physician should know about generic drugs. Family Practice Management. March, 2002. 9(3): 45-46.</p>\n            <p>Tufts University. Are you tapping the value of generic drugs? March 5, 2002.</p>\n            <p>Physicians say no to automatic therapeutic drug substitutions. Amednews.com Jan 2001.</p>\n            <p>Report 6 of the Council on Scientific Affairs (A-02) -- Generic Drugs National Institute for Health Care Management -- A Primer: Generic Drugs, Patents, and the Pharmaceutical Marketplace</p>\n            <p>U.S. FDA ANDA (Generic) Drug Approvals Updated Nov 15, 2010</p>\n            <p>Consumer Education: Generic Drugs. U.S. Food and Drug Administration. Updated April 10, 2006</p>\n            <p>Purris, L. Strategies to Increase Generic Drug Utilization and Associated Savings. AARP Public Policy Institute. December 2008.</p>\n            <p>U.S. FDA. Saving Money on Prescription Drugs. FDA Consumer Magazine. Sept-Oct 2005.</p>\n            <p>U.S. FDA. Approved Drug Products with Therapeutic Equivalence Evaluations. 28th Edition. 2008.</p>\n            <p>Food and Drug Administration. Frequently Asked Questions about Generic Drugs. October 2007.</p>\n            <p>Food and Drug Administration. Generic Drugs: Questions and Answers. Updated September 9, 2010</p>\n\n        </div>\n\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/hstry-of-gnrc-drugs/hstry-of-gnrc-drugs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HstryOfGnrcDrugsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HstryOfGnrcDrugsComponent = /** @class */ (function () {
    function HstryOfGnrcDrugsComponent() {
    }
    HstryOfGnrcDrugsComponent.prototype.ngOnInit = function () {
    };
    HstryOfGnrcDrugsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hstry-of-gnrc-drugs',
            template: __webpack_require__("./src/app/hstry-of-gnrc-drugs/hstry-of-gnrc-drugs.component.html"),
            styles: [__webpack_require__("./src/app/hstry-of-gnrc-drugs/hstry-of-gnrc-drugs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HstryOfGnrcDrugsComponent);
    return HstryOfGnrcDrugsComponent;
}());



/***/ }),

/***/ "./src/app/login/Services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(_httpclient) {
        this._httpclient = _httpclient;
        this.rootUrl = 'http://localhost:31029';
    }
    UserService.prototype.UserAuthentication = function (login) {
        var loginData = 'username=' + login.username + '&Password=' + login.password + '&grant_type=password';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this._httpclient.post('http://localhost:31029/token', loginData, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.UserCartData = function (userCartData, userToken, userId) {
        var body = JSON.stringify(userCartData);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + userToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._httpclient.post('http://localhost:31029/api/data/customercart?userId=' + userId, body, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.GetUserCartData = function (userToken, userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + userToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._httpclient.get('http://localhost:31029/api/data/getcustomercart?userId=' + userId, options)
            .map((function (res) {
            var data = res.json();
            return data;
        }));
    };
    UserService.prototype.ExteranlLogin = function (user, type) {
        var body = JSON.stringify(user);
        var typeofUser = type;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._httpclient.post('http://localhost:31029/api/data/externalLogin?provider=' + type, body, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.UserDetails = function (login, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._httpclient.get('http://localhost:31029/api/data/getcustomerdata?username=' + login.username + '&password='
            + login.password, options).map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-fb {\r\n    background: #3b5998;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n    border-color: #3b5998;\r\n}\r\n\r\n.btn-ggl {\r\n    background: #c32f10;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n    border-color: #c32f10;\r\n}\r\n\r\ninput.ng-dirty {\r\n    border-bottom: 1px solid #a94442;\r\n}\r\n\r\ninput.ng-valid[required] {\r\n    border-bottom: 1px solid #42A948;\r\n}\r\n\r\n.main {\r\n    -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.24);\r\n    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.24);\r\n    /* background: #00aaff; */\r\n    padding: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.left-side {\r\n    /* background: #00aaff; */\r\n    color: #fff;\r\n    padding: 50px 10px 50px 20px;\r\n    background: url('/assets/img/login_bg.jpg') no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.left-side h3,\r\n.left-side h4,\r\n.left-side p {\r\n    color: #fff;\r\n}\r\n\r\n.right-side {\r\n    background-color: #fff;\r\n    padding: 60px 30px;\r\n}\r\n\r\n.form-control {\r\n    display: block;\r\n    width: 100%;\r\n    height: 34px;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    line-height: 1.42857143;\r\n    color: #555;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    border: none;\r\n    border-radius: 0;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 35px;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .main {\r\n        -webkit-box-shadow: none;\r\n                box-shadow: none;\r\n        margin-top: 0;\r\n    }\r\n    .right-side {\r\n        border: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pad-top login\">\n    <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 main\">\n\n            <div class=\"col-md-6 col-sm-6  hidden-xs left-side\">\n                <h3 class=\"text-center\">Genericwala.com</h3>\n                <p>Generiwala.com is an online pharmacy, </p>\n                <p>we provide you quality generic medicines that are\n                    <p>produced by reputed Companies at affordable price.</p>\n                    <h4 class=\"text-center\">Login With</h4>\n                    <div class=\"text-center\">\n                        <button type=\"button\" class=\"btn btn-primary btn-fb\" (click)='signInWithFB()'>\n                            <span>\n                                <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                            </span>Facebook</button>\n                        <button type=\"button\" class=\"btn btn-danger btn-ggl\" (click)='signInWithGoogle()'>\n                            <span>\n                                <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n                            </span>Google</button>\n                    </div>\n            </div>\n            <div class=\"col-md-6 col-sm-6 right-side\">\n\n                <div *ngIf=\"isLoginError\" class=\"alert alert-danger\">\n                    <p>invalid username and password</p>\n                </div>\n                <form #loginForm=\"ngForm\" class=\"\" (ngSubmit)=\"submitForm(loginForm)\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Username\" [(ngModel)]=\"username\" required>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n                    </div>\n\n                    <div class=\"form-group pull-right\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-sbmt\" [disabled]=\"!loginForm.form.valid\" (onclick)=\"LoginMe()\">Login</button>\n                        <button type=\"button\" class=\"btn btn-warning btn-bk\" routerLink=\"/Signup/Signup\">\n                            Sign Up\n                        </button>\n                    </div>\n                </form>\n            </div>\n            <div class=\"text-center col-xs-12 hidden-md hidden-lg hidden-sm\">\n                <h4 class=\"text-center\">Login With</h4>\n                <button type=\"button\" class=\"btn btn-primary btn-fb\" (click)='signInWithFB()'>\n                                <span>\n                                    <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                                </span>Facebook</button>\n                <button type=\"button\" class=\"btn btn-danger btn-ggl\" (click)='signInWithGoogle()'>\n                                <span>\n                                    <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n                                </span>Google</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service__ = __webpack_require__("./src/app/login/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular4_social_login__ = __webpack_require__("./node_modules/angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userservice, _navbar, authService) {
        this.router = router;
        this.userservice = userservice;
        this._navbar = _navbar;
        this.authService = authService;
        this.login = {
            username: ' ',
            password: ' ',
        };
        this.cartdata = [];
        this.wishList_Data = [];
        this.isLoginError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.authService.authState.subscribe((user) => {
        //   this.socialUser = user;
        //   if (user != null) {
        //     this.userservice.ExteranlLogin(this.socialUser, this.typeofUser).toPromise().then((respe) => {
        //       this.userdetail = respe;
        //       sessionStorage.setItem('customerdata', JSON.stringify(this.userdetail));
        //       sessionStorage.setItem('userToken', this.userdetail.access_token);  // getting access token
        var _this = this;
        //       if (respe !== null) {
        //         const user_id = respe.userId.toString();
        //         this._navbar.name = respe.firstname;
        //         this._navbar.change();
        //         this.userservice.GetUserCartData(respe.access_token, user_id).subscribe((resp) => {
        //           this.userdata = resp;
        //           sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
        //           sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
        //           this._navbar.change();
        //           this.router.navigate(['/Home']);
        //         });
        //       }
        //     });
        //   }
        // });
        // tslint:disable-next-line:no-debugger
        debugger;
        this.authService.authState.subscribe(function (user) {
            // tslint:disable-next-line:no-debugger
            debugger;
            console.log(user);
            _this.socialUser = user;
            if (user != null) {
                _this.userservice.ExteranlLogin(_this.socialUser, _this.typeofUser).toPromise().then(function (respe) {
                    _this.userdetail = respe;
                    sessionStorage.setItem('customerdata', JSON.stringify(_this.userdetail));
                    sessionStorage.setItem('userToken', _this.userdetail.access_token); // getting access token
                    // tslint:disable-next-line:no-debugger
                    debugger;
                    var userdata = JSON.parse(sessionStorage.getItem('customerdata'));
                    var cartobj = JSON.parse(localStorage.getItem('cartobj'));
                    var whishlistobj = JSON.parse(localStorage.getItem('wishlistobj'));
                    if (cartobj != null || whishlistobj != null) {
                        //  this.InsertingCartData(this.userdetail, this.userdetail.access_token, respe.userId.toString());
                        // tslint:disable-next-line:no-debugger
                        debugger;
                        _this.PushCartData(_this.userdetail.access_token, respe.userId.toString());
                    }
                    else {
                        // tslint:disable-next-line:no-debugger
                        debugger;
                        var user_id = respe.userId.toString();
                        _this._navbar.name = respe.firstname;
                        _this._navbar.change();
                        _this.userservice.GetUserCartData(respe.access_token, user_id).subscribe(function (resp) {
                            // tslint:disable-next-line:no-debugger
                            debugger;
                            _this.userdata = resp;
                            sessionStorage.setItem('userCartITem', JSON.stringify(_this.userdata.userCartList));
                            sessionStorage.setItem('userWhishList', JSON.stringify(_this.userdata.userWishlist));
                            _this._navbar.change();
                            _this.router.navigate(['/Home']);
                        });
                    }
                    // if (respe !== null) {
                    //   const user_id = respe.userId.toString();
                    //   this._navbar.name = respe.firstname;
                    //   this._navbar.change();
                    //   this.userservice.GetUserCartData(respe.access_token, user_id).subscribe((resp) => {
                    //     this.userdata = resp;
                    //     sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
                    //     sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
                    //     this._navbar.change();
                    //     this.router.navigate(['/Home']);
                    //   });
                    // }
                });
            }
        });
    };
    LoginComponent.prototype.submitForm = function (form) {
        var _this = this;
        var login = {
            username: form.value.username,
            password: form.value.password
        };
        this.userservice.UserAuthentication(login).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var userId_1, userdata, data1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sessionStorage.setItem('userToken', data.access_token);
                        if (!(data.access_token != null)) return [3 /*break*/, 3];
                        userId_1 = '';
                        userdata = JSON.parse(sessionStorage.getItem('customerdata'));
                        if (!(userdata === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userservice.UserDetails(login, data.access_token).toPromise().then(function (respdata) {
                                _this.userdetail = respdata;
                                userId_1 = _this.userdetail.userId.toString();
                                _this._navbar.name = respdata.firstname;
                                _this._navbar.change();
                                sessionStorage.setItem('customerdata', JSON.stringify(_this.userdetail));
                            })];
                    case 1:
                        data1 = _a.sent();
                        _a.label = 2;
                    case 2:
                        this._navbar.change();
                        this.InsertingCartData(login, data.access_token, userId_1);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); }, function (err) {
            form.resetForm();
            _this.isLoginError = true;
        });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        this.typeofUser = 'google';
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_4_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID);
    };
    LoginComponent.prototype.signInWithFB = function () {
        this.typeofUser = 'facebook';
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_4_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID);
    };
    LoginComponent.prototype.signOut = function () {
        // tslint:disable-next-line:no-debugger
        debugger;
        this.authService.signOut();
    };
    LoginComponent.prototype.userdataDetails = function (token, userId) {
        var _this = this;
        this.userservice.GetUserCartData(token, userId).subscribe(function (respe) {
            _this.userdata = respe;
            alert(_this.userdata.customerdata);
            sessionStorage.setItem('customerdata', JSON.stringify(_this.userdata.customerdata));
            sessionStorage.setItem('userCartITem', JSON.stringify(_this.userdata.userCartList));
            sessionStorage.setItem('userWhishList', JSON.stringify(_this.userdata.userWishlist));
            _this._navbar.name = _this.userdata.customerdata.firstname;
            _this._navbar.change();
        });
    };
    LoginComponent.prototype.getdatauser = function (login, acces_token) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userId, userdata, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = '';
                        userdata = JSON.parse(sessionStorage.getItem('customerdata'));
                        if (!(userdata !== null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userservice.UserDetails(login, acces_token).subscribe(function (respdata) {
                                _this.userdetail = respdata;
                                userId = _this.userdetail.userId.toString();
                                sessionStorage.setItem('customerdata', JSON.stringify(_this.userdetail));
                                var data1 = _this.userdataDetails(acces_token, userId);
                            })];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, userId];
                    case 2: return [2 /*return*/, 0];
                }
            });
        });
    };
    LoginComponent.prototype.InsertingCartData = function (login, token, userId) {
        var _this = this;
        var userdata = JSON.parse(sessionStorage.getItem('customerdata'));
        var cartobj = JSON.parse(localStorage.getItem('cartobj'));
        var whishlistobj = JSON.parse(localStorage.getItem('wishlistobj'));
        if (cartobj != null || whishlistobj != null) {
            this.cartdata = [];
            this.wishList_Data = [];
            if (cartobj != null) {
                for (var i = 0; i < cartobj.length; i++) {
                    var item = JSON.parse(cartobj[i]);
                    this.cartdata.push(item);
                }
            }
            if (whishlistobj != null) {
                this.wishList_Data = [];
                for (var i = 0; i < whishlistobj.length; i++) {
                    var item = JSON.parse(whishlistobj[i]);
                    this.wishList_Data.push(item);
                }
            }
            this.userdata = {
                userCartList: this.cartdata,
                userWishlist: this.wishList_Data,
                customerdata: null
            };
            if (this.userdata.userCartList.length > 0 || this.userdata.userWishlist.length > 0) {
                this.userservice.UserCartData(this.userdata, token, userId).subscribe(function (resp) {
                    if (resp === '200') {
                        _this.userservice.GetUserCartData(token, userId).subscribe(function (respe) {
                            _this.userdata = respe;
                            sessionStorage.setItem('userCartITem', JSON.stringify(_this.userdata.userCartList));
                            sessionStorage.setItem('userWhishList', JSON.stringify(_this.userdata.userWishlist));
                            _this._navbar.name = _this.userdata.customerdata.firstname;
                            _this._navbar.change();
                        });
                    }
                });
            }
            this.router.navigate(['/Home']);
        }
        else {
            if (userdata === null) {
                this.userservice.UserDetails(login, token).subscribe(function (respdata) {
                    console.log('here is user daa ' + respdata);
                    _this.userdetail = respdata;
                    userId = _this.userdetail.userId.toString();
                    sessionStorage.setItem('customerdata', JSON.stringify(_this.userdetail));
                    var data1 = _this.userdataDetails(token, userId);
                });
            }
            else {
                this.userservice.GetUserCartData(token, userId).subscribe(function (respe) {
                    _this.userdata = respe;
                    sessionStorage.setItem('userCartITem', JSON.stringify(_this.userdata.userCartList));
                    sessionStorage.setItem('userWhishList', JSON.stringify(_this.userdata.userWishlist));
                    _this._navbar.name = _this.userdata.customerdata.firstname;
                    _this._navbar.change();
                });
            }
            this.router.navigate(['/Home']);
        }
    };
    LoginComponent.prototype.PushCartData = function (token, userId) {
        var _this = this;
        var userdata = JSON.parse(sessionStorage.getItem('customerdata'));
        var cartobj = JSON.parse(localStorage.getItem('cartobj'));
        var whishlistobj = JSON.parse(localStorage.getItem('wishlistobj'));
        if (cartobj != null || whishlistobj != null) {
            this.cartdata = [];
            this.wishList_Data = [];
            if (cartobj != null) {
                for (var i = 0; i < cartobj.length; i++) {
                    var item = JSON.parse(cartobj[i]);
                    this.cartdata.push(item);
                }
            }
            if (whishlistobj != null) {
                this.wishList_Data = [];
                for (var i = 0; i < whishlistobj.length; i++) {
                    var item = JSON.parse(whishlistobj[i]);
                    this.wishList_Data.push(item);
                }
            }
            this.userdata = {
                userCartList: this.cartdata,
                userWishlist: this.wishList_Data,
                customerdata: null
            };
            if (this.userdata.userCartList.length > 0 || this.userdata.userWishlist.length > 0) {
                this.userservice.UserCartData(this.userdata, token, userId).subscribe(function (resp) {
                    // tslint:disable-next-line:no-debugger
                    debugger;
                    if (resp === '200') {
                        _this.userservice.GetUserCartData(token, userId).subscribe(function (respe) {
                            // tslint:disable-next-line:no-debugger
                            debugger;
                            _this.userdata = respe;
                            sessionStorage.setItem('userCartITem', JSON.stringify(_this.userdata.userCartList));
                            sessionStorage.setItem('userWhishList', JSON.stringify(_this.userdata.userWishlist));
                            _this._navbar.name = _this.userdata.customerdata.firstname;
                            _this._navbar.change();
                        });
                    }
                });
            }
            this.router.navigate(['/Home']);
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__navbar_Services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_4_angular4_social_login__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/lst-of-mdcns/lst-of-mdcns.component.css":
/***/ (function(module, exports) {

module.exports = ".m-list a {\r\n    cursor: pointer;\r\n    color: #747d89;\r\n    font-size: 13px;\r\n    -webkit-transition: all .5s;\r\n    transition: all .5s;\r\n}\r\n\r\n.panel-heading {\r\n    color: #747d89;\r\n    cursor: pointer;\r\n}\r\n\r\n.panel-title>a:before {\r\n    float: right !important;\r\n    font-family: FontAwesome;\r\n    content: \"\\f106\";\r\n    padding-right: 5px;\r\n}\r\n\r\n.panel-title>a.collapsed:before {\r\n    font-family: FontAwesome;\r\n    float: right !important;\r\n    content: \"\\f107\";\r\n}\r\n\r\n.m-list a:hover {\r\n    color: #f67f57;\r\n}\r\n\r\n.m-list a:hover::before {\r\n    content: \"\\f101\";\r\n    font-family: FontAwesome;\r\n    padding-right: 5px;\r\n    color: #f67f57;\r\n}"

/***/ }),

/***/ "./src/app/lst-of-mdcns/lst-of-mdcns.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/about-us\">List of medicines</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <h3>List of Medicines</h3>\n    <div class=\"row\">\n\n        <div class=\"panel-group\">\n            <div class=\"panel panel-default\" *ngFor=\"let items of list_of_products;let i = index\">\n                <div class=\"panel-heading\" (click)=\"showContent(this,i)\">\n                    <h4 class=\"panel-title\">\n                        <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"\" aria-expanded=\"true\">\n                        {{items.Name}} \n                    </a>\n                    </h4>\n                </div>\n                <div class=\"panel-collapse collapse in\" *ngIf=\"selectedIndex == i &&  isToggled===true\">\n                    <div class=\"panel-body\" *ngIf=\"items.SubCategory.length>0\">\n                        <div class=\"col-xs-12\" *ngFor=\"let subcat  of items.SubCategory\">\n                            <h5>{{subcat.Name}}</h5>\n                            <div class=\"med-name\">\n\n                                <div class=\"col-xs-12 col-md-3 m-list\" *ngFor=\"let products  of subcat.ProductsSubCategory\">\n                                    <a (click)=\"ProductDetails(products.ItemCode,products.itemType,products.Name)\">\n                                        {{products.Name}}\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/lst-of-mdcns/lst-of-mdcns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LstOfMdcnsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_generic_meds_services_allgenericmedicines_service__ = __webpack_require__("./src/app/all-generic-meds/services/allgenericmedicines.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Common_cart_cart_service__ = __webpack_require__("./src/app/Common/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gw_prdct_dscrptn_Services_product_details_service__ = __webpack_require__("./src/app/gw-prdct-dscrptn/Services/product-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LstOfMdcnsComponent = /** @class */ (function () {
    function LstOfMdcnsComponent(allgenericmedicineservice, router, cartService, NavbarServices, _productService) {
        this.allgenericmedicineservice = allgenericmedicineservice;
        this.router = router;
        this.cartService = cartService;
        this.NavbarServices = NavbarServices;
        this._productService = _productService;
        this.list_of_products = [];
        this.selectedIndex = -1;
    }
    LstOfMdcnsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isToggled = false;
        this.allgenericmedicineservice.GetProductList().subscribe(function (catdata) {
            _this.list_of_products = catdata;
        }, function (error) {
            _this.statusMesssage = 'There is problem with service';
        });
    };
    LstOfMdcnsComponent.prototype.showContent = function (evt, index) {
        if (this.isToggled === false) {
            this.isToggled = true;
            this.selectedIndex = index;
        }
        else {
            if (this.selectedIndex === index) {
                this.isToggled = false;
                this.selectedIndex = index;
            }
            else {
                this.isToggled = true;
                this.selectedIndex = index;
            }
        }
    };
    LstOfMdcnsComponent.prototype.ProductDetails = function (ItemCode, itemType, iteName) {
        this.produtDetial = {
            prodId: ItemCode,
            itemType: itemType
        };
        iteName = iteName.replace(/\s/g, '-');
        iteName = iteName.substr(0, iteName.length - 1);
        this._productService.setData(this.produtDetial);
        this.router.navigate(['/ItemDetails', iteName]);
    };
    LstOfMdcnsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lst-of-mdcns',
            template: __webpack_require__("./src/app/lst-of-mdcns/lst-of-mdcns.component.html"),
            styles: [__webpack_require__("./src/app/lst-of-mdcns/lst-of-mdcns.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__all_generic_meds_services_allgenericmedicines_service__["a" /* AllgenericmedicinesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__Common_cart_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_4__navbar_Services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_5__gw_prdct_dscrptn_Services_product_details_service__["a" /* ProductDetailsService */]])
    ], LstOfMdcnsComponent);
    return LstOfMdcnsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/Models/search-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchViewModel; });
/* unused harmony export Searchitem */
/* unused harmony export Compostion */
/* unused harmony export Generics */
/* unused harmony export Productlist */
var SearchViewModel = /** @class */ (function () {
    function SearchViewModel() {
    }
    return SearchViewModel;
}());

var Searchitem = /** @class */ (function () {
    function Searchitem() {
    }
    return Searchitem;
}());

var Compostion = /** @class */ (function () {
    function Compostion() {
    }
    return Compostion;
}());

var Generics = /** @class */ (function () {
    function Generics() {
    }
    return Generics;
}());

var Productlist = /** @class */ (function () {
    function Productlist() {
    }
    return Productlist;
}());



/***/ }),

/***/ "./src/app/navbar/Services/navbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.isSidebarVisible = false;
        this.navbarVisibilityChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.info = {
            isUserLoggedIn: this.GetAccessToken(),
            cartvalues: this.LoadCart(),
            whishlitvalue: this.Loadwishlist(),
            username: this.Profile()
        };
    }
    NavbarService.prototype.change = function () {
        this.name = this.Profile();
        this.username = this.username;
        this.info.isUserLoggedIn = this.GetAccessToken();
        this.info.cartvalues = this.LoadCart();
        this.info.whishlitvalue = this.Loadwishlist();
    };
    NavbarService.prototype.LoadCart = function () {
        var isvalid = this.GetAccessToken();
        if (localStorage.getItem('cartobj') != null && (isvalid === false)) {
            var count = (JSON.parse(localStorage.getItem('cartobj'))).length;
            return count;
        }
        if (sessionStorage.getItem('userCartITem') != null && isvalid === true && sessionStorage.getItem('userCartITem') !== 'null') {
            localStorage.clear();
            var userCartITem = JSON.parse(sessionStorage.getItem('userCartITem'));
            var count = userCartITem.length === undefined ? 0 : userCartITem.length;
            return count;
        }
        else {
            var count = 0;
            return count;
        }
    };
    NavbarService.prototype.Loadwishlist = function () {
        var isvalid = this.GetAccessToken();
        if (localStorage.getItem('wishlistobj') != null && (isvalid === false)) {
            var count = JSON.parse(localStorage.getItem('wishlistobj')).length === null ? 0 :
                JSON.parse(localStorage.getItem('wishlistobj')).length;
            return count;
        }
        if (sessionStorage.getItem('userWhishList') != null && isvalid === true && sessionStorage.getItem('userWhishList') !== 'null') {
            localStorage.clear();
            var userWhishList = JSON.parse(sessionStorage.getItem('userWhishList'));
            var count = userWhishList.length === undefined ? 0 : userWhishList.length;
            return count;
        }
        else {
            var count = 0;
            return count;
        }
    };
    NavbarService.prototype.GetAccessToken = function () {
        if (sessionStorage.getItem('userToken') != null) {
            var token = sessionStorage.getItem('userToken');
            return true;
        }
        else {
            return false;
        }
    };
    NavbarService.prototype.Profile = function () {
        var userdetails = JSON.parse(sessionStorage.getItem('customerdata'));
        if (userdetails != null) {
            var username = userdetails.firstname;
            return username;
        }
        else {
            return null;
        }
    };
    NavbarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/app/navbar/Services/searchdetails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchdetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchdetailsService = /** @class */ (function () {
    function SearchdetailsService(http) {
        this.http = http;
    }
    SearchdetailsService.prototype.SearchTermProduct = function (searchTerm) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        myHeaders.append('Content-Type', 'application/json');
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append('Searhterm', searchTerm);
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* RequestOptions */]({ headers: myHeaders, params: urlSearchParams });
        return this.http.get('http://localhost:31029/api/product/Searhterm?searchterm=' + searchTerm, options)
            .map(function (response) { return response.json(); }).catch(this.handleError);
    };
    SearchdetailsService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    SearchdetailsService.prototype.CompositionSearch = function (searchTerm) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        myHeaders.append('Content-Type', 'application/json');
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append('Searhterm', searchTerm);
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* RequestOptions */]({ headers: myHeaders, params: urlSearchParams });
        return this.http.get('http://localhost:31029/api/product/CompositionSearch?SO=' + searchTerm, options)
            .map(function (response) { return response.json(); });
    };
    SearchdetailsService.prototype.AlphabeticalSearch = function (searchTerm) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        myHeaders.append('Content-Type', 'application/json');
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append('Searhterm', searchTerm);
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* RequestOptions */]({ headers: myHeaders, params: urlSearchParams });
        return this.http.get('http://localhost:31029/api/product/AlphabticalSearhterm?searchterm=' + searchTerm, options)
            .map(function (response) { return response.json(); }).catch(this.handleError);
    };
    SearchdetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
    ], SearchdetailsService);
    return SearchdetailsService;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".cart-badge {\r\n    color: #fff;\r\n    position: absolute;\r\n    top: 3px;\r\n    z-index: 1001;\r\n    min-width: 20px;\r\n    min-height: 20px;\r\n    background-color: #f67f57;\r\n    border-radius: 100px;\r\n    text-align: center;\r\n    right: 0;\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n}\r\n\r\n#srch_Box_Div {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: #fff;\r\n    z-index: 1031;\r\n    display: none;\r\n    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);\r\n            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);\r\n}\r\n\r\n.srch-close {\r\n    position: absolute;\r\n    right: 25px;\r\n    top: 12px;\r\n    color: #ddd;\r\n    cursor: pointer;\r\n}\r\n\r\n.cstm-srch {\r\n    border: none;\r\n    border-bottom: 1px solid #ddd;\r\n    border-radius: 0;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    margin-top: 20px;\r\n}\r\n\r\n.add-desc-btn,\r\n.add-desc-btn:hover {\r\n    margin-top: -6px;\r\n    background-color: #ec8558;\r\n    border-color: #ec8558;\r\n    color: #fff;\r\n}\r\n\r\n.dropdown-menu>li>a {\r\n    color: #777;\r\n    cursor: pointer;\r\n    line-height: 2;\r\n    margin-top: 5px;\r\n    font-size: 13px;\r\n}\r\n\r\n.dropdown-menu>li>:hover {\r\n    color: #ec8558;\r\n}\r\n\r\n.img-srh-wdth {\r\n    width: 22px;\r\n    float: left;\r\n}\r\n\r\n.search-items {\r\n    position: absolute;\r\n    width: 405px;\r\n    border: 1px solid;\r\n    top: 43px;\r\n    overflow-y: auto;\r\n    background-color: #fff;\r\n    height: 578px;\r\n    padding: 10px;\r\n    display: none;\r\n}\r\n\r\n.list-group-item {\r\n    position: relative;\r\n    display: block;\r\n    padding: 10px 15px;\r\n    margin-bottom: -1px;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    font-size: 13px;\r\n    cursor: pointer;\r\n    color: #747d89;\r\n}\r\n\r\n.list-group-item div span i {\r\n    float: left;\r\n    color: #747d89;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n}\r\n\r\n.list-group-item div span .add-to-cart {\r\n    float: left;\r\n    color: #747d89;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    margin-top: 5px;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.list-group-item div span .add-to-cart:hover {\r\n    color: #fff;\r\n    background-color: #ec8558;\r\n    border: 1px solid #ec8558;\r\n}\r\n\r\n.brnd-name {\r\n    float: left;\r\n    width: 245px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    padding-left: 5px;\r\n    color: #747d89;\r\n}\r\n\r\n#srch_Box_Div1 {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    background-color: #fff;\r\n    z-index: 1031;\r\n    display: none;\r\n    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);\r\n            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);\r\n}\r\n\r\n#srch_Box_Div2 {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    background-color: #fff;\r\n    z-index: 1031;\r\n    display: none;\r\n    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);\r\n            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);\r\n}\r\n\r\n.pagination>li>a,\r\n.pagination>li>span {\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown-menu {\r\n    min-width: 212px;\r\n}\r\n\r\n/* mEGA DROPDOWN CSS*/\r\n\r\n.navbar-nav>li>.dropdown-menu {\r\n    margin-top: -1px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n.custom-nav {\r\n    background: none;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n}\r\n\r\n.mega-dropdown {\r\n    position: static !important;\r\n}\r\n\r\n.navbar {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.nav-stacked>li>a {\r\n    position: relative;\r\n    display: block;\r\n    padding: 10px 15px;\r\n    cursor: pointer;\r\n    border-bottom: 1px solid #0e76bc1c;\r\n    /* white-space: nowrap; \r\n    overflow: hidden;\r\n    text-overflow: ellipsis; */\r\n}\r\n\r\n.nav-stacked>li>a i {\r\n    float: right;\r\n    font-size: 13px;\r\n    line-height: 17.5px;\r\n}\r\n\r\n.navbar-default.custom-nav .navbar-nav>li>a:hover,\r\n.navbar-default.custom-nav .navbar-nav>.active>a {\r\n    color: #fff;\r\n    background-color: transparent;\r\n}\r\n\r\n.mega-dropdown-menu {\r\n    padding: 20px 0px 0px;\r\n    width: 100%;\r\n    background-color: #fff;\r\n    /* border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px; */\r\n    border: 1px solid #e1e7ec;\r\n    left: 0;\r\n}\r\n\r\n.mega-dropdown-menu>li>ul {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.mega-dropdown-menu>li>ul>li {\r\n    list-style: none;\r\n}\r\n\r\n.mega-dropdown-menu>li ul>li>a:hover,\r\n.mega-dropdown-menu>li ul>li>a:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n.mega-dropdown-menu .dropdown-header {\r\n    font-size: 18px;\r\n    color: #ff3546;\r\n    padding: 5px 60px 5px 5px;\r\n    line-height: 30px;\r\n}\r\n\r\n.mega-dropdown .dropdown-toggle .fa-angle-down {\r\n    margin: 4px 0 0 11px;\r\n}\r\n\r\n.pr-pl-0 {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    border-right: 1px solid #0e76bc;\r\n    margin-top: -20px;\r\n}\r\n\r\n.nav-pills>li>a {\r\n    border-radius: 0;\r\n}\r\n\r\n.mega-dropdown-menu .nav-pills>li>a:hover::before,\r\n.mega-dropdown-menu .nav-pills>.active>a::before {\r\n    right: -6px;\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 15px;\r\n    width: 1rem;\r\n    height: 1rem;\r\n    -webkit-transform: rotate(136deg);\r\n    transform: rotate(136deg);\r\n    background: #fff;\r\n    border-top: 1px solid #0e76bc;\r\n    border-left: 1px solid #0e76bc;\r\n    border-color: #0e76bc;\r\n}\r\n\r\n.mega-dropdown-menu .nav-pills>li>a:hover,\r\n.mega-dropdown-menu .nav-pills>li.active>a,\r\n.mega-dropdown-menu .nav-pills>li.active>a:focus,\r\n.mega-dropdown-menu .nav-pills>li.active>a:hover,\r\n.mega-dropdown-menu .nav-pills>li.active>a:active {\r\n    background: none;\r\n    border-left: 4px solid #ec8558;\r\n    color: #ec8558;\r\n}\r\n\r\n:focus {\r\n    outline: none;\r\n}\r\n\r\n.shopping-home-dropdown>.dropdown-menu {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    border: 1px solid #0e76bc;\r\n}\r\n\r\n.mega-dropdown-menu .tab-content h3 {\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    color: #337ab7;\r\n    margin: 0 0 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.mega-dropdown-menu .tab-content li>a {\r\n    font-size: 13px;\r\n    color: #555;\r\n    padding: 5px 0;\r\n    display: block;\r\n    cursor: pointer;\r\n}\r\n\r\n.mega-dropdown-menu .nav-pills>li>a {\r\n    color: #555;\r\n    border-left: 4px solid #fff;\r\n}\r\n\r\n@media(max-width:767px) {\r\n    .shop-header-bg {\r\n        top: 106px;\r\n    }\r\n    .navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,\r\n    .navbar-default .navbar-nav .open .dropdown-menu>li>a:hover {\r\n        color: #ec8558;\r\n        background-color: transparent;\r\n    }\r\n    .navbar-nav .open .dropdown-menu {\r\n        position: absolute;\r\n        float: none;\r\n        width: auto;\r\n        left: -185px;\r\n        background-color: #fff;\r\n        border: 1px solid #e1e7ec;\r\n    }\r\n    .nav-stacked li a {\r\n        padding: 7px 8px;\r\n        font-size: 12px;\r\n    }\r\n    .mega-dropdown-menu .tab-content h3 {\r\n        font-size: 13px;\r\n    }\r\n    .mega-dropdown-menu .tab-content li>a {\r\n        font-size: 11px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .cart-badge {\r\n        top: -6px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n\n        <div class=\"mrgn-xs-lft\">\n            <a href=\"#menu-toggle\" id=\"menu-toggle\" title=\"menu\">\n                <i class=\"material-icons menu hidden-sm hidden-md hidden-lg\">menu</i>\n            </a>\n\n            <a class=\"\" href=\"#\">\n                <img class=\"g-logo img-responsive\" src=\"../../assets/img/logo.png\" alt=\"Genericwala Logo\">\n            </a>\n        </div>\n        <div class=\"xs-li-itms\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"hidden-xs\"><a routerLink=\"/Home/DlofDay\">Offers</a></li>\n                <li class=\"hidden-xs\"><a routerLink=\"/Home/AllGenericMed\">Generic Medicines</a></li>\n                <li class=\"dropdown mega-dropdown shopping-home-dropdown hidden-xs\">\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" (click)=\"OpenMenu()\">Shop by Categories <i class=\"fa fa-angle-down pull-right\" aria-hidden=\"true\"></i>\n                          </a>\n\n\n                    <ul class=\"dropdown-menu mega-dropdown-menu\">\n                        <li class=\"col-lg-3 col-md-4 col-sm-5 col-xs-6 pr-pl-0\">\n                            <div class=\"dd-mainmenu\">\n                                <ul class=\"nav tab-menu nav-pills nav-stacked\">\n\n                                    <li *ngFor=\"let item of category_List;let i=index\" [class.active]=\" selectedindex === i\">\n                                        <a title=\"{{item.name}}\" (mouseenter)=\"mouseEnter(item.name,item.subCategoryVm,item.id,i);\" (mousemove)=\"mousemove(item.name,item.subCategoryVm,item.id);\" (mouseleave)=\"MouseLeave();\">\n                                            {{item.name}}\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </li>\n                        <li class=\"col-lg-9 col-md-8 col-sm-7 col-xs-6\" *ngIf=\"mouseOver === true\">\n                            <div class=\"tab-content\">\n                                <div class=\"tab-pane active\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                            <h3>\n                                                <a (click)=\"GetCategoryProducts(catName,category_id)\">\n                                       \n                                        {{catName}}\n                                    </a>\n\n                                            </h3>\n                                            <ul class=\"list-unstyled\">\n                                                <li class=\"subcatories\" *ngFor=\"let subcat of subcategory;let i=index\">\n                                                    <a title=\"{{subcat.name}}\" (click)=\"GetSubCategoryProducts(subcat.name,subcat.id,catName,category_id)\">{{subcat.name}}</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"col-lg-6 col-md-6 hidden-sm hidden-xs\">\n                                            <ul class=\"list-unstyled list-inline\">\n                                                <li> <img src=\"../../assets/img/slide-one.png\" class=\"img-responsive img-fluid\" alt=\"\"></li>\n                                                <li><button type=\"button\" class=\"btn btn-primary btn-sbmt\">Shop Now</button></li>\n                                            </ul>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n\n                    </ul>\n                </li>\n\n                <li><a><i class=\"fa fa-search fa-icons\" aria-hidden=\"true\" (click)=\"ShowDivBody()\" ></i></a></li>\n\n                <li>\n                    <span class=\"cart-badge\" *ngIf=\"info.cartvalues\">{{info.cartvalues}}</span>\n                    <a routerLink=\"/Cart/Cart\" class=\"\" title=\"My cart\">\n                        <i class=\"fa fa-shopping-cart fa-icons\" aria-hidden=\"true\"></i>\n                    </a>\n                </li>\n                <li class=\"dropdown\" *ngIf='info.isUserLoggedIn==false'>\n                    <a href=\"#\" class=\"dropdown-toggle\" title=\"My account\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" routerLink=\"/Login/Login\">\n\n                        <i class=\"fa fa-user fa-icons\" aria-hidden=\"true\"></i>\n                    </a>\n                </li>\n                <li class=\"dropdown\" *ngIf='info.isUserLoggedIn==true'>\n                    <a href=\"#\" class=\"dropdown-toggle\" title=\"My account\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"fa fa-user fa-icons\" aria-hidden=\"true\"></i>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li>\n                            <a>\n                                <span class='username text-center'>{{_navbar.name }}</span>\n                            </a>\n                        </li>\n                        <li role=\"separator\" class=\"divider\"></li>\n                        <li>\n                            <a routerLink=\"/Account/update\">\n                                <span class=\"pull-right\">\n                                    <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                                </span> Profile</a>\n                        </li>\n                        <li>\n                            <a class=\"\" routerLink=\"/WishList/WishList\" title=\"My wishlist\">\n                                <span class=\"pull-right\">\n                                        <span class=\"\" *ngIf=\"info.whishlitvalue\">{{info.whishlitvalue}} Items</span>\n\n                                </span>Whishlist</a>\n                        </li>\n\n                        <li>\n                            <a routerLink=\"/Address/Addresses\">\n                                <span class=\"pull-right\">\n                                    <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                                </span> Address Info</a>\n                        </li>\n\n                        <li>\n                            <a>\n                                <span class=\"pull-right\">\n                                    <i aria-hidden=\"true\" class=\"fa fa-inr\"> 0</i>\n                                </span> Cashback</a>\n                        </li>\n\n                        <li>\n                            <a routerLink=\"/Track/TrackOrders\">\n                                <span class=\"pull-right\">\n                                    <i class=\"fa fa-ambulance\" aria-hidden=\"true\"></i>\n                                </span>Track Order</a>\n                        </li>\n\n                        <li>\n                            <a>\n                                <span class=\"pull-right\">\n                                    <i class=\"fa fa-certificate\" aria-hidden=\"true\"></i>\n                                </span>Reward Points</a>\n                        </li>\n                        <li role=\"separator\" class=\"divider\"></li>\n                        <li>\n                            <a [routerLink]=\"\" (click)='Logout()'>\n                                <span class=\"pull-right\">\n                                    <i class=\"fa fa-power-off\" aria-hidden=\"true\"></i>\n                                </span> Logout</a>\n                        </li>\n\n                    </ul>\n                </li>\n                <li class=\"\">\n\n                    <a class=\"\" routerLink=\"/gw-add-prescription\">\n                        <i class=\"fa fa-file-text-o fa-icons\" aria-hidden=\"true\" tooltip=\"Upload Prescription\" placement=\"left\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!--- Search Items Starts -->\n\n<div id=\"srch_Box_Div2\" *ngIf=\"this.searchViewModel.length>0  && showdiv\" style=\"display: block\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <simple-notifications></simple-notifications>\n\n            <div class=\"col-md-12\">\n                <input type=\"text\" class=\"form-control srch-bar cstm-srch\" placeholder=\"Search for...\" (keyup)=\"search($event)\" [(ngModel)]=\"str\">\n                <a class=\"btn-srch-opn srch-close\" (click)=\"onCloseClick()\">\n                    <i class=\"material-icons\">close</i>\n                </a>\n\n            </div>\n            <div class=\"col-md-12\">\n                <nav aria-label=\"Page navigation\" style=\"padding: 10px 25px;\">\n                    <ul class=\"pagination\">\n                        <li *ngFor=\"let alphabets of Alphabets\" id='{{str}}' [class.active]=\" alphabets=== str\">\n                            <a (click)=\"AlphabeticalSearch(alphabets)\">{{alphabets}}</a>\n                        </li>\n\n                    </ul>\n                </nav>\n            </div>\n        </div>\n        <div class=\"row\">\n            <hr style=\"margin-top: 0;\" />\n            <div class=\"col-md-4\">\n\n                <div *ngIf=\"searchitem.Composition!==null\">\n                    <h5>Compositions</h5>\n                    <ul class=\"list-unstyled\">\n                        <div class=\"list-group\">\n                            <a class=\"list-group-item clearfix\" *ngFor=\"let term1 of Composition\">\n                                <div class=\"pull-left\" (click)=\"ProductDetails(term1)\">\n                                    <span>{{term1.searchViewModel.Composition}} </span>\n                                </div>\n                            </a>\n                        </div>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div *ngIf=\"this.searchitem.Generics!==null\">\n                    <h5>Generics</h5>\n                    <ul class=\"list-unstyled\">\n                        <div class=\"list-group\">\n                            <a class=\"list-group-item clearfix\" *ngFor=\"let term of this.searchitem.Generics\">\n                                <div class=\"pull-left\" (click)=\"ProductDetails(term)\">\n                                    <span *ngIf=\"term.searchViewModel.FORM === 'STRIP'\">\n                                            <i class=\"flaticon-medical-11\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM === 'PC'\">\n                                            <i class=\"flaticon-medical-11\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM === 'SYRUP'\">\n                                            <i class=\"flaticon-medical-9\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM== 'BOTTLE'\">\n                                            <i class=\"flaticon-medical-16\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM== 'Tablet'\">\n                                            <i class=\"flaticon-medical-9\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM== 'strip'\">\n                                            <i class=\"flaticon-medical-11\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM == 'tube'\">\n                                            <i class=\"flaticon-tube-icon\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM == 'TUBE'\">\n                                            <i class=\"flaticon-tube-icon\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM == 'INJ'\">\n                                            <i class=\"flaticon-medical-8\"></i>\n                                        </span>\n                                    <span class=\"brnd-name\">\n                                            <span>{{term.searchViewModel.BRAND}} </span>\n                                    <br/>\n                                    <span>\n                                                <small>{{term.searchViewModel.COMPANY}}</small>\n                                            </span>\n                                    </span>\n                                </div>\n                                <div class=\"pull-right text-right\">\n                                    <span>RS.{{term.searchViewModel.TotalPrice | number : '1.2-2'}}</span>\n                                    <br/>\n                                    <span class=\"pull-right\" (click)=\"AddtoCart(term)\">\n                                            <i class=\"material-icons add-to-cart\">shopping_cart</i>\n                                        </span>\n                                </div>\n                            </a>\n                        </div>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div *ngIf=\"this.searchitem.Productlist!==null\">\n                    <h5>Products</h5>\n                    <ul class=\"list-unstyled\">\n                        <div class=\"list-group\">\n                            <a class=\"list-group-item clearfix\" *ngFor=\" let term of this.searchitem.Productlist\">\n                                <div class=\"pull-left\" (click)=\"ProductDetails(term)\">\n                                    <span>\n                                            <img src=\"http://stores.genericwala.com/Uploads/Products/{{term.searchViewModel.PICTURE}}\" class=\"img-srh-wdth\">\n                                        </span>\n\n                                    <span class=\"brnd-name\">\n                                            <span>{{term.searchViewModel.BRAND}} </span>\n                                    <br/>\n                                    <span>\n                                                <small>{{term.searchViewModel.COMPANY}}</small>\n                                            </span>\n                                    </span>\n                                </div>\n                                <div class=\"pull-right text-right\">\n                                    <span>RS.{{term.searchViewModel.TotalPrice | number : '1.2-2'}}</span>\n                                    <br/>\n                                    <span class=\"pull-right\" (click)=\"AddtoCart(term)\">\n                                            <i class=\"material-icons add-to-cart\"> shopping_cart</i>\n                                        </span>\n                                </div>\n                            </a>\n                        </div>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div id=\"srch_Box_Div1\" *ngIf=\"this.searchViewModel.length>0 && searchterm.length > 2 && showdiv\" style=\"display: block\">\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n\n            <!-- <simple-notifications></simple-notifications> -->\n            <div class=\"col-md-12\">\n                <input type=\"text\" class=\"form-control srch-bar cstm-srch\" placeholder=\"Search for...\" (keyup)=\"search($event)\" [(ngModel)]=\"str\">\n                <a class=\"btn-srch-opn srch-close\" (click)=\"onCloseClick()\">\n                    <i class=\"material-icons\">close</i>\n                </a>\n\n            </div>\n            <div class=\"col-md-12\">\n                <nav aria-label=\"Page navigation\" style=\"padding: 10px 25px;\">\n                    <ul class=\"pagination\">\n                        <li *ngFor=\"let alphabets of Alphabets\" [class.active]=\"'alphabets' === 'str'\">\n                            <a (click)=\"AlphabeticalSearch(alphabets)=='str'\">{{alphabets}}</a>\n                        </li>\n\n                    </ul>\n                </nav>\n            </div>\n        </div>\n        <hr style=\"margin-top: 0;\" />\n        <div class=\"row\">\n\n            <div class=\"col-md-4\">\n\n\n                <div *ngIf=\"searchitem.Composition!==null\">\n                    <h5>Compositions</h5>\n                    <ul class=\"list-unstyled\">\n                        <div class=\"list-group\">\n                            <a class=\"list-group-item clearfix\" *ngFor=\"let term1 of Composition\">\n                                <div class=\"pull-left\" (click)=\"ProductDetails(term1)\">\n\n                                    <span>{{term1.searchViewModel.Composition}} </span>\n                                </div>\n                            </a>\n                        </div>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div *ngIf=\"this.searchitem.Generics!==null\">\n                    <h5>Generics</h5>\n                    <ul class=\"list-unstyled\">\n                        <div class=\"list-group\">\n                            <a class=\"list-group-item clearfix\" *ngFor=\"let term of this.searchitem.Generics\">\n                                <div class=\"pull-left\" (click)=\"ProductDetails(term)\">\n                                    <span *ngIf=\"term.searchViewModel.FORM === 'STRIP'\">\n                                            <i class=\"flaticon-medical-11\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM === 'PC'\">\n                                            <i class=\"flaticon-medical-11\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM === 'SYRUP'\">\n                                            <i class=\"flaticon-medical-9\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM== 'BOTTLE'\">\n                                            <i class=\"flaticon-medical-16\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM== 'Tablet'\">\n                                            <i class=\"flaticon-medical-9\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM== 'strip'\">\n                                            <i class=\"flaticon-medical-11\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM == 'tube'\">\n                                            <i class=\"flaticon-tube-icon\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM == 'TUBE'\">\n                                            <i class=\"flaticon-tube-icon\"></i>\n                                        </span>\n                                    <span *ngIf=\"term.searchViewModel.FORM == 'INJ'\">\n                                            <i class=\"flaticon-medical-8\"></i>\n                                        </span>\n                                    <span class=\"brnd-name\">\n                                            <span>{{term.searchViewModel.BRAND}} </span>\n                                    <br/>\n                                    <span>\n                                                <small>{{term.searchViewModel.COMPANY}}</small>\n                                            </span>\n                                    </span>\n                                </div>\n                                <div class=\"pull-right text-right\">\n                                    <span>RS.{{term.searchViewModel.TotalPrice | number : '1.2-2'}}</span>\n                                    <br/>\n                                    <span class=\"pull-right\" (click)=\"AddtoCart(term)\">\n                                            <i class=\"material-icons  add-to-cart\">shopping_cart</i>\n                                        </span>\n                                </div>\n                            </a>\n\n                        </div>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div *ngIf=\"this.searchitem.Productlist!==null\">\n\n                    <h5>Products</h5>\n                    <ul class=\"list-unstyled\">\n                        <div class=\"list-group\">\n                            <a class=\"list-group-item clearfix\" *ngFor=\" let term of this.searchitem.Productlist\">\n                                <div class=\"pull-left\" (click)=\"ProductDetails(term)\">\n                                    <span>\n                                            <img src=\"http://stores.genericwala.com/Uploads/Products/{{term.searchViewModel.PICTURE}}\" class=\"img-srh-wdth\">\n                                        </span>\n\n                                    <span class=\"brnd-name\">\n                                            <span>{{term.searchViewModel.BRAND}} </span>\n                                    <br/>\n                                    <span>\n                                                <small>{{term.searchViewModel.COMPANY}}</small>\n                                            </span>\n                                    </span>\n                                </div>\n                                <div class=\"pull-right text-right\">\n                                    <span>RS.{{term.searchViewModel.TotalPrice | number : '1.2-2'}}</span>\n                                    <br/>\n                                    <span class=\"pull-right\" (click)=\"AddtoCart(term)\">\n                                            <i class=\"material-icons add-to-cart\"> shopping_cart</i>\n\n                                        </span>\n                                </div>\n                            </a>\n\n                        </div>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div id=\"srch_Box_Div\" *ngIf=\" this.searchViewModel.length === 0  && showdiv\" style=\"display: block\">\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <span class=\"alert alert-success col-md-12\" *ngIf=\"noresult===true\">\n                <!-- <h5 class=\"text-center\">{{Message}}</h5> -->\n                <!-- <simple-notifications></simple-notifications> -->\n            </span>\n            <!-- <span class=\"alert alert-danger col-md-12\" *ngIf=\"textdanger===true\">\n                <h5 class=\"text-center\">{{Message}}</h5>\n            </span> -->\n\n\n\n            <div class=\"col-md-12\">\n                <input type=\"text\" class=\"form-control srch-bar cstm-srch\" placeholder=\"Search for...\" (keyup)=\"search($event)\" [(ngModel)]=\"str\">\n                <a class=\"btn-srch-opn srch-close\" (click)=\"onCloseClick()\">\n                    <i class=\"material-icons\">close</i>\n                </a>\n\n            </div>\n            <div class=\"col-md-12\">\n                <nav aria-label=\"Page navigation\" style=\"padding: 10px 25px;\">\n                    <ul class=\"pagination\">\n                        <li *ngFor=\"let alphabets of Alphabets\" [class.active]=\"'alphabets' === 'str'\">\n                            <a (click)=\"AlphabeticalSearch(alphabets)=='str'\">{{alphabets}}</a>\n                        </li>\n\n                    </ul>\n                </nav>\n            </div>\n        </div>\n        <hr style=\"margin-top: 0;\" />\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_Services_categoires_service__ = __webpack_require__("./src/app/sidebar/Services/categoires.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_Services_user_service__ = __webpack_require__("./src/app/login/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular4_social_login__ = __webpack_require__("./node_modules/angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_searchdetails_service__ = __webpack_require__("./src/app/navbar/Services/searchdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Models_search_view_model__ = __webpack_require__("./src/app/navbar/Models/search-view-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gw_prdct_dscrptn_Services_product_details_service__ = __webpack_require__("./src/app/gw-prdct-dscrptn/Services/product-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Common_cart_cart_service__ = __webpack_require__("./src/app/Common/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_router, _navbar, userService, authService, _searchTerm, _productService, cartService, notifications, _catgoryService, router) {
        this._router = _router;
        this._navbar = _navbar;
        this.userService = userService;
        this.authService = authService;
        this._searchTerm = _searchTerm;
        this._productService = _productService;
        this.cartService = cartService;
        this.notifications = notifications;
        this._catgoryService = _catgoryService;
        this.router = router;
        this.usercartdata = [];
        this.userwhishlistdata = [];
        this.searchViewModel = [];
        this.Composition = [];
        this.Generics = [];
        this.productlist = [];
        this.Alphabets = [];
        this.asideVisible = this._navbar.isSidebarVisible;
        this.info = _navbar.info;
        this._navbar.name = this.info.username;
        this.Alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.noresult = false;
        this.textdanger = false;
        this.selectedindex = -1;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.showdiv = false;
        var user_AccesToken = localStorage.getItem('userToken');
        if (user_AccesToken !== null) {
            this.status = true;
            this._navbar.change();
            this._navbar.name = this._navbar.name;
            this._router.navigate(['/Home']);
        }
        else {
            this.asideVisible = false;
            this.status = false;
            this._router.navigate(['/Home']);
        }
    };
    NavbarComponent.prototype.Logout = function () {
        var localstorage_Cartobj = localStorage.getItem('cartobj');
        var localstorage_WishlitObj = localStorage.getItem('cartobj');
        var user_AccesToken = sessionStorage.getItem('userToken');
        if (user_AccesToken != null) {
            var userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
            var userCartITem = JSON.parse(sessionStorage.getItem('userCartITem'));
            var userWhishList = JSON.parse(sessionStorage.getItem('userWhishList'));
            this.userdata = {
                userCartList: [],
                userWishlist: [],
                customerdata: null
            };
            this.usercartdata = [];
            this.userwhishlistdata = [];
            if (userCartITem !== null) {
                for (var i = 0; i < userCartITem.length; i++) {
                    var item = userCartITem[i];
                    this.usercartdata.push(item);
                }
            }
            else {
                this.usercartdata = [];
            }
            if (userWhishList !== null) {
                for (var i = 0; i < userWhishList.length; i++) {
                    var item = userWhishList[i];
                    this.userwhishlistdata.push(item);
                }
            }
            else {
                this.userwhishlistdata = [];
            }
            this.userdata = {
                userCartList: this.usercartdata,
                userWishlist: this.userwhishlistdata,
                customerdata: null
            };
            this.userService.UserCartData(this.userdata, user_AccesToken, userId).subscribe(function (resp) {
            });
        }
        // this.authService.signOut().then(
        //   (data => {
        //     data = '';
        //     return true;
        //   }));
        localStorage.clear();
        sessionStorage.clear();
        this._navbar.change();
        this.authService.signOut().then(function () {
            document.location.href = 'https://www.google.com/accounts/Logout?continue=' +
                'https://appengine.google.com/_ah/logout?continue=http://localhost:4200/Home';
        });
        if (user_AccesToken === null) {
            this.authService.signOut().then(function () {
                this._router.navigate(['/Home']);
            });
            this.status = false;
            this._router.navigate(['/Home']);
        }
        this._router.navigate(['/Home']);
    };
    NavbarComponent.prototype.DisplaySrchBox = function () {
        var _this = this;
        this.showdiv = true;
        this.singleAlphabetsearch = false;
        var term = this.str;
        if (term.length > 2) {
            this._searchTerm.SearchTermProduct(term)
                .subscribe(function (data) {
                _this.searchViewModel = data;
                _this.searchterm = term;
                _this.Composition = [];
                _this.Generics = [];
                _this.productlist = [];
                for (var i = 0; i < _this.searchViewModel.length; i++) {
                    if (_this.searchViewModel[i].TYPE === 'Compositions') {
                        var compostionObj = {
                            searchViewModel: _this.searchViewModel[i]
                        };
                        _this.Composition.push(compostionObj);
                    }
                    if (_this.searchViewModel[i].TYPE === 'Generics') {
                        var genericsObj = {
                            searchViewModel: _this.searchViewModel[i]
                        };
                        _this.Generics.push(genericsObj);
                    }
                    if (_this.searchViewModel[i].TYPE === 'Products') {
                        var productsObj = {
                            searchViewModel: _this.searchViewModel[i]
                        };
                        _this.productlist.push(productsObj);
                    }
                }
                _this.searchitem = {
                    Generics: _this.Generics,
                    Productlist: _this.productlist,
                    Compostion: _this.Composition
                };
            });
        }
        else {
            this.searchterm = term;
        }
    };
    NavbarComponent.prototype.AlphabeticalSearch = function (value) {
        var _this = this;
        this.showdiv = true;
        this.selectedItem = value;
        var term = value;
        this.searchterm = term;
        this.str = term;
        this._searchTerm.AlphabeticalSearch(term)
            .subscribe(function (data) {
            _this.searchViewModel = data;
            _this.searchterm = term;
            _this.Composition = [];
            _this.Generics = [];
            _this.productlist = [];
            for (var i = 0; i < _this.searchViewModel.length; i++) {
                if (_this.searchViewModel[i].TYPE === 'Compositions') {
                    var compostionObj = {
                        searchViewModel: _this.searchViewModel[i]
                    };
                    _this.Composition.push(compostionObj);
                }
                if (_this.searchViewModel[i].TYPE === 'Generics') {
                    var genericsObj = {
                        searchViewModel: _this.searchViewModel[i]
                    };
                    _this.Generics.push(genericsObj);
                }
                if (_this.searchViewModel[i].TYPE === 'Products') {
                    var productsObj = {
                        searchViewModel: _this.searchViewModel[i]
                    };
                    _this.productlist.push(productsObj);
                }
            }
            _this.searchitem = {
                Generics: _this.Generics,
                Productlist: _this.productlist,
                Compostion: _this.Composition
            };
        });
    };
    NavbarComponent.prototype.search = function ($event) {
        var _this = this;
        this.showdiv = true;
        this.noresult = false;
        var term = this.str;
        this.str = term;
        if (term.length > 2) {
            this._searchTerm.SearchTermProduct(term)
                .subscribe(function (data) {
                _this.searchViewModel = data;
                if (_this.searchViewModel.length === 0) {
                    _this.notifications.warn('warning', 'No item is found', {
                        timeOut: 3000,
                        showProgressBar: true,
                        pauseOnHover: false,
                        clickToClose: true,
                        maxLength: 50,
                    });
                }
                _this.searchterm = term;
                _this.Composition = [];
                _this.Generics = [];
                _this.productlist = [];
                for (var i = 0; i < _this.searchViewModel.length; i++) {
                    if (_this.searchViewModel[i].TYPE === 'Compositions') {
                        var compostionObj = {
                            searchViewModel: _this.searchViewModel[i]
                        };
                        _this.Composition.push(compostionObj);
                    }
                    if (_this.searchViewModel[i].TYPE === 'Generics') {
                        var genericsObj = {
                            searchViewModel: _this.searchViewModel[i]
                        };
                        _this.Generics.push(genericsObj);
                    }
                    if (_this.searchViewModel[i].TYPE === 'Products') {
                        var productsObj = {
                            searchViewModel: _this.searchViewModel[i]
                        };
                        _this.productlist.push(productsObj);
                    }
                }
                _this.searchitem = {
                    Generics: _this.Generics,
                    Productlist: _this.productlist,
                    Compostion: _this.Composition
                };
            });
            setTimeout(function () {
                this.noresult = false;
                this.textdanger = false;
            }.bind(this), 3000);
        }
        else {
            this.searchterm = term;
        }
    };
    NavbarComponent.prototype.ProductDetails = function (model) {
        // tslint:disable-next-line:no-debugger
        debugger;
        this.showdiv = false;
        var model1 = new __WEBPACK_IMPORTED_MODULE_7__Models_search_view_model__["a" /* SearchViewModel */]();
        for (var key in model) {
            if (model.hasOwnProperty(key)) {
                model1.BRAND = model[key].BRAND;
                model1.FORM = model[key].FORM;
                model1.COMPANY = model[key].COMPANY;
                model1.PRICE = model[key].PRICE;
                model1.PACKING = model[key].PACKING;
                model1.STRENGTH = model[key].STRENGTH;
                model1.CONTENT = model[key].CONTENT;
                model1.TYPE = model[key].TYPE;
                model1.ID = model[key].ID;
                model1.AvailableQty = model[key].AvailableQty;
                model1.ItemType = model[key].ItemType;
                model1.Composition = model[key].Composition;
                model1.PICTURE = model[key].PICTURE;
                model1.SIZE = model[key].SIZE;
                model1.COLOR = model[key].COLOR;
                model1.RetailPrice = model[key].RetailPrice;
                model1.Discount = model[key].Discount;
                model1.TotalPrice = model[key].TotalPrice;
            }
        }
        if (model1.TYPE !== 'Compositions') {
            this.produtDetial = {
                prodId: model1.ID,
                itemType: model1.ItemType
            };
            var productName = model1.BRAND.replace(/\s/g, '-');
            productName = productName.substr(0, productName.length - 1);
            this._productService.setData(this.produtDetial);
            this.router.navigate(['/ItemDetails', productName]);
        }
        else {
            var productName = model1.Composition.replace(/\s/g, '-');
            productName = productName.substr(0, productName.length - 1);
            this._productService.SetCompostionSearch(productName);
            this.router.navigate(['/Search', productName]);
        }
    };
    NavbarComponent.prototype.AddtoCart = function (model) {
        // tslint:disable-next-line:no-debugger
        debugger;
        var type = 'cartItem';
        var model1 = new __WEBPACK_IMPORTED_MODULE_7__Models_search_view_model__["a" /* SearchViewModel */]();
        for (var key in model) {
            if (model.hasOwnProperty(key)) {
                model1.BRAND = model[key].BRAND;
                model1.FORM = model[key].FORM;
                model1.COMPANY = model[key].COMPANY;
                model1.PRICE = model[key].PRICE;
                model1.PACKING = model[key].PACKING;
                model1.STRENGTH = model[key].STRENGTH;
                model1.CONTENT = model[key].CONTENT;
                model1.TYPE = model[key].TYPE;
                model1.ID = model[key].ID;
                model1.AvailableQty = model[key].AvailableQty;
                model1.ItemType = model[key].ItemType;
                model1.Composition = model[key].Composition;
                model1.PICTURE = model[key].PICTURE;
                model1.SIZE = model[key].SIZE;
                model1.COLOR = model[key].COLOR;
                model1.RetailPrice = model[key].RetailPrice;
                model1.Discount = model[key].Discount;
                model1.TotalPrice = model[key].TotalPrice;
            }
        }
        var ProductVm = {
            id: +model1.ID,
            name: model1.BRAND,
            itemType: +model1.ItemType,
            quantityPerUnit: 1,
            unitPrice: model1.TotalPrice,
            Msrp: model1.PRICE,
            picture: model1.PICTURE,
            ranking: null,
            isVerified: 0,
            isPrdAttr: true,
            attrId: 0,
            quantity: 1,
            catId: 0
        };
        this.Message = '1 item is added to cart';
        this.noresult = true;
        setTimeout(function () {
            this.Message = '';
            this.noresult = false;
        }.bind(this), 3000);
        this.notifications.success('Success', '1 item is added to cart', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
        });
        this.cartService.addToCart(ProductVm, type);
        this._navbar.change();
    };
    NavbarComponent.prototype.onCloseClick = function () {
        this.showdiv = false;
    };
    NavbarComponent.prototype.OpenMenu = function () {
        var _this = this;
        this._catgoryService.GetCategoriesList().subscribe(function (catdata) {
            _this.category_List = catdata;
        });
    };
    NavbarComponent.prototype.mouseEnter = function (itemName, cat, id, i) {
        this.catName = '';
        this.mouseOver = true;
        this.selected = true;
        this.subcategory = cat;
        this.category_id = id;
        this.catName = itemName;
        this.selectedindex = i;
    };
    NavbarComponent.prototype.mousemove = function (itemName, cat, id) {
        this.catName = '';
        this.mouseOver = true;
        this.selected = true;
        this.subcategory = cat;
        this.category_id = id;
        this.catName = itemName;
    };
    NavbarComponent.prototype.ShowDivBody = function () {
        this.showdiv = true;
    };
    NavbarComponent.prototype.GetCategoryProducts = function (catName, CatId) {
        var category = '';
        if (catName.includes('&')) {
            var spaceCat = catName.replace(/\s/g, '');
            category = spaceCat.replace('&', '-');
        }
        else {
            category = catName.replace(/\s/g, '-');
        }
        this.ParacategorId = {
            catId: CatId,
            subcatId: null,
            status: true
        };
        this._catgoryService.setData(this.ParacategorId);
        this.router.navigate(['/Product', category]);
    };
    NavbarComponent.prototype.GetSubCategoryProducts = function (subcatname, subcatId, catname, catid) {
        var subcategory = '';
        var category = '';
        if (subcatname.includes('&') || catname.includes('&')) {
            if (subcatname.includes('&')) {
                var spaceCat = subcatname.replace(/\s/g, '');
                subcategory = spaceCat.replace('&', '-');
            }
            else {
                subcategory = subcatname.replace(/\s/g, '-');
            }
            if (catname.includes('&')) {
                var spaceCat = catname.replace(/\s/g, '');
                category = spaceCat.replace('&', '-');
            }
            else {
                category = catname.replace(/\s/g, '-');
            }
        }
        else {
            subcategory = subcatname.replace(/\s/g, '-');
            category = catname.replace(/\s/g, '-');
        }
        this.ParacategorId = {
            catId: catid,
            subcatId: subcatId,
            status: false
        };
        this._catgoryService.setData(this.ParacategorId);
        this.router.navigate(['/Product', category, subcategory]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NavbarComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NavbarComponent.prototype, "whishlist_count", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__Services_navbar_service__["a" /* NavbarService */], __WEBPACK_IMPORTED_MODULE_4__login_Services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5_angular4_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_6__Services_searchdetails_service__["a" /* SearchdetailsService */],
            __WEBPACK_IMPORTED_MODULE_8__gw_prdct_dscrptn_Services_product_details_service__["a" /* ProductDetailsService */],
            __WEBPACK_IMPORTED_MODULE_9__Common_cart_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_1__sidebar_Services_categoires_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/orderdetails/Model/order-details-vm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OrderDetailsVm */
/* unused harmony export TrackShippingAddress */
/* unused harmony export TrackShippingDetails */
/* unused harmony export TrackOrderItems */
/* unused harmony export TrackOrder */
/* unused harmony export ItemsInfo */
/* unused harmony export PakckingOrder */
/* unused harmony export ShipmentData */
/* unused harmony export Shipment */
/* unused harmony export Scans */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanDetail; });
/* unused harmony export Status */
/* unused harmony export Consignee */
var OrderDetailsVm = /** @class */ (function () {
    function OrderDetailsVm() {
    }
    return OrderDetailsVm;
}());

var TrackShippingAddress = /** @class */ (function () {
    function TrackShippingAddress() {
    }
    return TrackShippingAddress;
}());

var TrackShippingDetails = /** @class */ (function () {
    function TrackShippingDetails() {
    }
    return TrackShippingDetails;
}());

var TrackOrderItems = /** @class */ (function () {
    function TrackOrderItems() {
    }
    return TrackOrderItems;
}());

var TrackOrder = /** @class */ (function () {
    function TrackOrder() {
    }
    return TrackOrder;
}());

var ItemsInfo = /** @class */ (function () {
    function ItemsInfo() {
    }
    return ItemsInfo;
}());

var PakckingOrder = /** @class */ (function () {
    function PakckingOrder() {
    }
    return PakckingOrder;
}());

var ShipmentData = /** @class */ (function () {
    function ShipmentData() {
    }
    return ShipmentData;
}());

var Shipment = /** @class */ (function () {
    function Shipment() {
    }
    return Shipment;
}());

var Scans = /** @class */ (function () {
    function Scans() {
    }
    return Scans;
}());

var ScanDetail = /** @class */ (function () {
    function ScanDetail() {
    }
    return ScanDetail;
}());

var Status = /** @class */ (function () {
    function Status() {
    }
    return Status;
}());

var Consignee = /** @class */ (function () {
    function Consignee() {
    }
    return Consignee;
}());



/***/ }),

/***/ "./src/app/orderdetails/Service/orderdetails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_empty__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/empty.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Observable } from 'rxjs/observable';
// tslint:disable-next-line:import-blacklist






var OrderdetailsService = /** @class */ (function () {
    function OrderdetailsService(_httpclient) {
        this._httpclient = _httpclient;
    }
    OrderdetailsService.prototype.GetOrderDetials = function (user_AccesToken, OrderId) {
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this._httpclient.get('http://localhost:31029/api/Track/Orderdetails?OrderId=' + OrderId, options)
            .map((function (res) {
            var data = res.json();
            return data;
        })).catch(this.errorhandler);
    };
    OrderdetailsService.prototype.ReOrder = function (user_AccesToken, orderItems) {
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var body = JSON.stringify(orderItems);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this._httpclient.post('http://localhost:31029/api/Track/ReOrder?userId=' + userId, body, options)
            .map((function (res) {
            var data = res.json();
            return data;
        })).catch(this.errorhandler);
    };
    OrderdetailsService.prototype.errorhandler = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error);
    };
    OrderdetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], OrderdetailsService);
    return OrderdetailsService;
}());



/***/ }),

/***/ "./src/app/orderdetails/orderdetails.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-default>.panel-heading {\r\n    color: #747d89;\r\n    background-color: #f5f5f5;\r\n    border-color: #ddd;\r\n}\r\n\r\naddress,\r\n.payment_details_final,\r\n.product_details_table>.table-bordered>thead>tr>th,\r\n.product_details_table>.table-bordered>tbody>tr>td {\r\n    color: #747d89;\r\n}"

/***/ }),

/***/ "./src/app/orderdetails/orderdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pad-top\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <div class=\"panel panel-default\" *ngFor=\"let address of  order_detailsVm.TrackOrder\">\n                <div class=\"panel-heading\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-6\">\n                            <h4 class=\"text-left\"> Order Id:- {{address.Order_id}}</h4>\n                        </div>\n\n                        <div class=\"col-xs-6\">\n                            <button title=\"Reorder\" type=\"submit\" id=\"btnReOrder\" class=\"button btn-primary btn-sbmt pull-right\" (click)=\"ReOrder(order_detailsVm.TrackOrder)\">\n                          <i class=\"fa fa-undo\"></i>\n                       </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel-body\">\n\n\n                    <div class=\"product_details_table\">\n                        <table class=\"table table-bordered pad-top\">\n                            <thead>\n                                <tr>\n                                    <th>Name</th>\n                                    <th>Price</th>\n                                    <th>Quantity</th>\n                                    <th>Discount</th>\n                                    <th>Subtotal</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of order_detailsVm.TrackOrderItems\">\n\n                                    <td>{{item.ItemName}}</td>\n                                    <td style=\"text-align:center;\">\n                                        <i class=\"fa fa-inr\"></i>.{{item.mrp | number:'1.2-2'}}</td>\n                                    <td style=\"text-align:center;\">{{item.Quantity}}</td>\n                                    <td style=\"text-align:center;\">\n                                        <i class=\"fa fa-inr\"></i>.{{item.discount_amount | number:'1.2-2'}}</td>\n                                    <td style=\"text-align: center;\">\n                                        <i class=\"fa fa-inr\"></i>.{{item.subtotal | number:'1.2-2'}}</td>\n                                </tr>\n\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"final_total_amount row\">\n\n                        <div class=\"col-sm-7 col-xs-12 cart-final-total\">\n\n                            <div class=\" panel panel-default\">\n                                <div class=\"panel-heading\">\n                                    <i class=\"fa fa-ambulance\"></i> Shipping Address\n                                </div>\n                                <div class=\"panel-body\">\n                                    <address>\n\n                                  <br /> {{order_detailsVm.TrackShippingAddress.Title}},\n                                  <br /> {{order_detailsVm.TrackShippingAddress.Address1}},\n                                  <br /> {{order_detailsVm.TrackShippingAddress.Address2}},\n                                  <br /> {{order_detailsVm.TrackShippingAddress.City}}- {{order_detailsVm.TrackShippingAddress.Zip}},\n                                  <br /> {{order_detailsVm.TrackShippingAddress.State}},{{order_detailsVm.TrackShippingAddress.Country}}.\n                                  <br />\n                             </address>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-5 col-xs-12 payment_details_final\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-body\">\n                                    <div class=\"subtotal\">subtotal:\n                                        <span style=\"float: right;\">\n                <i class=\"fa fa-inr\"></i>.{{address.Subtotal | number:'1.2-2'}}</span>\n                                    </div>\n                                    <div class=\"promo-discount\">Promo Discount:\n                                        <span id=\"prmDis\" style=\"float: right;\">\n                <i class=\"fa fa-inr\"></i>{{address.Promo_Discount | number:'1.2-2'}}</span>\n                                    </div>\n                                    <div class=\"shipping_cost\">shipping cost:\n                                        <span id=\"shippingCost\" style=\"float: right;\">\n                <i class=\"fa fa-inr\"></i>.{{address.Shipping_Cost | number:'1.2-2'}}</span>\n                                    </div>\n                                    <hr/>\n                                    <div class=\"final_payment\">total\n                                        <span id=\"finalPayment\" style=\"float: right;\">\n                <i class=\"fa fa-inr\"></i>.{{address.Total | number:'1.2-2'}} </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/orderdetails/orderdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_orderdetails_service__ = __webpack_require__("./src/app/orderdetails/Service/orderdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_Services_user_service__ = __webpack_require__("./src/app/login/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderdetailsComponent = /** @class */ (function () {
    function OrderdetailsComponent(activeatedRoute, _orderDetials, router, userservice, _navbar) {
        this.activeatedRoute = activeatedRoute;
        this._orderDetials = _orderDetials;
        this.router = router;
        this.userservice = userservice;
        this._navbar = _navbar;
    }
    OrderdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeatedRoute.params.subscribe(function (params) {
            _this.id = params['order_id'];
        });
        var token = sessionStorage.getItem('userToken');
        this.access_Token = token;
        this._orderDetials.GetOrderDetials(token, this.id).subscribe(function (data) {
            _this.order_detailsVm = data;
        });
    };
    OrderdetailsComponent.prototype.ReOrder = function (orderItems) {
        var _this = this;
        this._orderDetials.ReOrder(this.access_Token, orderItems).subscribe(function (data) {
            var userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
            if (data === '201') {
                _this.userservice.GetUserCartData(_this.access_Token, userId).subscribe(function (respe) {
                    _this.userdata = respe;
                    sessionStorage.setItem('userCartITem', JSON.stringify(_this.userdata.userCartList));
                    sessionStorage.setItem('userWhishList', JSON.stringify(_this.userdata.userWishlist));
                    _this._navbar.name = _this.userdata.customerdata.firstname;
                    _this._navbar.change();
                });
                _this.router.navigate(['/Home']);
            }
        });
    };
    OrderdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-orderdetails',
            template: __webpack_require__("./src/app/orderdetails/orderdetails.component.html"),
            styles: [__webpack_require__("./src/app/orderdetails/orderdetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__Service_orderdetails_service__["a" /* OrderdetailsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__login_Services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__navbar_Services_navbar_service__["a" /* NavbarService */]])
    ], OrderdetailsComponent);
    return OrderdetailsComponent;
}());



/***/ }),

/***/ "./src/app/pageservice/pager-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagerServiceService = /** @class */ (function () {
    function PagerServiceService() {
    }
    PagerServiceService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        var totalPages = Math.ceil(totalItems / pageSize);
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage;
        var endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PagerServiceService);
    return PagerServiceService;
}());



/***/ }),

/***/ "./src/app/pay-tm/pay-tm.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pay-tm/pay-tm.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pay-tm works!\n</p>\n<p>\n    <button id=\"rzp-button1\" (click)=\"PAYNOW()\">Pay</button>\n  </p>"

/***/ }),

/***/ "./src/app/pay-tm/pay-tm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayTmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__razorpay_service_window__ = __webpack_require__("./src/app/razorpay/service/window.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayTmComponent = /** @class */ (function () {
    function PayTmComponent(router, winRef, _http) {
        this.router = router;
        this.winRef = winRef;
        this._http = _http;
    }
    PayTmComponent.prototype.ngOnInit = function () {
        this.data = this.winRef.returnPayTmData();
        this.Message = 'Paytm';
        this.mailbody = this.data.mailbody;
        this.PAYNOW();
    };
    PayTmComponent.prototype.PAYNOW = function () {
        // tslint:disable-next-line:no-debugger
        debugger;
        console.log(this.data);
        var form = '<form method="post" action="' + this.data.routeUrl + ' name="paytm-payment-form"> ';
        form = form + '<input type="hidden" name="MID" value=' + this.data.routeUrl + '>';
        form = form + '<input type="hidden" name="CHANNEL_ID" value=' + this.data.Channel_id + '>';
        form = form + '<input type="hidden" name="INDUSTRY_TYPE_ID" value=' + this.data.Industry_type_id + '>';
        form = form + '<input type="hidden" name="WEBSITE" value=' + this.data.Website + '>';
        form = form + '<input type="hidden" name="EMAIL" value=' + this.data.email + '>';
        form = form + '<input type="hidden" name="MOBILE_NO" value=' + this.data.phoneNo + '>';
        form = form + '<input type="hidden" name="CUST_ID" value=' + this.data.cust_id + '>';
        form = form + '<input type="hidden" name="ORDER_ID" value=' + this.data.orderid + ' >';
        form = form + '<input type="hidden" name="TXN_AMOUNT" value=' + this.data.amount + ' >';
        form = form + '<input type="hidden" name="CHECKSUMHASH" value=' + this.data.checksum + ' >';
        console.log(form);
        // form.concat('body').submit();
        var body = JSON.stringify(this.data);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'false');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        // tslint:disable-next-line:no-debugger
        debugger;
        this._http.post('https://secure.paytm.in/oltp-web/processTransaction?orderid=' + this.data.orderid, body, options)
            .map(function (response) {
            // tslint:disable-next-line:no-debugger
            debugger;
            var data = response.json();
            console.log(data);
        });
    };
    PayTmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pay-tm',
            template: __webpack_require__("./src/app/pay-tm/pay-tm.component.html"),
            styles: [__webpack_require__("./src/app/pay-tm/pay-tm.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__razorpay_service_window__["a" /* WindowRef */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], PayTmComponent);
    return PayTmComponent;
}());



/***/ }),

/***/ "./src/app/popular-brands/popular-brands.component.css":
/***/ (function(module, exports) {

module.exports = ".popular-brands .carousel {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.carousel-indicators {\r\n    bottom: -10px;\r\n}\r\n\r\n.carousel-indicators li,\r\n.carousel-indicators .active {\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    background: #ddd;\r\n    padding: 3px;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n    cursor: pointer;\r\n    width: 0;\r\n    height: 0;\r\n    margin: 0;\r\n}\r\n\r\n.carousel-indicators .active {\r\n    background: #f67f57;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n    width: 0;\r\n    height: 0;\r\n}"

/***/ }),

/***/ "./src/app/popular-brands/popular-brands.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container popular-brands\">\n    <h2 class=\"text-center\">Popular Brands</h2>\n    <hr/>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n\n        </div>\n    </div>\n</div> -->\n<section class=\"popular-brands\">\n    <div class=\"container\">\n        <h2 class=\"text-center\">Popular Brands</h2>\n        <div id=\"Carousel\" class=\"carousel slide\">\n            <ol class=\"carousel-indicators\">\n                <li data-target=\"#Carousel\" data-slide-to=\"0\" class=\"active\"></li>\n                <li data-target=\"#Carousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#Carousel\" data-slide-to=\"2\"></li>\n            </ol>\n\n            <div class=\"carousel-inner\">\n\n                <div class=\"item active\">\n                    <div class=\"row text-center\">\n                        <div class=\"col-lg-3 col-xs-6\">\n                            <a href=\"#\" class=\"img-responsive link center-block\"><img src=\"https://www.bharatbiotech.com/images/header-logo.png\" alt=\"\" target=\"_blank\" style=\"max-width:100%;\"></a>\n                        </div>\n                        <div class=\"col-lg-3 col-xs-6\">\n                            <a href=\"#\" class=\"img-responsive link center-block\"><img src=\"https://downloads.healthcatalyst.com/wp-content/themes/health_catalyst_v4.1_timber/images/logotype/logotype.svg\" alt=\"\" target=\"_blank\" style=\"max-width:100%;\"></a>\n                        </div>\n                        <div class=\"col-lg-3 col-xs-6\">\n                            <a href=\"#\" class=\"img-responsive link center-block\"><img src=\"https://www.cipla.com/templates/home_tpl/images/logo-home.png\" alt=\"\" target=\"_blank\" style=\"max-width:100%;\"></a>\n                        </div>\n                        <div class=\"col-lg-3 col-xs-6\">\n                            <a href=\"#\" class=\"img-responsive link center-block\"><img src=\"http://leeford.in/wp-content/uploads/2018/05/LEEFORD-LOGO.png\" alt=\"\" target=\"_blank\" style=\"max-width:100%;\"></a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"item\">\n                    <div class=\"row text-center\">\n                        <div class=\"col-lg-3 col-xs-6\">\n                            <a href=\"#\" class=\"img-responsive link center-block\"><img src=\"https://www.bharatbiotech.com/images/header-logo.png\" alt=\"\" target=\"_blank\" style=\"max-width:100%;\"></a>\n                        </div>\n                        <div class=\"col-lg-3 col-xs-6\">\n                            <a href=\"#\" class=\"img-responsive link center-block\"><img src=\"https://downloads.healthcatalyst.com/wp-content/themes/health_catalyst_v4.1_timber/images/logotype/logotype.svg\" alt=\"\" target=\"_blank\" style=\"max-width:100%;\"></a>\n                        </div>\n                        <div class=\"col-lg-3 col-xs-6\">\n                            <a href=\"#\" class=\"img-responsive link center-block\"><img src=\"https://www.cipla.com/templates/home_tpl/images/logo-home.png\" alt=\"\" target=\"_blank\" style=\"max-width:100%;\"></a>\n                        </div>\n                        <div class=\"col-lg-3 col-xs-6\">\n                            <a href=\"#\" class=\"img-responsive link center-block\"><img src=\"http://leeford.in/wp-content/uploads/2018/05/LEEFORD-LOGO.png\" alt=\"\" target=\"_blank\" style=\"max-width:100%;\"></a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"item\">\n                    <div class=\"row text-center\">\n                        <div class=\"col-lg-3 col-xs-6\">\n                            <a href=\"#\" class=\"img-responsive link center-block\"><img src=\"https://www.bharatbiotech.com/images/header-logo.png\" alt=\"\" target=\"_blank\" style=\"max-width:100%;\"></a>\n                        </div>\n                        <div class=\"col-lg-3 col-xs-6\">\n                            <a href=\"#\" class=\"img-responsive link center-block\"><img src=\"https://downloads.healthcatalyst.com/wp-content/themes/health_catalyst_v4.1_timber/images/logotype/logotype.svg\" alt=\"\" target=\"_blank\" style=\"max-width:100%;\"></a>\n                        </div>\n                        <div class=\"col-lg-3 col-xs-6\">\n                            <a href=\"#\" class=\"img-responsive link center-block\"><img src=\"https://www.cipla.com/templates/home_tpl/images/logo-home.png\" alt=\"\" target=\"_blank\" style=\"max-width:100%;\"></a>\n                        </div>\n                        <div class=\"col-lg-3 col-xs-6\">\n                            <a href=\"#\" class=\"img-responsive link center-block\"><img src=\"http://leeford.in/wp-content/uploads/2018/05/LEEFORD-LOGO.png\" alt=\"\" target=\"_blank\" style=\"max-width:100%;\"></a>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            <!-- carousel-inner -->\n        </div>\n        <!-- Carousel -->\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/popular-brands/popular-brands.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularBrandsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopularBrandsComponent = /** @class */ (function () {
    function PopularBrandsComponent() {
    }
    PopularBrandsComponent.prototype.ngOnInit = function () {
    };
    PopularBrandsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-popular-brands',
            template: __webpack_require__("./src/app/popular-brands/popular-brands.component.html"),
            styles: [__webpack_require__("./src/app/popular-brands/popular-brands.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopularBrandsComponent);
    return PopularBrandsComponent;
}());



/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/privacy-policy\">Privacy Policy</a>\n                    </li>\n                </ol>\n                <!-- <a class=\"\" href=\"#\"><img class=\"\" src=\"../../assets/img/gw-banner.png\" alt=\"Genericwala Logo\"></a> -->\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container trmsandcndtns\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <h3>Privacy Policy</h3>\n\n            <p>\n                The website Genericwala.com is an internet based portal owned and operated by RxShopy India Private Limited, a company incorporated under the Companies Act, 1956 having registered office at Badeti’s Mansion, 6-3-712/135, Panjagutta Colony, Hyderabad –\n                500 082. The Website is a platform that facilitates the online sale of Medical Products, Surgicals and Healthcare products offered by various merchants/vendors/service providers (\"Sellers\") (collectively the \"Services\"). The Services are\n                offered to the Users through various modes. These terms and conditions of use (\"Terms of Use\") of the Website between RxShopy India Private Limited and the users/ sellers/registrants of the Website (\"You\" or \"Your\" or \"Yourself\" or \"User\")\n                describe the terms on which RxShopy India Private Limited offers you access to the Website and the Services through the Website.\n            </p>\n            <p>\n                For providing its services, RxShopy India Private Limited will host data and information on the website of the company. The RxShopy India Private Limited will not review, share, distribute, or reference any such user data except as provided in the Terms\n                of Use, or as may be required by law. Individual records of user data may be viewed or accessed only for the purpose of resolving a problem, support issues, or suspected violation of the Terms of Use, or as may be required by law. We would\n                take all reasonable precautions for maintaining confidentiality of data.\n            </p>\n            <h4>Personal Information:</h4>\n            <p>\n                \"Personal information\" is defined under the SPI Rules to mean any information that relates to a natural person, which, either directly or indirectly, in combination with other information available or likely to be available with a body corporate, is capable\n                of identifying such person.\n            </p>\n            <p>\n                The SPI Rules further define \"sensitive personal data or information\" of a person to mean personal information about that person relating to:\n            </p>\n            <p>\n                a. passwords;\n            </p>\n            <p>\n                b. financial information such as bank accounts, credit and debit card details or other payment instrument details;\n            </p>\n            <p>\n                c. physical, physiological and mental health condition;\n            </p>\n            <p>\n                d. sexual orientation; e. medical records and history;\n            </p>\n            <p>\n                f. biometric information;\n            </p>\n            <p>\n                g. information received by body corporate under lawful contract or otherwise;\n            </p>\n            <p>\n                h. visitor details as provided at the time of registration or thereafter; and\n            </p>\n            <p>\n                i. call data records.\n            </p>\n            <p>\n                Information that is freely available in the public domain or accessible under the Right to Information Act, 2005 or any other law will not be regarded as sensitive personal data or information.\n            </p>\n            <h4>Users Note:\n            </h4>\n            <p>\n                As part of the registration/application creation and submission process that is available to the Users on this website, certain information, including sensitive personal data or information is collected from the Users\n            </p>\n            <p>\n                All statements in this privacy policy apply to all Users, and all Users are therefore required to read and understand the privacy statements set out herein prior to submitting any sensitive personal data or information to RxShopy India Private Limited\n                website, failing which they are required to leave this website immediately.\n            </p>\n            <p>\n                If you have inadvertently submitted any such information to RxShopy India Private Limited prior to reading the privacy statements set out herein, and you do not agree with the manner in which such information is collected, stored or used, then you may\n                access, modify and delete all information stored about you on the Website of the company .\n            </p>\n            <p>\n                User’s personally identifiable information they choose to provide on the website is used to help the Users describe/identify themselves.\n            </p>\n            <p>\n                RxShopy India Private Limited will communicate with the users through email and notices posted on the website or through other means available through the service, SMS, including text and other forms of messaging. The Users can change their e-mail and\n                contact preference at any time by logging into their “Account” at www.genericwala.com and changing the account settings.\n            </p>\n            <p>\n                To the extent necessary to provide Users with the services on the Website, RxShopy India Private Limited may provide their personal information to third party contractors who work on behalf of or with RxShopy India Private Limited to provide Users with\n                such services, to help RxShopy India Private Limited communicate with Users or to maintain the Website. Generally these contractors do not have any independent right to share this information, however certain contractors who provide services\n                on the website, including the providers of online communications services, will have rights to use and disclose the personal information collected in connection with the provision of these services in accordance with their own privacy\n                policies.\n            </p>\n            <h4>Liability:\n            </h4>\n            <p>\n                1. RxShopy India Private Limited will not be held responsible or liable in any manner to the Users for any losses, damage, injuries or expenses incurred by the Users as a result of any disclosures made by RxShopy India Private Limited on the website,\n                where the User has consented to the making of disclosures by RxShopy India Private Limited.\n            </p>\n            <p>\n                2. If the User had revoked such consent under the terms of the privacy policy, then RxShopy India Private Limited shall not be responsible or liable in any manner to the User for any losses, damage, injuries or expenses incurred by the User as a result\n                of any disclosures made by RxShopy India Private Limited prior to its actual receipt of such revocation.\n            </p>\n            <p>\n                3. The User shall not hold RxShopy India Private Limited responsible or liable in any way for any disclosures by RxShopy India Private Limited under Regulation 6 of the Sensitive Personal Information) Rules, 2011 (the \"SPI Rules\").\n            </p>\n            <p>\n                4. The Services provided by RxShopy India Private Limited or any of its licensers or providers as available, and without any warranties or conditions (express or implied, including the implied warranties of merchantability, accuracy, fitness for a particular\n                purpose, title and non-infringement, arising by statute or otherwise in law or from a course of dealing or usage or trade). RxShopy India Private Limited does not provide or make any representation, warranty or guaranty, express or implied\n                about the website or the services. RxShopy India Private Limited does not verifies any content or information provided by the Sellers on the Website and to the fullest extent permitted by law, disclaims all liability arising out of the\n                User's use or reliance upon the Website, the Services, the RxShopy India Private Limited Content, representations and warranties made by the Sellers or the content or information provided by such Seller on the Website or any opinion or\n                suggestion given or expressed by RxShopy India Private Limited or any Seller in relation to any User or Services provided by RxShopy India Private Limited.\n            </p>\n            <p>\n                5. The Website may be linked to the website of third parties, affiliates and business partners. RxShopy India Private Limited has no control over, and not liable or responsible for content, accuracy, validity, reliability, quality of such websites or\n                made available by/through our Website. Inclusion of any link on the Website does not imply that RxShopy India Private Limited endorses the linked site. User may use the links and these services at User's own risk.\n            </p>\n            <p>\n                6. RxShopy India Private Limited assumes no responsibility, and shall not be liable for, any damages to, or viruses that may infect User’s equipment on account of User's access to, use of, or browsing the Website or the downloading of any material, data,\n                text, images, video content, or audio content from the Website. If a User’s dissatisfied with the Website, User's sole remedy is to discontinue using the Website.\n            </p>\n            <p>\n                7. In no event, including but not limited to negligence, shall RxShopy India Private Limited, or any of its directors, officers, employees, agents or content or service providers (collectively, the \"protected entities\") be liable for any direct, indirect,\n                special, incidental, consequential, exemplary or punitive damages arising from, or directly or indirectly related to, the use of, or the inability to use, the Website or the content, materials and functions related thereto, User's provision\n                of information via the Website, lost business or lost sales, even if such protected entity has been advised of the possibility of such damages. In no event shall the protected entities be liable for provision of or failure to provide all\n                or any service by a Seller to any User and any content posted, transmitted, exchanged or received by or on behalf of any User or other person on or through the Website.\n\n            </p>\n            <p>\n                8 .In no event shall the protected entities be liable for failure on the part of the Sellers to provide agreed products or services and for any comments or feedback given by any of the Users in relation to the services provided by any Seller.\n            </p>\n            <p>\n                9. In no event shall the protected entities be liable or responsible for the listing order of Sellers on the Website .The listing of Sellers on the Website is based on numerous factors including User's comments and feedbacks.\n            </p>\n            <h4>Indemnity:</h4>\n            <p>\n                User agrees to indemnify and hold harmless RxShopy India Private Limited, its affiliates, officers, directors, employees, consultants, licensers, agents, and representatives from any and all third party claims, losses, liability, damages, and/or costs\n                (including reasonable attorney fees and costs) arising from his/her/its access to or use of Website, violation of this Agreement, or infringement by any other user of his/her/its account, of any intellectual property or other right of\n                any person or entity. RxShopy India Private Limited will notify you promptly of any such claim, loss, liability, or demand, and in addition to your foregoing obligations, you agree to provide us with reasonable assistance, at your expense,\n                in defending any such claim, loss, liability, damage, or cost.\n            </p>\n            <h4>Termination and Dispute:\n            </h4>\n            <p>\n                1. This Agreement will remain in full force and effects all the user using this Website in any form or capacity.\n            </p>\n            <p>\n                2. The User can terminate his/her/its membership with RxShopy India Private Limited at any time by providing prior written notice to mail id of the RxShopy India Private Limited.\n            </p>\n            <p>\n                3. Users registered with us should be above 18 years of age. RxShopy India Private Limited is not intended for children under the age of 18.\n            </p>\n            <p>\n                4. RxShopy India Private Limited reserves the right to terminate any account in cases:\n            </p>\n            <p>\n                •A User breaches any terms and conditions of this Terms of Use or privacy policy;\n            </p>\n            <p>\n                •RxShopy India Private Limited is unable to verify or authenticate any information provide to RxShopy India Private Limited by a User; or\n            </p>\n            <p>\n                •RxShopy India Private Limited believes in its sole discretion that User's actions may cause legal liability for such User, other Users or for RxShopy India Private Limited or are contrary to the interests of the Website.\n            </p>\n            <p>\n                5. Once temporarily suspended, indefinitely suspended or terminated, the User may not continue to use the Website under the same account, a different account or re-register under a new account.\n            </p>\n            <p>\n                6. RxShopy India Private Limited shall have no obligation to maintain or provide any of User's data and shall thereafter, unless legally prohibited, delete all User's data in its systems or otherwise in its possession or under its control.\n            </p>\n            <p>\n                7. This Agreement and any contractual obligation between RxShopy India Private Limited and User will be governed by the laws of India, subject to the exclusive jurisdiction of Courts in Hyderabad.\n            </p>\n            <p>\n                8. All disputes will be subject to arbitration in English by a single arbitrator appointed by RxShopy India Private Limited under the Arbitration and Conciliation Act, 1996.\n            </p>\n            <p>\n                9. Even after termination, certain obligations mentioned under Covenants, Liability, Indemnity, Intellectual Property, Dispute Resolution will continue and survive termination.\n            </p>\n            <h4>Severability:\n            </h4>\n            <p>\n                If any provision of this Terms of Use is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced.\n            </p>\n            <p>\n                If you have questions about this Privacy Policy, please contact our customer service at support@genericwala.com or call our landline no. 040-65916591.\n            </p>\n\n            <h4>Terms and Conditions:\n            </h4>\n            <p>\n                The following are the Terms and Conditions, read together with the Privacy Policy, that govern your purchase and use of the healthcare products and services (the \"Products\") from www.genericwala.com, and constitute a legally binding agreement, between\n                you (\"the Customer\" or the \"User\") and www.genericwala.com, the online Pharmacy.\n            </p>\n            <p>\n                1. By indicating User's acceptance to purchase any product or service offered on the site, user is required to complete such transactions after making payment. Users shall prohibit from indicating its acceptance to purchase products and services where\n                it does not intend to complete such transactions\n            </p>\n            <p>\n                2. RxShopy India Private Limited can cancel any product(s) as is reflected on the Website due to some technical issue, typographical error or product information published by seller may be incorrectly reflected. Any order placed for a product that is\n                listed at an incorrect price may be canceled. This cancelation shall be regardless of whether the order has been confirmed and/or payment is processed. In the event the payment has been processed, the same shall be credited to your account\n                and duly notified thru e-mail.\n\n            </p>\n            <p>\n                3. RxShopy India Private Limited is not responsible for non-delivery, unsatisfactory or delayed performance of services or damages or delays as a result of items which are out of stock, back ordered or otherwise unavailable. All items are offered only\n                for a restricted time and only for the available supply.\n\n            </p>\n            <p>\n                4. In the event that a non-delivery occurs because of a mistake by you (i.e. wrong name or address) any extra cost towards re-delivery shall be claimed from you.\n            </p>\n            <p>\n                5. Delivery time of order processing starts from the day of receipt of the payment confirmed against the order placed with RxShopy India Private Limited.\n\n            </p>\n            <p>\n                6. For COD (cash on delivery) orders, the expected delivery time shall be calculated from the date of placing the order. The Delivery time is an approximate time that may differ in case of some un-avoidable conditions.\n\n            </p>\n            <p>\n                7. RxShopy India Private Limited shall not be liable for any delay / non-delivery of purchased goods by the Vendors due to any un-avoidable events including but not limited to flood, fire, wars, acts of God or any event beyond the control of RxShopy India\n                Private Limited.\n\n            </p>\n            <p>\n                8. Partial delivery of product if any needs to be reported within 24 hrs of receipt of the product.\n\n            </p>\n            <p>\n                9. Cancellation on user's request may not be allowed, subject to the specific terms and conditions applicable to the type of product or service purchased.\n\n            </p>\n            <p>\n                10. Delivery of orders would be done address specific not person/time specific.\n\n            </p>\n            <p>\n                11. RxShopy India Private Limited shall not be held responsible for any refund claim in defects on products with manufacturer's warranty. For reported defects on products with manufacturer's warranty the customer needs to contact the relevant service\n                center of the manufacturer, respectively.\n\n            </p>\n            <p>\n                12. RxShopy India Private Limited reserves the right to cancel any orders placed which is not available, out of stock or in short supply and which holds International Billing Address.\n\n            </p>\n            <p>\n                13. Region specific or place specific charges or Tax may be levied on some products displayed on the site. These charges are not refundable and shall be borne by the customer. In the event of cancellation of the order, the charges levied shall not be\n                refunded.\n            </p>\n            <p>\n                14. By placing the order you agree to receive calls from RxShopy India Private Limited and its agents, courier partners seeking clarification/information regarding your order and any other related information as and when required and disclaim any liability\n                of RxShopy India Private Limited in this regard.\n\n            </p>\n            <p>\n                15. All prices and availability of products are subject to change without prior notice at the sole discretion of RxShopy India Private Limited.\n            </p>\n            <h4>Payments:\n            </h4>\n            <p>\n                In order to facilitate payments purchased by you through genericwala.com, (RxShopy India Private Limited), offers an online payment gateway facility.\n            </p>\n            <p>\n                This Facility will facilitate you to make online payments, using netbanking, payment wallets, credit/debit card account or any other mode acceptable and made available to the customers from time to time, subject to your complete acceptance and adherence\n                to the terms and conditions hereof as well as the terms and conditions of the website of the payment gateway service provider/s.\n            </p>\n            <p>\n                You agree, understand, undertake and confirm that the credit/debit card details provided by you for making payments for Product(s) purchased through RxShopy India Private Limited, either through the on-line payment gateway mechanism will be correct, current,\n                complete and accurate and you shall not use the credit card/ debit card or any other bank account which is not lawfully owned by you.\n            </p>\n            <p>\n                The aforesaid information provided by you will not be shared by RxShopy India Private Limited with any of the third parties unless required by law, regulation or court order or for facilitating and completing the purchases made by you or its Vendor\\Seller\n                will not be responsible for any financial loss, inconvenience or mental agony resulting from misuse of your ID/password/credit card number/account details in anyway.\n\n            </p>\n\n\n            <h4>Disclaimer</h4>\n            <p>\n                USER ACKNOWLEDGES THAT THROUGH THIS SITE, RXSHOPY INDIA PRIVATE LIMITED MERELY ACTS AS A FACILITATOR, IN ORDER TO FACILITATE HIGHEST QUALITY SERVICES TO THE USERS. RXSHOPY INDIA PRIVATE LIMITED DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THIS SITE\n                WILL BE UNINTERRUPTED OR ERROR FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THIS SITE OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, BUT SHALL ENDEAVOUR TO ENSURE USER FULLEST SATISFACTION.\n            </p>\n            <p>\n                RXSHOPY INDIA PRIVATE LIMITED IS NOT LIABLE FOR ANY CLAIMS AGAINST LACK OR DEFICIENCY OF SERVICES; NON-FULFILLMENT OR UNSATISFACTORY FULFILLMENT OF PRODUCTS AND SERVICES PURCHASED BY USER FROM THE THIRD PARTY. THUS, RXSHOPY INDIA PRIVATE LIMITED SHALL\n                NOT HAVE ANY LIABILITY WHATSOEVER FOR ANY ASPECT OF THE ARRANGEMENTS BETWEEN THE USERS OF THE SITE AS REGARDS THE STANDARDS OF PRODUCTS AND SERVICES. IN NO EVENT SHALL RXSHOPY INDIA PRIVATE LIMITED BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE,\n                INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY OTHER DAMAGES RESULTING FROM:\n            </p>\n            <p>\n                (A) THE USE OR THE INABILITY TO USE THE PRODUCTS AND SERVICES;\n            </p>\n            <p>\n                (B) THE COST OF PROCUREMENT OF SUBSTITUTE PRODUCTS AND SERVICES;\n            </p>\n            <p>\n                (C) UNAUTHORIZED ACCESS TO OR ALTERATION OF THE USER'S TRANSMISSIONS OR DATA;\n            </p>\n            <p>\n                (D) ANY OTHER MATTER RELATING TO THE SERVICES; INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE WEBSITE.\n            </p>\n            <p>\n                RXSHOPY INDIA PRIVATE LIMITED SHALL NOT BE HELD RESPONSIBLE FOR NON-AVAILABILITY OF THE WEBSITE DURING PERIODIC MAINTENANCE OPERATIONS OR ANY UNPLANNED SUSPENSION OF ACCESS TO THE WEBSITE THAT MAY OCCUR DUE TO TECHNICAL REASONS OR FOR ANY REASON BEYOND\n                RXSHOPY INDIA PRIVATE LIMITED'S CONTROL. THE USER UNDERSTANDS AND AGREES THAT ANY MATERIAL AND/OR DATA DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE WEBSITE IS DONE ENTIRELY AT THEIR OWN DISCRETION AND RISK AND THEY WILL BE SOLELY RESPONSIBLE\n                FOR ANY DAMAGE TO THEIR COMPUTER SYSTEMS OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF SUCH MATERIAL AND/OR DATA.\n            </p>\n            <p>\n                THE CLAUSE SHALL SURVIVE THE TERMINATION OR EXPIRY OF THIS AGREEMENT.\n            </p>\n\n\n        </div>\n\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__("./src/app/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__("./src/app/privacy-policy/privacy-policy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/razorpay/razorpay.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n#rzp-button1{\r\ndisplay:none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/razorpay/razorpay.component.html":
/***/ (function(module, exports) {

module.exports = "\n<script src=\"https://checkout.razorpay.com/v1/checkout.js\"></script>\n<div class=\"container pad-top login\">\n  <div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 main\">\n      <p>\n        <button id=\"rzp-button1\" (click)=\"PAYNOW()\">Pay</button>\n      </p>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/razorpay/razorpay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RazorpayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_window__ = __webpack_require__("./src/app/razorpay/service/window.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_payment_detail_service__ = __webpack_require__("./src/app/razorpay/service/payment-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RazorpayComponent = /** @class */ (function () {
    function RazorpayComponent(router, winRef, _http, _PaymentDetailService, _navabar, _ngZone) {
        this.router = router;
        this.winRef = winRef;
        this._http = _http;
        this._PaymentDetailService = _PaymentDetailService;
        this._navabar = _navabar;
        this._ngZone = _ngZone;
    }
    RazorpayComponent.prototype.ngOnInit = function () {
        this.data = this.winRef.getData();
        this.Message = 'RazorPayment';
        this.mailbody = this.data.mailbody;
        this.PAYNOW();
    };
    RazorpayComponent.prototype.PAYNOW = function () {
        this.data.amount = (this.data.amount);
        this.orderId = this.data.receipt;
        var options = {
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
        var rzp1 = new this.winRef.nativeWindow.Razorpay(options);
        rzp1.open();
    };
    RazorpayComponent.prototype.paymentCapture = function (response) {
        var _this = this;
        // console.log(response);
        var paymentId = response.razorpay_payment_id;
        this._PaymentDetailService.RazorPayPaymentDetails(paymentId, this.orderId, this.mailbody).subscribe(function (data) {
            if (data !== 'Failure') {
                _this.success();
            }
        });
    };
    RazorpayComponent.prototype.closePop = function () {
        var _this = this;
        this._ngZone.run(function () {
            _this.router.navigate(['/Failure']);
        });
    };
    RazorpayComponent.prototype.success = function () {
        var _this = this;
        var retrieveArray = JSON.parse(sessionStorage.getItem('userCartITem'));
        for (var i = 0; i < retrieveArray.length; i++) {
            retrieveArray.slice(i);
        }
        sessionStorage.removeItem('userCartITem');
        this._navabar.change();
        this.winRef.setOrderId(this.orderId);
        this._ngZone.run(function () {
            _this.router.navigate(['/Success']);
        });
    };
    RazorpayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-razorpay',
            template: __webpack_require__("./src/app/razorpay/razorpay.component.html"),
            styles: [__webpack_require__("./src/app/razorpay/razorpay.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__service_window__["a" /* WindowRef */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__service_payment_detail_service__["a" /* PaymentDetailService */], __WEBPACK_IMPORTED_MODULE_5__navbar_Services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], RazorpayComponent);
    return RazorpayComponent;
}());



/***/ }),

/***/ "./src/app/razorpay/service/payment-detail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentDetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentDetailService = /** @class */ (function () {
    function PaymentDetailService(_http) {
        this._http = _http;
    }
    PaymentDetailService.prototype.RazorPayPaymentDetails = function (paymentId, orderId, mailbody) {
        var user_AccesToken = sessionStorage.getItem('userToken');
        var userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
        var body = JSON.stringify(mailbody);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._http.post('http://localhost:31029/api/order/razorPayDetails?paymentId=' + paymentId + '&orderId=' + orderId + '&userId='
            + userId, body, options)
            .map(function (response) { return response.json(); });
    };
    PaymentDetailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PaymentDetailService);
    return PaymentDetailService;
}());



/***/ }),

/***/ "./src/app/razorpay/service/window.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef.prototype.setData = function (data) {
        this.razorVm = data;
    };
    WindowRef.prototype.getData = function () {
        return this.razorVm;
    };
    WindowRef.prototype.setPayTmData = function (data) {
        this.paytmVm = data;
    };
    WindowRef.prototype.returnPayTmData = function () {
        return this.paytmVm;
    };
    WindowRef.prototype.setOrderId = function (data) {
        this.orderId = data;
    };
    WindowRef.prototype.returnOrderId = function () {
        return this.orderId;
    };
    WindowRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ "./src/app/return-policy/return-policy.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/return-policy/return-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerlink=\"/return-policy\">Return Policy</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container trmsandcndtns\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <h3>Return Policy</h3>\n\n            <p>\n                The website Genericwala.com is a portal owned and operated by RxShopy India Private Limited, At Genericwala.com, we make sure that you are completely satisfied with our products otherwise we are happy to issue a full refund based on the below conditions:\n            </p>\n            <h4>Refunds is Possible:\n            </h4>\n            <p>\n                If the item(s) is lost during transit\n            </p>\n            <p>\n                If the item(s) is damaged during transit\n            </p>\n            <p>\n                If you received a defective or expired item\n            </p>\n            <p>\n                Refund: Refund may take 8 to 12 working days to reflect in your account(Bank account or wallet) depends on the banking working policy’s we have no control on it.\n            </p>\n            <h4>Refund/Return /Exchange are possible if:\n            </h4>\n            <p>\n                If the request is placed within 24 hrs of delivery\n            </p>\n            <p>\n                If the product is unused\n            </p>\n            <p>\n                If the seal is intact\n            </p>\n            <h4>Refund/Return /Exchange are not possible:\n            </h4>\n            <p>\n                For any wrong ordered items,\n            </p>\n            <p>\n                Requests occur due to change in the medication/prescription\n            </p>\n            <p>\n                Products like Injections, vaccines and products required specific storage conditions are not qualify for return/exchange.\n            </p>\n            <h4>Process of Refund/Return:\n            </h4>\n            <p>\n                To request for a refund, simply you can contact our customer care by calling +91-8885916591 or you can e-mail us at support@genericwala.com with your order details, and valid reason (s)\n            </p>\n            <p>\n                We take customer feedback very seriously and we always use it to improve our quality of service.\n            </p>\n\n        </div>\n\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/return-policy/return-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReturnPolicyComponent = /** @class */ (function () {
    function ReturnPolicyComponent() {
    }
    ReturnPolicyComponent.prototype.ngOnInit = function () {
    };
    ReturnPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-return-policy',
            template: __webpack_require__("./src/app/return-policy/return-policy.component.html"),
            styles: [__webpack_require__("./src/app/return-policy/return-policy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReturnPolicyComponent);
    return ReturnPolicyComponent;
}());



/***/ }),

/***/ "./src/app/shop-header/shop-header.component.css":
/***/ (function(module, exports) {

module.exports = "    .shop-header-bg {\r\n        position: fixed;\r\n        width: 100%;\r\n        top: 58px;\r\n        background-color: #0e76bc;\r\n        z-index: 1029;\r\n    }\r\n    \r\n    .navbar-default.custom-nav .navbar-nav>li>a {\r\n        margin-left: 5px;\r\n        color: #ccc;\r\n        cursor: pointer;\r\n        padding-bottom: 0;\r\n    }\r\n    \r\n    .navbar-default .navbar-nav>.active>a,\r\n    .navbar-default .navbar-nav>.active>a:focus,\r\n    .navbar-default .navbar-nav>.active>a:hover {\r\n        color: #555;\r\n        background: none;\r\n    }\r\n    \r\n    .navbar-nav>li>.dropdown-menu {\r\n        margin-top: -1px;\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n    }\r\n    \r\n    .custom-nav {\r\n        background: none;\r\n        -webkit-box-shadow: none;\r\n                box-shadow: none;\r\n    }\r\n    \r\n    .mega-dropdown {\r\n        position: static !important;\r\n    }\r\n    \r\n    .navbar {\r\n        margin-bottom: 0;\r\n    }\r\n    \r\n    .nav-stacked>li>a {\r\n        position: relative;\r\n        display: block;\r\n        padding: 8px 15px;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .nav-stacked>li>a i {\r\n        float: right;\r\n        font-size: 13px;\r\n        line-height: 17.5px;\r\n    }\r\n    \r\n    .navbar-default.custom-nav .navbar-nav>li>a:hover,\r\n    .navbar-default.custom-nav .navbar-nav>.active>a {\r\n        color: #fff;\r\n        background-color: transparent;\r\n    }\r\n    \r\n    .support-call p {\r\n        color: #fff;\r\n        padding-top: 12px;\r\n        position: relative;\r\n        /* font-size: 13px; */\r\n        margin: 6px 0 0;\r\n        left: -12px;\r\n        float: right;\r\n    }\r\n    \r\n    .mega-dropdown-menu {\r\n        padding: 20px 0px;\r\n        width: 100%;\r\n        background-color: #fff;\r\n        border-bottom-left-radius: 10px;\r\n        border-bottom-right-radius: 10px;\r\n        -webkit-box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);\r\n                box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);\r\n        left: 0;\r\n    }\r\n    \r\n    .mega-dropdown-menu>li>ul {\r\n        padding: 0;\r\n        margin: 0;\r\n    }\r\n    \r\n    .mega-dropdown-menu>li>ul>li {\r\n        list-style: none;\r\n    }\r\n    \r\n    .mega-dropdown-menu>li ul>li>a:hover,\r\n    .mega-dropdown-menu>li ul>li>a:focus {\r\n        text-decoration: none;\r\n    }\r\n    \r\n    .mega-dropdown-menu .dropdown-header {\r\n        font-size: 18px;\r\n        color: #ff3546;\r\n        padding: 5px 60px 5px 5px;\r\n        line-height: 30px;\r\n    }\r\n    \r\n    .mega-dropdown .dropdown-toggle .fa-angle-down {\r\n        margin: 4px 0 0 11px;\r\n    }\r\n    \r\n    .pr-pl-0 {\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n        border-right: 1px solid #ddd;\r\n        margin-top: -20px;\r\n    }\r\n    \r\n    .nav-pills>li>a {\r\n        border-radius: 0;\r\n    }\r\n    \r\n    .mega-dropdown-menu .nav-pills>li>a:hover,\r\n    .mega-dropdown-menu .nav-pills>li.active>a,\r\n    .mega-dropdown-menu .nav-pills>li.active>a:focus,\r\n    .mega-dropdown-menu .nav-pills>li.active>a:hover,\r\n    .mega-dropdown-menu .nav-pills>li.active>a:active {\r\n        background: #0e76bc;\r\n        border-left: 4px solid #ec8558;\r\n        color: #fff;\r\n    }\r\n    \r\n    :focus {\r\n        outline: none;\r\n    }\r\n    \r\n    .mega-dropdown-menu .tab-content h3 {\r\n        font-weight: 400;\r\n        font-size: 16px;\r\n        color: #ec8558;\r\n        margin: 0 0 20px;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .mega-dropdown-menu .tab-content li>a {\r\n        font-size: 13px;\r\n        color: #555;\r\n        padding: 5px 0;\r\n        display: block;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .mega-dropdown-menu .nav-pills>li>a {\r\n        color: #555;\r\n    }\r\n    \r\n    @media(max-width:767px) {\r\n        .shop-header-bg {\r\n            top: 106px;\r\n        }\r\n        .navbar-nav .open .dropdown-menu {\r\n            position: absolute;\r\n            float: none;\r\n            width: auto;\r\n            margin-top: 0px;\r\n            background-color: #fff;\r\n            border: 1px solid #ddd;\r\n            left: 0;\r\n            height: 468px;\r\n            overflow-y: auto;\r\n        }\r\n        .nav-stacked li a {\r\n            padding: 7px 8px;\r\n            font-size: 12px;\r\n        }\r\n        .mega-dropdown-menu .tab-content h3 {\r\n            font-size: 13px;\r\n        }\r\n        .mega-dropdown-menu .tab-content li>a {\r\n            font-size: 11px;\r\n        }\r\n    }"

/***/ }),

/***/ "./src/app/shop-header/shop-header.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"shop-header-bg hidden-xs\">\n    <div class=\"container-fluid\">\n        <nav class=\"navbar navbar-default custom-nav\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"dropdown mega-dropdown shopping-home-dropdown\">\n                    <ul class=\"dropdown-menu mega-dropdown-menu\">\n                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" (click)=\"OpenMenu()\">Shop by Categories\n                                    <i class=\"fa fa-angle-down pull-right\" aria-hidden=\"true\"></i>\n                                </a>\n                        <li class=\"col-md-3 col-sm-5 col-xs-6 pr-pl-0\">\n                            <div class=\"dd-mainmenu\">\n                                <ul class=\"nav tab-menu nav-pills nav-stacked\">\n\n                                    <li *ngFor=\"let item of category_List;let i=index\">\n                                        <a title=\"{{item.name}}\" (mouseenter)=\"mouseEnter(item.name,item.subCategoryVm,item.id);\" (mousemove)=\"mousemove(item.name,item.subCategoryVm,item.id);\">\n                                            <i class=\"flaticon-medical-21 text-right\"></i>{{item.name}}\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </li>\n                        <li class=\"col-md-9 col-sm-7 col-xs-6\" *ngIf=\"mouseOver === true\">\n                            <div class=\"tab-content\">\n                                <div class=\"tab-pane active\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6 col-sm-12\">\n                                            <h3>\n                                                <a href=\"javascript:void(0);\" (click)=\"GetCategoryProducts(catName,category_id)\">\n                                                    {{catName}}\n                                                </a>\n                                            </h3>\n                                            <ul class=\"list-unstyled\">\n                                                <li class=\"subcatories\" *ngFor=\"let subcat of subcategory;let i=index\">\n                                                    <a title=\"{{subcat.name}}\" (click)=\"GetSubCategoryProducts(subcat.name,subcat.id,catName,category_id)\">{{subcat.name}}</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"col-md-6 hidden-sm hidden-xs\">\n                                            <ul class=\"list-unstyled list-inline\">\n                                                <li>\n                                                    <img src=\"../../assets/img/surgical.png\" class=\"img-responsive img-fluid\"\n                                                        alt=\"\">\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"hidden-xs\">\n                    <a routerLink=\"/Home/DlofDay\"> Offers</a>\n                </li>\n                <li class=\"hidden-xs\">\n                    <a routerLink=\"/Home/AllGenericMed\">Generic Medicines</a>\n                </li>\n            </ul>\n            <div class=\"support-call hidden-xs hidden-sm\">\n                <p>Need help with your booking?\n                    <span style=\"padding:0px 5px;\">\n                        <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                    </span> +91-8885916591</p>\n            </div>\n        </nav>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/shop-header/shop-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_Services_categoires_service__ = __webpack_require__("./src/app/sidebar/Services/categoires.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopHeaderComponent = /** @class */ (function () {
    function ShopHeaderComponent(_catgoryService, el, router) {
        this._catgoryService = _catgoryService;
        this.el = el;
        this.router = router;
        this.showdiv = false;
        this.mouseOver = false;
        this.mouseleave = true;
        this.selected = false;
    }
    ShopHeaderComponent.prototype.ngOnInit = function () {
    };
    ShopHeaderComponent.prototype.mouseEnter = function (itemName, cat, id) {
        this.catName = '';
        this.mouseOver = true;
        this.selected = true;
        this.subcategory = cat;
        this.category_id = id;
        this.catName = itemName;
    };
    ShopHeaderComponent.prototype.mousemove = function (itemName, cat, id) {
        this.catName = '';
        this.mouseOver = true;
        this.selected = true;
        this.subcategory = cat;
        this.category_id = id;
        this.catName = itemName;
    };
    ShopHeaderComponent.prototype.OpenMenu = function () {
        var _this = this;
        this.mouseOver = false;
        this._catgoryService.GetCategoriesList().subscribe(function (catdata) {
            _this.category_List = catdata;
        }, function (error) {
            _this.statusMesssage = 'There is problem with service';
        });
    };
    ShopHeaderComponent.prototype.GetCategoryProducts = function (catName, CatId) {
        var category = '';
        if (catName.includes('&')) {
            var spaceCat = catName.replace(/\s/g, '');
            category = spaceCat.replace('&', '-');
        }
        else {
            category = catName.replace(/\s/g, '-');
        }
        this.ParacategorId = {
            catId: CatId,
            subcatId: null,
            status: true
        };
        this._catgoryService.setData(this.ParacategorId);
        this.router.navigate(['/Product', category]);
    };
    ShopHeaderComponent.prototype.GetSubCategoryProducts = function (subcatname, subcatId, catname, catid) {
        var subcategory = '';
        var category = '';
        if (subcatname.includes('&') || catname.includes('&')) {
            if (subcatname.includes('&')) {
                var spaceCat = subcatname.replace(/\s/g, '');
                subcategory = spaceCat.replace('&', '-');
            }
            else {
                subcategory = subcatname.replace(/\s/g, '-');
            }
            if (catname.includes('&')) {
                var spaceCat = catname.replace(/\s/g, '');
                category = spaceCat.replace('&', '-');
            }
            else {
                category = catname.replace(/\s/g, '-');
            }
        }
        else {
            subcategory = subcatname.replace(/\s/g, '-');
            category = catname.replace(/\s/g, '-');
        }
        this.ParacategorId = {
            catId: catid,
            subcatId: subcatId,
            status: false
        };
        this._catgoryService.setData(this.ParacategorId);
        this.router.navigate(['/Product', category, subcategory]);
    };
    ShopHeaderComponent.prototype.ApplyClass = function () {
        this.applyClass = 'active';
    };
    ShopHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shop-header',
            template: __webpack_require__("./src/app/shop-header/shop-header.component.html"),
            styles: [__webpack_require__("./src/app/shop-header/shop-header.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sidebar_Services_categoires_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], ShopHeaderComponent);
    return ShopHeaderComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/Services/categoires.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryService = /** @class */ (function () {
    function CategoryService(_http) {
        this._http = _http;
        this.data = undefined;
    }
    CategoryService.prototype.GetCategoriesList = function () {
        return this._http.get('http://localhost:31029/api/home/categories')
            .map(function (response) { return response.json(); }).catch(this.handleError);
    };
    CategoryService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    CategoryService.prototype.setData = function (data) {
        this.ParacategorId = data;
    };
    CategoryService.prototype.getData = function () {
        return this.ParacategorId;
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = "/* Sidebar Styles */\r\n\r\n.sidebar-nav {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 280px;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.sidebar-nav li {\r\n    text-indent: 10px;\r\n    line-height: 36px;\r\n}\r\n\r\n/* .sidebar-nav>li a[aria-expanded=\"true\"]::before {\r\n    float: right !important;\r\n    content: \"\\f102\";\r\n    font-family: FontAwesome;\r\n    padding-right: 15px;\r\n}\r\n\r\n.sidebar-nav>li a[aria-expanded=\"false\"]::before {\r\n    float: right !important;\r\n    font-family: FontAwesome;\r\n    content: \"\\f101\";\r\n    padding-right: 15px;\r\n} */\r\n\r\n.sidebar-nav li a i {\r\n    margin-right: 10px;\r\n    vertical-align: -2px;\r\n}\r\n\r\n.sidebar-nav li a {\r\n    display: block;\r\n    text-decoration: none;\r\n    color: #747d89;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    font-size: 13px;\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar-nav>.sidebar-brand {\r\n    height: 65px;\r\n    font-size: 18px;\r\n    line-height: 60px;\r\n}\r\n\r\n.sidebar-nav h3 {\r\n    color: #ec8558;\r\n    margin-bottom: 0px;\r\n    padding: 10px;\r\n    margin-bottom: -10px;\r\n    font-weight: normal;\r\n}\r\n\r\n.dropdown-menu {\r\n    float: none;\r\n    position: relative;\r\n    border-radius: 0;\r\n    margin: -2px;\r\n    background-color: transparent;\r\n    border: none;\r\n    padding: 0px 0px;\r\n}\r\n\r\n.sidebar-nav li .dropdown-menu li a {\r\n    font-size: 13px;\r\n    color: #ddd;\r\n    cursor: pointer;\r\n}\r\n\r\n/* .sidebar-nav li .active,\r\n.sidebar-nav li a:hover {\r\n    background-color: #747d89;\r\n    color: #fff;\r\n    text-decoration: none;\r\n} */\r\n\r\n.sidebar-nav .active a {\r\n    background-color: #747d89;\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.dropdown-menu li a:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.back-btn {\r\n    border: none;\r\n    background-color: #ec8558;\r\n    color: #fff !important;\r\n    text-align: center;\r\n    margin: 10px;\r\n}\r\n\r\n.back-btn::before {\r\n    float: right !important;\r\n    content: \"\\f100\";\r\n    font-family: FontAwesome;\r\n    padding-right: 5px;\r\n}\r\n\r\n.status-msg {\r\n    color: #ddd;\r\n    font-size: 16px;\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    margin-bottom: 0;\r\n}"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar-wrapper\">\n    <ul class=\" list-unstyled sidebar-nav\">\n        <h3 class=\"text-center\">Shop by Categories</h3>\n        <p class=\"status-msg\">{{statusMesssage}}</p>\n        <li class=\"dropdown active\" *ngFor=\"let item of category_List;let i=index\" id='{{selectedIndex}}' (click)=\"Toggle(i)\" [class.active]=\"i === selectedIndex\">\n            <!-- <a title=\"{{item.name}} \" class=\"dropdown-toggle \" data-toggle=\"dropdown \" role=\"button \" aria-haspopup=\"true \" aria-expanded=\"false \" aria-controls=\"collapse-one \" (click)=\"GetCategoryProducts(item.name,item.id) \"> -->\n            <a title=\"{{item.name}}\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button \" aria-haspopup=\"true\" aria-expanded=\"false \" aria-controls=\"collapse-one\">\n\n               {{item.name}}\n            </a>\n            <ul class=\"dropdown-menu\" id=\"collapse-one\">\n                <li class=\"subcatories\" *ngFor=\"let subcat of item.subCategoryVm;\">\n                    <a title=\"{{subcat.name}}\" (click)=\"GetSubCategoryProducts(subcat.name,subcat.id,item.name,item.id)\">{{subcat.name}}</a>\n                </li>\n            </ul>\n\n        </li>\n\n        <li>\n            <a routerLink=\"/Home/DlofDay\">\nOffers\n        </a>\n        </li>\n        <li>\n            <a routerLink=\"/Home/AllGenericMed\">\nGeneric Medicines\n        </a>\n        </li>\n\n        <li>\n            <a href=\"#menu-toggle\" id=\"menu-toggle\" title=\"menu\" class=\"btn btn-default back-btn text-center\">\n              Close\n            </a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_categoires_service__ = __webpack_require__("./src/app/sidebar/Services/categoires.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_catgoryService, router, activate) {
        this._catgoryService = _catgoryService;
        this.router = router;
        this.activate = activate;
        this.data = { text: 'example' };
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedIndex = -1;
        this._catgoryService.GetCategoriesList().subscribe(function (catdata) { return _this.category_List = catdata; }, function (error) {
            _this.statusMesssage = 'There is problem with service';
        });
    };
    SidebarComponent.prototype.GetSubCategoryProducts = function (subcatname, subcatId, catname, catid) {
        var subcategory = '';
        var category = '';
        if (subcatname.includes('&') || catname.includes('&')) {
            if (subcatname.includes('&')) {
                var spaceCat = subcatname.replace(/\s/g, '');
                subcategory = spaceCat.replace('&', '-');
            }
            else {
                subcategory = subcatname.replace(/\s/g, '-');
            }
            if (catname.includes('&')) {
                var spaceCat = catname.replace(/\s/g, '');
                category = spaceCat.replace('&', '-');
            }
            else {
                category = catname.replace(/\s/g, '-');
            }
        }
        else {
            subcategory = subcatname.replace(/\s/g, '-');
            category = catname.replace(/\s/g, '-');
        }
        this.ParacategorId = {
            catId: catid,
            subcatId: subcatId,
            status: false
        };
        this._catgoryService.setData(this.ParacategorId);
        this.router.navigate(['/Product', category, subcategory]);
    };
    SidebarComponent.prototype.GetCategoryProducts = function (catName, CatId) {
        var category = '';
        if (catName.includes('&')) {
            var spaceCat = catName.replace(/\s/g, '');
            category = spaceCat.replace('&', '-');
        }
        else {
            category = catName.replace(/\s/g, '-');
        }
        this.ParacategorId = {
            catId: CatId,
            subcatId: null,
            status: true
        };
        this._catgoryService.setData(this.ParacategorId);
        this.router.navigate(['/Product', category]);
    };
    SidebarComponent.prototype.Toggle = function (i) {
        this.selectedIndex = i;
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_categoires_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/signup/Services/sign-up.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignUpService = /** @class */ (function () {
    function SignUpService(_httpclient) {
        this._httpclient = _httpclient;
    }
    SignUpService.prototype.createUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this._httpclient.post('http://localhost:31029/api/data/Register', body, options)
            .map(function (res) { return res.json(); });
    };
    SignUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SignUpService);
    return SignUpService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".main {\r\n    -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.24);\r\n    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.24);\r\n    background: #ddd;\r\n    padding: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.left-side {\r\n    /* background: #00aaff; */\r\n    color: #fff;\r\n    padding: 120px 10px 0px 20px;\r\n    background: url('/assets/img/login_bg.jpg') no-repeat;\r\n    background-size: cover;\r\n    height: 472px;\r\n}\r\n\r\n.left-side h3,\r\n.left-side h4,\r\n.left-side p {\r\n    color: #fff;\r\n}\r\n\r\n.right-side {\r\n    background-color: #fff;\r\n    padding: 30px;\r\n}\r\n\r\n.form-control {\r\n    display: block;\r\n    width: 100%;\r\n    height: 34px;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    line-height: 1.42857143;\r\n    color: #555;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    border: none;\r\n    border-radius: 0;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 35px;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .main {\r\n        -webkit-box-shadow: none;\r\n                box-shadow: none;\r\n        margin-top: 0;\r\n    }\r\n    .right-side {\r\n        border: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pad-top\">\n    <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 main\">\n            <div class=\"col-md-6 col-sm-6 hidden-xs left-side\">\n                <h3 class=\"text-center\">Genericwala.com</h3>\n                <p>Generiwala.com is an online pharmacy, </p>\n                <p>we provide you quality generic medicines that are\n                    <p>produced by reputed Companies at affordable price.</p>\n            </div>\n            <!-- <div class =\"alert alert-warning\"*ngIf=\"isLoginError === true\">\n                <p>{{Message}}</p>\n\n            </div> -->\n\n\n            <div class=\"col-md-6 col-sm-6 right-side\">\n                <div *ngIf=\"isLoginError === true && success === false\">\n\n                    <simple-notifications></simple-notifications>\n                    <!-- <strong>{{Message}}</strong> -->\n                </div>\n                <div *ngIf=\"isLoginError === true && success === true\">\n\n                    <simple-notifications></simple-notifications>\n                    <!-- <strong>{{Message}}</strong> -->\n                </div>\n                <!-- <form #userRegistrationForm=\"ngForm\" (ngSubmit)=\"submitForm(loginForm)\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control \" id=\"UserName\" name=\"UserName\" placeholder=\"Username\" #UserName=\"ngModel\" [(ngModel)]=\"user.UserName\"\n                            required>\n                        <span *ngIf=\"UserName.invalid && (UserName.dirty || UserName.touched)\">\n                            <span class=\"text-danger\" *ngIf=\"UserName.errors.required\">\n                                Name is required.\n                            </span>\n                        </span>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" id=\"FirstName\" name=\"FirstName\" placeholder=\"First Name\" #FirstName=\"ngModel\" [(ngModel)]=\"user.FirstName\"\n                            required>\n                        <span *ngIf=\"FirstName.invalid && (FirstName.dirty || FirstName.touched)\">\n                            <span class=\"text-danger\" *ngIf=\"FirstName.errors.required\">\n                                Name is required.\n                            </span>\n                        </span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" id=\"LastName\" name=\"LastName\" placeholder=\"Last Name\" #LastName=\"ngModel\" [(ngModel)]=\"user.LastName\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"email\" class=\"form-control\" id=\"Email\" name=\"Email\" placeholder=\"Email\" #Email=\"ngModel\" [(ngModel)]=\"user.Email\"\n                            required email>\n                        <span *ngIf=\"Email.invalid && (Email.dirty || Email.touched)\">\n                            <span class=\"text-danger\" *ngIf=\"Email.errors.required && Email.error\">\n                                Email is Required\n                            </span>\n                            <span class=\"text-danger\" *ngIf=\"Email.errors.email\">\n                                Email not valid.\n                            </span>\n\n                        </span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" id=\"Password\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"user.Password\"\n                            placeholder=\"Password\" required minlength=\"4\">\n                        <span *ngIf=\"Password.invalid && (Password.dirty || Password.touched)\">\n                            <span class=\"text-danger\" *ngIf=\"Password.errors.required\">\n                                Password is required.\n                            </span>\n                            <span class=\"text-danger\" *ngIf=\"Password.errors.minlength\">\n                                Name must be at least 8 characters long.\n                            </span>\n                        </span>\n                    </div>\n                    <div class=\"form-group pull-right\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-sbmt\" [disabled]=\"userRegistrationForm.form.invalid\">Submit</button>\n                        <button type=\"button\" class=\"btn btn-warning btn-bk\" routerLink=\"/Login/Login\">\n                            Login\n                        </button>\n                    </div>\n                </form> -->\n\n\n                <form [formGroup]=\"myForm\" (ngSubmit)=\"submit(myForm.value)\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" formControlName=\"UserName\" class=\"form-control\" placeholder=\"UserName\" (focusout)=\"UserName()\">\n                        <simple-notifications></simple-notifications>\n                        <!-- <div *ngIf=\"myForm.controls.UserName.errors &&(!myForm.controls.UserName.pristine ||myForm.controls.UserName.touched)\" class=\"text-danger\">\n                            <div [hidden]=\"!myForm.controls.UserName.errors.required\">Name is required.</div>\n                        </div> -->\n                    </div>\n\n\n                    <div class=\"form-group\">\n                        <input type=\"text\" formControlName=\"FirstName\" class=\"form-control\" placeholder=\"FirstName\" (focusout)=\"FirstName()\">\n                        <simple-notifications></simple-notifications>\n                        <!-- <div *ngIf=\"myForm.controls.FirstName.errors &&(!myForm.controls.FirstName.pristine ||myForm.controls.FirstName.touched)\" class=\"text-danger\">\n                            <div [hidden]=\"!myForm.controls.FirstName.errors.required\">FirstName is required.</div>\n                        </div> -->\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"text\" formControlName=\"LastName\" class=\"form-control\" placeholder=\"LastName\" (focusout)=\"LastName()\">\n                        <simple-notifications></simple-notifications>\n                        <!-- <div *ngIf=\"myForm.controls.LastName.errors &&(!myForm.controls.LastName.pristine ||myForm.controls.LastName.touched)\" class=\"text-danger\">\n                                <div [hidden]=\"!myForm.controls.LastName.errors.required\">LastName is required.</div>\n                            </div> -->\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"text\" formControlName=\"Email\" class=\"form-control\" placeholder=\"Email\" (focusout)=\"Email()\">\n                        <simple-notifications></simple-notifications>\n                        <!-- <div *ngIf=\"myForm.controls.Email.errors &&(!myForm.controls.Email.pristine ||myForm.controls.Email.touched)\" class=\"text-danger\">\n                                <div [hidden]=\"!myForm.controls.Email.errors.required\">Email is required.</div>\n                                <div [hidden]=\"!myForm.controls.Email.errors.email\">Email must be a valid email address</div>\n                            </div> -->\n\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" formControlName=\"Password\" class=\"form-control\" placeholder=\"Password\" (focusout)=\"Password()\">\n                        <simple-notifications></simple-notifications>\n                        <!-- <div *ngIf=\"myForm.controls.Password.errors &&(!myForm.controls.Password.pristine ||myForm.controls.Password.touched)\" class=\"text-danger\">\n                                    <div [hidden]=\"!myForm.controls.Password.errors.required\">Password is required.</div>\n                                    <div [hidden]=\"!myForm.controls.Password.errors.minlength\"> minimum 6 character </div>\n                                </div> -->\n                    </div>\n                    <div class=\"form-group pull-right\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-sbmt\" [disabled]=\"!myForm.valid\">Submit</button>\n                        <button type=\"button\" class=\"btn btn-warning btn-bk\" routerLink=\"/Login/Login\">\n                            Login\n                        </button>\n                        <!-- <div *ngIf=\"message\" class=\"alert alert-success box-msg\" role=\"alert\">\n                            <strong></strong> {{message}}\n                        </div> -->\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_sign_up_service__ = __webpack_require__("./src/app/signup/Services/sign-up.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, fb, notifications) {
        this.userService = userService;
        this.notifications = notifications;
        this.isLoginError = false;
        this.user = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
        };
        this.myForm = fb.group({
            UserName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            Password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)]),
            Email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]),
            FirstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            LastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.success = false;
        // this.myForm = new FormGroup({
        //   UserName: new FormControl('', [Validators.required]),
        //   Password: new FormControl('', [Validators.required]),
        //   Email: new FormControl('', [Validators.required]),
        //   FirstName: new FormControl('', [Validators.required]),
        //   LastName: new FormControl('', [Validators.required]),
        // });
    };
    //   submitForm(userRegistrationForm: NgForm) {
    //     // tslint:disable-next-line:no-debugger
    //     debugger;
    //     this.userService.createUser(this.user).subscribe((resp: any) => {
    //       // tslint:disable-next-line:no-debugger
    //       debugger;
    //       if (resp === '201') {
    //         this.success = true;
    //         this.respones = resp;
    //         this.Message = 'Registerd Successfully';
    //         this.isLoginError = true;
    //         const login: User = {
    //           UserName: '',
    //           Password: '',
    //           Email: '',
    //           FirstName: '',
    //           LastName: ''
    //         };
    //         this.user = login;
    //       } else {
    //         this.respones = resp;
    //         this.success = false;
    //         this.Message = 'You have already register';
    //         this.isLoginError = true;
    //         const login: User = {
    //           UserName: '',
    //           Password: '',
    //           Email: '',
    //           FirstName: '',
    //           LastName: ''
    //         };
    //         this.user = login;
    // // userRegistrationForm.onReset();
    //       }
    //     });
    //   }
    SignupComponent.prototype.submit = function (form, event) {
        var _this = this;
        this.userService.createUser(form).subscribe(function (resp) {
            if (resp === '201') {
                _this.success = true;
                _this.respones = resp;
                //  this.Message = 'Registerd Successfully';
                _this.notifications.success('Success', 'Registerd Successfully', {
                    timeOut: 3000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    clickToClose: true,
                    maxLength: 50
                });
                _this.isLoginError = true;
                _this.myForm.reset();
            }
            else {
                _this.respones = resp;
                _this.success = false;
                //   this.Message = 'You have already register';
                _this.notifications.warn('Warning', 'You have already register', {
                    timeOut: 3000,
                    showProgressBar: true,
                    pauseOnHover: false,
                    clickToClose: true,
                    maxLength: 50
                });
                _this.isLoginError = true;
                _this.myForm.reset();
            }
        });
    };
    SignupComponent.prototype.UserName = function () {
        if (this.myForm.controls['UserName'].value === null || this.myForm.controls['UserName'].value === '') {
            this.notifications.error('Warning', 'UserName is required', {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 50
            });
        }
    };
    SignupComponent.prototype.FirstName = function () {
        if (this.myForm.controls['FirstName'].value === null || this.myForm.controls['FirstName'].value === '') {
            this.notifications.error('Warning', 'FirstName is required', {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 50
            });
        }
    };
    SignupComponent.prototype.LastName = function () {
        if (this.myForm.controls['LastName'].value === null || this.myForm.controls['LastName'].value === '') {
            this.notifications.error('Warning', 'LastName is required', {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 50
            });
        }
    };
    SignupComponent.prototype.Email = function () {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (this.myForm.controls['Email'].value === null || this.myForm.controls['Email'].value === '') {
            this.notifications.error('Warning', 'Email is required', {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 50
            });
        }
        if (EMAIL_REGEXP.test(this.myForm.controls['Email'].value) === false) {
            this.notifications.warn('Warning', 'Email is Not valid', {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 50
            });
        }
    };
    SignupComponent.prototype.Password = function () {
        if (this.myForm.controls['Password'].value === null || this.myForm.controls['Password'].value === '') {
            this.notifications.error('Warning', 'Password is required', {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 50
            });
        }
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_sign_up_service__["a" /* SignUpService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/subcategory-list/Service/subcategory-proudct.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoryProudctService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubcategoryProudctService = /** @class */ (function () {
    function SubcategoryProudctService(_http) {
        this._http = _http;
    }
    SubcategoryProudctService.prototype.GetsubCatProducts = function (catId, subcatId) {
        var category_Id = +catId;
        var subcategory_Id = +subcatId;
        return this._http.get('http://localhost:31029/api/product/subcatproduct?cat=' + category_Id + '&scat=' + subcategory_Id)
            .map(function (response) { return response.json(); }).catch(this.handleError);
    };
    SubcategoryProudctService.prototype.GetCatProducts = function (catId) {
        var category_Id = +catId;
        return this._http.get('http://localhost:31029/api/product/categoryproduct?cat=' + category_Id)
            .map(function (response) { return response.json(); }).catch(this.handleError);
    };
    SubcategoryProudctService.prototype.handleError = function (error) {
        alert('here is response' + error);
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    SubcategoryProudctService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], SubcategoryProudctService);
    return SubcategoryProudctService;
}());



/***/ }),

/***/ "./src/app/subcategory-list/subcategory-list.component.css":
/***/ (function(module, exports) {

module.exports = ".tabletbody td,\r\n.table thead>tr>th {\r\n    border-bottom-width: 1px;\r\n    text-align: center\r\n}\r\n\r\n.item-brdr {\r\n    padding: 10px;\r\n    -webkit-box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .16), 0 2px 5px 0 rgba(0, 0, 0, .12);\r\n            box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .16), 0 2px 5px 0 rgba(0, 0, 0, .12);\r\n    margin-bottom: 10px;\r\n    cursor: pointer;\r\n    color: #747d98;\r\n    -webkit-transition: all 0.1s;\r\n    transition: all 0.1s;\r\n}\r\n\r\n.item-brdr:hover {\r\n    background-color: #e1e7ec;\r\n}\r\n\r\n.mt-0 {\r\n    margin-top: 0;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.item-brdr p {\r\n    color: #747d98;\r\n}\r\n\r\n.add-to-cart i {\r\n    font-size: 14px;\r\n    vertical-align: -2px;\r\n    cursor: pointer;\r\n}\r\n\r\n.mrgn-lft {\r\n    margin-left: 25px;\r\n}\r\n\r\n.item-brdr ul,\r\n.mrgn-btm {\r\n    margin-bottom: 0;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n}\r\n\r\n.mrgn-btm a i {\r\n    color: #747d89;\r\n    font-weight: normal !important;\r\n}\r\n\r\n.item-brdr ul li {\r\n    color: #747d98;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.item-brdr ul li:hover {\r\n    color: #fff;\r\n    background-color: #ec8558;\r\n    border-color: #ec8558;\r\n}"

/***/ }),

/***/ "./src/app/subcategory-list/subcategory-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\" *ngIf=\"this.status === false\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/categoryProducts.categoryName\">{{categoryProducts.categoryName}}</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/categoryProducts.subCategoryName\">{{categoryProducts.subCategoryName}} </a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"this.status === true\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb  pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/categoryProducts.categoryName\">{{categoryProducts.categoryName}}</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n\n        <!-- <div class=\"container\" *ngIf=\"this.status === false\" >\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <h3>{{categoryProducts.subCategoryName}} </h3>\n            <table class=\"table table-bordered text-center\">\n                <thead class=\"text-center\">\n                    <tr>\n                        <th>Brand</th>\n                        <th>MRP</th>\n                        <th>Our Price</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr   *ngFor=\"let item of categoryProducts.Drugs\" >\n                        <td>\n                            <p><a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.ItemName)\">\n                                   \n                               <span *ngIf=\"item.PurchaseUnitModel === 'STRIP'\"><i class=\"flaticon-medical-11\"></i></span> \n                               <span *ngIf=\"item.PurchaseUnitModel === 'SYRUP'\"><i class=\"flaticon-medical-9\"></i></span> \n                               <span *ngIf=\"item.PurchaseUnitModel == 'BOTTLE'\"><i class=\"flaticon-medical-16\"></i></span> \n                               <span *ngIf=\"item.PurchaseUnitModel == 'Tablet'\"><i class=\"flaticon-medical-9\"></i></span> \n                               <span *ngIf=\"item.PurchaseUnitModel == 'strip'\"><i class=\"flaticon-medical-11\"></i></span> \n                               <span *ngIf=\"item.PurchaseUnitModel == 'tube'\"><i class=\"flaticon-tube-icon\"></i></span> \n                               <span *ngIf=\"item.PurchaseUnitModel == 'TUBE'\"><i class=\"flaticon-tube-icon\"></i></span> \n                               <span *ngIf=\"item.PurchaseUnitModel == 'INJ'\"><i class=\"flaticon-medical-8\"></i></span> \n                               \n\n                                {{item.ItemName}}\n                                 <span><small> - {{item.Manufacturer}}</small></span></a></p>\n                           \n                           \n                                <p>{{item.Composition}}</p>\n                         \n                        </td>\n                        <td>\n                            <h5><i class=\"fa fa-inr\"></i>{{item.MRP | number : '1.2-2' }}</h5>\n                        </td>\n                        <td>\n                            <h5><i class=\"fa fa-inr\"></i>{{item.SellingPrice | number : '1.2-2'}}</h5>\n                        </td>\n                        <td>\n                            <h5>\n                                <a (click)=\"AddtoDrugCart(item)\" ><i class=\"material-icons add-to-cart\">shopping_cart</i></a>\n                            </h5>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <h3 *ngIf=\"categoryProducts.Products?.length >0 && categoryProducts.Products !== null\" >Products</h3> \n            <table class=\"table table-bordered text-center\" *ngIf=\"categoryProducts.Products?.length >0 && categoryProducts.Products !== null\">\n                \n                <thead class=\"text-center\">\n                        <tr>\n                            <th>Brand</th>\n                            <th>MRP</th>\n                            <th>Our Price</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr   *ngFor=\"let item of categoryProducts.Products\" >\n                            <td>\n                                <p><a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.Name)\">\n                                        <span *ngIf=\"item.PurchaseUnitModel === 'STRIP'\"><i class=\"flaticon-medical-11\"></i></span> \n                                        <span *ngIf=\"item.PurchaseUnitModel === 'SYRUP'\"><i class=\"flaticon-medical-9\"></i></span> \n                                        <span *ngIf=\"item.PurchaseUnitModel == 'BOTTLE'\"><i class=\"flaticon-medical-16\"></i></span> \n                                        <span *ngIf=\"item.PurchaseUnitModel == 'Tablet'\"><i class=\"flaticon-medical-9\"></i></span> \n                                        <span *ngIf=\"item.PurchaseUnitModel == 'strip'\"><i class=\"flaticon-medical-11\"></i></span> \n                                        <span *ngIf=\"item.PurchaseUnitModel == 'tube'\"><i class=\"flaticon-tube-icon\"></i></span> \n                                        <span *ngIf=\"item.PurchaseUnitModel == 'TUBE'\"><i class=\"flaticon-tube-icon\"></i></span> \n                                        <span *ngIf=\"item.PurchaseUnitModel == 'INJ'\"><i class=\"flaticon-medical-8\"></i></span> \n               \n                                    {{item.Name}} {{item.model}} <span><small> - {{item.Name}}</small></span></a></p>\n                                <p>{{item.Description}}</p>\n                             \n                            </td>\n                            <td>\n                                <h5><i class=\"fa fa-inr\"></i>{{item.MSRP | number : '1.2-2' }}</h5>\n                            </td>\n                            <td>\n                                <h5><i class=\"fa fa-inr\"></i>{{item.SellingPrice | number : '1.2-2'}}</h5>\n                            </td>\n                            <td>\n                                <h5>\n                                    <a (click)=\"AddProductToCart(item)\"><i class=\"material-icons add-to-cart\">shopping_cart</i></a>\n                                </h5>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            \n        </div>\n    </div>\n</div> -->\n\n        <!-- All category Products -->\n        <!-- <div class=\"container\" *ngIf=\"this.status === true\" >\n        <div class=\"row\" *ngFor=\"let item of categoryProducts.SubCategoryDrugs.subCategoryDrugsList\">\n            <div class=\"col-md-12 col-xs-12\">\n                <h3>{{item.subCatName}} </h3>\n                <table class=\"table table-bordered text-center\">\n                    <thead class=\"text-center\">\n                        <tr>\n                            <th>Brand</th>\n                            <th>MRP</th>\n                            <th>Our Price</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr  *ngFor=\"let drug_list of item.Drugs\" >\n                            <td>\n                                <p><a (click)=\"ProductDetails(drug_list.ItemCode,drug_list.ItemType,drug_list.ItemName)\">\n                       \n\n                                    <span *ngIf=\"drug_list.PurchaseUnitModel === 'STRIP'\"><i class=\"flaticon-medical-11\"></i></span> \n                                    <span *ngIf=\"drug_list.PurchaseUnitModel === 'SYRUP'\"><i class=\"flaticon-medical-9\"></i></span> \n                                    <span *ngIf=\"drug_list.PurchaseUnitModel == 'BOTTLE'\"><i class=\"flaticon-medical-16\"></i></span> \n                                    <span *ngIf=\"drug_list.PurchaseUnitModel == 'Tablet'\"><i class=\"flaticon-medical-9\"></i></span> \n                                    <span *ngIf=\"drug_list.PurchaseUnitModel == 'strip'\"><i class=\"flaticon-medical-11\"></i></span> \n                                    <span *ngIf=\"drug_list.PurchaseUnitModel == 'tube'\"><i class=\"flaticon-tube-icon\"></i></span> \n                                    <span *ngIf=\"drug_list.PurchaseUnitModel == 'TUBE'\"><i class=\"flaticon-tube-icon\"></i></span> \n                                    <span *ngIf=\"drug_list.PurchaseUnitModel == 'INJ'\"><i class=\"flaticon-medical-8\"></i></span> \n                                    \n                                    \n                                    {{drug_list.ItemName}} <span><small> - {{drug_list.Manufacturer}}</small></span></a></p>\n                                <p>{{drug_list.Composition}}</p>\n                             \n                            </td>\n                            <td>\n                                <h5><i class=\"fa fa-inr\"></i>{{drug_list.MRP | number : '1.2-2' }}</h5>\n                            </td>\n                            <td>\n                                <h5><i class=\"fa fa-inr\"></i>{{drug_list.SellingPrice | number : '1.2-2'}}</h5>\n                            </td>\n                            <td>\n                                <h5><a (click)=\"AddtoDrugCart(drug_list)\"><i class=\"material-icons add-to-cart\">shopping_cart</i></a></h5>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\n\n             \n            </div>\n        </div>\n        <h3 *ngIf=\"categoryProducts.Products?.length >0 && categoryProducts.Products !== null\" >Products</h3> \n        <table class=\"table table-bordered text-center\" *ngIf=\"categoryProducts.Products?.length >0 && categoryProducts.Products !== null\">                 \n            <thead class=\"text-center\">\n                    <tr>\n                        <th>Brand</th>\n                        <th>MRP</th>\n                        <th>Our Price</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr   *ngFor=\"let item of categoryProducts.Products\" >\n                        <td>\n                            <p><a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.Name)\"><i class=\"flaticon-medical-16\"></i>{{item.Name}} {{item.model}} <span><small> - {{item.Name}}</small></span></a></p>\n                            <p>{{item.Description}}</p>\n                         \n                        </td>\n                        <td>\n                            <h5><i class=\"fa fa-inr\"></i>{{item.MSRP | number : '1.2-2' }}</h5>\n                        </td>\n                        <td>\n                            <h5><i class=\"fa fa-inr\"></i>{{item.SellingPrice | number : '1.2-2'}}</h5>\n                        </td>\n                        <td>\n                            <h5><a (click)=\"AddProductToCart(item)\"><i class=\"material-icons  add-to-cart\">shopping_cart</i></a></h5>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n    </div> -->\n        <!-- end -->\n\n        <!-- <div class=\"container\" *ngIf=\"this.status === false\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <h4 class=\"mt-0\">{{categoryProducts.subCategoryName}} </h4>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\" *ngFor=\"let item of categoryProducts.Drugs\">\n            <div class=\"item-brdr\">\n\n\n                <p class=\"mrgn-btm\">\n                    <a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.ItemName)\">\n\n                        <span *ngIf=\"item.PurchaseUnitModel === 'STRIP'\"><i class=\"flaticon-medical-11\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel === 'SYRUP'\"><i class=\"flaticon-medical-9\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'BOTTLE'\"><i class=\"flaticon-medical-16\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'Tablet'\"><i class=\"flaticon-medical-9\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'strip'\"><i class=\"flaticon-medical-11\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'tube'\"><i class=\"flaticon-tube-icon\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'TUBE'\"><i class=\"flaticon-tube-icon\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'INJ'\"><i class=\"flaticon-medical-8\"></i></span> {{item.ItemName}}\n                        <span><small> - {{item.Manufacturer}}</small></span></a>\n                </p>\n\n                <p class=\"mrgn-lft\">\n                    <small>{{item.Composition}}</small>\n                </p>\n                <ul class=\"list-inline list-unstyled text-right\">\n                    <li>\n                        <span>MRP:\n                            <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.MRP | number : '1.2-2' }}</span>\n                    </li>\n                    <li>\n                        <span>Our Price:\n                            <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.SellingPrice | number : '1.2-2'}}</span>\n                    </li>\n                    <li>\n                        <a (click)=\"AddtoDrugCart(item)\"> <span class=\"add-to-cart\"><i class=\"material-icons add-to-cart\">shopping_cart</i></span></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <hr/>\n    <h4 class=\"mt-0\" *ngIf=\"categoryProducts.Products?.length >0 && categoryProducts.Products !== null\">Products</h4>\n\n    <div class=\"row\">\n        <div class=\"col-md-6\" *ngFor=\"let item of categoryProducts.Products\">\n            <div class=\"item-brdr\">\n\n                <p class=\"mrgn-btm\">\n                    <a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.Name)\">\n\n                        <span *ngIf=\"item.PurchaseUnitModel === 'STRIP'\"><i class=\"flaticon-medical-11\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel === 'SYRUP'\"><i class=\"flaticon-medical-9\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'BOTTLE'\"><i class=\"flaticon-medical-16\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'Tablet'\"><i class=\"flaticon-medical-9\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'strip'\"><i class=\"flaticon-medical-11\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'tube'\"><i class=\"flaticon-tube-icon\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'TUBE'\"><i class=\"flaticon-tube-icon\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'INJ'\"><i class=\"flaticon-medical-8\"></i></span> {{item.Name}} <span *ngIf=\"item.model !== null\">- {{item.model}}</span>\n                        <span><small> - {{item.VendorName}}</small></span></a>\n                </p>\n\n                <p class=\"mrgn-lft\">\n                    <small>{{item.Name}}</small>\n                </p>\n                <ul class=\"list-inline list-unstyled text-right\">\n                    <li>\n                        <span>MRP:\n                                <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.MSRP | number : '1.2-2' }}</span>\n                    </li>\n                    <li>\n                        <span>Our Price:\n                                <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.SellingPrice | number : '1.2-2'}}</span>\n                    </li>\n                    <li>\n                        <a (click)=\"AddProductToCart(item)\"><span class=\"add-to-cart\"><i class=\"material-icons add-to-cart\">shopping_cart</i></span></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n        <!-- All category Products -->\n        <!-- <div class=\"container\" *ngIf=\"this.status === true\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <h4 class=\"mt-0\">{{item.subCatName}} </h4>\n        </div>\n    </div>\n    <div class=\"row\" *ngFor=\"let item of categoryProducts.SubCategoryDrugs.subCategoryDrugsList\">\n        <div class=\"col-md-12\">\n            <h4 class=\"mt-0\">{{item.subCatName}} </h4>\n        </div>\n        <div class=\"col-md-6\" *ngFor=\"let drug_list of item.Drugs\">\n            <div class=\"item-brdr\">\n\n                <p class=\"mrgn-btm\">\n                    <a (click)=\"ProductDetails(drug_list.ItemCode,drug_list.ItemType,drug_list.ItemName)\">\n\n                        <span *ngIf=\"drug_list.PurchaseUnitModel === 'STRIP'\"><i class=\"flaticon-medical-11\"></i></span>\n                        <span *ngIf=\"drug_list.PurchaseUnitModel === 'SYRUP'\"><i class=\"flaticon-medical-9\"></i></span>\n                        <span *ngIf=\"drug_list.PurchaseUnitModel == 'BOTTLE'\"><i class=\"flaticon-medical-16\"></i></span>\n                        <span *ngIf=\"drug_list.PurchaseUnitModel == 'Tablet'\"><i class=\"flaticon-medical-9\"></i></span>\n                        <span *ngIf=\"drug_list.PurchaseUnitModel == 'strip'\"><i class=\"flaticon-medical-11\"></i></span>\n                        <span *ngIf=\"drug_list.PurchaseUnitModel == 'tube'\"><i class=\"flaticon-tube-icon\"></i></span>\n                        <span *ngIf=\"drug_list.PurchaseUnitModel == 'TUBE'\"><i class=\"flaticon-tube-icon\"></i></span>\n                        <span *ngIf=\"drug_list.PurchaseUnitModel == 'INJ'\"><i class=\"flaticon-medical-8\"></i></span> {{drug_list.ItemName}}\n                        <span><small> - {{drug_list.Manufacturer}}</small></span></a>\n                </p>\n\n                <p class=\"mrgn-lft\">\n                    <small>{{drug_list.Composition}}</small>\n                </p>\n                <ul class=\"list-inline list-unstyled text-right\">\n                    <li>\n                        <span>MRP:\n                                <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{drug_list.MRP | number : '1.2-2' }}</span>\n                    </li>\n                    <li>\n                        <span>Our Price:\n                                <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{drug_list.SellingPrice | number : '1.2-2'}}</span>\n                    </li>\n                    <li>\n                        <a (click)=\"AddtoDrugCart(drug_list)\"> <span class=\"add-to-cart\"><i class=\"material-icons add-to-cart\">shopping_cart</i></span></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <h4 class=\"mt-0\" *ngIf=\"categoryProducts.Products?.length >0 && categoryProducts.Products !== null\">Products</h4>\n    <div class=\"row\">\n        <div class=\"col-md-6\" *ngFor=\"let item of categoryProducts.Products\">\n            <div class=\"item-brdr\">\n\n                <p class=\"mrgn-btm\">\n                    <a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.Name)\">\n\n                        <span *ngIf=\"item.PurchaseUnitModel === 'STRIP'\"><i class=\"flaticon-medical-11\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel === 'SYRUP'\"><i class=\"flaticon-medical-9\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'BOTTLE'\"><i class=\"flaticon-medical-16\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'Tablet'\"><i class=\"flaticon-medical-9\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'strip'\"><i class=\"flaticon-medical-11\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'tube'\"><i class=\"flaticon-tube-icon\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'TUBE'\"><i class=\"flaticon-tube-icon\"></i></span>\n                        <span *ngIf=\"item.PurchaseUnitModel == 'INJ'\"><i class=\"flaticon-medical-8\"></i></span> {{item.Name}} <span *ngIf=\"item.model !== null\">- {{item.model}}</span>\n                        <span><small> - {{item.VendorName}}</small></span></a>\n                </p>\n\n                <p class=\"mrgn-lft\">\n                    <small>{{item.Name}}</small>\n                </p>\n                <ul class=\"list-inline list-unstyled text-right\">\n                    <li>\n                        <span>MRP:\n                                    <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.MSRP | number : '1.2-2' }}</span>\n                    </li>\n                    <li>\n                        <span>Our Price:\n                                    <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.SellingPrice | number : '1.2-2'}}</span>\n                    </li>\n                    <li>\n                        <a (click)=\"AddProductToCart(item)\"><span class=\"add-to-cart\"><i class=\"material-icons add-to-cart\">shopping_cart</i></span></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n\n        <!--Tab system product-->\n\n        <div class=\"row\">\n            <div class=\"col-md-12\" style=\"padding-left: 0;\">\n\n                <ul class=\"list-unstyled list-inline\">\n                    <li class=\"active\">\n                        <a class=\"btn btn-warning btn-bk\" data-toggle=\"tab\" href=\"#Drugs\">Drugs</a>\n                    </li>\n                    <li class=\"\">\n                        <a class=\"btn btn-primary btn-sbmt\" data-toggle=\"tab\" href=\"#Products\">Products</a>\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"tab-content\">\n                <simple-notifications></simple-notifications>\n                <div id=\"Drugs\" class=\"tab-pane active col-md-12\">\n                    <div class=\"row\" *ngIf=\"this.status === true\">\n\n                        <div class=\"row\" *ngFor=\"let item of categoryProducts.SubCategoryDrugs.subCategoryDrugsList\">\n                            <h4 class=\"text-center\">Drugs</h4>\n                            <div class=\"col-md-12\">\n                                <h4 class=\"mt-0\">{{item.subCatName}} </h4>\n                            </div>\n                            <div class=\"col-md-6\" *ngFor=\"let drug_list of item.Drugs\">\n                                <div class=\"item-brdr\">\n                                    <p class=\"mrgn-btm\">\n                                        <a (click)=\"ProductDetails(drug_list.ItemCode,drug_list.ItemType,drug_list.ItemName)\">\n\n                                            <span *ngIf=\"drug_list.PurchaseUnitModel === 'STRIP'\">\n                                                    <i class=\"flaticon-medical-11\"></i>\n                                                </span>\n                                            <span *ngIf=\"drug_list.PurchaseUnitModel === 'SYRUP'\">\n                                                    <i class=\"flaticon-medical-9\"></i>\n                                                </span>\n                                            <span *ngIf=\"drug_list.PurchaseUnitModel == 'BOTTLE'\">\n                                                    <i class=\"flaticon-medical-16\"></i>\n                                                </span>\n                                            <span *ngIf=\"drug_list.PurchaseUnitModel == 'Tablet'\">\n                                                    <i class=\"flaticon-medical-9\"></i>\n                                                </span>\n                                            <span *ngIf=\"drug_list.PurchaseUnitModel == 'strip'\">\n                                                    <i class=\"flaticon-medical-11\"></i>\n                                                </span>\n                                            <span *ngIf=\"drug_list.PurchaseUnitModel == 'tube'\">\n                                                    <i class=\"flaticon-tube-icon\"></i>\n                                                </span>\n                                            <span *ngIf=\"drug_list.PurchaseUnitModel == 'TUBE'\">\n                                                    <i class=\"flaticon-tube-icon\"></i>\n                                                </span>\n                                            <span *ngIf=\"drug_list.PurchaseUnitModel == 'INJ'\">\n                                                    <i class=\"flaticon-medical-8\"></i>\n                                                </span> {{drug_list.ItemName}}\n                                            <span>\n                                                    <small> - {{drug_list.Manufacturer}}</small>\n                                                </span>\n                                        </a>\n                                    </p>\n\n                                    <p class=\"mrgn-lft\">\n                                        <small>{{drug_list.Composition}}</small>\n                                    </p>\n                                    <ul class=\"list-inline list-unstyled text-right\">\n                                        <li>\n                                            <span>MRP:\n                                                    <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{drug_list.MRP | number : '1.2-2' }}</span>\n                                        </li>\n                                        <li>\n                                            <span>Our Price:\n                                                    <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{drug_list.SellingPrice | number : '1.2-2'}}</span>\n                                        </li>\n                                        <li>\n                                            <a (click)=\"AddtoDrugCart(drug_list)\">\n                                                <span class=\"add-to-cart\">\n                                                        <i class=\"material-icons add-to-cart\">shopping_cart</i>\n                                                    </span>\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"this.status === false\">\n                        <div class=\"row\">\n                            <h4 class=\"text-center\">Drugs</h4>\n                            <div class=\"col-md-6\" *ngFor=\"let item of categoryProducts.Drugs\">\n                                <div class=\"item-brdr\">\n                                    <p class=\"mrgn-btm\">\n                                        <a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.ItemName)\">\n\n                                            <span *ngIf=\"item.PurchaseUnitModel === 'STRIP'\">\n                                                    <i class=\"flaticon-medical-11\"></i>\n                                                </span>\n                                            <span *ngIf=\"item.PurchaseUnitModel === 'SYRUP'\">\n                                                    <i class=\"flaticon-medical-9\"></i>\n                                                </span>\n                                            <span *ngIf=\"item.PurchaseUnitModel == 'BOTTLE'\">\n                                                    <i class=\"flaticon-medical-16\"></i>\n                                                </span>\n                                            <span *ngIf=\"item.PurchaseUnitModel == 'Tablet'\">\n                                                    <i class=\"flaticon-medical-9\"></i>\n                                                </span>\n                                            <span *ngIf=\"item.PurchaseUnitModel == 'strip'\">\n                                                    <i class=\"flaticon-medical-11\"></i>\n                                                </span>\n                                            <span *ngIf=\"item.PurchaseUnitModel == 'tube'\">\n                                                    <i class=\"flaticon-tube-icon\"></i>\n                                                </span>\n                                            <span *ngIf=\"item.PurchaseUnitModel == 'TUBE'\">\n                                                    <i class=\"flaticon-tube-icon\"></i>\n                                                </span>\n                                            <span *ngIf=\"item.PurchaseUnitModel == 'INJ'\">\n                                                    <i class=\"flaticon-medical-8\"></i>\n                                                </span> {{item.ItemName}}\n                                            <span>\n                                                    <small> - {{item.Manufacturer}}</small>\n                                                </span>\n                                        </a>\n                                    </p>\n\n                                    <p class=\"mrgn-lft\">\n                                        <small>{{item.Composition}}</small>\n                                    </p>\n                                    <ul class=\"list-inline list-unstyled text-right\">\n                                        <li>\n                                            <span>MRP:\n                                                    <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.MRP | number : '1.2-2' }}</span>\n                                        </li>\n                                        <li>\n                                            <span>Our Price:\n                                                    <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.SellingPrice | number : '1.2-2'}}</span>\n                                        </li>\n                                        <li>\n                                            <a (click)=\"AddtoDrugCart(item)\">\n                                                <span class=\"add-to-cart\">\n                                                        <i class=\"material-icons add-to-cart\">shopping_cart</i>\n                                                    </span>\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div id=\"Products\" class=\"tab-pane  col-md-12\">\n                    <div class=\"row\" *ngIf=\"this.status === true\">\n                        <h4 class=\"text-center\" *ngIf=\"categoryProducts.Products?.length >0 && categoryProducts.Products !== null\">Products</h4>\n                        <h6 class=\"text-center\" *ngIf=\"categoryProducts.Products?.length === 0 && categoryProducts.Products !== null\">No Products</h6>\n                        <div class=\"col-md-6\" *ngFor=\"let item of categoryProducts.Products\">\n                            <div class=\"item-brdr\">\n\n                                <p class=\"mrgn-btm\">\n                                    <a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.Name)\">\n\n                                        <span *ngIf=\"item.PurchaseUnitModel === 'STRIP'\">\n                                                <i class=\"flaticon-medical-11\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel === 'SYRUP'\">\n                                                <i class=\"flaticon-medical-9\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel == 'BOTTLE'\">\n                                                <i class=\"flaticon-medical-16\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel == 'Tablet'\">\n                                                <i class=\"flaticon-medical-9\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel == 'strip'\">\n                                                <i class=\"flaticon-medical-11\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel == 'tube'\">\n                                                <i class=\"flaticon-tube-icon\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel == 'TUBE'\">\n                                                <i class=\"flaticon-tube-icon\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel == 'INJ'\">\n                                                <i class=\"flaticon-medical-8\"></i>\n                                            </span> {{item.Name}}\n                                        <span *ngIf=\"item.model !== null\">- {{item.model}}</span>\n                                        <span>\n                                                <small> - {{item.VendorName}}</small>\n                                            </span>\n                                    </a>\n                                </p>\n\n                                <p class=\"mrgn-lft\">\n                                    <small>{{item.Name}}</small>\n                                </p>\n                                <ul class=\"list-inline list-unstyled text-right\">\n                                    <li>\n                                        <span>MRP:\n                                                <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.MSRP | number : '1.2-2' }}</span>\n                                    </li>\n                                    <li>\n                                        <span>Our Price:\n                                                <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.SellingPrice | number : '1.2-2'}}</span>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"AddProductToCart(item)\">\n                                            <span class=\"add-to-cart\">\n                                                    <i class=\"material-icons add-to-cart\">shopping_cart</i>\n                                                </span>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\" *ngIf=\"this.status === false\">\n                        <h4 class=\"text-center\" *ngIf=\"categoryProducts.Products?.length >0 && categoryProducts.Products !== null\">Products</h4>\n                        <div class=\"alert alert-warning alert-dismissible text-center\" role=\"alert\" *ngIf=\"categoryProducts.Products?.length === 0 && categoryProducts.Products !== null\">\n                            <!-- <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> -->\n                            <strong>Warning!</strong> No Products Available\n                        </div>\n                        <!-- <h6 class=\"mt-0\" *ngIf=\"categoryProducts.Products?.length === 0 && categoryProducts.Products !== null\">No Products</h6> -->\n                        <div class=\"col-md-6\" *ngFor=\"let item of categoryProducts.Products\">\n                            <div class=\"item-brdr\">\n                                <p class=\"mrgn-btm\">\n                                    <a (click)=\"ProductDetails(item.ItemCode,item.ItemType,item.Name)\">\n\n                                        <span *ngIf=\"item.PurchaseUnitModel === 'STRIP'\">\n                                                <i class=\"flaticon-medical-11\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel === 'SYRUP'\">\n                                                <i class=\"flaticon-medical-9\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel == 'BOTTLE'\">\n                                                <i class=\"flaticon-medical-16\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel == 'Tablet'\">\n                                                <i class=\"flaticon-medical-9\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel == 'strip'\">\n                                                <i class=\"flaticon-medical-11\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel == 'tube'\">\n                                                <i class=\"flaticon-tube-icon\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel == 'TUBE'\">\n                                                <i class=\"flaticon-tube-icon\"></i>\n                                            </span>\n                                        <span *ngIf=\"item.PurchaseUnitModel == 'INJ'\">\n                                                <i class=\"flaticon-medical-8\"></i>\n                                            </span> {{item.Name}}\n                                        <span *ngIf=\"item.model !== null\">- {{item.model}}</span>\n                                        <span>\n                                                <small> - {{item.VendorName}}</small>\n                                            </span>\n                                    </a>\n                                </p>\n\n                                <p class=\"mrgn-lft\">\n                                    <small>{{item.Name}}</small>\n                                </p>\n                                <ul class=\"list-inline list-unstyled text-right\">\n                                    <li>\n                                        <span>MRP:\n                                                <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.MSRP | number : '1.2-2' }}</span>\n                                    </li>\n                                    <li>\n                                        <span>Our Price:\n                                                <i aria-hidden=\"true\" class=\"fa fa-inr\"></i> {{item.SellingPrice | number : '1.2-2'}}</span>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"AddProductToCart(item)\">\n                                            <span class=\"add-to-cart\">\n                                                    <i class=\"material-icons add-to-cart\">shopping_cart</i>\n                                                </span>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n</section>\n\n\n\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subcategory-list/subcategory-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_Services_categoires_service__ = __webpack_require__("./src/app/sidebar/Services/categoires.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_subcategory_proudct_service__ = __webpack_require__("./src/app/subcategory-list/Service/subcategory-proudct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Common_cart_cart_service__ = __webpack_require__("./src/app/Common/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gw_prdct_dscrptn_Services_product_details_service__ = __webpack_require__("./src/app/gw-prdct-dscrptn/Services/product-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pageservice_pager_service_service__ = __webpack_require__("./src/app/pageservice/pager-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SubcategoryListComponent = /** @class */ (function () {
    function SubcategoryListComponent(_sidebarservice, _subcatProductList, cartService, NavbarServices, _productService, router, activate, notifications, _pageservice) {
        this._sidebarservice = _sidebarservice;
        this._subcatProductList = _subcatProductList;
        this.cartService = cartService;
        this.NavbarServices = NavbarServices;
        this._productService = _productService;
        this.router = router;
        this.activate = activate;
        this.notifications = notifications;
        this._pageservice = _pageservice;
    }
    SubcategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // tslint:disable-next-line:no-debugger
        debugger;
        this.data = this._sidebarservice.getData();
        this.catId = this.data.catId;
        this.subCatId = this.data.subcatId;
        this.status = this.data.status;
        if (this.status === false) {
            this._subcatProductList.GetsubCatProducts(this.catId, this.subCatId).subscribe(function (data) {
                // tslint:disable-next-line:no-debugger
                debugger;
                _this.categoryProducts = data;
                _this.status = _this.data.status;
            });
        }
        else {
            this._subcatProductList.GetCatProducts(this.catId).subscribe(function (data) {
                // tslint:disable-next-line:no-debugger
                debugger;
                _this.status = _this.data.status;
                _this.categoryProducts = data;
            });
        }
    };
    SubcategoryListComponent.prototype.AddtoDrugCart = function (Drug, catId) {
        var type = 'cartItem';
        var ProductVm = {
            id: +Drug.ItemCode,
            name: Drug.ItemName,
            itemType: Drug.ItemType,
            quantityPerUnit: 1,
            unitPrice: Drug.SellingPrice,
            Msrp: Drug.MRP,
            picture: Drug.ImageName,
            ranking: 0,
            isVerified: 0,
            isPrdAttr: true,
            attrId: 0,
            quantity: 1,
            catId: +catId
        };
        this.notifications.success('Success', '1 item is added to cart', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
        });
        this.cartService.addToCart(ProductVm, type);
        this.NavbarServices.change();
    };
    SubcategoryListComponent.prototype.AddProductToCart = function (item, catId) {
        var type = 'cartItem';
        var ProductVm = {
            id: +item.ItemCode,
            name: item.Name,
            itemType: item.ItemType,
            quantityPerUnit: 1,
            unitPrice: item.SellingPrice,
            Msrp: item.MSRP,
            picture: item.Picture,
            ranking: 0,
            isVerified: 0,
            isPrdAttr: true,
            attrId: 0,
            quantity: 1,
            catId: +catId
        };
        this.notifications.success('Success', '1 item is added to cart', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
        });
        this.cartService.addToCart(ProductVm, type);
        this.NavbarServices.change();
    };
    SubcategoryListComponent.prototype.ProductDetails = function (ItemCode, itemType, iteName) {
        this.produtDetial = {
            prodId: ItemCode,
            itemType: itemType
        };
        iteName = iteName.replace(/\s/g, '-');
        iteName = iteName.substr(0, iteName.length - 1);
        this._productService.setData(this.produtDetial);
        this.router.navigate(['/ItemDetails', iteName]);
    };
    SubcategoryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subcategory-list',
            template: __webpack_require__("./src/app/subcategory-list/subcategory-list.component.html"),
            styles: [__webpack_require__("./src/app/subcategory-list/subcategory-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sidebar_Services_categoires_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_2__Service_subcategory_proudct_service__["a" /* SubcategoryProudctService */],
            __WEBPACK_IMPORTED_MODULE_3__Common_cart_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_4__navbar_Services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_6__gw_prdct_dscrptn_Services_product_details_service__["a" /* ProductDetailsService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_7__pageservice_pager_service_service__["a" /* PagerServiceService */]])
    ], SubcategoryListComponent);
    return SubcategoryListComponent;
}());



/***/ }),

/***/ "./src/app/success/success.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron p {\r\n    font-size: 16px;\r\n    font-weight: normal\r\n}"

/***/ }),

/***/ "./src/app/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container pad-top login\">\n    <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 main\">\n            <h1 class=\"text-center\"><span class=\"text-success\"> <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i></span>\n            </h1>\n\n            <h3 class=\"head text-center\">\n                Thank You For Your Purchase, Your Order Has Been Received </h3>\n            <p class=\"narrow text-center\">Your Genericwala.com order No.\n                <span>{{orderId}} </span> is confirmed.</p>\n\n            <p class=\"narrow text-center\">\n                You will Receive an Order Confirmation E-mail with Details of your Order and receive a SMS after your Order is packed.\n            </p>\n            <p class=\"narrow text-center\">\n                If you have any queries call to customer support number 040 65916591.\n            </p>\n            <div class=\"text-center pad-top\">\n                <a class=\"btn btn-success\" routerLink=\"/Home\"><span style=\"padding-right: 10px;\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></span>Back to Home</a>\n            </div>\n        </div>\n    </div>\n</div> -->\n<div class=\"jumbotron  pad-top login\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 main\">\n                <h1 class=\"text-center\"><span class=\"text-success\"> <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i></span>\n                </h1>\n\n                <h3 class=\"head text-center\">\n                    Thank You For Your Purchase, Your Order Has Been Received </h3>\n                <p class=\"narrow text-center\">Your Genericwala.com order No.\n                    <span>{{orderId}} </span> is confirmed.</p>\n\n                <p class=\"narrow text-center\">\n                    You will Receive an Order Confirmation E-mail with Details of your Order and receive a SMS after your Order is packed.\n                </p>\n                <p class=\"narrow text-center\">\n                    If you have any queries call to customer support number 040 65916591.\n                </p>\n                <div class=\"text-center pad-top\">\n                    <a class=\"btn btn-success\" routerLink=\"/Home\"><span style=\"padding-right: 10px;\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></span>Back to Home</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_Services_navbar_service__ = __webpack_require__("./src/app/navbar/Services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__razorpay_service_window__ = __webpack_require__("./src/app/razorpay/service/window.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(_navabar, _windowref) {
        this._navabar = _navabar;
        this._windowref = _windowref;
        this.orderId = this._windowref.returnOrderId();
    }
    SuccessComponent.prototype.ngOnInit = function () {
        this._navabar.change();
        this.orderId = this._windowref.returnOrderId();
        this.Message = 'Your order is successfull confirmed';
    };
    SuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-success',
            template: __webpack_require__("./src/app/success/success.component.html"),
            styles: [__webpack_require__("./src/app/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__navbar_Services_navbar_service__["a" /* NavbarService */], __WEBPACK_IMPORTED_MODULE_2__razorpay_service_window__["a" /* WindowRef */]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/terms-and-conditions/terms-and-conditions.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/terms-and-conditions/terms-and-conditions.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/terms-and-conditions\">Terms and Conditions</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container trmsandcndtns\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <h3>Terms And Conditions</h3>\n            <h4>OVERVIEW :</h4>\n            <p class=\"left-textctn\">\n                The website Genericwala.com is an internet based portal owned and operated by RxShopy India Private Limited, a company incorporated under the Companies Act, 1956 having registered office at Badeti’s Mansion, 6-3-712/135, Panjagutta Colony, Hyderabad –\n                500 082. RxShopy India Private Limited offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated\n                here.\n            </p>\n            <p>\n                By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein\n                and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.\n            </p>\n            <p>\n                Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then\n                you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.\n            </p>\n            <p>\n                Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any\n                part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes\n                constitutes acceptance of those changes.\n            </p>\n            <h4>SECTION 1 - ONLINE STORE TERMS\n            </h4>\n            <p>\n                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow\n                any of your minor dependents to use this site.\n            </p>\n            <p>\n                You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).\n            </p>\n            <p>\n                You must not transmit any worms or viruses or any code of a destructive nature.\n            </p>\n            <p>\n                A breach or violation of any of the Terms will result in an immediate termination of your Services.\n            </p>\n\n            <h4>SECTION 2 - GENERAL CONDITIONS\n            </h4>\n            <p>\n                We reserve the right to refuse service to anyone for any reason at any time.\n            </p>\n            <p>\n                You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.\n                Credit card information is always encrypted during transfer over networks.\n            </p>\n            <p>\n                You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.\n            </p>\n            <p>\n                The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.\n            </p>\n            <h4>SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION\n            </h4>\n            <p>\n                We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without\n                consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.\n            </p>\n            <p>\n                This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update\n                any information on our site. You agree that it is your responsibility to monitor changes to our site.\n            </p>\n            <h4>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES\n            </h4>\n            <p>\n                Prices for our products are subject to change without notice.\n            </p>\n            <p>\n                We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.\n            </p>\n            <p>\n                We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.\n            </p>\n            <h4>SECTION 5 - PRODUCTS OR SERVICES\n            </h4>\n            <p>\n                Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.\n            </p>\n            <p>\n                We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.\n            </p>\n            <p>\n                We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products\n                or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product\n                or service made on this site is void where prohibited.\n            </p>\n            <p>\n                We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.\n            </p>\n            <h4>SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION\n            </h4>\n            <p>\n                We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account,\n                the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number\n                provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.\n            </p>\n            <p>\n                You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration\n                dates, so that we can complete your transactions and contact you as needed.\n            </p>\n            <p>\n                For more detail, please review our Returns Policy.\n            </p>\n            <h4>SECTION 7 - OPTIONAL TOOLS\n            </h4>\n            <p>\n                We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.\n            </p>\n            <p>\n                You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to\n                your use of optional third-party tools.\n            </p>\n            <p>\n                Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).\n            </p>\n            <p>\n                We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.\n            </p>\n            <h4>SECTION 8 - THIRD-PARTY LINKS\n            </h4>\n            <p>\n                Certain content, products and services available via our Service may include materials from third-parties.\n            </p>\n            <p>\n                Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for\n                any third-party materials or websites, or for any other materials, products, or services of third-parties.\n            </p>\n            <p>\n                We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices\n                and make sure you understand\n            </p>\n            <p>\n                them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.\n            </p>\n            <h4>SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS\n            </h4>\n            <p>\n                If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively,\n                'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain\n                any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.\n            </p>\n            <p>\n                We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual\n                property or these Terms of Service.\n            </p>\n            <p>\n                You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful,\n                abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself,\n                or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any\n                third-party.\n            </p>\n            <h4>SECTION 10 - PERSONAL INFORMATION\n            </h4>\n            <p>\n                Your submission of personal information through the store is governed by our Privacy Policy.\n            </p>\n            <h4>SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS\n            </h4>\n            <p>\n                Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability.\n                We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including\n                after you have submitted your order).\n            </p>\n            <p>\n                We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on\n                any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.\n            </p>\n            <h4>SECTION 12 - PROHIBITED USES\n            </h4>\n            <p>\n                In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international,\n                federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander,\n                disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type\n                of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others;\n                (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet.\n                We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.\n            </p>\n            <h4>SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY\n            </h4>\n            <p>\n                We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.\n            </p>\n            <p>\n                We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.\n            </p>\n            <p>\n                You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.\n            </p>\n            <p>\n                You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for\n                your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability,\n                title, and non-infringement.\n            </p>\n            <p>\n                In no case shall RxShopy India Private Limited, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive,\n                special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict\n                liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors\n                or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility.\n                Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by\n                law.\n            </p>\n            <h4>SECTION 14 - INDEMNIFICATION\n            </h4>\n            <p>\n                You agree to indemnify, defend and hold harmless RxShopy India Private Limited and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensers, service providers, subcontractors, suppliers, interns and employees,\n                harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law\n                or the rights of a third-party.\n            </p>\n            <h4>SECTION 15 - SEVERABILITY\n            </h4>\n            <p>\n                In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed\n                to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.\n            </p>\n            <h4>SECTION 16 - TERMINATION\n            </h4>\n            <p>\n                The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.\n            </p>\n            <p>\n                These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.\n            </p>\n            <p>\n                If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to\n                and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).\n            </p>\n            <h4>SECTION 17 - ENTIRE AGREEMENT\n            </h4>\n            <p>\n                The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.\n            </p>\n            <p>\n                These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous\n                agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).\n            </p>\n            <p>\n                Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.\n            </p>\n            <h4>SECTION 18 - GOVERNING LAW\n            </h4>\n            <p>\n                These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India and jurisdiction of Hyderabad, Telangana.\n            </p>\n            <h4>SECTION 19 - CHANGES TO TERMS OF SERVICE\n            </h4>\n            <p>\n                You can review the most current version of the Terms of Service at any time at this page.\n            </p>\n            <p>\n                We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of\n                or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.\n            </p>\n            <h4>SECTION 20 - CONTACT INFORMATION\n            </h4>\n            <p>\n                Questions about the Terms of Service should be sent to us at support@genericwala.com.\n            </p>\n\n        </div>\n\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/terms-and-conditions/terms-and-conditions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsAndConditionsComponent = /** @class */ (function () {
    function TermsAndConditionsComponent() {
    }
    TermsAndConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsAndConditionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms-and-conditions',
            template: __webpack_require__("./src/app/terms-and-conditions/terms-and-conditions.component.html"),
            styles: [__webpack_require__("./src/app/terms-and-conditions/terms-and-conditions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsAndConditionsComponent);
    return TermsAndConditionsComponent;
}());



/***/ }),

/***/ "./src/app/track/Model/track-order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackOrder; });
/* unused harmony export TrackingOrderDetials */
/* unused harmony export ShippingAddress */
var TrackOrder = /** @class */ (function () {
    function TrackOrder() {
    }
    return TrackOrder;
}());

var TrackingOrderDetials = /** @class */ (function () {
    function TrackingOrderDetials() {
    }
    return TrackingOrderDetials;
}());

var ShippingAddress = /** @class */ (function () {
    function ShippingAddress() {
    }
    return ShippingAddress;
}());



/***/ }),

/***/ "./src/app/track/Services/trackorder.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackorderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_empty__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/empty.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// tslint:disable-next-line:import-blacklist

// import {Observable} from 'rxjs/observable';





var TrackorderService = /** @class */ (function () {
    function TrackorderService(_httpclient) {
        this._httpclient = _httpclient;
    }
    TrackorderService.prototype.GetTrackOrder = function (user_AccesToken) {
        var userId = +JSON.parse(sessionStorage.getItem('customerdata')).userId;
        // const body = JSON.stringify(addressVm);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this._httpclient.get('http://localhost:31029/api/Track/TrackOrder?userId=' + userId, options)
            .map((function (res) {
            var data = res.json();
            return data;
        })).catch(this.handleError1);
    };
    TrackorderService.prototype.GetTrackOrderDetial = function (user_AccesToken, awb) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        headers.append('withCredentials', 'true');
        headers.append('Authorization', 'Bearer ' + user_AccesToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this._httpclient.get('http://localhost:31029/api/Track/TrackingOrder?waybillno=' + awb, options)
            .map((function (res) {
            var data = res.json();
            return data;
        })).catch(this.handleError1);
    };
    TrackorderService.prototype.handleError1 = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error);
    };
    TrackorderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], TrackorderService);
    return TrackorderService;
}());



/***/ }),

/***/ "./src/app/track/track.component.css":
/***/ (function(module, exports) {

module.exports = ".progress {\r\n    height: 86px;\r\n    min-width: 580px;\r\n    margin: 0px auto;\r\n    text-align: center;\r\n    padding: 14px;\r\n    background: none;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n}\r\n\r\n.progress .circle,\r\n.progress .bar {\r\n    display: inline-block;\r\n    background: #fff;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 40px;\r\n    border: 1px solid #d5d5da;\r\n}\r\n\r\n.progress .bar {\r\n    position: relative;\r\n    width: 136px;\r\n    height: 6px;\r\n    top: -28px;\r\n    margin-left: -5px;\r\n    margin-right: -5px;\r\n    border-left: none;\r\n    border-right: none;\r\n    border-radius: 0;\r\n}\r\n\r\n.progress .circle .label {\r\n    display: inline-block;\r\n    width: 32px;\r\n    height: 32px;\r\n    line-height: 28px;\r\n    border-radius: 32px;\r\n    margin-top: 3px;\r\n    color: #444;\r\n    font-size: 17px;\r\n}\r\n\r\n.progress .circle .title {\r\n    color: #b5b5ba;\r\n    font-size: 13px;\r\n    line-height: 30px;\r\n    margin-left: -5px;\r\n}\r\n\r\n.title1,\r\n.title2,\r\n.title3,\r\n.title4,\r\n.title5 {\r\n    line-height: 2;\r\n    color: #ddd;\r\n}\r\n\r\n/* Done / Active */\r\n\r\n/*.progress .bar.done,*/\r\n\r\n.progress .circle.done {\r\n    background: #eee;\r\n}\r\n\r\n.progress .bar.active {\r\n    background: -webkit-gradient(linear, left top, right top, color-stop(40%, #EEE), color-stop(60%, #FFF));\r\n    background: linear-gradient(to right, #EEE 40%, #FFF 60%);\r\n}\r\n\r\n.space-tp-rt {\r\n    margin-right: 10px;\r\n}\r\n\r\n.pagination {\r\n    margin: 0px 0;\r\n}\r\n\r\n.pagination>li>a,\r\n.pagination>li>span {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/track/track.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/trackorder\">Track Order </a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12 \">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"\">\n                            <span class=\"space-tp-rt\">\n                    <i class=\"fa fa-ambulance pull-left\"></i>\n                </span>Track Orders\n                        </h4>\n                        <div class=\"alert alert-danger\" *ngIf=\"statusCode === 401\">\n                            <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n                            <strong>Danger!</strong> {{errorMessage}}\n                        </div>\n                    </div>\n                    <div class=\"panel-body\">\n                        <table class=\"table table-hover table-bordered text-center\">\n                            <thead>\n                                <tr>\n                                    <td>Order Id</td>\n                                    <td>Order Status</td>\n                                    <td>Generated On</td>\n                                    <td>Action</td>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let tra_order of pagedItems\">\n                                    <td>{{tra_order.order_id}}</td>\n\n                                    <td>\n                                        <span *ngIf=\"tra_order.order_status === 'Cancelled'\" class=\"text-danger\"> {{tra_order.order_status}}\n                    <br/>\n                  </span>\n                                        <span *ngIf=\"tra_order.order_status === 'ShippedToDeliveryCenter'\" class=\"text-success\"> {{tra_order.order_status}}\n                    <br/>\n                  </span>\n                                        <span *ngIf=\"tra_order.order_status === 'Pending'\" class=\"text-danger\"> {{tra_order.order_status}}\n                    <br/>\n                  </span>\n                                        <span *ngIf=\"tra_order.order_status === 'OrderPacked'\" class=\"text-danger\"> {{tra_order.order_status}}\n                    <br/>\n                  </span>\n                                        <span *ngIf=\"tra_order.order_status === 'ReadyToShipment'\" class=\"text-info\"> {{tra_order.order_status}}\n                    <br/>\n                  </span>\n                                    </td>\n                                    <td>{{tra_order.created_on | date:'fullDate'}}</td>\n                                    <td>\n                                        <a class=\"btn btn-xs btn-primary btn-sbmt\" *ngIf=\"tra_order.CourierId === 6\" (click)=\"TrackOrderDetials(tra_order.AWD_NO,tra_order.order_id)\" data-toggle=\"modal\" data-target=\"#TrackOrder\">\n                    Track Order\n                  </a>\n                                        <a class=\"btn btn-xs btn-primary btn-sbmt\" [routerLink]=\"['/Track/OrderDetails',tra_order.order_id]\">\n                    View\n                  </a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <div class=\"pull-left\">\n                            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n                                <!-- <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                                <a (click)=\"setPage(1)\">First</a>\n                            </li> -->\n                                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                                    <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n                                </li>\n                                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n                                    <a (click)=\"setPage(page)\">{{page}}</a>\n                                </li>\n                                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                                    <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n                                </li>\n                                <!-- <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                                <a (click)=\"setPage(pager.totalPages)\">Last</a>\n                            </li> -->\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>\n<div class=\"modal fade\" id=\"TrackOrder\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" data-keyboard=\"false\" data-backdrop=\"static\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\" style=\"border-bottom: 1px solid #e5e5e5; padding:15px;\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"></button>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                        <h3 class=\"modal-title\">Track Order</h3>\n\n                    </div>\n                    <div class=\"modal-body\">\n\n                        <div class=\"panel col-md-12 p-brbr\">\n                            <div class=\"col-md-4\">\n                                <h6>\n                                    <i class=\"fa fa-truck\"></i>Shipping Address</h6>\n                                {{trackingorder_details.ShippingAddress.title}}\n\n                                <hr/>\n                                <p>{{trackingorder_details.ShippingAddress.address}} {{trackingorder_details.ShippingAddress.address1}} <br/> {{trackingorder_details.ShippingAddress.city}}\n                                    <br/> {{trackingorder_details.ShippingAddress.state}} <br/> {{trackingorder_details.ShippingAddress.pincode}}\n                                </p>\n\n                                <hr />\n\n\n                            </div>\n                            <div class=\"col-md-4 col-md-offset-4\">\n\n                                <h6>\n                                    <i class=\"fa fa-user\" aria-hidden=\"true\"></i> Order Id</h6>\n                                <hr />\n                                <p>{{orderId}}</p>\n\n                                <p>{{TrackingId}}</p>\n\n                            </div>\n                        </div>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"></button>\n                        <div class=\"timeline\" id=\"time\">\n                            <h2 id=\"status\" class=\"text-center\">Disptach Information</h2>\n                            <div class=\"progress\">\n                                <div class=\"circle done1\" [ngStyle]=\"{ 'background-color': (manifested===true ? 'green' : 'white') }\">\n\n                                    <span class=\"label\" id=\"s1\">1</span>\n                                    <span class=\"title1\">PickedUp</span>\n                                </div>\n                                <span class=\"bar bar1\" [ngStyle]=\"{ 'background-color': (((manifested===true ||InTransit === true) && InTransit===true ) ? 'green' : 'white') }\"></span>\n                                <div class=\"circle done2\" [ngStyle]=\"{ 'background-color': (((manifested===true ||InTransit === true) && InTransit===true ) ? 'green' : 'white') }\">\n                                    <span class=\"label\" id=\"s2\">2</span>\n                                    <span class=\"title2\">InTransit</span>\n                                </div>\n\n                                <span class=\"bar bar2\" [ngStyle]=\"{ 'background-color': (((manifested===true ||InTransit === true || Pending === true) && Pending===true ) ? 'green' : 'white') }\"></span>\n                                <div class=\"circle done4\" [ngStyle]=\"{ 'background-color': (((manifested===true ||InTransit === true || Pending === true) && Pending===true ) ? 'green' : 'white') }\">\n                                    <span class=\"label\" id=\"s4\">3</span>\n                                    <span class=\"title4\">Pending</span>\n                                </div>\n                                <span class=\"bar bar3\" [ngStyle]=\"{ 'background-color': (((manifested===true ||InTransit === true || Pending === true || Dispatched ===true) && Dispatched===true ) ? 'green' : 'white') }\"></span>\n                                <div class=\"circle done5\" [ngStyle]=\"{ 'background-color': (((manifested===true ||InTransit === true || Pending === true || Dispatched ===true ) && Dispatched===true ) ? 'green' : 'white') }\">\n                                    <span class=\"label\" id=\"s5\">4</span>\n                                    <span class=\"title5\">Dispatched</span>\n                                </div>\n\n                                <span class=\"bar bar4\" [ngStyle]=\"{ 'background-color': (((manifested===true ||InTransit === true || Pending === true || Dispatched ===true ||Delivered === true) && Delivered===true ) ? 'green' : 'white') }\"></span>\n                                <div class=\"circle done5\" [ngStyle]=\"{ 'background-color': (((manifested===true ||InTransit === true || Pending === true || Dispatched ===true ||Delivered === true) && Delivered===true ) ? 'green' : 'white') }\">\n                                    <span class=\"label\" id=\"s5\">4</span>\n                                    <span class=\"title5\">Delivered</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"showhidetarget\" *ngIf=\"IsHidden===false\">\n                            <div id=\"showdiv\">\n                                <h2 class=\"text-center\">Tracking Information</h2>\n                                <table class=\"table table-striped table-bordered\" id=\"t1\">\n                                    <thead>\n                                        <tr>\n                                            <th>Date</th>\n                                            <th>Status</th>\n                                            <th>Location</th>\n                                            <th>Remarks</th>\n                                        </tr>\n\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let item of scannedList\">\n                                            <th>{{item.scanDateTime | date:'fullDate'}}</th>\n                                            <th>{{item.scan}}</th>\n                                            <th>{{item.scannedLocation}}</th>\n                                            <th>{{item.instructions}} </th>\n                                        </tr>\n                                        <tr>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <a id=\"showhidetrigger\" class=\"btn btn-default\" (click)=\"ShowDiv();\">More/Less</a>\n                    </div>\n                    <!-- /.modal-content -->\n                </div>\n                <!-- /.modal-content -->\n            </div>\n            <!-- /.modal-dialog -->\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/track/track.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_trackorder_service__ = __webpack_require__("./src/app/track/Services/trackorder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_track_order__ = __webpack_require__("./src/app/track/Model/track-order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orderdetails_Model_order_details_vm__ = __webpack_require__("./src/app/orderdetails/Model/order-details-vm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pageservice_pager_service_service__ = __webpack_require__("./src/app/pageservice/pager-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrackComponent = /** @class */ (function () {
    function TrackComponent(_trackOrderService, router, pagerService) {
        this._trackOrderService = _trackOrderService;
        this.router = router;
        this.pagerService = pagerService;
        this.scandetails = [];
        this.scannedList = [];
        this.count = 0;
        this.IsHidden = true;
        this.manifested = false;
        this.InTransit = false;
        this.Pending = false;
        this.Dispatched = false;
        this.Delivered = false;
        this.itemcount = 0;
        this.pager = {};
        this.allItems = [];
    }
    TrackComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = sessionStorage.getItem('userToken');
        this.access_token = token;
        this._trackOrderService.GetTrackOrder(token).subscribe(function (data) {
            _this.trackorder = data;
            var model = new __WEBPACK_IMPORTED_MODULE_2__Model_track_order__["a" /* TrackOrder */]();
            for (var key in _this.trackorder) {
                if (_this.trackorder.hasOwnProperty(key)) {
                    _this.allItems.push(_this.trackorder[key]);
                    _this.itemcount = _this.itemcount + 1;
                }
            }
            _this.setPage(1);
        }, function (error) {
            if (error.status === 401 && error.statusText === 'Unauthorized') {
                _this.statusCode = 401;
                alert('session is expired,try to login');
                _this.router.navigate(['/Home']);
            }
        });
    };
    TrackComponent.prototype.setPage = function (page) {
        this.pager = this.pagerService.getPager(this.itemcount, page);
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    TrackComponent.prototype.TrackOrderDetials = function (awb, order_id) {
        var _this = this;
        this._trackOrderService.GetTrackOrderDetial(this.access_token, awb).subscribe(function (data) {
            // tslint:disable-next-line:no-debugger
            debugger;
            _this.trackingorder_details = data;
            _this.orderId = order_id;
            _this.TrackingId = awb;
            console.log(_this.trackingorder_details);
            _this.scandetails = [];
            for (var key in data.ScanDetail) {
                if (data.ScanDetail.hasOwnProperty(key)) {
                    var model1 = new __WEBPACK_IMPORTED_MODULE_3__orderdetails_Model_order_details_vm__["a" /* ScanDetail */]();
                    model1.instructions = data.ScanDetail[key].instructions;
                    model1.scan = data.ScanDetail[key].scan;
                    model1.statusCode = data.ScanDetail[key].statusCode;
                    model1.scannedLocation = data.ScanDetail[key].scannedLocation;
                    model1.statusDateTime = data.ScanDetail[key].statusDateTime;
                    model1.scanDateTime = data.ScanDetail[key].scanDateTime;
                    model1.SscanType = data.ScanDetail[key].SscanType;
                    _this.scandetails.push(model1);
                }
            }
            _this.scannedList = [];
            for (var i = 0; i < _this.scandetails.length; i++) {
                if (_this.scandetails[i].scan.toString() === 'Manifested') {
                    _this.manifested = true;
                    var item = _this.scandetails[i];
                    _this.scannedList.push(item);
                }
                if ((_this.scandetails[i].scan === 'In Transit' ||
                    _this.scandetails[i].scan === 'Manifested')
                    && _this.scandetails[i].scan === 'In Transit') {
                    if (_this.count < 5) {
                        var item = _this.scandetails[i];
                        _this.count = _this.count + 1;
                        _this.scannedList.push(item);
                        _this.InTransit = true;
                        _this.manifested = true;
                    }
                }
                if (_this.scandetails[i].scan === 'Pending') {
                    if ((_this.scandetails[i].scan === 'In Transit'
                        || _this.scandetails[i].scan === 'Manifested'
                        || _this.scandetails[i].scan === 'Pending') &&
                        (_this.scandetails[i].scan === 'Pending')) {
                        var item = _this.scandetails[i];
                        _this.scannedList.push(item);
                        _this.InTransit = true;
                        _this.manifested = true;
                        _this.Pending = true;
                    }
                }
                if ((_this.scandetails[i].scan === 'In Transit'
                    || _this.scandetails[i].scan === 'Manifested'
                    || _this.scandetails[i].scan === 'Pending'
                    || _this.scandetails[i].scan === 'Dispatched') &&
                    (_this.scandetails[i].scan === 'Dispatched')) {
                    var item = _this.scandetails[i];
                    _this.scannedList.push(item);
                    _this.scannedList.push(item);
                    _this.InTransit = true;
                    _this.manifested = true;
                    _this.Pending = true;
                    _this.Dispatched = true;
                }
                if ((_this.scandetails[i].scan === 'In Transit'
                    || _this.scandetails[i].scan === 'Manifested'
                    || _this.scandetails[i].scan === 'Pending'
                    || _this.scandetails[i].scan === 'Dispatched'
                    || _this.scandetails[i].scan === 'Delivered') &&
                    (_this.scandetails[i].scan === 'Delivered')) {
                    var item = _this.scandetails[i];
                    _this.scannedList.push(item);
                    _this.InTransit = true;
                    _this.manifested = true;
                    _this.Pending = true;
                    _this.Dispatched = true;
                    _this.Delivered = true;
                }
            }
            console.log(_this.scannedList);
        });
    };
    TrackComponent.prototype.ShowDiv = function () {
        this.IsHidden = !this.IsHidden;
        if (this.IsHidden) {
        }
        else {
        }
    };
    TrackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-track',
            template: __webpack_require__("./src/app/track/track.component.html"),
            styles: [__webpack_require__("./src/app/track/track.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_trackorder_service__["a" /* TrackorderService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__pageservice_pager_service_service__["a" /* PagerServiceService */]])
    ], TrackComponent);
    return TrackComponent;
}());



/***/ }),

/***/ "./src/app/wholesale/wholesale.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wholesale/wholesale.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  wholesale works!\n</p>\n"

/***/ }),

/***/ "./src/app/wholesale/wholesale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WholesaleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WholesaleComponent = /** @class */ (function () {
    function WholesaleComponent() {
    }
    WholesaleComponent.prototype.ngOnInit = function () {
    };
    WholesaleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wholesale',
            template: __webpack_require__("./src/app/wholesale/wholesale.component.html"),
            styles: [__webpack_require__("./src/app/wholesale/wholesale.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WholesaleComponent);
    return WholesaleComponent;
}());



/***/ }),

/***/ "./src/app/why-gnrc-mdcn/why-gnrc-mdcn.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/why-gnrc-mdcn/why-gnrc-mdcn.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ol class=\"breadcrumb pull-right\">\n                    <li class=\"breadcrumb-item\">\n                        <a routerLink=\"/Home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a>\n                    </li>\n                    <li class=\"breadcrumb-item active\">\n                        <a routerLink=\"/why-gnrc-mdcn\">Why Generic Medicines</a>\n                    </li>\n                </ol>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 col-xs-12\">\n            <h3>Why Generic Medicine ?</h3>\n\n            <p>\n                Generic drugs have the same active ingredients as their brand names drugs, both the type of drugs are approved by the Food and Drug Administration (FDA).\n            </p>\n            <p>\n                Generics drugs are available after patent for the drug expires. Patent periods on drugs may last for up to 20 years. The same company that manufactures the brand drug may also manufacture the generic version or else by a different company.\n            </p>\n            <p>\n                Generic medicines are as effective as branded ones; the only difference is they are very affordable.\n            </p>\n\n\n            <p>\n                Generic drugs are available for most health issues like Diabetes, Blood Pressure, Heart Disease, Malaria and Joint Pains. Most regularly used Multi-Vitamins and antibiotics are also available.\n            </p>\n            <p>\n                Generic Medicines are manufactured by reputed Companies like Cipla, Biochem, Alembic, Lupin, Ranbaxy etc.\n            </p>\n        </div>\n    </div>\n</div>\n<app-popular-brands></app-popular-brands>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/why-gnrc-mdcn/why-gnrc-mdcn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhyGnrcMdcnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhyGnrcMdcnComponent = /** @class */ (function () {
    function WhyGnrcMdcnComponent() {
    }
    WhyGnrcMdcnComponent.prototype.ngOnInit = function () {
    };
    WhyGnrcMdcnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-why-gnrc-mdcn',
            template: __webpack_require__("./src/app/why-gnrc-mdcn/why-gnrc-mdcn.component.html"),
            styles: [__webpack_require__("./src/app/why-gnrc-mdcn/why-gnrc-mdcn.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhyGnrcMdcnComponent);
    return WhyGnrcMdcnComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:8080'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map