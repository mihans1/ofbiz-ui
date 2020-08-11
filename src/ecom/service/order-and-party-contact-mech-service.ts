import {Service} from "./service";
import {OrderAndPartyContactMech} from "../model/order-and-party-contact-mech";
import {Model} from "../model/model";

export class OrderAndPartyContactMechService extends Service<OrderAndPartyContactMech> {
  getAll(): Promise<OrderAndPartyContactMech[]> {
    return this.get<OrderAndPartyContactMech[]>("/entities/OrderAndPartyContactMech",
      (data) => Model.arrayFromJson(data as Object[], OrderAndPartyContactMech),
      {_depth: 1}
    );
  }

  getSingle(id: string): Promise<OrderAndPartyContactMech[]> {
    return this.get<OrderAndPartyContactMech[]>("/entities/OrderAndPartyContactMech",
      (data) => Model.arrayFromJson(data as Object[], OrderAndPartyContactMech),
      {orderId: id}
    );
  }

  getForPartyId(id: string): Promise<OrderAndPartyContactMech[]> {
    return this.get<OrderAndPartyContactMech[]>("/entities/OrderAndPartyContactMech",
      (data) => Model.arrayFromJson(data as Object[], OrderAndPartyContactMech),
      {partyId: id}
    );
  }
}
