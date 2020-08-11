import {ProductCategory} from "../model/product-category";
import {Model} from "../model/model";
import {Service} from "./service";

export class ProductCategoryService extends Service<ProductCategory>{

  getAll(): Promise<ProductCategory[]> {
    return this.entityQuery<ProductCategory[]>("/entityquery/ProductCategory",
      (data) => Model.arrayFromJson(data as Object[], ProductCategory),
      {
        "fieldList": ["productCategoryId", "longDescription", "description", "productCategoryTypeId", "categoryName"],
        "entityRelations": {
          "_toOne_PrimaryParentProductCategory": {
            "fieldList": ["productCategoryId", "categoryName"]
          },
          "_toOne_ProductCategoryType": {
            "fieldList": ["productCategoryTypeId", "description"]
          }
        }
      });
  }

  getSingle(id: string): Promise<ProductCategory[]> {
    return this.get<ProductCategory[]>("/entities/ProductCategory",
      (data) => Model.arrayFromJson(data as Object[], ProductCategory),
      {productCategoryId: id, _depth: 1}
    );
  }

  createProductCategory(category: ProductCategory): Promise<ProductCategory> {
    return this.post("/services/createProductCategory",
      category,
      (data) => Model.fromJson(data as Object, ProductCategory)
    );
  }

  updateProductCategory(category: ProductCategory): Promise<ProductCategory> {
    return this.post("/services/updateProductCategory",
      category,
      (data) => Model.fromJson(data as Object, ProductCategory))
  }
}
