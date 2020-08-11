import {Product} from "../model/product";

export class ProductUtils {
  static getPriceWithoutTaxString(product: Product): string {
    let price = 0;
    if (typeof product._toMany_ProductPrice !== "undefined" && product._toMany_ProductPrice.length > 0) {
      price = product._toMany_ProductPrice[0].priceWithoutTax;
    }
    if (price === null) {
      price = product._toMany_ProductPrice[0].price;
    }
    return (price ? price : 0) + " $"
  }

  static getPriceWithTaxString(product: Product): string {
    let price = 0;
    if (typeof product._toMany_ProductPrice !== "undefined" && product._toMany_ProductPrice.length > 0) {
      price = product._toMany_ProductPrice[0].priceWithTax;
    }
    if (price === null) {
      price = Math.round(product._toMany_ProductPrice[0].price * 1.2 * 100) / 100;
    }
    return (price ? price : 0) + " $"
  }

  static getCategoryInfo(product: Product): string {
    if (typeof product._toOne_PrimaryProductCategory !== "undefined") {
      return product._toOne_PrimaryProductCategory.categoryName
    }
    return "none"
  }
}
