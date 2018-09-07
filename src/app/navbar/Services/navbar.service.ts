import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavbarService {
  isSidebarVisible = false;
  navbarVisibilityChange: Subject<boolean> = new Subject<boolean>();
  name: any;
  username: any;
  info: Info;
  constructor() {
    this.info = {
      isUserLoggedIn: this.GetAccessToken(),
      cartvalues: this.LoadCart(),
      whishlitvalue: this.Loadwishlist(),
      username: this.Profile()
    };
  }
  change() {
    this.name = this.Profile();
    this.username = this.username;
    this.info.isUserLoggedIn = this.GetAccessToken();
    this.info.cartvalues = this.LoadCart();
    this.info.whishlitvalue = this.Loadwishlist();
  }

  LoadCart(): number {
    const isvalid = this.GetAccessToken();
    if (localStorage.getItem('cartobj') != null && (isvalid === false)) {
      const count = (JSON.parse(localStorage.getItem('cartobj'))).length;
      return count;
    }

    if (sessionStorage.getItem('userCartITem') != null && isvalid === true && sessionStorage.getItem('userCartITem') !== 'null') {
      localStorage.clear();
      const userCartITem: any = JSON.parse(sessionStorage.getItem('userCartITem'));
      const count = userCartITem.length === undefined ? 0 : userCartITem.length;
      return count;
    } else {
      const count = 0;
      return count;
    }
  }
  Loadwishlist(): number {
    const isvalid = this.GetAccessToken();
    if (localStorage.getItem('wishlistobj') != null && (isvalid === false)) {
      const count = JSON.parse(localStorage.getItem('wishlistobj')).length === null ? 0 :
        JSON.parse(localStorage.getItem('wishlistobj')).length;
      return count;
    }
    if (sessionStorage.getItem('userWhishList') != null && isvalid === true && sessionStorage.getItem('userWhishList') !== 'null') {
      localStorage.clear();
      const userWhishList: any = JSON.parse(sessionStorage.getItem('userWhishList'));
      const count = userWhishList.length === undefined ? 0 : userWhishList.length;
      return count;
    } else {
      const count = 0;
      return count;
    }
  }
  GetAccessToken(): boolean {
    if (sessionStorage.getItem('userToken') != null) {
      const token = sessionStorage.getItem('userToken');
      return true;
    } else {
      return false;
    }
  }
  Profile(): string {
    const userdetails: any = JSON.parse(sessionStorage.getItem('customerdata'));
    if (userdetails != null) {
      const username = userdetails.firstname;
      return username;
    } else {
      return null;
    }
  }
}

export interface Info {
  // name: string;
  cartvalues: number;
  whishlitvalue: number;
  isUserLoggedIn: boolean;
  username: string;
}
