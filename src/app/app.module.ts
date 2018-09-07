import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Injectable} from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GnrcServicesComponent } from './gnrc-services/gnrc-services.component';
import { GwLtstPrdctsComponent } from './gw-ltst-prdcts/gw-ltst-prdcts.component';
import { GwPplrPrdctsComponent } from './gw-pplr-prdcts/gw-pplr-prdcts.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CartComponent } from './cart/cart.component';
import { CategoryService} from './sidebar/Services/categoires.service';
import { componentFactoryName } from '@angular/compiler';
import { GwPrdctDscrptnComponent } from './gw-prdct-dscrptn/gw-prdct-dscrptn.component';
import { GwCheckoutComponent } from './gw-checkout/gw-checkout.component';
import { GwWishlistComponent } from './gw-wishlist/gw-wishlist.component';
import { GwAddPrescriptionComponent } from './gw-add-prescription/gw-add-prescription.component';
import { GwSrchComponent } from './gw-srch/gw-srch.component';
import { CartService } from './Common/cart/cart.service';
import { ProductDetailsService } from './gw-prdct-dscrptn/Services/product-details.service';
import {NavbarService} from './navbar/Services/navbar.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from './HttpInterceptors/request.interceptor.service';
import { UserService } from './login/Services/user.service';
import {SignUpService} from './signup/Services/sign-up.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { AskExpertComponent } from './ask-expert/ask-expert.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GnrcDrugLnksComponent } from './gnrc-drug-lnks/gnrc-drug-lnks.component';
import { GnrcDrugsIndiaComponent } from './gnrc-drugs-india/gnrc-drugs-india.component';
import { HstryOfGnrcDrugsComponent } from './hstry-of-gnrc-drugs/hstry-of-gnrc-drugs.component';
import { LstOfMdcnsComponent } from './lst-of-mdcns/lst-of-mdcns.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { WhyGnrcMdcnComponent } from './why-gnrc-mdcn/why-gnrc-mdcn.component';
import { SubcategoryListComponent } from './subcategory-list/subcategory-list.component';
import { SubcategoryProudctService } from './subcategory-list/Service/subcategory-proudct.service';
import {CartaddressService} from './gw-checkout/Services/cartaddress.service';
import {PrescriptionService} from './gw-checkout/Services/prescription.service';
import { OrderService } from './gw-checkout/Services/order.service';
import { RazorpayComponent } from './razorpay/razorpay.component';
import { WindowRef } from './razorpay/service/window';
import { PaymentDetailService } from './razorpay/service/payment-detail.service';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { SearchdetailsService } from './navbar/Services/searchdetails.service';
import { CompostionsearchComponent } from './compostionsearch/compostionsearch.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AccountComponent } from './account/account.component';
import { AccountService } from './account/service/account.service';
import { TrackComponent } from './track/track.component';
import {TrackorderService} from './track/Services/trackorder.service';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrderdetailsService } from './orderdetails/Service/orderdetails.service';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { WholesaleComponent } from './wholesale/wholesale.component';
import { DlofDayComponent } from './dlof-day/dlof-day.component';
import { AllGenericMedsComponent } from './all-generic-meds/all-generic-meds.component';
import {AllgenericmedicinesService} from './all-generic-meds/services/allgenericmedicines.service';
import {DolfdayService} from './dlof-day/services/dolfday.service';
// import { LstOfMdcnsComponent } from './al';
 import { NgxCarouselModule } from 'ngx-carousel';
 import 'hammerjs';
 import {TooltipModule} from 'ngx-tooltip';
import { PagerServiceService } from './pageservice/pager-service.service';
import { PopularBrandsComponent } from './popular-brands/popular-brands.component';
import { PayTmComponent } from './pay-tm/pay-tm.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import { ChatComponent } from './chat/chat.component';
import { ChatserviceService } from './chat/chatservice/chatservice.service';









