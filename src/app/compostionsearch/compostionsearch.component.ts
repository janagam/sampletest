import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../gw-prdct-dscrptn/Services/product-details.service';
import { SearchdetailsService } from '../navbar/Services/searchdetails.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CategoryproductVM, Products } from '../subcategory-list/Model/categoryproduct';
import { CartService } from '../Common/cart/cart.service';
import { NavbarService } from '../navbar/Services/navbar.service';
import { ProductsVm, Drugs } from '../gw-ltst-prdcts/Model/latestprodutmodel';
import { ProductId } from '../gw-ltst-prdcts/service/homeproudct.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-compostionsearch',
  templateUrl: './compostionsearch.component.html',
  styleUrls: ['./compostionsearch.component.css']
})
export class CompostionsearchComponent implements OnInit {
  data: any;
  categoryProducts: CategoryproductVM;
  products: ProductsVm;
  Drugs: Drugs;
  produtDetial: ProductId;
  constructor(private productDetialService: ProductDetailsService,
    private cartService: CartService, private NavbarServices: NavbarService,
    private _SearchdetailsService: SearchdetailsService,
    private router: Router) { }

  ngOnInit() {
    this.data = this.productDetialService.GetCompostionSearch();
    this._SearchdetailsService.CompositionSearch(this.data)
      .subscribe(
        (data) => {
          this.categoryProducts = data;

        });
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
    this.cartService.addToCart(ProductVm, type);
    this.NavbarServices.change();
  }

  ProductDetails(ItemCode: string, itemType: string, iteName: string) {
    this.produtDetial = {
      prodId: ItemCode,
      itemType: itemType
    };
    iteName = iteName.replace(/\s/g, '-');
    this.productDetialService.setData(this.produtDetial);
    this.router.navigate(['/ItemDetails', iteName]);
  }


}
