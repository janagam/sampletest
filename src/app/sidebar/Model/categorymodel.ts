export interface ICategory {
    id: number;
    name: string;
    icon_img: string;
  subCategoryVm: SubCategoryVm[];
  }
  export interface SubCategoryVm {
    id: number;
    name: string;
    ProductsSubCategory: ProductsSubCategory[];
    }
export class ProductsSubCategory {
  ItemCode: string;
  Name: string;
  Id: number;
itemType: string;
  Products: MenuProducts[];
}
export class MenuProducts {
  Name: string;
  itemType: string;
  Id: number;
}