const social_config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('829332795153-igvu3h2pb7ksk0njnp8cbre06kboi9m6.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('186606445390076')
  }
]);

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent},
  // { path: 'home', children [
  //   { path: '' component:  }
  // ]},
    //   children: [
    //   { path: '', redirectTo: '', pathMatch: 'full' },
    //   { path: 'sidebar', component: SidebarComponent },
    //   { path: 'navbar', component: NavbarComponent },
    // ] },
  { path: 'Login/Login', component: LoginComponent },
  { path: 'Signup/Signup', component: SignupComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'Cart/Cart', component: CartComponent },
  { path: 'WishList/WishList', component:  GwWishlistComponent},
  { path: 'ItemDetails/:productname', component: GwPrdctDscrptnComponent },
  { path: 'Checkout', component: GwCheckoutComponent},
  { path: 'gw-add-prescription', component: GwAddPrescriptionComponent},
  {path : 'Product/:category/:subcategory', component: SubcategoryListComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'faqs', component: FaqsComponent},
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'return-policy', component: ReturnPolicyComponent},
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'why-gnrc-mdcn', component: WhyGnrcMdcnComponent },
  { path: 'hstry-of-gnrc-drugs', component: HstryOfGnrcDrugsComponent },
  { path: 'gnrc-drugs-india', component: GnrcDrugsIndiaComponent },
  { path: 'ask-expert', component: AskExpertComponent },
  { path: 'lst-of-mdcns', component: LstOfMdcnsComponent },
  { path: 'gnrc-drug-lnks', component: GnrcDrugLnksComponent },
  {path : 'Product/:category', component: SubcategoryListComponent},
  {path : 'razorPay', component: RazorpayComponent},
  {path: 'Success', component: SuccessComponent},
  {path: 'Failure', component: FailureComponent},
  {path: 'Search/:productname', component: CompostionsearchComponent},
  {path: 'Address/Addresses', component: AddressesComponent},
  {path: 'Account/update', component: AccountComponent},
  {path: 'Track/TrackOrders', component: TrackComponent},
  {path: 'Track/OrderDetails/:order_id', component: OrderdetailsComponent},
  {path: 'Home/DlofDay', component: DlofDayComponent},
  {path: 'Home/AllGenericMed', component: AllGenericMedsComponent},
  {path: 'PayTm', component: PayTmComponent},


  // {path : 'subcategory-list', component: SubcategoryListComponent}
 // { path: '', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    GnrcServicesComponent,
    GwLtstPrdctsComponent,
    GwPplrPrdctsComponent,
    FooterComponent,
    BannerComponent,
    CartComponent,
    GwPrdctDscrptnComponent,
    GwCheckoutComponent,
    GwWishlistComponent,
    GwAddPrescriptionComponent,
    GwSrchComponent,
    AboutUsComponent,
    AskExpertComponent,
    ContactUsComponent,
    FaqsComponent,
    GnrcDrugLnksComponent,
    GnrcDrugsIndiaComponent,
    HstryOfGnrcDrugsComponent,
    LstOfMdcnsComponent,
    PrivacyPolicyComponent,
    ReturnPolicyComponent,
    TermsAndConditionsComponent,
    WhyGnrcMdcnComponent,
    SubcategoryListComponent,
    RazorpayComponent,
    SuccessComponent,
    FailureComponent,
    CompostionsearchComponent,
    AddressesComponent,
    AccountComponent,
    TrackComponent,
    OrderdetailsComponent,
    ShopHeaderComponent,
    WholesaleComponent,
    DlofDayComponent,
    AllGenericMedsComponent,
    PopularBrandsComponent,
    PayTmComponent,
    ChatComponent


    // imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],


  ],
  imports: [
    BrowserModule,
   RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    SocialLoginModule.initialize(social_config),
    SimpleNotificationsModule.forRoot(),
    ReactiveFormsModule, NgxCarouselModule, TooltipModule
  ],
  providers: [CategoryService, CartService, ProductDetailsService, NavbarService, UserService, SignUpService,
     SubcategoryProudctService, CartaddressService, PrescriptionService, OrderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    }, WindowRef, PaymentDetailService, SearchdetailsService, AccountService, TrackorderService , OrderdetailsService,
    AllgenericmedicinesService, DolfdayService, PagerServiceService, ChatserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
