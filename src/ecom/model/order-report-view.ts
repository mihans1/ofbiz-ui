import {Model} from "./model";

export class OrderReportView extends Model{
  unitPrice: number;
  quantity: number;
  productId: string;
  orderId: string;
  grandTotal: number;
  orderTypeId: string;
  orderStatus: string;
  originFacilityId?: any;
  groupName: string;
  visitId: string;
  currencyUom: string;
  itemStatus: string;
  paymentMethod: string;
  itemDescription: string;
  orderDate: number;
  webSiteId: string;
}
