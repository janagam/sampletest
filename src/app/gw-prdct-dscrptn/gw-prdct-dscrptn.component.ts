import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductDetailsService } from './Services/product-details.service';
import { Subscription } from 'rxjs/Subscription';
import { Productdetials, ItemDetails } from './Model/productdetials';
import { CartService } from '../Common/cart/cart.service';
import { ProductsVm } from '../gw-ltst-prdcts/Model/latestprodutmodel';
import { NavbarService } from '../navbar/Services/navbar.service';
import { HomeproudctService } from '../gw-ltst-prdcts/service/homeproudct.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-gw-prdct-dscrptn',
  templateUrl: './gw-prdct-dscrptn.component.html',
  styleUrls: ['./gw-prdct-dscrptn.component.css'],
  // providers: [HomeproudctService]
})
export class GwPrdctDscrptnComponent implements OnInit {
  id: any;
  itemType: any;
  private sub: Subscription;
  Productdetials: Productdetials;
  quantity: number;
  itemsDetails: ItemDetails;
  price: number;
  totaldiscountPice: number;
  saveprice: number;
  type: string;
  data: any;
  details: any;


  constructor(private activeatedRoute: ActivatedRoute, private productDetialService: ProductDetailsService,
    private router: Router, private _navbar: NavbarService,
    private notifications: NotificationsService,
    private cartService: CartService) { }
  ngOnInit() {
    this.data = this.productDetialService.getData();
    this.id = + this.data.prodId;
    this.itemType = this.data.itemType;

    this.productDetialService.GetProductDetails(this.id, this.itemType)
      .subscribe(
        (data) => {
          this.Productdetials = data;
        });
    this.quantity = 1;
  }

  IncreaseProductQuantity(items: ItemDetails, itemcode: number) {
    this.quantity = this.quantity + 1;
    this.Productdetials.ItemDetail = items;
    this.Productdetials.ItemDetail.TotalPrice = this.Productdetials.ItemDetail.TotalPrice +
      (this.Productdetials.ItemDetail.retailerPrice * 1);
    this.Productdetials.ItemDetail.Price = this.Productdetials.ItemDetail.Price +
      (this.Productdetials.ItemDetail.acutalPrice * 1);
    this.Productdetials.ItemDetail.TotalDiscount = (this.Productdetials.ItemDetail.TotalDiscount * 1) +
      (this.Productdetials.ItemDetail.acutalPrice - this.Productdetials.ItemDetail.retailerPrice);
  }

  DecreaseProductQuantity(items: ItemDetails) {
    this.quantity = this.quantity - 1;
    if (this.quantity === 0) {
      this.quantity = 1;
      this.Productdetials.ItemDetail = items;
      this.Productdetials.ItemDetail.TotalPrice = this.Productdetials.ItemDetail.TotalPrice;
      this.Productdetials.ItemDetail.Price = this.Productdetials.ItemDetail.Price;
      this.Productdetials.ItemDetail.TotalDiscount = (this.Productdetials.ItemDetail.TotalDiscount * 1);
    } else {
      this.Productdetials.ItemDetail = items;
      this.Productdetials.ItemDetail.TotalPrice = this.Productdetials.ItemDetail.TotalPrice -
        (this.Productdetials.ItemDetail.retailerPrice * 1);
      this.Productdetials.ItemDetail.Price = this.Productdetials.ItemDetail.Price -
        (this.Productdetials.ItemDetail.acutalPrice * 1);
      this.Productdetials.ItemDetail.TotalDiscount = (this.Productdetials.ItemDetail.TotalDiscount * 1) -
        (this.Productdetials.ItemDetail.acutalPrice - this.Productdetials.ItemDetail.retailerPrice);
    }

    return this.itemsDetails;
  }

  AddtoCart(products: ItemDetails, _quantity: number): void {
    this.type = 'cartItem';
    const ProductVm: ProductsVm = {
      id: +products.Code,
      name: products.Name,
      itemType: products.Type,
      quantityPerUnit: products.itemsPerPiece,
      unitPrice: products.retailerPrice *  products.itemsPerPiece,
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

  AddtoWhishlist(products: ItemDetails, _quantity: number): void {
    this.type = 'wishListItem';
    const ProductVm: ProductsVm = {
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
    this.notifications.success(
      'Success',
      '1 item is added to Whishlist',
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
}
