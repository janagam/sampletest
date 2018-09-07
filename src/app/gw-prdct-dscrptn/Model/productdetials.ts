// import { StaticInjector } from "@angular/core/src/di/injector";

export interface Productdetials {
    ItemDetail: ItemDetails;
    drug_specifications: DrugSpecification;
    productInformation: ProductInformation;

    SelectColor: string;
    SelectSize: string;
}
export interface ItemDetails {
    Code: string;
    Type: number;
    Name: string;
    Price: number;
    ompanyBrand: string;
    MfgCode: string;
    Quantity: number;
    ranking: number;
    totalReviews: number;
    DiscountInPercent: number;
    TotalPrice: number;
    TotalDiscount: number;
    retailerPrice: number;
    itemsPerPiece: number;
    isActive: boolean;
    productReviewList: ProductReview[];
    Form: string;
    Packing: number;
    Image: string;
    category: number;
    color: string;
    size: string;
    prdattrid: number;
    acutalPrice: number;
}
class DrugSpecification {
    ItemCode: string;
    Generic_name: string;
    Description: string;
    Categories: string;
    Composition: string;
    Chemical_Formula: string;
    Indication: string;
    Pharmacodynamics: string;
    Mechanism: string;
    Absorption: string;
    Volume_Distribution: string;
    Metabolism: string;
    Route_Elimination: string;
    Half_Life: string;
    Toxicity: string;
    Food_Interactions: string;
    SideEffects: string;
    Alternate_Med: string;
    Symptoms: string;
    Verified: boolean;
}

class ProductInformation {
    productName: string;
    productDescription: string;
    productInfo: string;
    OtherInformation: string;
    Composition: string;
    model: string;
    size: string;
    color: string;
    prdAttrId: number;
    sizeList: string[];
    colorList: string[];
    imagePaths: string[];
}

class ProductReview {
    id: number;
    product_id: number;
    userid: number;
    title: string;
    review: string;
    rating: number;
    name: string;
    datecreated: Date;
    isactive: boolean;
}



