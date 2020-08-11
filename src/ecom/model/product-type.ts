import {Model} from "./model";

export class ProductType extends Model {
  lastUpdatedStamp: Date;
  isPhysical: string;
  parentTypeId: string;
  isDigital: string;
  hasTable: string;
  createdTxStamp: Date;
  createdStamp: Date;
  description: string;
  lastUpdatedTxStamp: Date;
  productTypeId: string;
}
