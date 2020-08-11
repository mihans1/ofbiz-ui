import {Service} from "./service";
import {Model} from "../model/model";
import {OrderHeader} from "../model/order-header";

export class OrderHeaderService extends Service<OrderHeader> {
  getAll(): Promise<OrderHeader[]> {
    return this.get<OrderHeader[]>("/entities/OrderHeader",
      (data) => Model.arrayFromJson(data as Object[], OrderHeader),
      {_depth: 1}
    );
  }

  getSingle(id: string): Promise<OrderHeader[]> {
    return this.get<OrderHeader[]>("/entities/OrderHeader",
      (data) => Model.arrayFromJson(data as Object[], OrderHeader),
      {orderId: id, _depth: 1}
    );
  }

  updateOrderHeader(orderHeader: OrderHeader): Promise<OrderHeader> {
    return this.post("/services/updateOrderHeader",
      orderHeader,
      (data) => Model.fromJson(data as Object, OrderHeader))
  }
}
