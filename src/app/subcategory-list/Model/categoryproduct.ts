
export class CategoryproductVM {
    code: string;
    name: string;
    description: string;
    unitPrice: number;
    msrp: number;
    picture: string;
    ranking: number;
    totalReviews: number;
    ProductImages: ProductImages[];
    SubCategoryDrugs: SubCategoryDrugsList;
    Products: Products[];
    Compositions: string[];
    SeletedItem: string;
    Drugs: Drugs[];
    categoryName: string;
    subCategoryName: string;
    icon_image: string;
}
class ProductImages {
    picture: string;
}
class SubCategoryDrugsList {
    subCategoryDrugsList: SubCategoryDrugs[];
}
class Drugs {
    ItemName: string;
    PurchaseUnitModel: string;
    Manufacturer: string;
    Composition: string;
    MRP: number;
    SellingPrice: number;
    QuantityPerUnit: number;
    Discount: number;
    ItemCode: string;
    ItemType: number;
    ImageName: string;
    OldSPrice: number;
    MfgCode: string;
}
class SubCategoryDrugs {
    subCatId: number;
    subCatName: string;
    Drugs: Drugs[];
}

export interface  Products {
    Id: number;
    prdattrid: number;
    ItemCode: string;
    Name: string;
    Description: string;
    UnitPrice: number;
    Picture: string;
    Ranking: number;
    model: string;
    ItemType: number;
    DiscountAmount: number;
    SellingPrice: number;
    vendorProductId: number;
    VendorName: string;
    categoryId: number;
    MSRP: number;
    size: string;
    color: string;
    quantityPerUint: number;
    TotalDiscount: number;
    DiscountPercent: number;
}



