import {Service} from "./service";
import {Model} from "../model/model";
import {ProductPrice} from "../model/product-price";

export class ProductPriceService extends Service<ProductPrice> {

  createProductPrice(productPrice: ProductPrice): Promise<ProductPrice> {
    return this.post("/services/createProductPrice",
      productPrice,
      (data) => Model.fromJson(data as Object, ProductPrice));
  }

  updateProductPrice(productPrice: ProductPrice): Promise<ProductPrice> {
    return this.post("/services/updateProductPrice",
      productPrice,
      (data) => Model.fromJson(data as Object, ProductPrice));
  }
}
