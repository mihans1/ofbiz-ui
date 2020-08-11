import {Model} from "./model";

export class ProductCategoryType  extends Model {
  astUpdatedStamp: any;
  productCategoryTypeId: string;
  parentTypeId?: any;
  hasTable: string;
  createdTxStamp: any;
  createdStamp: any;
  description: string;
  lastUpdatedTxStamp: any;
}
