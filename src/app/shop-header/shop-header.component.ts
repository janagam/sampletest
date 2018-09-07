import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CategoryService, ParacategorId } from '../sidebar/Services/categoires.service';
import { ICategory, SubCategoryVm } from '../subcategory-list/Model/categorymodel';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.css'],
})
export class ShopHeaderComponent implements OnInit {
  category_List: ICategory[];
  statusMesssage: string;
  message: string;
  showdiv: boolean;
  subcategory: SubCategoryVm;
  category: ICategory;
  category_id: string;
  selected: boolean;
  applyClass: string;

  ParacategorId: ParacategorId;
  mouseOver: boolean;
  catName: string;
  mouseleave: boolean;


  constructor(private _catgoryService: CategoryService, private el: ElementRef, private router: Router) {
    this.showdiv = false;
    this.mouseOver = false;
    this.mouseleave = true;
    this.selected = false;
  }
  ngOnInit() {
  }

  mouseEnter(itemName: string, cat: SubCategoryVm, id: string): void {
    this.catName = '';
    this.mouseOver = true;
    this.selected = true;
    this.subcategory = cat;
    this.category_id = id;
    this.catName = itemName;
  }

  mousemove(itemName: string, cat: SubCategoryVm, id: string): void {
    this.catName = '';
    this.mouseOver = true;
    this.selected = true;
    this.subcategory = cat;
    this.category_id = id;
    this.catName = itemName;
  }

  OpenMenu(): void {
    this.mouseOver = false;
    this._catgoryService.GetCategoriesList().subscribe(catdata => {
      this.category_List = catdata;
    },
      (error) => {
        this.statusMesssage = 'There is problem with service';
      }
    );
  }

  GetCategoryProducts(catName: string, CatId: string): void {
    let category = '';
    if (catName.includes('&')) {
      const spaceCat = catName.replace(/\s/g, '');
      category = spaceCat.replace('&', '-');
    } else {
      category = catName.replace(/\s/g, '-');
    }
    this.ParacategorId = {
      catId: CatId,
      subcatId: null,
      status: true
    };
    this._catgoryService.setData(this.ParacategorId);
    this.router.navigate(['/Product', category]);
  }
  GetSubCategoryProducts(subcatname: string, subcatId: string, catname: string, catid: string): void {

    let subcategory = '';
    let category = '';
    if (subcatname.includes('&') || catname.includes('&')) {
      if (subcatname.includes('&')) {
        const spaceCat = subcatname.replace(/\s/g, '');
        subcategory = spaceCat.replace('&', '-');
      } else {
        subcategory = subcatname.replace(/\s/g, '-');
      }
      if (catname.includes('&')) {
        const spaceCat = catname.replace(/\s/g, '');
        category = spaceCat.replace('&', '-');
      } else {
        category = catname.replace(/\s/g, '-');
      }
    } else {
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
  }
  ApplyClass(): void {
    this.applyClass = 'active';
  }
}
