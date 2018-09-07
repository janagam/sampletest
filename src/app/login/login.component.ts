import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './Services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Login, User, UserCartData, UserDetail } from './Model/login.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarService } from '../navbar/Services/navbar.service';
import { Cartobject, WishlistObj } from '../gw-ltst-prdcts/Model/latestprodutmodel';
import { ResponseOptions } from '@angular/http';
import { AuthService, SocialUser } from 'angular4-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angular4-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  login: Login = {
    username: ' ',
    password: ' ',
  };
  userdata: UserCartData;
  cartdata: Cartobject[] = [];
  wishList_Data: WishlistObj[] = [];
  isLoginError = false;
  private user: User;
  private socialUser: SocialUser;
  private loggedIn: boolean;
  typeofUser: string;
  userdetail: UserDetail;
  constructor(private router: Router, private userservice: UserService, private _navbar: NavbarService,
    private authService: AuthService) { }
  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   if (user != null) {
    //     this.userservice.ExteranlLogin(this.socialUser, this.typeofUser).toPromise().then((respe) => {
    //       this.userdetail = respe;
    //       sessionStorage.setItem('customerdata', JSON.stringify(this.userdetail));
    //       sessionStorage.setItem('userToken', this.userdetail.access_token);  // getting access token

    //       if (respe !== null) {
    //         const user_id = respe.userId.toString();
    //         this._navbar.name = respe.firstname;
    //         this._navbar.change();
    //         this.userservice.GetUserCartData(respe.access_token, user_id).subscribe((resp) => {
    //           this.userdata = resp;
    //           sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
    //           sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
    //           this._navbar.change();
    //           this.router.navigate(['/Home']);
    //         });
    //       }
    //     });
    //   }
    // });
     // tslint:disable-next-line:no-debugger
     debugger;
     this.authService.authState.subscribe((user) => {
             // tslint:disable-next-line:no-debugger
             debugger;
             console.log(user);
       this.socialUser = user;
       if (user != null) {
         this.userservice.ExteranlLogin(this.socialUser, this.typeofUser).toPromise().then((respe) => {
           this.userdetail = respe;
           sessionStorage.setItem('customerdata', JSON.stringify(this.userdetail));
           sessionStorage.setItem('userToken', this.userdetail.access_token);  // getting access token
            // tslint:disable-next-line:no-debugger
            debugger;
            const userdata = JSON.parse(sessionStorage.getItem('customerdata'));
            const cartobj: any = JSON.parse(localStorage.getItem('cartobj'));
            const whishlistobj: any = JSON.parse(localStorage.getItem('wishlistobj'));
            if (cartobj != null || whishlistobj != null) {
         //  this.InsertingCartData(this.userdetail, this.userdetail.access_token, respe.userId.toString());
           // tslint:disable-next-line:no-debugger
           debugger;
      this.PushCartData(this.userdetail.access_token, respe.userId.toString());
            } else {
                // tslint:disable-next-line:no-debugger
            debugger;
                  const user_id = respe.userId.toString();
             this._navbar.name = respe.firstname;
             this._navbar.change();
             this.userservice.GetUserCartData(respe.access_token, user_id).subscribe((resp) => {
                 // tslint:disable-next-line:no-debugger
            debugger;
               this.userdata = resp;
               sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
               sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
               this._navbar.change();
               this.router.navigate(['/Home']);
             });
            }
           // if (respe !== null) {
           //   const user_id = respe.userId.toString();
           //   this._navbar.name = respe.firstname;
           //   this._navbar.change();
           //   this.userservice.GetUserCartData(respe.access_token, user_id).subscribe((resp) => {
           //     this.userdata = resp;
           //     sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
           //     sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
           //     this._navbar.change();
           //     this.router.navigate(['/Home']);
           //   });
           // }
         });
       }
     });

  }
  submitForm(form) {
    const login: Login = {
      username: form.value.username,
      password: form.value.password
    };

    this.userservice.UserAuthentication(login).subscribe(async (data: any) => {
      sessionStorage.setItem('userToken', data.access_token);
      if (data.access_token != null) {
        {
          let userId = '';
          const userdata = JSON.parse(sessionStorage.getItem('customerdata'));
          if (userdata === null) {
            const data1 = await this.userservice.UserDetails(login, data.access_token).toPromise().then((respdata: any) => {
              this.userdetail = respdata;
              userId = this.userdetail.userId.toString();
              this._navbar.name = respdata.firstname;
              this._navbar.change();
              sessionStorage.setItem('customerdata', JSON.stringify(this.userdetail));
            });
          }
          this._navbar.change();
          this.InsertingCartData(login, data.access_token, userId);
        }
      }
    }, (err: HttpErrorResponse) => {
      form.resetForm();
      this.isLoginError = true;
    });
  }
  signInWithGoogle(): void {
    this.typeofUser = 'google';
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signInWithFB(): void {
    this.typeofUser = 'facebook';
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.authService.signOut();

  }
  userdataDetails(token: string, userId: string) {
    this.userservice.GetUserCartData(token, userId).subscribe((respe) => {
      this.userdata = respe;
      alert(this.userdata.customerdata);
      sessionStorage.setItem('customerdata', JSON.stringify(this.userdata.customerdata));
      sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
      sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
      this._navbar.name = this.userdata.customerdata.firstname;
      this._navbar.change();
    });
  }



  async  getdatauser(login: Login, acces_token: string) {
    let userId = '';
    const userdata = JSON.parse(sessionStorage.getItem('customerdata'));
    if (userdata !== null) {
      const resp = await this.userservice.UserDetails(login, acces_token).subscribe((respdata: any) => {
        this.userdetail = respdata;
        userId = this.userdetail.userId.toString();
        sessionStorage.setItem('customerdata', JSON.stringify(this.userdetail));
        const data1 = this.userdataDetails(acces_token, userId);
      });
      return userId;
    } else {
      return 0;
    }
  }

  InsertingCartData(login, token: string, userId: string): void {
    const userdata = JSON.parse(sessionStorage.getItem('customerdata'));
    const cartobj: any = JSON.parse(localStorage.getItem('cartobj'));
    const whishlistobj: any = JSON.parse(localStorage.getItem('wishlistobj'));
    if (cartobj != null || whishlistobj != null) {
      this.cartdata = [];
      this.wishList_Data = [];
      if (cartobj != null) {
        for (let i = 0; i < cartobj.length; i++) {
          const item: Cartobject = JSON.parse(cartobj[i]);
          this.cartdata.push(item);
        }
      }
      if (whishlistobj != null) {
        this.wishList_Data = [];
        for (let i = 0; i < whishlistobj.length; i++) {
          const item: WishlistObj = JSON.parse(whishlistobj[i]);
          this.wishList_Data.push(item);
        }
      }
      this.userdata = {
        userCartList: this.cartdata,
        userWishlist: this.wishList_Data,
        customerdata: null
      };
      if (this.userdata.userCartList.length > 0 || this.userdata.userWishlist.length > 0) {
        this.userservice.UserCartData(this.userdata, token, userId).subscribe((resp: any) => {
          if (resp === '200') {
            this.userservice.GetUserCartData(token, userId).subscribe((respe) => {
              this.userdata = respe;
              sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
              sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
              this._navbar.name = this.userdata.customerdata.firstname;
              this._navbar.change();
            });
          }
        });
      }
      this.router.navigate(['/Home']);
    } else {
      if (userdata === null) {
        this.userservice.UserDetails(login, token).subscribe((respdata: any) => {
          console.log('here is user daa ' + respdata);
          this.userdetail = respdata;
          userId = this.userdetail.userId.toString();
          sessionStorage.setItem('customerdata', JSON.stringify(this.userdetail));
          const data1 = this.userdataDetails(token, userId);
        });
      } else {
        this.userservice.GetUserCartData(token, userId).subscribe((respe) => {
          this.userdata = respe;
          sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
          sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
          this._navbar.name = this.userdata.customerdata.firstname;
          this._navbar.change();
        });
      }
      this.router.navigate(['/Home']);
    }
  }
  PushCartData(token: string, userId: string) {
    const userdata = JSON.parse(sessionStorage.getItem('customerdata'));
    const cartobj: any = JSON.parse(localStorage.getItem('cartobj'));
    const whishlistobj: any = JSON.parse(localStorage.getItem('wishlistobj'));
    if (cartobj != null || whishlistobj != null) {
      this.cartdata = [];
      this.wishList_Data = [];
      if (cartobj != null) {
        for (let i = 0; i < cartobj.length; i++) {
          const item: Cartobject = JSON.parse(cartobj[i]);
          this.cartdata.push(item);
        }
      }
      if (whishlistobj != null) {
        this.wishList_Data = [];
        for (let i = 0; i < whishlistobj.length; i++) {
          const item: WishlistObj = JSON.parse(whishlistobj[i]);
          this.wishList_Data.push(item);
        }
      }
      this.userdata = {
        userCartList: this.cartdata,
        userWishlist: this.wishList_Data,
        customerdata: null
      };
      if (this.userdata.userCartList.length > 0 || this.userdata.userWishlist.length > 0) {
        this.userservice.UserCartData(this.userdata, token, userId).subscribe((resp: any) => {
            // tslint:disable-next-line:no-debugger
            debugger;
          if (resp === '200') {
            this.userservice.GetUserCartData(token, userId).subscribe((respe) => {
                // tslint:disable-next-line:no-debugger
           debugger;
              this.userdata = respe;
              sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
              sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
              this._navbar.name = this.userdata.customerdata.firstname;
              this._navbar.change();
            });
          }
        });
      }
      this.router.navigate(['/Home']);
    }
  }

}



