import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework'
import {OrderReportViewService} from '../../../service/order-report-view-service'
import {OrderReportView} from '../../../model/order-report-view'
import {TimeUtils} from "../../../util/time-utils";

@inject (Router, OrderReportViewService)
export class Orders{

  date: string;
  dateDict: Map<String, String> = new Map<String, String>()
  orderReportViews: OrderReportView [] = []
  filteredOrderReportViews: OrderReportView [] = []
  nameFilter: string = '';
  orderDate = null

  constructor(private router: Router, private orderReportViewService: OrderReportViewService) {
    this.loadOrderReportView()
  }



  loadOrderReportView() {
    this.orderReportViewService.getAll()
      .then((orderReportViews) => this.orderReportViews = orderReportViews)
      .then((orderReportViews) => this.filteredOrderReportViews = orderReportViews)
      .then(() => this.covertTime());
  }

  newView(){
    this.router.navigateToRoute('new')
}

  detailView(orderReportView: OrderReportView){
    //this.router.navigateToRoute('detail', {id:0})
    this.router.navigateToRoute('detail', {id: orderReportView.orderId})
  }

  onSearchFilterChanged() {
    this.filteredOrderReportViews = this.orderReportViews.filter((p) => {
      return p.orderId.toLowerCase().startsWith(this.nameFilter.toLowerCase())
    });
  }

  covertTime(){
    var i;
    for (i in this.orderReportViews) {
      this.date = TimeUtils.convertDate(this.orderReportViews[i].orderDate)
      this.dateDict[this.orderReportViews[i].orderId.toString()] = this.date
    }
  }
}
