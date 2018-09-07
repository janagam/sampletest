import { Productdetials } from '../../gw-prdct-dscrptn/Model/productdetials';

export class Categoryproduct {
    code: string;
    name: string;
    description: string;
    unitPrice: number;
    msrp: number;
    picture: string;
    ranking: number;
    totalReviews: number;
    ProductImages: ProductImages;
    SubCategoryDrugs: SubCategoryDrugsList;
    Products: Productdetials;
    Compositions: string;
    SeletedItem: string;
    Drugs: Drugs;
    categoryName: string;
    subCategoryName: string;
    icon_image: string;
}
class ProductImages {
    picture: string;
}
class SubCategoryDrugsList {
    subCategoryDrugsList: SubCategoryDrugs;
}
 export class Drugs {
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
    categoryid: string;
}
class SubCategoryDrugs {
    subCatId: number;
    subCatName: string;
    Drugs: Drugs;
}


class CatProductsVM {
    productId: number;
    productName: string;
    mrp: number;
    sellingPrice: number;
    discountPercentage: number;
    discountAmount: number;
    manifactureName: string;
    picture: string;
    itemType: number;
    prdAttrId: number;
    isPrdAttrId: boolean;
}

