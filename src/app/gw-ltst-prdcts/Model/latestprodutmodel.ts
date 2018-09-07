
export interface IRootObject {
    productCategoryVm: ProductCategoryVm[];
    // sliders: Slider[];
    // categories: Category[];
    drugVm: Drugs[];
}

export interface ProductCategoryVm {
    id: number;
    name: string;
    picture: string;
    icon_image: string;
    productsVm: ProductsVm[];
    productImageCount: number;
}
export interface ProductsVm {
    id: number;
    name: string;
    itemType: number;
    quantityPerUnit: number;
    unitPrice: number;
    Msrp: number;
    picture: string;
    ranking?: any;
    isVerified: number;
    isPrdAttr: boolean;
    attrId: number;
    quantity: number;
    catId: number;
}
export interface WishListVm {
    id: string;
    ItemName: string;
    ItemType: number;
    Price: number;
    DiscountInPercent: number;
    TotalPrice: number;
    TotalDiscount: number;
    OriginalPrice: number;
    quantity: number;
    AttrId: number;
}
export interface CartVm {
    id: string;
    ItemName: string;
    ItemType: number;
    Price: number;
    DiscountInPercent: number;
    TotalPrice: number;
    TotalDiscount: number;
    OriginalPrice: number;
    quantity: number;
    AttrId: number;
    catId: number;
}

export interface Slider {
    homepage_sliders_id: number;
    image_name: string;
    slider_order: number;
    isactive: boolean;
    from_date: Date;
    end_date: Date;
}

export interface Drugs {
    ItemName: string;
    PurchaseUnitModel: string;
    Manufacturer: string;
    Composition: string;
    MRP: number;
    SellingPrice: number;
    QuantityPerUnit: number;
    Discount: number;
    ItemCode: number;
    ItemType: number;
    ImageName: string;
    OldSPrice: number;
    MfgCode: string;
}

export interface Category {
    id: number;
    name: string;
    icon_img: string;
    subCategoryVm: SubCategoryVm[];
}
export interface SubCategoryVm {
    id: number;
    name: string;
}
export class Cartobject {
    id: string;
    ItemName: string;
    ItemType: number;
    Price: number;
    DiscountInPercent: number;
    TotalPrice: number;
    TotalDiscount: number;
    OriginalPrice: number;
    quantity: number;
    AttrId: number;
    Acutalcarttotal: number;
    cartdiscounttotal: number;
    Maincart_total: number;
    catId: number;
}

export class WishlistObj {

    id: string;
    ItemName: string;
    ItemType: number;
    Price: number;
    DiscountInPercent: number;
    TotalPrice: number;
    TotalDiscount: number;
    OriginalPrice: number;
    quantity: number;
    AttrId: number;
    Acutalwishlisttotal: number;
    wishlistdiscounttotal: number;
    mainwishlist_total: number;
    catId: number;

}



