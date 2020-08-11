import {Model} from "./model";

export class ProductPrice extends Model {
  taxInPrice: string;
  termUomId?: any;
  priceWithTax?: number;
  createdStamp: Date;
  productStoreGroupId: string = "_NA_";
  taxAuthPartyId: string;
  lastModifiedByUserLogin: string;
  customPriceCalcService?: Date;
  price: number = 0;
  taxAuthGeoId: string;
  _ENTITY_NAME_ = "ProductPrice";
  productPricePurposeId: string = "COMPONENT_PRICE";
  createdByUserLogin: string;
  lastUpdatedStamp: Date;
  productId: string;
  lastModifiedDate: Date;
  createdTxStamp: Date;
  taxPercentage?: number;
  lastUpdatedTxStamp: Date;
  thruDate?: Date;
  fromDate: Date = new Date();
  currencyUomId: string = "USD";
  createdDate: Date;
  priceWithoutTax?: number;
  taxAmount?: number;
  productPriceTypeId: string = "DEFAULT_PRICE";
}
