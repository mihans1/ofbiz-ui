import {Product} from "./product";

export class OrderRow {
  rowId: number;
  itemAmount: number;
  purchaseProduct: Product;
  tax: string;
  valueWithTax: number;
  taxValue: number;
}
