import { Component, OnInit } from '@angular/core';
import { Drugs } from '../sidebar/Model/categoryproduct';
import { AllgenericmedicinesService } from '../all-generic-meds/services/allgenericmedicines.service';
import { Router } from '@angular/router';
import { CartService } from '../Common/cart/cart.service';
import { NavbarService } from '../navbar/Services/navbar.service';
import { ProductDetailsService, ProductId } from '../gw-prdct-dscrptn/Services/product-details.service';
import { ICategory } from '../sidebar/Model/categorymodel';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-lst-of-mdcns',
  templateUrl: './lst-of-mdcns.component.html',
  styleUrls: ['./lst-of-mdcns.component.css']
})
export class LstOfMdcnsComponent implements OnInit {
  list_of_products: ICategory[] = [];
  statusMesssage: string;
  produtDetial: ProductId;
  isToggled: boolean;
  selectedIndex = -1;
  constructor(private allgenericmedicineservice: AllgenericmedicinesService, private router: Router,
    private cartService: CartService, private NavbarServices: NavbarService,
    private _productService: ProductDetailsService) { }

  ngOnInit() {
    this.isToggled = false;
    this.allgenericmedicineservice.GetProductList().subscribe(catdata => {
      this.list_of_products = catdata;
    },
      (error) => {
        this.statusMesssage = 'There is problem with service';
      }
    );
  }

  showContent(evt, index) {
    if (this.isToggled === false) {
      this.isToggled = true;
      this.selectedIndex = index;
    } else {
      if (this.selectedIndex === index) {
        this.isToggled = false;
        this.selectedIndex = index;
      } else {
        this.isToggled = true;
        this.selectedIndex = index;
      }
    }
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
