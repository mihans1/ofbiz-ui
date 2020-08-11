import {Model} from "./model";
import {OrderHeader} from "./order-header";

export class OrderAndPartyContactMech extends Model{
  contactThruDate?: any;
  extension?: any;
  comments?: any;
  orderId: string;
  contactMechTypeId: string;
  contactMechId: string;
  allowSolicitation: string;
  infoString?: any;
  contactMechPurposeTypeId: string;
  contactFromDate: number;
  partyId: string;

  __toOne_OrderHeader: OrderHeader;
}
