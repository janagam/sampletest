import { Component, OnInit } from '@angular/core';
import { Drugs } from '../sidebar/Model/categoryproduct';
import { AllgenericmedicinesService } from './services/allgenericmedicines.service';
import { CartService } from '../Common/cart/cart.service';
import { NavbarService } from '../navbar/Services/navbar.service';
import { ProductId, ProductDetailsService } from '../gw-prdct-dscrptn/Services/product-details.service';
import { ProductsVm } from '../gw-ltst-prdcts/Model/latestprodutmodel';
import { Router } from '@angular/router';
import { PagerServiceService } from '../pageservice/pager-service.service';
import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-all-generic-meds',
  templateUrl: './all-generic-meds.component.html',
  styleUrls: ['./all-generic-meds.component.css']
})
export class AllGenericMedsComponent implements OnInit {
  drugs: Drugs[] = [];
  statusMesssage: string;
  produtDetial: ProductId;
  products: ProductsVm;
  itemcount: number;
  pager: any = {};
  pagedItems: any[];
  constructor(private allgenericmedicineservice: AllgenericmedicinesService,
    private cartService: CartService, private NavbarServices: NavbarService,
    private notifications: NotificationsService,
    private _productService: ProductDetailsService, private router: Router,
    private _pageService: PagerServiceService) { }                    // page service calling

  ngOnInit() {
    this.allgenericmedicineservice.GetGenericDrugs().subscribe(catdata => {
    this.drugs = catdata;
    // implementing pagination
    this.itemcount = this.drugs.length;
    this.setPage(1);
    },
      (error) => {
        this.statusMesssage = 'There is problem with service';
      }
    );
  }
  ProductDetails(ItemCode: string, itemType: string, iteName: string): void {
    this.produtDetial = {
      prodId: ItemCode,
      itemType: itemType
    };
    // tslint:disable-next-line:no-debugger
    debugger;
    iteName = iteName.substr(0, iteName.length - 1);
     iteName = iteName.replace(/\s/g, '-');
     const first = iteName.charAt(0);
     if (iteName.charAt(0) === '-') {
     iteName = iteName.replace(/^-+/, '');
    }
    this._productService.setData(this.produtDetial);
    this.router.navigate(['/ItemDetails', iteName]);
  }

  setPage(page: number) {
    this.pager = this._pageService.getPager(this.itemcount, page);
    this.pagedItems =  this.drugs.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  AddtoDrugCart(Drug: Drugs, catId: string): void {
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
    this.cartService.addToCart(ProductVm, type);
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
    this.NavbarServices.change();
  }

}
