import { Component, OnInit, DebugNode } from '@angular/core';
import { Cartobject, WishlistObj } from '../gw-ltst-prdcts/Model/latestprodutmodel';
import { UserCartData } from '../login/Model/login.model';
import { UserService } from '../login/Services/user.service';
import { NavbarService } from '../navbar/Services/navbar.service';
import { CartaddressService } from './Services/cartaddress.service';
import { ICartAddress, State, StateCities, AddressVm, ShippingCharge, ActivePromos, FinalaOrderVM, RazorPayVM } from './Models/address';
import { NgForm, FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { UserMedicine, TabletName } from './Models/prescription';
import { PrescriptionService } from './Services/prescription.service';
// import { ReactiveFormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Router } from '@angular/router';
import { parse } from 'querystring';
import { OrderService } from './Services/order.service';
import { PaymentVM } from './Models/address';
import { StaticInjector } from '@angular/core/src/di/injector';

import CryptoJS from 'crypto-js';
import { WindowRef } from '../razorpay/service/window';


@Component({
  selector: 'app-gw-checkout',
  templateUrl: './gw-checkout.component.html',
  styleUrls: ['./gw-checkout.component.css']
})
export class GwCheckoutComponent implements OnInit {
  TabletNameList: TabletName[] = [];
  defaultAddress: AddressVm;

  tablelist: TabletName;
  fileupload: FormData;
  message: string;
  PromoValue: string;


  shipCost: number;
  paymentType = 'ONLINE';
  show_PaymentDiv = true;
  codeCharge: number;
  subPaymentType = 'RAZORPAY';
  subtotal: number;
  isPrescriptionRequired: boolean;
  uploadPrescription: boolean;
  uploadPrescriptionMessage: string;
  confirmchecked = false;
  activePromos: ActivePromos;
  PromoChecked: boolean;
  promoMessage: string;
  promoDiscount = 0;
  paytmVM: PaymentVM;
  razorVM: RazorPayVM;
  FileName: string;

  Total: number;
  cart_TotalAmount = 0;
  cart_DiscountAmunt = 0;
  cart_ActualAmount = 0;
  cartList: Cartobject[] = [];
  userdata: UserCartData;
  usercartdata: Cartobject[] = [];
  userwhishlistdata: WishlistObj[] = [];
  IsHidden = true;
  isAlertboxshow = true;
  titleAlert: string;
  EditAddAddress: boolean;
  UserAddress: ICartAddress;
  statesList: State;
  citiesList: StateCities[] = [];
  onlinePayment = true;


  addressvm: AddressVm = {
    AddressId: 0,
    title: '',
    address1: '',
    address2: '',
    country: '',
    stateId: '',
    stateName: '',
    city: '',
    CityId: '',
    zipcode: '',
    Mobile: '',
    longitude: 0,
    latitude: 0,
    isDefault: false,
    createdOn: Date.UTC.toString(),
    modifiedOn: Date.UTC.toString(),
    countriesList: [],
    statesList: null,
    citiesList: null,
  };
  userPrescriptionForm: FormGroup;
  public buttonName: any = 'Add Address';
  user_AccesToken = sessionStorage.getItem('userToken');
  tabs = [];
  selectedtabIndex = 0;
  selectedtabvalues = 'ShippingAddress';
  IsshippingAddressAvailable: boolean;


  constructor(private userService: UserService, private _navbar: NavbarService,
    private cartAddressService: CartaddressService, private _prescriptionService: PrescriptionService,
    private _orderService: OrderService,
    private http: Http, private router: Router, private _window: WindowRef,
    private _navabar: NavbarService) {
      // dynamically adding tab
       this.tabs = ['ShippingAddress' , 'Prescription' , 'OrderSummary' , 'PaymentOptions' ];

    //   this.tabs = [ {
    //     'tabId': 1,
    //     'item': 'ShippingAddress',
    //     'link': ['/ShippingAddress']
    //   },
    //   {
    //     'tabId': 2,
    //     'item': 'Prescription',
    //     'link': ['/Prescription']
    //   },
    //   {
    //     'tabId': 3,
    //     'item': 'OrderSummary',
    //     'link': ['/OrderSummary']
    //   },
    //   {
    //     'tabId': 4,
    //     'item': 'PaymentOptions',
    //     'link': ['/PaymentOptions']
    //   }
    // ];

  }

  ngOnInit() {
    const user_AccesToken = sessionStorage.getItem('userToken');
    if (user_AccesToken != null) {
      this.PostCartData();
      this.LoadCartItem();
      this.CartAddress();
      this.promoDiscount = 0;
      this.userPrescriptionForm = new FormGroup({
        Name: new FormControl('', [Validators.required]),
        Email: new FormControl('', [Validators.required]),
        PhoneNumber: new FormControl('', [Validators.required]),
        DoctorName: new FormControl('', [Validators.required]),
        tabletName: new FormArray([]),
        Upload: new FormControl(''),
      });
      this.titleAlert = 'this field is required';
      this.confirmchecked = false;
    } else {
      this.router.navigate(['/Login/Login']);
    }
  }
  LoadCartItem(): Cartobject {
    const cartobj: any = JSON.parse(sessionStorage.getItem('userCartITem'));
    for (let i = 0; i < cartobj.length; i++) {
      const item: Cartobject = cartobj[i];
      this.cart_ActualAmount += (item.Price * item.quantity);
      this.cart_DiscountAmunt += (item.Price - item.OriginalPrice);
      this.cart_TotalAmount += (item.OriginalPrice * item.quantity);
      this.cartList.push(item);
    }
    this.subtotal = this.cart_TotalAmount;
    return cartobj;
  }
  PostCartData() {
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
      this.userService.UserCartData(this.userdata, user_AccesToken, userId).toPromise().then((resp: any) => {
        if (resp === '200') {
          this.userService.GetUserCartData(user_AccesToken, userId).subscribe((respe) => {
            this.userdata = respe;
            sessionStorage.setItem('userCartITem', JSON.stringify(this.userdata.userCartList));
            sessionStorage.setItem('userWhishList', JSON.stringify(this.userdata.userWishlist));
            this._navbar.name = this.userdata.customerdata.firstname;
            this._navbar.change();
          });
        }
      });
      //  }
    }

  }
  CartAddress(): void {

    const user_AccesToken = sessionStorage.getItem('userToken');
    const userId = + JSON.parse(sessionStorage.getItem('customerdata')).userId;
    this.cartItems();

    this.cartAddressService.GetCartAdderss(user_AccesToken, userId, this.subtotal, this.cartItems()).toPromise().then(
      (resp: any) => {
        // tslint:disable-next-line:no-debugger
        debugger;
        this.UserAddress = resp;
        console.log(this.UserAddress);
        this.UserAddress.shippingCharge = resp.ShippingCharge;
        this.activePromos = resp.ActivePromos;
        this.PromoChecked = false;
        if (this.UserAddress.ListAddressVm.length > 0) {
          this.IsshippingAddressAvailable = true;
          this.IsHidden = true;
          for (let i = 0; i < this.UserAddress.ListAddressVm.length; i++) {
            if (this.UserAddress.ListAddressVm[i].isDefault === true) {
              this.defaultAddress = this.UserAddress.ListAddressVm[i];
              this.CalculateShippingCharge(this.UserAddress.shippingCharge, this.defaultAddress, this.paymentType);
              this.isPrescriptionRequired = this.UserAddress.isPrescriptionRequired;
            }
          }

        } else {
          this.IsHidden = false;
          this.EditAddAddress = false;
          this.IsshippingAddressAvailable = false;
        }
      }, (error) => {
        alert('Session Expired');
        this.router.navigate(['/login']);
      });
  }
  AddAddress(): boolean {
    this.IsHidden = false;
    return this.IsHidden;
  }

  toggle(operation: string): void {
    this.IsHidden = !this.IsHidden;
    if (this.IsHidden) {
      this.buttonName = 'Add Address';
    } else {
      if (operation === 'edit') {
        this.EditAddAddress = true;
        this.addressvm = this.addressvm;
        this.buttonName = 'Add Address';
      } else {
        this.addressvm = this.RestInputFields();
        this.EditAddAddress = false;
      }
    }
  }
  onCountryChange(countryId: string): void {
    if (countryId === '0') {
      this.statesList = null;
      this.citiesList = null;
    } else {
      this.cartAddressService.GetStates(this.user_AccesToken, countryId).subscribe(res => {
        this.statesList = res;
      });

    }
  }
  onstateChange(stateId: string): void {
    if (stateId === '0') {
      this.citiesList = null;
    } else {
      this.cartAddressService.GetCities(this.user_AccesToken, stateId).subscribe(res => {
        this.citiesList = res;
      });
    }
  }
  onstateChange1(stateId: string): void {
    if (stateId === '0') {
      this.citiesList = null;
    } else {
      this.cartAddressService.GetCities(this.user_AccesToken, stateId).subscribe(res => {
        this.addressvm.citiesList = res;

      });
    }
  }
  submitForm(form: NgForm): void {
    if (this.addressvm.AddressId !== null && this.addressvm.AddressId !== 0) {
      this.cartAddressService.UpdateAddress(this.addressvm, this.user_AccesToken).subscribe((resp: any) => {
        if (resp === '204') {
          this.CartAddress();
          this.RestInputFields();
        }
      });
    } else {
      this.cartAddressService.AddAddress(this.addressvm, this.user_AccesToken).subscribe((resp: any) => {
        if (resp === '200') {
          this.CartAddress();
        }
      });
    }

  }
  EditAddress(addressId: string): void {
    const addId = + addressId;
    this.cartAddressService.EditAddress(addId, this.user_AccesToken).subscribe((resp: any) => {
      this.addressvm = resp;
      this.toggle('edit');
    });
  }
  DeleteAddress(addressId: string, isDefault: boolean): void {
    const addId = + addressId;
    if (isDefault === false) {
      this.cartAddressService.DeleteAddress(addId, this.user_AccesToken).subscribe((resp: any) => {
        if (resp === '204') {
          this.CartAddress();
        }
      });
    } else {
      alert('you can`t delete the default');
    }
  }
  updateCheckedOptions(option, event): void {
    const chk_Id = + event.target.value;
    this.cartAddressService.MakeDefaultAddress(chk_Id, this.user_AccesToken).subscribe((resp: any) => {
      if (resp === '201') {
        this.CartAddress();
      }
    });

  }
  // upload prescription data

  addFieldValue() {
    (<FormArray>this.userPrescriptionForm.get('tabletName')).push(new FormControl(''));
  }
  Delete(index: number) {
    (<FormArray>this.userPrescriptionForm.get('tabletName')).removeAt(index);
  }
  submit(form: any, event): void {
    const user_AccesToken = sessionStorage.getItem('userToken');
    this.TabletNameList = [];
    if (form.tabletName.length > 0) {
      for (let i = 0; i < form.tabletName.length; i++) {

        const tablelist: TabletName = {
          tbtName: form.tabletName[i]
        };
        this.TabletNameList.push(tablelist);
      }
    }
    const prescription_list: UserMedicine = {
      UserID: null,
      UserName: form.Name,
      tabletName: this.TabletNameList,
      Email: form.Email,
      PhoneNumber: form.PhoneNumber,
      DoctorName: form.DoctorName
    };
    if (this.fileupload === undefined) {

      this._prescriptionService.AddPrescription(prescription_list).subscribe((resp: any) => {
        if (resp === '200') {
          this.userPrescriptionForm.reset();
          this.message = 'Uploaded successfully';
          this.uploadPrescription = false;
          this.isPrescriptionRequired = false;
          this.confirmchecked = false;
          setTimeout(function () {
            this.message = '';
          }.bind(this), 3000);
        }
      });
    } else {
      this._prescriptionService.UploadPrescription(form.Name, form.DoctorName, this.fileupload).subscribe((resp: any) => {
        if (resp === '200') {
          this.userPrescriptionForm.reset();
          this.message = 'Uploaded successfully';
          this.uploadPrescription = false;
          this.isPrescriptionRequired = false;
          this.confirmchecked = false;

          setTimeout(function () {
            this.message = '';
          }.bind(this), 3000);
        }
      });
    }
  }
  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      this.FileName = file.name;
      formData.append('UploadedImage', file, file.name);
      this.fileupload = formData;
    }
  }
  RestInputFields(): AddressVm {
    const addressvm: AddressVm = {
      AddressId: 0,
      title: '',
      address1: '',
      address2: '',
      country: '',
      stateId: '',
      stateName: '',
      city: '',
      CityId: '',
      zipcode: '',
      Mobile: '',
      longitude: 0,
      latitude: 0,
      isDefault: false,
      createdOn: Date.UTC.toString(),
      modifiedOn: Date.UTC.toString(),
      countriesList: [],
      statesList: null,
      citiesList: null,
    };
    return addressvm;
  }
  Cancel(): void {
    this.router.navigate(['/Checkout']);
  }
  GoCart(): void {
    this.router.navigate(['/Cart/Cart']);
  }

  CalculateShippingCharge(shippingCharge: ShippingCharge, address: AddressVm, Type: string) {
    this.Total = 0;
    if (this.onlinePayment === true && Type === 'ONLINE') {
      if (address.stateName === 'Hyderabad' || address.city === 'Secunderabad' ||
        address.CityId === '4460' || address.CityId === '4496') {
        if (this.subtotal < 300) {
          this.shipCost = shippingCharge.localshippingCharges;
          this.Total = this.subtotal;
        } else {
          this.shipCost = 0;
          this.Total = this.subtotal;
        }
      } else {
        this.Total = this.subtotal;
        this.shipCost = shippingCharge.othershippingCharges;
        if (this.subtotal > 3000) {
          this.Total = this.subtotal;
        }
      }
      this.codeCharge = 0;
      this.Total = this.Total + this.shipCost - this.promoDiscount;
    } else {
      if (address.city === 'Hyderabad' || address.city === 'Secunderabad' ||
        address.CityId === '4460' || address.CityId === '4496') {
        if (this.subtotal < 300) {
          this.Total = this.subtotal + shippingCharge.codCharges;
          this.shipCost = shippingCharge.localshippingCharges;
        } else {
          this.shipCost = 0;
          this.Total = this.subtotal;
        }

      } else {
        if (address.stateName === 'Telangana') {
          if (this.subtotal < 300) {
            this.shipCost = shippingCharge.othershippingCharges;
            this.codeCharge = shippingCharge.codCharges;
            this.Total = this.subtotal + this.codeCharge;
          } else {
            this.shipCost = shippingCharge.othershippingCharges;
            this.codeCharge = 0;
            this.Total = this.subtotal + this.codeCharge;
          }
        } else {
          this.codeCharge = shippingCharge.codCharges;
          this.Total = this.subtotal + this.codeCharge;
          this.shipCost = shippingCharge.othershippingCharges;
        }
      }
      this.Total = this.Total + this.shipCost;
    }
  }
  PaymentType(event) {
    if (event.target.value === 'ONLINE') {
      this.show_PaymentDiv = true;
      this.paymentType = 'ONLINE';
      this.subPaymentType = 'RAZORPAY';
      this.onlinePayment = true;
      this.CalculateShippingCharge(this.UserAddress.shippingCharge, this.defaultAddress, this.paymentType);
      this.PromoChecked = false;
    } else {
      this.show_PaymentDiv = false;
      this.paymentType = 'COD';
      this.subPaymentType = 'COD';
      this.onlinePayment = false;
      this.promoDiscount = 0;
      this.CalculateShippingCharge(this.UserAddress.shippingCharge, this.defaultAddress, this.paymentType);
      this.PromoValue = '';
      this.PromoChecked = false;
      this.confirmchecked = false;
    }

  }
  SubPaymentType(event) {
    if (event.target.value === 'RAZORPAY') {
      this.subPaymentType = event.target.value;
      this.PromoChecked = false;
      this.confirmchecked = false;
    } else {
      this.subPaymentType = event.target.value;
      this.PromoChecked = false;
      this.confirmchecked = false;
    }

  }
  ConfirmCheckedOptions(isPrescriptionRequired, event) {
    // tslint:disable-next-line:no-debugger
    debugger;
    if (this.UserAddress.ListAddressVm.length === 0) {
 this.IsshippingAddressAvailable = false;
      this.uploadPrescription = false;
      this.confirmchecked = true;
      this.isAlertboxshow = true;
      this.uploadPrescriptionMessage = 'Add Shipping Address';
      setTimeout(function () {
        this.confirmchecked = false;
        this.isAlertboxshow = false;
        this.uploadPrescriptionMessage = '';
      }.bind(this), 3000);
    } else {
    if (isPrescriptionRequired === true) {
      this.uploadPrescription = false;
      this.confirmchecked = true;
      this.isAlertboxshow = true;
      this.uploadPrescriptionMessage = 'Please Upload Prescription';
      setTimeout(function () {
        this.confirmchecked = false;
        this.isAlertboxshow = false;
        this.uploadPrescriptionMessage = '';
      }.bind(this), 3000);
    } else {
      this.IsshippingAddressAvailable = true;
      this.confirmchecked = true;
      this.uploadPrescription = true;
      this.isPrescriptionRequired = false;
    }
  }
  }
  //  promo code functionality
  ApplyPromo(paymentType: string, promoCode: string): void {

    console.log(this.PromoValue);
    if (this.paymentType === 'ONLINE') {
      this._orderService.ApplyPromoCode(this.cartItems(), this.PromoValue).subscribe((resp: any) => {
        if (resp > 0) {
          this.promoDiscount = resp;
          this.promoMessage = 'Applied successfully';
          this.PromoValue = promoCode;
          setTimeout(function () {
            this.promoMessage = '';
           // this.PromoChecked = true;
          }.bind(this), 3000);
        } else {
          this.promoMessage = 'Only applicable for surgical Items Only';
          this.PromoValue = ' ';
          setTimeout(function () {
            this.promoMessage = '';
            this.PromoChecked = false;
          }.bind(this), 3000);
          this.promoDiscount = resp;
          this.CalculateShippingCharge(this.UserAddress.shippingCharge, this.defaultAddress, this.paymentType);
        }
      });
    } else {
      this.promoMessage = 'You cant Apply promo for cash on delivery';
      this.PromoValue = ' ';
      setTimeout(function () {
        this.promoMessage = '';
      }.bind(this), 3000);
    }
  }
  ApplyPromoCode(PaymentType: string, event, promoCode: string) {
    if (this.paymentType === 'ONLINE') {
      this.PromoValue = promoCode;
      this.ApplyPromo(this.paymentType, promoCode);
    } else {
      this.promoMessage = 'You cant Apply promo for cash on delivery';
      setTimeout(function () {
        this.PromoChecked = false;
      }.bind(this), 0);
      setTimeout(function () {
        this.promoMessage = '';
      }.bind(this), 3000);
    }
  }
  OrderConfirm(shipCost: number, codeCharge: number, paymentType: string, promoDiscount: number, subPaymentType: string,
    PromoValue: string): void {
    const finalOrder: FinalaOrderVM = {
      hdnCodCharges: codeCharge,
      hdnshippingCharges: shipCost,
      hdnOnlinePayment: paymentType,
      hdnSubPaymentType: subPaymentType,
      hdnPrmoAmount: promoDiscount,
      hdnPromoCode: PromoValue,
      subtotal: this.subtotal,
      UserCartData: this.cartItems(),
      shippingCharge: this.defaultAddress
    };
    this._orderService.OrderConfrim(finalOrder).subscribe((resp: any) => {
      if (resp !== '204' && this.subPaymentType !== 'RAZORPAY' && this.subPaymentType !== 'COD') {
        const parameters = new Map<string, string>();
        this.paytmVM = resp;
        parameters.set('MID', this.paytmVM.MID);
        parameters.set('CHANNEL_ID', this.paytmVM.Channel_id);
        parameters.set('INDUSTRY_TYPE_ID', this.paytmVM.Industry_type_id);
        parameters.set('WEBSITE', this.paytmVM.Website);
        parameters.set('EMAIL', this.paytmVM.email);
        parameters.set('MOBILE_NO', this.paytmVM.phoneNo);
        parameters.set('ORDER_ID', this.paytmVM.orderid);
        parameters.set('TXN_AMOUNT', this.paytmVM.amount);
        parameters.set('CALLBACK_URL', 'http://localhost:4200/gw-checkout');
        parameters.set('patymrouteUrl', this.paytmVM.patymrouteUrl);
        // parameters.set('outputhtml', this.paytmVM.outputhtml);
        //  this._window.setPayTmData(this.paytmVM);
        //  this.router.navigate(['/PayTm']);
        // tslint:disable-next-line:no-debugger
      //  window.location.href = 'ttps://secure.paytm.in/oltp-web/processTransaction?orderid=' + this.paytmVM.orderid;
      } else if (resp !== '204' && this.subPaymentType === 'RAZORPAY') {
        this.razorVM = resp;
        const parameters = new Map<string, string>();
        parameters.set('amount', this.razorVM.amount.toString()); // this amount should be same as transaction amount
        parameters.set('currency', this.razorVM.currency);
        parameters.set('receipt', this.razorVM.receipt);
        parameters.set('secret', this.razorVM.secret);
        parameters.set('phoneNo', this.razorVM.phoneNo);
        parameters.set('key', this.razorVM.key);
        parameters.set('mailbody', this.razorVM.mailbody);
        parameters.set('productinfo', this.razorVM.productinfo);
        this._window.setData(this.razorVM);
        this.router.navigate(['/razorPay']);
      } else {
        const retrieveArray = JSON.parse(sessionStorage.getItem('userCartITem'));
        for (let i = 0; i < retrieveArray.length; i++) {
          retrieveArray.slice(i);
        }
        sessionStorage.removeItem('userCartITem');
        this._navabar.change();
        this._navabar.change();
        this._window.setOrderId(resp.orderid);
        this.router.navigate(['/Success']);
      }
    });
  }


  cartItems(): UserCartData {
    const user_AccesToken = sessionStorage.getItem('userToken');
    const userId = + JSON.parse(sessionStorage.getItem('customerdata')).userId;
    const userCartITem: any = JSON.parse(sessionStorage.getItem('userCartITem'));
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
    this.userdata = {
      userCartList: this.usercartdata,
      userWishlist: null,
      customerdata: null
    };

    return this.userdata;
  }
  setTab(index) {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.selectedtabIndex = index;
  }
//   next() {
//     // tslint:disable-next-line:no-debugger
//     debugger;
//     if (this.selectedTab < this.tabs.length) {
//       this.selectedTab++;
//       this.router.navigate(this.tabs[this.selectedTab].link);
//     }
//   }

//   back() {
//     if (this.selectedTab > 0) {
//       this.selectedTab--;
//       this.router.navigate(this.tabs[this.selectedTab].link);
//     }
// }
  Next(selected: number) {
    this.selectedtabIndex = selected;
  }
  Prev(selected: number) {
    this.selectedtabIndex = selected;
  }
}
