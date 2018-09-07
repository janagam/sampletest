import { UserCartData } from '../../login/Model/login.model';

export interface ICartAddress {
    ListAddressVm: AddressVm[];
    hasDefaultAddress: boolean;
    shippingCharge: ShippingCharge;
    isPrescriptionRequired: boolean;
    activePromos: ActivePromos;
}

export interface AddressVm {
    AddressId: number;
    title: string;
    address1: string;
    address2: string;
    country: string;
    stateId: string;
    stateName: string;
    CityId: string;
    city: string;
    zipcode: string;
    Mobile: string;
    longitude: number;
    latitude: number;
    isDefault: boolean;
    createdOn: string;
    modifiedOn: string;
    countriesList: Country[];
    statesList: State[];
    citiesList: StateCities[];
}
export interface Country {
    country_id: number;
    country_name: string;
    Logo: string;
}
export interface State {
    state_id: number;
    country_id: number;
    state1: string;
}
export interface StateCities {
    city_id: number;
    state_id: number;
    city: string;
}
export interface ShippingCharge {
    shippingCharges: number;
    localshippingCharges: number;
    othershippingCharges: number;
    codCharges: number;
    vat: number;
    vatAmount: number;
    gst: number;
    gstAmount: number;
    serviceTax: number;
    serviceTaxAmount: number;
    isExistingUser: boolean;
    isIGST: boolean;
    CashbackAmount: number;
}
export interface ActivePromos {
    activePromosVM: PromosVM[];
    CatIds: string[];
}
class PromosVM {
    promo_Id: number;
    promo_Code: string;
    promo_Tags: string;
    promo_Description: string;
    selected_Categories: string;
}

export interface FinalaOrderVM {
    hdnPromoCode: string;
    hdnPrmoAmount: number;
    hdnshippingCharges: number;
    hdnOnlinePayment: string;
    hdnCodCharges: number;
    hdnSubPaymentType: string;
    subtotal: number;
    UserCartData: UserCartData;
    shippingCharge: AddressVm;
}
export interface PaymentVM {
    amount: string;
    firstName: string;
    email: string;
    phoneNo: string;
    productinfo: string;
    orderid: string;
    patymrouteUrl: string;

    merchantKey: string;
    MID: string;
    Channel_id: string;
    Website: string;
    Industry_type_id: string;
    mailbody: string;
    cust_id: number;
    checksum: string;
    outputhtml: string;

}

export interface RazorPayVM {
    amount: string;
    firstName: string;
    email: string;
    phoneNo: string;
    productinfo: string;
    orderId: string;
    currency: string;
    receipt: string;
    key: string;
    secret: string;
    mailbody: string;
}


