import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../sidebar/Services/categoires.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { SubcategoryProudctService } from './Service/subcategory-proudct.service';
import { CategoryproductVM, Products } from './Model/categoryproduct';
import { Drugs, ProductsVm } from '../gw-ltst-prdcts/Model/latestprodutmodel';
import { CartService } from '../Common/cart/cart.service';
import { NavbarService } from '../navbar/Services/navbar.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductDetailsService, ProductId } from '../gw-prdct-dscrptn/Services/product-details.service';
import { PagerServiceService } from '../pageservice/pager-service.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubcategoryListComponent implements OnInit {
  data: any;
  catId: any;
  subCatId: any;
  categoryProducts: CategoryproductVM;
  Drugs: Drugs;
  status: boolean;
  products: ProductsVm;
  produtDetial: ProductId;
  constructor(private _sidebarservice: CategoryService, private _subcatProductList: SubcategoryProudctService,
    private cartService: CartService, private NavbarServices: NavbarService,
    private _productService: ProductDetailsService,
    private router: Router, private activate: ActivatedRoute,
    private notifications: NotificationsService,
  private _pageservice: PagerServiceService) {
  }

  ngOnInit() {
      // tslint:disable-next-line:no-debugger
      debugger;
    this.data = this._sidebarservice.getData();
    this.catId = this.data.catId;
    this.subCatId = this.data.subcatId;
    this.status = this.data.status;

    if (this.status === false) {
      this._subcatProductList.GetsubCatProducts(this.catId, this.subCatId).subscribe(
        (data) => {
          // tslint:disable-next-line:no-debugger
          debugger;
          this.categoryProducts = data;
          this.status = this.data.status;
        });
    } else {
      this._subcatProductList.GetCatProducts(this.catId).subscribe(
        (data) => {
          // tslint:disable-next-line:no-debugger
          debugger;
          this.status = this.data.status;
          this.categoryProducts = data;
        });
    }
  }
  AddtoDrugCart(Drug: Drugs, catId: string) {
    const type = 'cartItem';
    const ProductVm: ProductsVm = {
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
    this.cartService.addToCart(ProductVm, type);
    this.NavbarServices.change();
  }
  AddProductToCart(item: Products, catId: string) {
    const type = 'cartItem';
    const ProductVm: ProductsVm = {
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
    this.cartService.addToCart(ProductVm, type);
    this.NavbarServices.change();
  }

  ProductDetails(ItemCode: string, itemType: string, iteName: string) {
    this.produtDetial = {
      prodId: ItemCode,
      itemType: itemType
    };
    iteName = iteName.replace(/\s/g, '-');
    iteName = iteName.substr(0, iteName.length - 1);
    this._productService.setData(this.produtDetial);
    this.router.navigate(['/ItemDetails', iteName]);
  }
}
