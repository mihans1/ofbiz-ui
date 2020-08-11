import {Model} from "../model/model";
import {Service} from "./service";
import {ProductCategoryType} from "../model/product-category-type";

export class ProductCategoryTypeService extends Service<ProductCategoryType>{

  getAll(): Promise<ProductCategoryType[]> {
    return this.get<ProductCategoryType[]>("/entities/ProductCategoryType",
      (data) => Model.arrayFromJson(data as Object[], ProductCategoryType));
  }
}
