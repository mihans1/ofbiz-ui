import {Service} from "./service";
import {Model} from "../model/model";
import {ProductCategoryMember} from "../model/product-category-member";

export class ProductCategoryMemberService extends Service<ProductCategoryMember> {
  addProductToCategory(category: ProductCategoryMember): Promise<any> {
    return this.post("/services/addProductToCategory",
      category,
      (data) => Model.fromJson(data as Object, ProductCategoryMember))
  }

  removeProductFromCategory(category: ProductCategoryMember): Promise<any> {
    return this.post("/services/removeProductFromCategory",
      category,
      (data) => Model.fromJson(data as Object, ProductCategoryMember))
  }
}
