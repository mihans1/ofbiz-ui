import {Model} from "./model";
import {Party, ToManyPartyContactMechPurpose} from "./party";
import {ContactMech} from "./contact-mech";
import {PostalAddress} from "./postal-address";

export class PartyContactMech extends Model {
  _toOne_Person: ToOnePerson;
  lastUpdatedStamp: any;
  roleTypeId: string;
  extension: string;
  comments?: any;
  createdTxStamp: any;
  createdStamp: any;
  verified?: any;
  lastUpdatedTxStamp: any;
  monthsWithContactMech?: any;
  contactMechId: string;
  thruDate?: any;
  fromDate: any;
  allowSolicitation: string;
  yearsWithContactMech?: any;
  _toMany_PartyContactMechPurpose: ToManyPartyContactMechPurpose[];
  _toOne_Party: Party;
  _toOne_ContactMech?: ContactMech;
  partyId: string;
  _toOne_PostalAddress: PostalAddress;
  _toOne_PartyGroup: ToOnePartyGroup;
  _toOne_TelecomNumber: ToOneTelecomNumber;
  _toOne_RoleType: ToOneRoleType;
  _toOne_PartyRole: ToOnePartyRole;
}

export interface ToOnePerson {
  yearsWithEmployer?: any;
  lastName: string;
  occupation?: any;
  gender?: any;
  employmentStatusEnumId?: any;
  socialSecurityNumber?: any;
  createdStamp: any;
  suffix?: any;
  mothersMaidenName?: any;
  middleNameLocal?: any;
  existingCustomer?: any;
  residenceStatusEnumId?: any;
  maritalStatusEnumId?: any;
  oldMaritalStatus?: any;
  nickname?: any;
  partyId: string;
  memberId?: any;
  height?: any;
  passportNumber?: any;
  lastUpdatedStamp: any;
  lastNameLocal?: any;
  comments?: any;
  monthsWithEmployer?: any;
  createdTxStamp: any;
  weight?: any;
  lastUpdatedTxStamp: any;
  birthDate?: any;
  otherLocal?: any;
  firstName: string;
  cardId?: any;
  middleName: string;
  firstNameLocal?: any;
  passportExpireDate?: any;
  salutation?: any;
  personalTitle: string;
  deceasedDate?: any;
  totalYearsWorkExperience?: any;
}

export interface ToOnePartyGroup {
  lastUpdatedStamp: any;
  comments?: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  tickerSymbol?: any;
  logoImageUrl: string;
  groupName: string;
  groupNameLocal?: any;
  numEmployees?: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
  officeSiteName?: any;
  annualRevenue?: any;
}

export interface ToOneTelecomNumber {
  lastUpdatedStamp: any;
  areaCode: string;
  askForName?: any;
  countryCode: string;
  createdTxStamp: any;
  createdStamp: any;
  contactNumber: string;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  contactMechId: string;
}

export interface ToOneRoleType {
  lastUpdatedStamp: any;
  roleTypeId: string;
  parentTypeId: string;
  hasTable: string;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  description: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
}

export interface ToOnePartyRole {
  lastUpdatedStamp: any;
  roleTypeId: string;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
}
