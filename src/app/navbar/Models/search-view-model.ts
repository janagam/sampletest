export class SearchViewModel {
    BRAND: string;
    FORM: string;
    COMPANY: string;
    PRICE: number;
    PACKING: number;
    STRENGTH: string;
    CONTENT: string;
    TYPE: string;
    ID: string;
    AvailableQty: number;
    ItemType: string;
    Composition: string;
    PICTURE: string;
    SIZE: string;
    COLOR: string;
    RetailPrice: number;
    Discount: number;
    TotalPrice: number;
}

export class Searchitem {
    Compostion: Compostion[];
    Generics: Generics[];
    Productlist: Productlist[];
}

export class Compostion {
    // title: string;
    searchViewModel: SearchViewModel;
}
export class Generics {

    searchViewModel: SearchViewModel;
}
export class Productlist {
    searchViewModel: SearchViewModel;
}






