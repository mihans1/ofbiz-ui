import {Model} from "./model";

export class PartyType extends Model {
  partyTypeId: string;
  lastUpdatedStamp: any;
  parentTypeId: string;
  hasTable: string;
  createdTxStamp: any;
  createdStamp: any;
  description: string;
  lastUpdatedTxStamp: any;
}
