export class OrderDetailsVm {
    Track_Order: TrackOrder[];
    TrackOrderItems: TrackOrderItems[];
    TrackShippingAddress: TrackShippingAddress;
    TrackShippingDetails: TrackShippingDetails;
    Unique_OrderId: string;
    itemsInformation: ItemsInfo[];
}
export class TrackShippingAddress {
    Title: string;
    Address1: string;
    Address2: string;
    Country: string;
    State: string;
    City: string;
    Zip: number;
    longitute: number;
    latitude: number;
}
export class TrackShippingDetails {
    Shipping_ID: number;
    CourierId: number;
    Order_ID: string;
    AWD_NO: string;
    CourierUrl: string;
    TrackOrderUrl: string;
}
export class TrackOrderItems {
    OrderId: string;
    ItemCode: number;
    AttrId: number;
    ItemName: string;
    Quantity: number;
    mrp: number;
    discount: number;
    itemType: number;
    discount_amount: number;
    subtotal: number;
}
export class TrackOrder {
    Order_id: string;
    Order_status: string;
    store_id: number;
    Created_On: Date;
    Shipping_Address_Id: number;
    Coupon_Code: string;
    Subtotal: number;
    Promo_Discount: number;
    Shipping_Cost: number;
    Total: number;
    Customer_Id: number;
    Unique_Id: string;
}

export class ItemsInfo {
    ItemCode: number;
    ItemType: number;
    Quantity: number;
}

export class PakckingOrder {
    shipmentData: ShipmentData[];
}

export class ShipmentData {
    shipment: Shipment;
}

export class Shipment {
    origin: string;
    status: Status;
    pickUpDate: Date;
    chargedWeight: string;
    orderType: string;
    destination: string;
    consignee: Consignee;
    referenceNo: string;
    returnedDate: string;
    destRecieveDate: string;
    originRecieveDate: string;
    outDestinationDate: string;
    CODAmount: number;
    firstAttemptDate: string;
    reverseInTransit: string;
    scans: Scans[];
    senderName: string;
    AWB: string;
    dispatchCount: number;
    InvoiceAmount: number;


}

export class Scans {
    scanDetail: ScanDetail;
}

export class ScanDetail {
    scanDateTime: string;
    SscanType: string;
    scan: string;
    statusDateTime: string;
    scannedLocation: string;
    instructions: string;
    statusCode: string;
}


export class Status {
    status: string;
    statusLocation: string;
    statusDateTime: string;
    recievedBy: string;
    instructions: string;
    statusType: string;
    statusCode: string;
}
export class Consignee {
    City: string;
    Name: string;
    Country: string;
    address2: string[];
    Address3: string;
    PinCode: number;
    State: string;
    Telephone2: string;
    Telephone1: string[];
    address1: string[];
}

