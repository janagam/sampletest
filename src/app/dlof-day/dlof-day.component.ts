import { Component, OnInit } from '@angular/core';
import { Drugs } from '../sidebar/Model/categoryproduct';
import { AllgenericmedicinesService } from '../all-generic-meds/services/allgenericmedicines.service';
import { ProductId } from '../gw-ltst-prdcts/service/homeproudct.service';
import { ProductDetailsService } from '../gw-prdct-dscrptn/Services/product-details.service';
import { Router } from '@angular/router';
import { CartService } from '../Common/cart/cart.service';
import { NavbarService } from '../navbar/Services/navbar.service';
import { ProductsVm } from '../gw-ltst-prdcts/Model/latestprodutmodel';
import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-dlof-day',
  templateUrl: './dlof-day.component.html',
  styleUrls: ['./dlof-day.component.css']
})
export class DlofDayComponent implements OnInit {
  drug: Drugs[] = [];
  statusMesssage: string;
  produtDetial: ProductId;
  products: ProductsVm;
  constructor(private allgenericmedicineservice: AllgenericmedicinesService, private router: Router,
    private cartService: CartService, private NavbarServices: NavbarService,
    private notifications: NotificationsService,
    private _productService: ProductDetailsService) { }

  ngOnInit() {
    this.allgenericmedicineservice.GetDOlfday().subscribe(catdata => {
    this.drug = catdata;
    console.log(this.drug);
    },
      (error) => {
        this.statusMesssage = 'There is problem with service';
      }
    );

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

}
