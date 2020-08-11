import {Model} from "./model";
import {ProductCategory} from "./product-category";
import {Product} from "./product";

export class ProductCategoryMember extends Model {
  lastUpdatedStamp: any;
  comments: string;
  quantity?: any;
  _toOne_ProductCategory: ProductCategory;
  productId: string;
  sequenceNum?: number;
  createdTxStamp: Date;
  createdStamp: Date;
  lastUpdatedTxStamp: any;
  thruDate?: Date;
  fromDate: Date = new Date();
  productCategoryId: string;
  _toOne_Product: Product;
}
