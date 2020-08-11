import {Model} from "./model";

export class ContactMech extends Model {
  lastUpdatedStamp: any;
  infoString: string;
  createdTxStamp: any;
  createdStamp: any;
  lastUpdatedTxStamp: any;
  contactMechTypeId: string;
  contactMechId: string;

  /**
   * Only in POST, never returned with get
   */
  partyId: string
}
