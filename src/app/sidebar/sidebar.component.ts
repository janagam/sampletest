import { Component, OnInit } from '@angular/core';
import { CategoryService, ParacategorId } from './Services/categoires.service';
import { ICategory } from './Model/categorymodel';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  category_List: ICategory[];
  statusMesssage: string;
  message: string;
  data: any = { text: 'example' };
  ParacategorId: ParacategorId;
  selectedIndex: number;
  constructor(private _catgoryService: CategoryService, private router: Router, private activate: ActivatedRoute) { }
  ngOnInit() {
    this.selectedIndex = - 1;
    this._catgoryService.GetCategoriesList().subscribe(catdata => this.category_List = catdata,
      (error) => {
        this.statusMesssage = 'There is problem with service';
      }
    );

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
  Toggle(i: number) {
    this.selectedIndex = i;
  }

}
