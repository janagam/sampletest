import { Component, OnInit } from '@angular/core';
import { CartaddressService } from '../gw-checkout/Services/cartaddress.service';
import { ICartAddress, AddressVm, State, StateCities } from '../gw-checkout/Models/address';
import { NgForm, FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';


@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  UserAddress: ICartAddress;
  defaultAddress: AddressVm;
  public buttonName: any = 'Add Address';
  IsHidden = true;
  EditAddAddress: boolean;
  user_AccesToken = sessionStorage.getItem('userToken');
  statesList: State;
  citiesList: StateCities[] = [];
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

  constructor(private cartAddressService: CartaddressService) { }

  ngOnInit() {
    this.CartAddress();
  }
  CartAddress(): void {
    const user_AccesToken = sessionStorage.getItem('userToken');
    const userId = + JSON.parse(sessionStorage.getItem('customerdata')).userId;

    this.cartAddressService.GetAddressList(user_AccesToken, userId, 0, null).toPromise().then((resp: any) => {
      this.UserAddress = resp;
      this.UserAddress.shippingCharge = resp.ShippingCharge;
      if (this.UserAddress.ListAddressVm.length > 0) {
        this.IsHidden = true;
        for (let i = 0; i < this.UserAddress.ListAddressVm.length; i++) {
          if (this.UserAddress.ListAddressVm[i].isDefault === true) {
            this.defaultAddress = this.UserAddress.ListAddressVm[i];
          }
        }

      }
    });
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
      alert('you cant delete the default');
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

}
