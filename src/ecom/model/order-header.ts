import {Model} from "./model";

export class OrderHeader extends Model {
  invoicePerShipment: string;
  salesChannelEnumId: string;
  orderId: string;
  createdStamp: any;
  orderTypeId: string;
  billingAccountId?: any;
  terminalId?: any;
  isViewed?: any;
  visitId: string;
  agreementId?: any;
  productStoreId: string;
  remainingSubTotal: number;
  orderName: string;
  webSiteId: string;
  isRushOrder?: any;
  lastUpdatedStamp: any;
  entryDate: any;
  grandTotal: number;
  createdTxStamp: any;
  autoOrderShoppingListId?: any;
  externalId?: any;
  lastUpdatedTxStamp: any;
  priority: string;
  transactionId?: any;
  firstAttemptOrderId?: any;
  originFacilityId?: any;
  statusId: string;
  createdBy: string;
  currencyUom: string;
  syncStatusId?: any;
  pickSheetPrintedDate?: any;
  needsInventoryIssuance?: any;
  orderDate: any;
  internalCode?: any;
}
