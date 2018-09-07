import { Component, OnInit, Input } from '@angular/core';
import { CategoryService, ParacategorId } from '../sidebar/Services/categoires.service';
import { ICategory, SubCategoryVm } from '../sidebar/Model/categorymodel';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarService, Info } from './Services/navbar.service';
import { Cartobject, WishlistObj, ProductsVm } from '../gw-ltst-prdcts/Model/latestprodutmodel';
import { UserService } from '../login/Services/user.service';
import { UserCartData } from '../login/Model/login.model';
import { SocialUser, AuthService } from 'angular4-social-login';
import { CookieXSRFStrategy } from '@angular/http';
import { SearchdetailsService } from './Services/searchdetails.service';
import { SearchViewModel, Searchitem, Compostion, Generics, Productlist } from './Models/search-view-model';
import { ProductDetailsService, ProductId } from '../gw-prdct-dscrptn/Services/product-details.service';
import { CartService } from '../Common/cart/cart.service';
import {NotificationsService} from 'angular2-notifications';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() count: number;
  @Input() whishlist_count: number;
  status: boolean;
  asideVisible: boolean;
  info: Info;
  usercartdata: Cartobject[] = [];
  userwhishlistdata: WishlistObj[] = [];
  userdata: UserCartData;
  socialUser: SocialUser;
  searchViewModel: SearchViewModel[] = [];
  searchterm: string;
  searchitem: Searchitem;
  Composition: Compostion[] = [];
  Generics: Generics[] = [];
  productlist: Productlist[] = [];
  produtDetial: ProductId;
  str: string;
  showdiv: boolean;
  productVm: ProductsVm;
  singleAlphabetsearch: boolean;
  selectedItem: string;
  noresult: boolean;
  Message: string;
  Alphabets = [];
  category_List: ICategory[];
  message: string;
  subcategory: SubCategoryVm;
  category: ICategory;
  category_id: string;
  selected: boolean;
  applyClass: string;
  textdanger: boolean;

  ParacategorId: ParacategorId;
  mouseOver: boolean;
  catName: string;
  mouseleave: boolean;
  selectedindex: number;

  constructor(private _router: Router, private _navbar: NavbarService, private userService: UserService,
    private authService: AuthService, private _searchTerm: SearchdetailsService,
    private _productService: ProductDetailsService,
    private cartService: CartService,
   private notifications: NotificationsService,
    private _catgoryService: CategoryService,
    private router: Router) {
    this.asideVisible = this._navbar.isSidebarVisible;
    this.info = _navbar.info;
    this._navbar.name = this.info.username;
    this.Alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.noresult = false;
    this.textdanger = false;
    this.selectedindex = -1;
  }

  ngOnInit() {
    this.showdiv = false;
    const user_AccesToken = localStorage.getItem('userToken');
    if (user_AccesToken !== null) {
      this.status = true;
      this._navbar.change();
      this._navbar.name = this._navbar.name;
      this._router.navigate(['/Home']);
    } else {
      this.asideVisible = false;
      this.status = false;
      this._router.navigate(['/Home']);
    }

  }
  Logout(): void {
    const localstorage_Cartobj = localStorage.getItem('cartobj');
    const localstorage_WishlitObj = localStorage.getItem('cartobj');
    const user_AccesToken = sessionStorage.getItem('userToken');
    if (user_AccesToken != null) {
      const userId = JSON.parse(sessionStorage.getItem('customerdata')).userId;
      const userCartITem: any = JSON.parse(sessionStorage.getItem('userCartITem'));
      const userWhishList: any = JSON.parse(sessionStorage.getItem('userWhishList'));
      this.userdata = {
        userCartList: [],
        userWishlist: [],
        customerdata: null
      };
      this.usercartdata = [];
      this.userwhishlistdata = [];
      if (userCartITem !== null) {
        for (let i = 0; i < userCartITem.length; i++) {
          const item: Cartobject = userCartITem[i];
          this.usercartdata.push(item);
        }
      } else {
        this.usercartdata = [];
      }
      if (userWhishList !== null) {
        for (let i = 0; i < userWhishList.length; i++) {
          const item: WishlistObj = userWhishList[i];
          this.userwhishlistdata.push(item);
        }
      } else {
        this.userwhishlistdata = [];
      }
      this.userdata = {
        userCartList: this.usercartdata,
        userWishlist: this.userwhishlistdata,
        customerdata: null
      };
      this.userService.UserCartData(this.userdata, user_AccesToken, userId).subscribe((resp: any) => {
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

this.authService.signOut().then(() => {
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
  }
  DisplaySrchBox(): void {
    this.showdiv = true;
    this.singleAlphabetsearch = false;
    const term = this.str;
    if (term.length > 2) {
      this._searchTerm.SearchTermProduct(term)
        .subscribe(
          (data) => {
            this.searchViewModel = data;
            this.searchterm = term;
            this.Composition = [];
            this.Generics = [];
            this.productlist = [];
            for (let i = 0; i < this.searchViewModel.length; i++) {
              if (this.searchViewModel[i].TYPE === 'Compositions') {
                const compostionObj: Compostion = {
                  searchViewModel: this.searchViewModel[i]
                };
                this.Composition.push(compostionObj);
              }
              if (this.searchViewModel[i].TYPE === 'Generics') {
                const genericsObj: Generics = {
                  searchViewModel: this.searchViewModel[i]
                };
                this.Generics.push(genericsObj);
              }
              if (this.searchViewModel[i].TYPE === 'Products') {
                const productsObj: Productlist = {
                  searchViewModel: this.searchViewModel[i]
                };
                this.productlist.push(productsObj);
              }
            }
            this.searchitem = {
              Generics: this.Generics,
              Productlist: this.productlist,
              Compostion: this.Composition
            };
          });
    } else {
      this.searchterm = term;
    }
  }
  AlphabeticalSearch(value: string): void {
    this.showdiv = true;
    this.selectedItem = value;
    const term = value;
    this.searchterm = term;
    this.str = term;
    this._searchTerm.AlphabeticalSearch(term)
      .subscribe(
        (data) => {
          this.searchViewModel = data;
          this.searchterm = term;
          this.Composition = [];
          this.Generics = [];
          this.productlist = [];
          for (let i = 0; i < this.searchViewModel.length; i++) {
            if (this.searchViewModel[i].TYPE === 'Compositions') {
              const compostionObj: Compostion = {
                searchViewModel: this.searchViewModel[i]
              };
              this.Composition.push(compostionObj);
            }
            if (this.searchViewModel[i].TYPE === 'Generics') {
              const genericsObj: Generics = {
                searchViewModel: this.searchViewModel[i]
              };
              this.Generics.push(genericsObj);
            }
            if (this.searchViewModel[i].TYPE === 'Products') {
              const productsObj: Productlist = {
                searchViewModel: this.searchViewModel[i]
              };
              this.productlist.push(productsObj);
            }
          }
          this.searchitem = {
            Generics: this.Generics,
            Productlist: this.productlist,
            Compostion: this.Composition
          };
        });
  }
  search($event) {
    this.showdiv = true;
    this.noresult = false;
    const term = this.str;
    this.str = term;
    if (term.length > 2) {
      this._searchTerm.SearchTermProduct(term)
        .subscribe(
          (data) => {
            this.searchViewModel = data;
            if (this.searchViewModel.length === 0) {
            this.notifications.warn(
              'warning',
              'No item is found',
              {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 50,
              }
            );
            }
            this.searchterm = term;
            this.Composition = [];
            this.Generics = [];
            this.productlist = [];
            for (let i = 0; i < this.searchViewModel.length; i++) {
              if (this.searchViewModel[i].TYPE === 'Compositions') {
                const compostionObj: Compostion = {
                  searchViewModel: this.searchViewModel[i]
                };
                this.Composition.push(compostionObj);
              }
              if (this.searchViewModel[i].TYPE === 'Generics') {
                const genericsObj: Generics = {
                  searchViewModel: this.searchViewModel[i]
                };
                this.Generics.push(genericsObj);
              }
              if (this.searchViewModel[i].TYPE === 'Products') {
                const productsObj: Productlist = {
                  searchViewModel: this.searchViewModel[i]
                };
                this.productlist.push(productsObj);
              }
            }
            this.searchitem = {
              Generics: this.Generics,
              Productlist: this.productlist,
              Compostion: this.Composition
            };
          });
      setTimeout(function () {
        this.noresult = false;
        this.textdanger = false;
      }.bind(this), 3000);
    } else {
      this.searchterm = term;
    }
  }

  ProductDetails(model: SearchViewModel): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.showdiv = false;
    const model1 = new SearchViewModel();
    for (const key in model) {
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
      let productName = model1.BRAND.replace(/\s/g, '-');
      productName = productName.substr(0, productName.length - 1);

      this._productService.setData(this.produtDetial);
      this.router.navigate(['/ItemDetails', productName]);
    } else {
      let productName = model1.Composition.replace(/\s/g, '-');
      productName = productName.substr(0, productName.length - 1);
      this._productService.SetCompostionSearch(productName);
      this.router.navigate(['/Search', productName]);
    }
  }

  AddtoCart(model: SearchViewModel) {
    // tslint:disable-next-line:no-debugger
    debugger;
    const type = 'cartItem';
    const model1 = new SearchViewModel();
    for (const key in model) {
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
    const ProductVm: ProductsVm = {
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
    this._navbar.change();
  }
  onCloseClick(): void {
    this.showdiv = false;
  }
  OpenMenu(): void {
    this._catgoryService.GetCategoriesList().subscribe(catdata => {
      this.category_List = catdata;
    },
    );
  }

  mouseEnter(itemName: string, cat: SubCategoryVm, id: string, i: number): void {
    this.catName = '';
    this.mouseOver = true;
    this.selected = true;
    this.subcategory = cat;
    this.category_id = id;
    this.catName = itemName;
    this.selectedindex = i;

  }

  mousemove(itemName: string, cat: SubCategoryVm, id: string): void {
    this.catName = '';
    this.mouseOver = true;
    this.selected = true;
    this.subcategory = cat;
    this.category_id = id;
    this.catName = itemName;
  }
  ShowDivBody(): void {
    this.showdiv = true;
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
}




