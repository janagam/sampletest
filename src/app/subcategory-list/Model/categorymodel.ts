export interface ICategory {
    id: number;
    name: string;
    icon_img: string;
  subCategoryVm: SubCategoryVm[];
  }
  export interface SubCategoryVm {
    id: number;
    name: string;
    }
