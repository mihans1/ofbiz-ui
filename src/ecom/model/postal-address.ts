import {Model} from "./model";

export class PostalAddress extends Model {
  countryGeoId: string;
  houseNumberExt?: any;
  lastUpdatedStamp: any;
  address2: string;
  city: string;
  address1: string;
  createdTxStamp: any;
  postalCode: string;
  postalCodeGeoId?: any;
  createdStamp: any;
  houseNumber?: any;
  lastUpdatedTxStamp: any;
  postalCodeExt?: any;
  contactMechId: string;
  attnName: string;
  directions?: any;
  countyGeoId?: any;
  toName: string;
  cityGeoId?: any;
  municipalityGeoId?: any;
  stateProvinceGeoId: string;
  geoPointId: string;

  /**
   * Only used in POST, cannot GET this variable!
   */
  partyId: string;
}
