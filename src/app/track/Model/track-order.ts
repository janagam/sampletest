import { ScanDetail } from '../../orderdetails/Model/order-details-vm';

export class TrackOrder {
    order_id: string;
    order_status: string;
    created_on: Date;
    unique_orderid: string;
    multiple_invoice: boolean;
    order_confirm: boolean;

    // added trackorder variable
    Shipping_ID: Number;
    ourierId: Number;
    // public string Order_ID { get; set; }
    AWD_NO: string;
    CourierUrl: string;
    TrackOrderUrl: string;
}


export class TrackingOrderDetials {
    ScanDetail: ScanDetail[];
    ShippingAddress: ShippingAddress;
}

export class ShippingAddress {
    title: string;
    address: string;
    address1: string;
    city: string;
    state: string;
    pincode: number;
}

