import {Service} from "./service";
import {OrderReportView} from "../model/order-report-view";
import {Model} from "../model/model";

export class OrderReportViewService extends Service<OrderReportView> {
  getAll(): Promise<OrderReportView[]> {
    return this.get<OrderReportView[]>("/entities/OrderReportView",
      (data) => Model.arrayFromJson(data as Object[], OrderReportView),
      {_depth: 1}
    );
  }

  getSingle(id: string): Promise<OrderReportView[]> {
    return this.get<OrderReportView[]>("/entities/OrderReportView",
      (data) => Model.arrayFromJson(data as Object[], OrderReportView),
      {orderId: id, _depth: 1}
    );
  }

  // createOrderReportViewService(orderReportView: OrderReportView): Promise<OrderReportView> {
  //   return this.post("/services/createOrderAndOrderReportViewContactMech",
  //     orderReportView,
  //     (data) => Model.fromJson(data as Object[], OrderReportView)
  //   );
  // }
}
