import {Service} from "./service";
import {OrderContact} from "../model/order-contact";
import {Model} from "../model/model";

export class OrderContactService extends Service<OrderContact> {
  getAll(): Promise<OrderContact[]> {
    return this.get<OrderContact[]>("/entities/OrderAndContactMech",
      (data) => Model.arrayFromJson(data as Object[], OrderContact),
      {_depth: 1}
    );
  }

  getSingle(id: string): Promise<OrderContact[]> {
    return this.get<OrderContact[]>("/entities/OrderAndContactMech",
      (data) => Model.arrayFromJson(data as Object[], OrderContact),
      {orderId: id, _depth: 1}
    );
  }

  // createOrderContact(orderContacts: OrderContact): Promise<OrderContact> {
  //   return this.post("/services/createOrderAndContactMech",
  //     orderContacts,
  //     (data) => Model.fromJson(data as Object[], OrderContact)
  //   );
  // }
}
