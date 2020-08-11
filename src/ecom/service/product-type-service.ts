import {Service} from "./service";
import {ProductType} from "../model/product-type";
import {Model} from "../model/model";

export class ProductTypeService extends Service<ProductType>{
  getAll(): Promise<ProductType[]> {
    return this.get<ProductType[]>("/entities/Product",
      (data) => Model.arrayFromJson(data as Object[], ProductType));
  }
}
