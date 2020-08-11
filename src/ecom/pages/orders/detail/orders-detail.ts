import {inject} from 'aurelia-framework'
import {OrderContact} from "../../../model/order-contact";
import {OrderContactService} from "../../../service/order-contact-service";
import {OrderReportView} from "../../../model/order-report-view";
import {OrderReportViewService} from "../../../service/order-report-view-service";
import {OrderButton} from "../../../model/order-button";
import {OrderHeaderService} from "../../../service/order-header-service";
import {OrderHeader} from "../../../model/order-header";

@inject(OrderContactService, OrderReportViewService, OrderHeaderService)
export class OrdersDetail {

  orderButton: OrderButton
  orderContacts: OrderContact [] = []
  orderReportViews: OrderReportView [] = []
  orderHeader: OrderHeader [] = []

  constructor(private orderContactService: OrderContactService, private orderReportViewService: OrderReportViewService
    , private orderHeaderService: OrderHeaderService) {
  }

  activate(params) {
    this.loadOrderContacts(params.id)
    this.loadOrderReportView(params.id)
    this.loadOrderHeader(params.id)
    this.orderButton = new OrderButton()
  }

  completeButtonStatus() {
    var element = <HTMLInputElement>document.getElementById("completeButton");
    if (this.orderReportViews[0].orderStatus == "Approved") {
      element.disabled = false;
    } else {
      element.disabled = true;
    }
  }

  loadOrderStatus() {
    if (this.orderReportViews[0].orderStatus == "Created" ) {
      this.orderButton.orderStatus = "Kinnita"
    } else {
      this.orderButton.orderStatus = "Võta tagasi"
    }
    this.completeButtonStatus()
  }

  completeAllStatus() {
    this.orderButton.orderStatus = "Võta tagasi"
    this.orderHeader[0].statusId = "ORDER_COMPLETED"
    this.completeButtonStatus()
    this.updateHeader()
  }

  changeOrderStatus() {
    if (this.orderReportViews[0].orderStatus == "Created"
      || this.orderReportViews[0].orderStatus == "Completed") {
      this.orderHeader[0].statusId = "ORDER_APPROVED"
      this.orderButton.orderStatus = "Võta tagasi"
    } else if (this.orderReportViews[0].orderStatus == "Approved") {
      this.orderHeader[0].statusId = "ORDER_CREATED"
      this.orderButton.orderStatus = "Kinnita"
      this.completeButtonStatus()
    }
    this.updateHeader()
  }

  loadOrderContacts(id) {
    this.orderContactService.getSingle(id)
      .then((orderContact) => this.orderContacts = orderContact)
      .then(() => console.log(this.orderContacts))
  }

  loadOrderReportView(id) {
    this.orderReportViewService.getSingle(id)
      .then((orderReportViews) => this.orderReportViews = orderReportViews)
      .then(() => console.log(this.orderReportViews))
      .then(() => this.loadOrderStatus());
  }

  loadOrderHeader(id) {
    this.orderHeaderService.getSingle(id)
      .then((orderHeader) => this.orderHeader = orderHeader)
      .then(() => console.log(this.orderHeader))
  }

  updateHeader() {
    this.orderHeaderService.updateOrderHeader(this.orderHeader[0])
      .then((orderHeader) => console.log(orderHeader))
      .then(() => this.loadOrderReportView(this.orderHeader[0].orderId));
  }
}
