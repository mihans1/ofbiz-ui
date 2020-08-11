import {inject} from 'aurelia-framework'
import {Product} from "../../../model/product";
import {PartyService} from "../../../service/party-service";
import {Party} from "../../../model/party";
import {OrderRow} from "../../../model/order-row";
import {ProductService} from "../../../service/product-service";

@inject(ProductService, PartyService)
export class NewOrder {

  products: Product[] = [];
  parties: Party[] = [];
  rows = [new OrderRow()];

  constructor(private productService: ProductService, private partyService: PartyService) {
    this.initData()
  }

  pickerOptions = {
    actionsBox: true,
    dropupAuto: true,
    liveSearch: true
  };

  partyMappings = {
    option: 'partyId',
    id: 'partyId'
  };

  productMappings = {
    option: 'productId',
    id: 'productId'
  };


  attached() {
    this.initData();
  }

  initData() {
    this.productService.getAll()
      .then(result => this.products = result);
    this.partyService.getAll()
      .then(result => this.parties = result);
  }

  addRow(){
    this.rows.push(new OrderRow())
  }

  removeRow(event) {
    this.rows.splice(event.target.id, 1);
  }

  processTaxValue(event) {
    let row = this.rows[event.target.id];
    if (row.tax == undefined) {
      row.tax = "20%";
    }
    if (row.itemAmount == undefined) {
      row.itemAmount = 1;
    }
    let rowTax = row.tax;
    rowTax = rowTax.substring(0, rowTax.length - 1);
    let tax = +rowTax;
    row.taxValue = ( +row.purchaseProduct.priceDetailText * +row.itemAmount) * 0.01 * tax;
    row.taxValue = +row.taxValue.toFixed(2);
    row.valueWithTax = (+row.purchaseProduct.priceDetailText * +row.itemAmount) + +row.taxValue;
    row.valueWithTax = +row.valueWithTax.toFixed(2);
    if (isNaN(row.valueWithTax)) {
      row.valueWithTax = 0
    }
    if (isNaN(row.taxValue)) {
      row.taxValue = 0
    }
  }
}
