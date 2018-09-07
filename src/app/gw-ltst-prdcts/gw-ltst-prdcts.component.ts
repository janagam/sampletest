import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IRootObject, ProductCategoryVm } from './Model/latestprodutmodel';
import { ProductsVm } from './Model/latestprodutmodel';
// import { HomeproudctService, ProductId } from './serviceproudct.service';
import { HomeproudctService, ProductId } from './Service/homeproudct.service';
/*import { Message } from '@angular/compiler/src/i18n/i18n_ast';*/
import { CartVm } from './Model/latestprodutmodel';
import { WishListVm } from './Model/latestprodutmodel';
import { Cartobject } from './Model/latestprodutmodel';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CartService } from '../Common/cart/cart.service';
import { NavbarService } from '../navbar/Services/navbar.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Productdetials } from '../gw-prdct-dscrptn/Model/productdetials';
import { ProductDetailsService } from '../gw-prdct-dscrptn/Services/product-details.service';
import { NgxCarousel } from 'ngx-carousel';
import { forEach } from '@angular/router/src/utils/collection';
import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-gw-ltst-prdcts',
  templateUrl: './gw-ltst-prdcts.component.html',
  styleUrls: ['./gw-ltst-prdcts.component.css'],
  providers: [HomeproudctService],
})
export class GwLtstPrdctsComponent implements OnInit {
  imgags: string[];

  public cartCount = 0;
  cartList: ProductsVm[] = [];
  whishList: ProductsVm[] = [];
  cartItems: CartVm[] = [];
  wishListItems: WishListVm[] = [];
  @Input() count = 0;
  type: string;
  produtDetial: ProductId;
  public carouselTile: NgxCarousel;
  public carouselTileItems: Array<any> = [];


  @Output() messageEvent = new EventEmitter<string>();
  productList: IRootObject[];
  statusMesssage: string;
  ProductCategoryVm: ProductCategoryVm;

  LoadCart(): string[] {
    if (localStorage.getItem('cartobj') != null) {
      this.count = JSON.parse(localStorage.getItem('cartobj')).length;
      return JSON.parse(localStorage.getItem('cartobj'));
    } else {
      return null;
    }
  }
  constructor(private _homeService: HomeproudctService, private cartService: CartService,
    private _navbar: NavbarService, private router: Router, private activate: ActivatedRoute,
    private notifications: NotificationsService,
    private productDescription: ProductDetailsService) { }

  ngOnInit() {
    this.carouselTile = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      speed: 600,
      interval: 3000,
      point: {
        visible: true,
        pointStyles: `
        .tile {
          box-shadow: none !important;
          border: 1px solid #e1e7ec;
          border-radius: 4px;
        }
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
         }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            background: #ddd;
            padding:3px;
            margin: 0 3px;
            transition: .4s;
            cursor:pointer
          }
          .ngxcarouselPoint li.active {
            background: #f67f57;
              transform: scale(1.2);
            }
        `
      },
      load: 2,
      loop: true,
      touch: true,
      easing: 'ease',
      animation: 'lazy'
    };
    this._homeService.GetHomeProduct().subscribe(homedata => {
    this.productList = homedata;
      const items = this.carouselTileLoad(this.productList);
    },
      (error) => { this.statusMesssage = 'There is problem with service'; });
  }
  // adding product to cart
  AddtoCart(products: ProductsVm, catId: number): void {
    products.catId = catId;
    this.type = 'cartItem';
    this.cartService.addToCart(products, this.type);
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
  carouselTileLoad(productList: IRootObject[]) {
    const len = this.productList.length;
    if (len <= 30) {
      for (let i = 0; i < len; i++) {
        console.log(this.productList[i]);
        this.carouselTileItems.push(
          this.productList[i]
        );
      }
    }
    return this.carouselTileItems;
  }

  // adding product to cart
  AddtoWhishlists(products: ProductsVm): void {
    this.type = 'wishListItem';
    this.cartService.addToCart(products, this.type);
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
  ProductDetails(productname: string, itemType: string, id: string): void {
    this.produtDetial = {
      prodId: id,
      itemType: itemType
    };
    productname = productname.replace(/\s/g, '-');
    productname = productname.substr(0, productname.length - 1);
    this.productDescription.setData(this.produtDetial);
    this.router.navigate(['/ItemDetails', productname]);

  }
}


