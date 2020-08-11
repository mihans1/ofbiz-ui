import {Service} from "./service";
import {Product} from "../model/product";
import {Model} from "../model/model";

export class ProductService extends Service<Product> {

  getAll(): Promise<Product[]> {
    return this.entityQuery<Product[]>("/entityquery/Product",
      (data) => Model.arrayFromJson(data as Object[], Product),
      {
        "fieldList": ["productId", "productName", "description", ""],
        "entityRelations": {
          "_toOne_PrimaryProductCategory": {
            "fieldList": ["categoryName"]
          },
          "_toMany_ProductPrice": {
            "fieldList": ["price", "priceWithTax", "priceWithoutTax"]
          },
          "_toMany_ProductCategoryMember": {
            "entityRelations": {
              "_toOne_ProductCategory": {
                "fieldList": ["categoryName", "productCategoryTypeId", "productCategoryId"]
              }
            }
          },
          "_toMany_ProductKeyword": {
            "fieldList": ["keyword"]
          }
        }
      }
    );
  }

  getSingle(id: string): Promise<Product[]> {
    return this.entityQuery<Product[]>("/entityquery/Product",
      (data) => Model.arrayFromJson(data as Object[], Product),
      {
        "inputFields":
          {
            "productId": id,
          },
        "fieldList": ["productId", "productName", "description", "longDescription"],
        "entityRelations": {
          "_toOne_PrimaryProductCategory": {
            "fieldList": ["categoryName"]
          },
          "_toMany_ProductPrice": {
            "fieldList": ["price", "priceWithTax", "priceWithoutTax", "productId", "fromDate"]
          },
          "_toMany_ProductCategoryMember": {
            "fieldList": ["productId", "productCategoryId"],
            "entityRelations": {
              "_toOne_ProductCategory": {
                "fieldList": ["categoryName", "productCategoryTypeId", "productCategoryId"]
              }
            }
          },
          "_toMany_ProductKeyword": {
            "fieldList": ["keyword"]
          },
          "_toOne_ProductType": {
            "fieldList": ["description", "productTypeId"]
          }
        }
      }
    );
  }

  createProduct(product: Product): Promise<Product> {
    return this.post("/services/createProduct",
      product,
      (data) => Model.fromJson(data as Object, Product)
    );
  }

  updateProduct(product: Product): Promise<Product> {
    return this.post("/services/updateProduct",
      product,
      (data) => Model.fromJson(data as Object, Product))
  }
}
