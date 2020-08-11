import {Model} from "./model";
import {PartyType} from "./party-type";
import {PartyRole} from "./party-role";
import {PartyContactMech} from "./party-contact-mech";
import {ContactMech} from "./contact-mech";
import {OrderAndPartyContactMech} from "./order-and-party-contact-mech";
import {Person} from "./person";

export class Party extends Model{
  _toOne_Person: Person;
  createdStamp: any;
  description?: any;
  _toMany_PartyStatus: ToManyPartyStatu[];
  partyTypeId: string;
  lastModifiedByUserLogin: string;
  dataSourceId?: any;
  preferredCurrencyUomId: string;
  partyId: string;
  createdByUserLogin: string;
  lastUpdatedStamp: any;
  _toMany_FromInvoice: ToManyFromInvoice[];
  lastModifiedDate?: number;
  createdTxStamp: any;
  externalId?: any;
  lastUpdatedTxStamp: any;
  isUnread?: any;
  createdDate?: number;
  statusId: string;
  _toOne_StatusItem: ToOneStatusItem;
  _toMany_UserLogin: ToManyUserLogin[];
  _toOne_PartyType: PartyType;
  _toMany_PartyRole: PartyRole[];
  _toMany_FromPartyRelationship: ToManyFromPartyRelationship[];
  _toMany_ToPartyRelationship: ToManyToPartyRelationship[];
  _toMany_ToEmployment: ToManyToEmployment[];
  _toMany_RateAmount: ToManyRateAmount[];
  _toMany_EmplPositionFulfillment: ToManyEmplPositionFulfillment[];
  _toMany_PartyContactMech: PartyContactMech[];
  _toOne_PartyGroup: ToOnePartyGroup;
  _toMany_PartyContactMechPurpose: ToManyPartyContactMechPurpose[];
  _toMany_AcctgTransEntry: ToManyAcctgTransEntry[];
  _toMany_PartyIdentification: ToManyPartyIdentification[];
  _toMany_SupplierProduct: ToManySupplierProduct[];
  _toMany_ToAgreement: ToManyToAgreement[];
  _toMany_OrderRole: ToManyOrderRole[];
  _toMany_AcctgTrans: ToManyAcctgTran[];
  _toMany_FromShipment: ToManyFromShipment[];
  _toMany_ToPayment: ToManyToPayment[];
  _toMany_TaxAuthorityInvoiceItem: ToManyTaxAuthorityInvoiceItem[];
  _toMany_TaxAuthTaxAuthority: ToManyTaxAuthTaxAuthority[];
  _toMany_CarrierOrderItemShipGroup: ToManyCarrierOrderItemShipGroup[];
  _toMany_CarrierShipmentRouteSegment: ToManyCarrierShipmentRouteSegment[];
  _toMany_CarrierShipmentMethod: ToManyCarrierShipmentMethod[];
  _toMany_PerformedByFinAccountTrans: ToManyPerformedByFinAccountTran[];
  _toMany_ContentApproval: ToManyContentApproval[];
  _toMany_QuoteRole: ToManyQuoteRole[];
  _toMany_ProductStoreRole: ToManyProductStoreRole[];
  _toMany_Invoice: ToManyInvoice[];
  _toMany_CommunicationEventRole: ToManyCommunicationEventRole[];
  _toMany_ToCommunicationEvent: ToManyToCommunicationEvent[];
  _toMany_WorkEffortPartyAssignment: ToManyWorkEffortPartyAssignment[];
  _toMany_ProductCategoryRole: ToManyProductCategoryRole[];
  _toMany_ContentRole: ToManyContentRole[];
  _toOne_CreatedByUserLogin: ToOneCreatedByUserLogin;
  _toOne_LastModifiedByUserLogin: ToOneLastModifiedByUserLogin;
  _toMany_PaymentMethod: ToManyPaymentMethod[];
  _toMany_FromEmployment: ToManyFromEmployment[];
  _toMany_PartyTaxAuthInfo: ToManyPartyTaxAuthInfo[];
  _toMany_ProductStore: ToManyProductStore[];
  _toMany_PartyGeoPoint: ToManyPartyGeoPoint[];
  _toMany_CustRequestType: ToManyCustRequestType[];
  _toMany_GlAccountHistory: ToManyGlAccountHistory[];
  _toMany_FixedAsset: ToManyFixedAsset[];
  _toMany_OrganizationTaxAuthorityGlAccount: ToManyOrganizationTaxAuthorityGlAccount[];
  _toMany_OrganizationPaymentMethodTypeGlAccount: ToManyOrganizationPaymentMethodTypeGlAccount[];
  _toMany_GlJournal: ToManyGlJournal[];
  _toMany_GlAccountOrganization: ToManyGlAccountOrganization[];
  _toMany_OrganizationFinAccount: ToManyOrganizationFinAccount[];
  _toOne_PartyAcctgPreference: ToOnePartyAcctgPreference;
  _toMany_EmplPosition: ToManyEmplPosition[];
  _toMany_GlReconciliation: ToManyGlReconciliation[];
  _toMany_OrganizationVarianceReasonGlAccount: ToManyOrganizationVarianceReasonGlAccount[];
  _toMany_OwnerFinAccount: ToManyOwnerFinAccount[];
  _toMany_FinAccountTrans: ToManyFinAccountTran[];
  _toMany_OwnerInventoryItem: ToManyOwnerInventoryItem[];
  _toMany_OrganizationGlAccountTypeDefault: ToManyOrganizationGlAccountTypeDefault[];
  _toMany_InvoiceRole: ToManyInvoiceRole[];
  _toMany_PaymentGlAccountTypeMap: ToManyPaymentGlAccountTypeMap[];
  _toMany_FromAgreement: ToManyFromAgreement[];
  _toMany_OrganizationFinAccountTypeGlAccount: ToManyOrganizationFinAccountTypeGlAccount[];
  _toMany_OwnerFacility: ToManyOwnerFacility[];
  _toMany_FromPayment: ToManyFromPayment[];
  _toMany_OrganizationCustomTimePeriod: ToManyOrganizationCustomTimePeriod[];
  _toMany_BudgetRole: ToManyBudgetRole[];
  _toMany_BudgetReview: ToManyBudgetReview[];
  _toOne_Uom: ToOneUom;
  _toMany_TaxAuthorityProductPrice: ToManyTaxAuthorityProductPrice[];
  _toMany_CarrierShipmentBoxType: ToManyCarrierShipmentBoxType[];
  _toMany_BillingAccountRole: ToManyBillingAccountRole[];
  _toMany_FromCustRequest: ToManyFromCustRequest[];
  _toMany_Quote: ToManyQuote[];
  _toMany_ToShipment: ToManyToShipment[];

  /**
   * Does not come with get
   */
  __toOne_EmailAddress: ContactMech;
  __toMany_OrderAndPartyContactMech: OrderAndPartyContactMech[]
}


export interface ToOnePerson {
  yearsWithEmployer?: any;
  lastName: string;
  occupation?: any;
  gender?: any;
  employmentStatusEnumId?: any;
  socialSecurityNumber?: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  suffix?: any;
  mothersMaidenName?: any;
  middleNameLocal?: any;
  existingCustomer?: any;
  residenceStatusEnumId?: any;
  maritalStatusEnumId?: any;
  oldMaritalStatus?: any;
  nickname?: any;
  _DELEGATOR_NAME_: string;
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

export interface ToManyPartyStatu {
  statusDate: any;
  lastUpdatedStamp: any;
  statusId: string;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
  changeByUserLoginId?: any;
}

export interface ToManyFromInvoice {
  partyIdFrom: string;
  lastUpdatedStamp: any;
  roleTypeId?: any;
  recurrenceInfoId?: any;
  createdTxStamp: any;
  invoiceTypeId: string;
  dueDate: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  description: string;
  lastUpdatedTxStamp: any;
  billingAccountId?: any;
  invoiceDate: any;
  contactMechId?: any;
  currencyUomId: string;
  statusId: string;
  paidDate?: number;
  referenceNumber?: any;
  invoiceId: string;
  invoiceMessage?: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToOneStatusItem {
  lastUpdatedStamp: any;
  statusId: string;
  createdTxStamp: any;
  createdStamp: any;
  statusTypeId: string;
  _ENTITY_NAME_: string;
  description: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  sequenceId: string;
  statusCode: string;
}

export interface ToManyUserLogin {
  lastUpdatedStamp: any;
  successiveFailedLogins?: number;
  passwordHint?: any;
  createdTxStamp: any;
  createdStamp: any;
  externalAuthId?: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  lastTimeZone?: any;
  enabled: string;
  lastLocale?: any;
  currentPassword: string;
  userLoginId: string;
  isSystem: string;
  disabledDateTime?: any;
  disabledBy?: any;
  hasLoggedOut: string;
  userLdapDn?: any;
  requirePasswordChange: string;
  lastCurrencyUom?: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyFromPartyRelationship {
  roleTypeIdTo: string;
  partyIdFrom: string;
  lastUpdatedStamp: any;
  positionTitle?: any;
  comments: string;
  priorityTypeId?: any;
  permissionsEnumId?: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  roleTypeIdFrom: string;
  thruDate?: any;
  fromDate: any;
  relationshipName?: any;
  securityGroupId?: any;
  partyRelationshipTypeId: string;
  statusId?: any;
  partyIdTo: string;
  _DELEGATOR_NAME_: string;
}

export interface ToManyToPartyRelationship {
  roleTypeIdTo: string;
  partyIdFrom: string;
  lastUpdatedStamp: any;
  positionTitle?: any;
  comments: string;
  priorityTypeId?: any;
  permissionsEnumId?: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  roleTypeIdFrom: string;
  thruDate?: any;
  fromDate: any;
  relationshipName?: any;
  securityGroupId?: any;
  partyRelationshipTypeId: string;
  statusId?: any;
  partyIdTo: string;
  _DELEGATOR_NAME_: string;
}

export interface ToManyToEmployment {
  roleTypeIdTo: string;
  partyIdFrom: string;
  lastUpdatedStamp: number;
  createdTxStamp: number;
  terminationReasonId?: any;
  createdStamp: number;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: number;
  roleTypeIdFrom: string;
  thruDate?: any;
  fromDate: number;
  terminationTypeId?: any;
  partyIdTo: string;
  _DELEGATOR_NAME_: string;
}

export interface ToManyRateAmount {
  workEffortId: string;
  rateTypeId: string;
  lastUpdatedStamp: any;
  createdTxStamp: any;
  rateAmount: number;
  createdStamp: any;
  periodTypeId: string;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  thruDate?: any;
  fromDate: any;
  emplPositionTypeId: string;
  rateCurrencyUomId: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyEmplPositionFulfillment {
  fromDate: number;
  lastUpdatedStamp: number;
  comments?: any;
  createdTxStamp: number;
  createdStamp: number;
  emplPositionId: string;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: number;
  _DELEGATOR_NAME_: string;
  partyId: string;
  thruDate?: any;
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

export interface ToManyPartyContactMechPurpose {
  fromDate: any;
  lastUpdatedStamp: any;
  contactMechPurposeTypeId: string;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
  contactMechId: string;
  thruDate?: any;
}

export interface ToManyAcctgTransEntry {
  dueDate?: any;
  groupId?: any;
  createdStamp: any;
  glAccountId: string;
  _ENTITY_NAME_: string;
  description?: any;
  theirPartyId?: any;
  acctgTransEntryTypeId: string;
  origAmount: number;
  debitCreditFlag: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
  lastUpdatedStamp: any;
  roleTypeId: string;
  theirProductId?: any;
  amount: number;
  productId: string;
  createdTxStamp: any;
  settlementTermId?: any;
  reconcileStatusId: string;
  lastUpdatedTxStamp: any;
  isSummary?: any;
  acctgTransId: string;
  voucherRef?: any;
  inventoryItemId?: any;
  currencyUomId: string;
  glAccountTypeId: string;
  taxId?: any;
  origCurrencyUomId: string;
  organizationPartyId: string;
  acctgTransEntrySeqId: string;
}

export interface ToManyPartyIdentification {
  lastUpdatedStamp: any;
  createdTxStamp: any;
  partyIdentificationTypeId: string;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  idValue: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManySupplierProduct {
  supplierProductName: string;
  canDropShip: string;
  minimumOrderQuantity: number;
  createdStamp: any;
  supplierRatingTypeId?: any;
  _ENTITY_NAME_: string;
  quantityUomId?: any;
  unitsIncluded?: any;
  availableFromDate: any;
  agreementId?: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
  standardLeadTimeDays?: any;
  lastUpdatedStamp: any;
  comments?: any;
  productId: string;
  createdTxStamp: any;
  agreementItemSeqId?: any;
  lastUpdatedTxStamp: any;
  supplierProductId: string;
  supplierPrefOrderId: string;
  orderQtyIncrements?: any;
  currencyUomId: string;
  shippingPrice?: any;
  availableThruDate?: any;
  lastPrice: number;
}

export interface ToManyToAgreement {
  roleTypeIdTo: string;
  partyIdFrom: string;
  lastUpdatedStamp: any;
  productId?: any;
  agreementDate?: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  agreementTypeId: string;
  description: string;
  lastUpdatedTxStamp: any;
  roleTypeIdFrom: string;
  thruDate?: any;
  fromDate: any;
  textData?: any;
  agreementId: string;
  partyIdTo: string;
  _DELEGATOR_NAME_: string;
}

export interface ToManyOrderRole {
  lastUpdatedStamp: any;
  roleTypeId: string;
  orderId: string;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyAcctgTran {
  workEffortId?: any;
  theirAcctgTransId?: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  description?: any;
  postedDate: any;
  physicalInventoryId?: any;
  lastModifiedByUserLogin?: any;
  isPosted: string;
  paymentId: string;
  voucherDate?: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
  receiptId?: any;
  createdByUserLogin?: any;
  finAccountTransId?: any;
  lastUpdatedStamp: any;
  roleTypeId: string;
  acctgTransTypeId: string;
  lastModifiedDate?: any;
  createdTxStamp: any;
  glFiscalTypeId: string;
  lastUpdatedTxStamp: any;
  glJournalId?: any;
  transactionDate: any;
  scheduledPostingDate?: any;
  acctgTransId: string;
  voucherRef?: any;
  inventoryItemId?: any;
  createdDate?: any;
  shipmentId: string;
  fixedAssetId?: any;
  invoiceId: string;
  groupStatusId?: any;
}

export interface ToManyFromShipment {
  partyIdFrom: string;
  latestCancelDate?: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  estimatedReadyDate?: any;
  lastModifiedByUserLogin?: any;
  estimatedArrivalWorkEffId?: any;
  additionalShippingCharge?: any;
  destinationTelecomNumberId: string;
  estimatedShipCost: number;
  _DELEGATOR_NAME_: string;
  createdByUserLogin?: any;
  estimatedShipWorkEffId?: any;
  destinationFacilityId: string;
  lastUpdatedStamp: any;
  addtlShippingChargeDesc?: any;
  lastModifiedDate?: any;
  originContactMechId: string;
  createdTxStamp: any;
  lastUpdatedTxStamp: any;
  primaryReturnId?: any;
  originFacilityId: string;
  currencyUomId?: any;
  createdDate: any;
  statusId: string;
  destinationContactMechId: string;
  shipmentId: string;
  originTelecomNumberId: string;
  primaryOrderId: string;
  estimatedShipDate?: any;
  partyIdTo: string;
  shipmentTypeId: string;
  estimatedArrivalDate?: any;
  picklistBinId?: any;
  primaryShipGroupSeqId: string;
  handlingInstructions?: any;
}

export interface ToManyToPayment {
  partyIdFrom: string;
  paymentPreferenceId: string;
  createdStamp: any;
  _ENTITY_NAME_: string;
  paymentTypeId: string;
  paymentId: string;
  paymentMethodId: string;
  paymentGatewayResponseId: string;
  paymentRefNum: string;
  _DELEGATOR_NAME_: string;
  roleTypeIdTo?: any;
  finAccountTransId: string;
  lastUpdatedStamp: any;
  amount: number;
  comments?: any;
  createdTxStamp: any;
  actualCurrencyAmount?: number;
  overrideGlAccountId?: any;
  lastUpdatedTxStamp: any;
  paymentMethodTypeId: string;
  actualCurrencyUomId: string;
  currencyUomId: string;
  statusId: string;
  partyIdTo: string;
  effectiveDate: any;
}

export interface ToManyTaxAuthorityInvoiceItem {
  createdStamp: any;
  _ENTITY_NAME_: string;
  description: string;
  invoiceItemSeqId: string;
  taxAuthPartyId: string;
  parentInvoiceId: string;
  parentInvoiceItemSeqId: string;
  taxAuthGeoId: string;
  _DELEGATOR_NAME_: string;
  lastUpdatedStamp: any;
  amount: number;
  quantity: number;
  productId: string;
  createdTxStamp: any;
  overrideOrgPartyId?: any;
  productFeatureId?: any;
  taxableFlag?: any;
  taxAuthorityRateSeqId: string;
  overrideGlAccountId: string;
  lastUpdatedTxStamp: any;
  uomId?: any;
  invoiceItemTypeId: string;
  inventoryItemId?: any;
  invoiceId: string;
  salesOpportunityId?: any;
}

export interface ToManyTaxAuthTaxAuthority {
  taxAuthPartyId: string;
  requireTaxIdForExemption: string;
  lastUpdatedStamp: any;
  includeTaxInPrice: string;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  taxAuthGeoId: string;
  taxIdFormatPattern: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
}

export interface ToManyCarrierOrderItemShipGroup {
  orderId: string;
  createdStamp: any;
  shipByDate?: any;
  _ENTITY_NAME_: string;
  contactMechId: string;
  telecomContactMechId?: any;
  isGift: string;
  _DELEGATOR_NAME_: string;
  shipmentMethodTypeId: string;
  trackingNumber?: any;
  lastUpdatedStamp: any;
  facilityId?: any;
  giftMessage?: any;
  shippingInstructions?: any;
  createdTxStamp: any;
  maySplit: string;
  lastUpdatedTxStamp: any;
  shipGroupSeqId: string;
  supplierAgreementId?: any;
  estimatedDeliveryDate?: number;
  vendorPartyId?: any;
  shipAfterDate?: any;
  carrierPartyId: string;
  carrierRoleTypeId: string;
  estimatedShipDate?: any;
  supplierPartyId?: any;
}

export interface ToManyCarrierShipmentRouteSegment {
  actualOtherCost?: any;
  createdStamp: any;
  carrierDeliveryZone?: any;
  _ENTITY_NAME_: string;
  thirdPartyPostalCode?: any;
  destTelecomNumberId: string;
  carrierRestrictionCodes?: any;
  trackingIdNumber?: any;
  deliveryId?: any;
  carrierServiceStatusId: string;
  actualStartDate?: any;
  trackingDigest?: any;
  _DELEGATOR_NAME_: string;
  shipmentMethodTypeId: string;
  actualCost?: any;
  upsHighValueReport?: any;
  actualArrivalDate?: any;
  lastUpdatedStamp: any;
  actualServiceCost?: any;
  originContactMechId: string;
  estimatedStartDate?: any;
  createdTxStamp: any;
  carrierRestrictionDesc?: any;
  actualTransportCost?: any;
  lastUpdatedTxStamp: any;
  billingWeightUomId?: any;
  homeDeliveryDate?: any;
  originFacilityId: string;
  shipmentRouteSegmentId: string;
  destFacilityId: string;
  carrierPartyId: string;
  lastUpdatedDate?: any;
  currencyUomId?: any;
  billingWeight?: any;
  shipmentId: string;
  originTelecomNumberId: string;
  thirdPartyCountryGeoCode?: any;
  destContactMechId: string;
  estimatedArrivalDate?: any;
  homeDeliveryType?: any;
  thirdPartyAccountNumber?: any;
  updatedByUserLoginId?: any;
}

export interface ToManyCarrierShipmentMethod {
  sequenceNumber: number;
  lastUpdatedStamp: any;
  roleTypeId: string;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
  shipmentMethodTypeId: string;
  carrierServiceCode: string;
}

export interface ToManyPerformedByFinAccountTran {
  finAccountTransId: string;
  orderItemSeqId?: any;
  lastUpdatedStamp: any;
  amount: number;
  comments?: any;
  entryDate: any;
  orderId?: any;
  createdTxStamp: any;
  glReconciliationId: string;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  transactionDate: any;
  finAccountId: string;
  finAccountTransTypeId: string;
  statusId: string;
  paymentId: string;
  performedByPartyId: string;
  reasonEnumId?: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyContentApproval {
  lastUpdatedStamp: any;
  contentApprovalId: string;
  roleTypeId?: any;
  approvalDate?: any;
  comments?: any;
  sequenceNum?: number;
  createdTxStamp: any;
  createdStamp: any;
  contentId: string;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  contentRevisionSeqId: string;
  approvalStatusId: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyQuoteRole {
  fromDate?: any;
  lastUpdatedStamp: number;
  roleTypeId: string;
  createdTxStamp: number;
  createdStamp: number;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: number;
  _DELEGATOR_NAME_: string;
  partyId: string;
  quoteId: string;
  thruDate?: any;
}

export interface ToManyProductStoreRole {
  fromDate: any;
  lastUpdatedStamp: any;
  roleTypeId: string;
  sequenceNum?: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  productStoreId: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
  thruDate?: any;
}

export interface ToManyInvoice {
  partyIdFrom: string;
  lastUpdatedStamp: any;
  roleTypeId?: any;
  recurrenceInfoId?: any;
  createdTxStamp: any;
  invoiceTypeId: string;
  dueDate: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  description: string;
  lastUpdatedTxStamp: any;
  billingAccountId?: any;
  invoiceDate: any;
  contactMechId?: any;
  currencyUomId: string;
  statusId: string;
  paidDate?: number;
  referenceNumber?: any;
  invoiceId: string;
  invoiceMessage?: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyCommunicationEventRole {
  lastUpdatedStamp: number;
  roleTypeId: string;
  statusId: string;
  createdTxStamp: number;
  createdStamp: number;
  _ENTITY_NAME_: string;
  communicationEventId: string;
  lastUpdatedTxStamp: number;
  _DELEGATOR_NAME_: string;
  partyId: string;
  contactMechId: string;
}

export interface ToManyToCommunicationEvent {
  partyIdFrom?: any;
  note: string;
  subject: string;
  ccString?: any;
  createdStamp: number;
  _ENTITY_NAME_: string;
  contactMechTypeId: string;
  communicationEventTypeId: string;
  content: string;
  contentMimeTypeId: string;
  datetimeStarted: number;
  contactListId?: any;
  contactMechIdFrom?: any;
  reasonEnumId?: any;
  _DELEGATOR_NAME_: string;
  roleTypeIdTo: string;
  lastUpdatedStamp: number;
  parentCommEventId?: any;
  entryDate: number;
  createdTxStamp: number;
  datetimeEnded?: any;
  origCommEventId?: any;
  messageId?: any;
  lastUpdatedTxStamp: number;
  roleTypeIdFrom: string;
  contactMechIdTo: string;
  headerString?: any;
  statusId: string;
  communicationEventId: string;
  bccString?: any;
  partyIdTo: string;
  toString: string;
  fromString: string;
}

export interface ToManyWorkEffortPartyAssignment {
  workEffortId: string;
  lastUpdatedStamp: any;
  roleTypeId: string;
  facilityId?: any;
  comments?: any;
  mustRsvp?: any;
  createdTxStamp: any;
  assignedByUserLoginId?: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  delegateReasonEnumId?: any;
  thruDate?: any;
  fromDate: any;
  statusId: string;
  statusDateTime?: any;
  expectationEnumId?: any;
  availabilityStatusId: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyProductCategoryRole {
  fromDate: any;
  lastUpdatedStamp: any;
  roleTypeId: string;
  productCategoryId: string;
  comments?: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
  thruDate?: any;
}

export interface ToManyContentRole {
  fromDate: any;
  lastUpdatedStamp: any;
  roleTypeId: string;
  createdTxStamp: any;
  createdStamp: any;
  contentId: string;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
  thruDate?: any;
}

export interface ToOneCreatedByUserLogin {
  lastUpdatedStamp: any;
  successiveFailedLogins: number;
  passwordHint?: any;
  createdTxStamp: any;
  createdStamp: any;
  externalAuthId?: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  lastTimeZone?: any;
  enabled: string;
  lastLocale?: any;
  currentPassword: string;
  userLoginId: string;
  isSystem?: any;
  disabledDateTime?: any;
  disabledBy?: any;
  hasLoggedOut: string;
  userLdapDn?: any;
  requirePasswordChange?: any;
  lastCurrencyUom?: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToOneLastModifiedByUserLogin {
  lastUpdatedStamp: any;
  successiveFailedLogins: number;
  passwordHint?: any;
  createdTxStamp: any;
  createdStamp: any;
  externalAuthId?: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  lastTimeZone?: any;
  enabled: string;
  lastLocale?: any;
  currentPassword: string;
  userLoginId: string;
  isSystem?: any;
  disabledDateTime?: any;
  disabledBy?: any;
  hasLoggedOut: string;
  userLdapDn?: any;
  requirePasswordChange?: any;
  lastCurrencyUom?: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyPaymentMethod {
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  glAccountId: string;
  _ENTITY_NAME_: string;
  description: string;
  lastUpdatedTxStamp: any;
  paymentMethodTypeId: string;
  thruDate?: any;
  fromDate: any;
  finAccountId: string;
  paymentMethodId: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyFromEmployment {
  roleTypeIdTo: string;
  partyIdFrom: string;
  lastUpdatedStamp: number;
  createdTxStamp: number;
  terminationReasonId?: any;
  createdStamp: number;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: number;
  roleTypeIdFrom: string;
  thruDate?: any;
  fromDate: number;
  terminationTypeId?: any;
  partyIdTo: string;
  _DELEGATOR_NAME_: string;
}

export interface ToManyPartyTaxAuthInfo {
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  thruDate?: any;
  taxAuthPartyId: string;
  fromDate: any;
  partyTaxId: string;
  isNexus: string;
  taxAuthGeoId: string;
  isExempt: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyProductStore {
  viewCartOnAdd?: any;
  requireCustomerRole?: any;
  companyName: string;
  createdStamp: number;
  _ENTITY_NAME_: string;
  headerDeclinedStatus: string;
  requireInventory: string;
  checkInventory: string;
  autoApproveInvoice: string;
  addToCartRemoveIncompat?: any;
  enableAutoSuggestionList?: any;
  defaultSalesChannelEnumId: string;
  autoApproveOrder: string;
  allowPassword: string;
  showTaxIsExempt?: any;
  _DELEGATOR_NAME_: string;
  autoSaveCart?: any;
  inventoryFacilityId: string;
  headerApprovedStatus: string;
  defaultTimeZoneString?: any;
  prorateTaxes: string;
  showCheckoutGiftOptions?: any;
  manualAuthIsCapture?: any;
  itemDeclinedStatus: string;
  visualThemeId: string;
  storeCreditAccountEnumId: string;
  showOutOfStockProducts: string;
  allocateInventory?: any;
  createdTxStamp: number;
  itemApprovedStatus: string;
  lastUpdatedTxStamp: number;
  allowComment?: any;
  storeCreditValidDays: number;
  splitPayPrefPerShpGrp?: any;
  authFraudMessage: string;
  managedByLot?: any;
  reqShipAddrForDigItems?: any;
  oneInventoryFacility: string;
  orderNumberPrefix: string;
  autoInvoiceDigitalItems?: any;
  subtitle: string;
  reserveOrderEnumId: string;
  isDemoStore?: any;
  retryFailedAuths: string;
  selectPaymentTypePerItem?: any;
  balanceResOnOrderCreation: string;
  autoApproveReviews?: any;
  explodeOrderItems: string;
  usePrimaryEmailUsername?: any;
  headerCancelStatus: string;
  title: string;
  primaryStoreGroupId?: any;
  enableDigProdUpload?: any;
  autoOrderCcTryOtherCards?: any;
  autoOrderCcTryLaterMax?: any;
  digitalItemApprovedStatus: string;
  storeName: string;
  reserveInventory: string;
  productStoreId: string;
  isImmediatelyFulfilled?: any;
  defaultPassword?: any;
  itemCancelStatus: string;
  autoOrderCcTryExp?: any;
  authDeclinedMessage: string;
  prodSearchExcludeVariants: string;
  lastUpdatedStamp: number;
  shipIfCaptureFails: string;
  showPricesWithVatTax?: any;
  defaultCurrencyUomId: string;
  orderDecimalQuantity?: any;
  prorateShipping: string;
  digProdUploadCategoryId?: any;
  reqReturnInventoryReceive: string;
  authErrorMessage: string;
  setOwnerUponIssuance?: any;
  checkGcBalance?: any;
  autoOrderCcTryLaterNsf?: any;
  addToCartReplaceUpsell?: any;
  vatTaxAuthGeoId?: any;
  vatTaxAuthPartyId?: any;
  daysToCancelNonPay: number;
  requirementMethodEnumId?: any;
  payToPartyId: string;
  defaultLocaleString: string;
}

export interface ToManyPartyGeoPoint {
  fromDate: any;
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
  geoPointId: string;
  thruDate?: any;
}

export interface ToManyCustRequestType {
  lastUpdatedStamp: number;
  parentTypeId?: any;
  hasTable: string;
  createdTxStamp: number;
  createdStamp: number;
  _ENTITY_NAME_: string;
  description: string;
  lastUpdatedTxStamp: number;
  custRequestTypeId: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyGlAccountHistory {
  postedCredits: number;
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  glAccountId: string;
  postedDebits: number;
  endingBalance?: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  organizationPartyId: string;
  _DELEGATOR_NAME_: string;
  customTimePeriodId: string;
  openingBalance?: any;
}

export interface ToManyFixedAsset {
  dateNextService?: any;
  purchaseCostUomId: string;
  productionCapacity?: any;
  createdStamp: number;
  _ENTITY_NAME_: string;
  acquireOrderId?: any;
  locatedAtLocationSeqId?: any;
  actualEndOfLife?: any;
  dateLastServiced?: any;
  acquireOrderItemSeqId?: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
  locatedAtFacilityId?: any;
  depreciation?: any;
  lastUpdatedStamp: number;
  roleTypeId: string;
  dateAcquired: number;
  purchaseCost: number;
  serialNumber?: any;
  fixedAssetTypeId: string;
  classEnumId?: any;
  fixedAssetName: string;
  createdTxStamp: number;
  lastUpdatedTxStamp: number;
  uomId?: any;
  calendarId?: any;
  salvageValue?: any;
  fixedAssetId: string;
  parentFixedAssetId?: any;
  expectedEndOfLife: number;
  instanceOfProductId: string;
}

export interface ToManyOrganizationTaxAuthorityGlAccount {
  taxAuthPartyId: string;
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  glAccountId: string;
  _ENTITY_NAME_: string;
  taxAuthGeoId: string;
  organizationPartyId: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
}

export interface ToManyOrganizationPaymentMethodTypeGlAccount {
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  glAccountId: string;
  _ENTITY_NAME_: string;
  organizationPartyId: string;
  lastUpdatedTxStamp: any;
  paymentMethodTypeId: string;
  _DELEGATOR_NAME_: string;
}

export interface ToManyGlJournal {
  lastUpdatedStamp: number;
  isPosted?: any;
  createdTxStamp: number;
  createdStamp: number;
  _ENTITY_NAME_: string;
  glJournalName: string;
  organizationPartyId: string;
  lastUpdatedTxStamp: number;
  glJournalId: string;
  _DELEGATOR_NAME_: string;
  postedDate?: any;
}

export interface ToManyGlAccountOrganization {
  fromDate: any;
  lastUpdatedStamp: any;
  roleTypeId?: any;
  createdTxStamp: any;
  createdStamp: any;
  glAccountId: string;
  _ENTITY_NAME_: string;
  organizationPartyId: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  thruDate?: any;
}

export interface ToManyOrganizationFinAccount {
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  finAccountTypeId: string;
  thruDate?: any;
  isRefundable: string;
  availableBalance: number;
  fromDate?: any;
  ownerPartyId: string;
  finAccountId: string;
  postToGlAccountId: string;
  currencyUomId: string;
  statusId: string;
  finAccountName: string;
  finAccountPin: string;
  actualBalance: number;
  replenishLevel: number;
  replenishPaymentId?: any;
  organizationPartyId: string;
  _DELEGATOR_NAME_: string;
  finAccountCode: string;
}

export interface ToOnePartyAcctgPreference {
  cogsMethodId: string;
  oldInvoiceSequenceEnumId?: any;
  quoteSeqCustMethId?: any;
  lastQuoteNumber?: any;
  createdStamp: number;
  _ENTITY_NAME_: string;
  fiscalYearStartDay?: any;
  lastInvoiceNumber?: any;
  taxFormId: string;
  refundPaymentMethodId?: any;
  useInvoiceIdForReturns?: any;
  invoiceIdPrefix: string;
  lastOrderNumber?: any;
  orderSeqCustMethId?: any;
  fiscalYearStartMonth?: any;
  enableAccounting?: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
  oldOrderSequenceEnumId?: any;
  invoiceSeqCustMethId: string;
  lastUpdatedStamp: number;
  baseCurrencyUomId: string;
  lastInvoiceRestartDate?: any;
  createdTxStamp: number;
  errorGlJournalId: string;
  orderIdPrefix: string;
  lastUpdatedTxStamp: number;
  oldQuoteSequenceEnumId?: any;
  quoteIdPrefix: string;
}

export interface ToManyEmplPosition {
  lastUpdatedStamp: number;
  estimatedThruDate?: any;
  actualThruDate?: any;
  exemptFlag: string;
  temporaryFlag: string;
  createdTxStamp: number;
  fulltimeFlag: string;
  createdStamp: number;
  emplPositionId: string;
  _ENTITY_NAME_: string;
  actualFromDate?: any;
  lastUpdatedTxStamp: number;
  budgetItemSeqId?: any;
  budgetId?: any;
  salaryFlag: string;
  statusId: string;
  estimatedFromDate?: any;
  emplPositionTypeId: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyGlReconciliation {
  lastUpdatedStamp: any;
  lastModifiedDate?: any;
  createdTxStamp: any;
  glReconciliationId: string;
  createdStamp: any;
  glAccountId: string;
  _ENTITY_NAME_: string;
  glReconciliationName: string;
  description?: any;
  lastUpdatedTxStamp: any;
  reconciledDate: any;
  lastModifiedByUserLogin?: any;
  createdDate?: any;
  reconciledBalance?: number;
  statusId: string;
  organizationPartyId: string;
  _DELEGATOR_NAME_: string;
  createdByUserLogin?: any;
  openingBalance?: any;
}

export interface ToManyOrganizationVarianceReasonGlAccount {
  varianceReasonId: string;
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  glAccountId: string;
  _ENTITY_NAME_: string;
  organizationPartyId: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
}

export interface ToManyOwnerFinAccount {
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  finAccountTypeId: string;
  thruDate?: any;
  isRefundable: string;
  availableBalance: number;
  fromDate?: any;
  ownerPartyId: string;
  finAccountId: string;
  postToGlAccountId: string;
  currencyUomId: string;
  statusId: string;
  finAccountName: string;
  finAccountPin: string;
  actualBalance: number;
  replenishLevel: number;
  replenishPaymentId?: any;
  organizationPartyId: string;
  _DELEGATOR_NAME_: string;
  finAccountCode: string;
}

export interface ToManyFinAccountTran {
  finAccountTransId: string;
  orderItemSeqId?: any;
  lastUpdatedStamp: any;
  amount: number;
  comments?: any;
  entryDate: any;
  orderId?: any;
  createdTxStamp: any;
  glReconciliationId: string;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  transactionDate: any;
  finAccountId: string;
  finAccountTransTypeId: string;
  statusId: string;
  paymentId: string;
  performedByPartyId: string;
  reasonEnumId?: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyOwnerInventoryItem {
  softIdentifier?: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  binNumber?: any;
  oldAvailableToPromise?: any;
  quantityOnHandTotal: number;
  datetimeManufactured?: any;
  expireDate?: any;
  oldQuantityOnHand?: any;
  _DELEGATOR_NAME_: string;
  partyId?: any;
  containerId?: any;
  availableToPromiseTotal: number;
  inventoryItemTypeId: string;
  locationSeqId: string;
  lastUpdatedStamp: any;
  facilityId: string;
  comments?: any;
  serialNumber?: any;
  productId: string;
  createdTxStamp: any;
  lastUpdatedTxStamp: any;
  lotId?: any;
  uomId?: any;
  accountingQuantityTotal: number;
  inventoryItemId: string;
  ownerPartyId: string;
  activationValidThru?: any;
  activationNumber?: any;
  currencyUomId: string;
  statusId?: any;
  unitCost: number;
  fixedAssetId?: any;
  datetimeReceived: any;
}

export interface ToManyOrganizationGlAccountTypeDefault {
  lastUpdatedStamp: any;
  glAccountTypeId: string;
  createdTxStamp: any;
  createdStamp: any;
  glAccountId: string;
  _ENTITY_NAME_: string;
  organizationPartyId: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
}

export interface ToManyInvoiceRole {
  lastUpdatedStamp: any;
  roleTypeId: string;
  datetimePerformed: any;
  createdTxStamp: any;
  percentage?: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  invoiceId: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyPaymentGlAccountTypeMap {
  lastUpdatedStamp: any;
  paymentTypeId: string;
  glAccountTypeId: string;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  organizationPartyId: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
}

export interface ToManyFromAgreement {
  roleTypeIdTo: string;
  partyIdFrom: string;
  lastUpdatedStamp: any;
  productId?: any;
  agreementDate?: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  agreementTypeId: string;
  description: string;
  lastUpdatedTxStamp: any;
  roleTypeIdFrom: string;
  thruDate?: any;
  fromDate?: number;
  textData?: any;
  agreementId: string;
  partyIdTo: string;
  _DELEGATOR_NAME_: string;
}

export interface ToManyOrganizationFinAccountTypeGlAccount {
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  glAccountId: string;
  _ENTITY_NAME_: string;
  organizationPartyId: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  finAccountTypeId: string;
}

export interface ToManyOwnerFacility {
  parentFacilityId?: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  description: string;
  primaryFacilityGroupId?: any;
  facilitySize?: any;
  facilitySizeUomId?: any;
  facilityTypeId: string;
  defaultDaysToShip: number;
  defaultDimensionUomId?: any;
  facilityName: string;
  productStoreId?: any;
  facilityLevel: number;
  _DELEGATOR_NAME_: string;
  lastUpdatedStamp: any;
  facilityId: string;
  defaultInventoryItemTypeId: string;
  createdTxStamp: any;
  lastUpdatedTxStamp: any;
  defaultWeightUomId: string;
  openedDate?: any;
  ownerPartyId: string;
  closedDate?: any;
  geoPointId: string;
  oldSquareFootage?: any;
}

export interface ToManyFromPayment {
  partyIdFrom: string;
  paymentPreferenceId: string;
  createdStamp: any;
  _ENTITY_NAME_: string;
  paymentTypeId: string;
  paymentId: string;
  paymentMethodId: string;
  paymentGatewayResponseId: string;
  paymentRefNum: string;
  _DELEGATOR_NAME_: string;
  roleTypeIdTo?: any;
  finAccountTransId: string;
  lastUpdatedStamp: any;
  amount: number;
  comments?: any;
  createdTxStamp: any;
  actualCurrencyAmount?: number;
  overrideGlAccountId?: any;
  lastUpdatedTxStamp: any;
  paymentMethodTypeId: string;
  actualCurrencyUomId: string;
  currencyUomId: string;
  statusId: string;
  partyIdTo: string;
  effectiveDate: any;
}

export interface ToManyOrganizationCustomTimePeriod {
  periodNum: number;
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  periodTypeId: string;
  _ENTITY_NAME_: string;
  periodName: string;
  lastUpdatedTxStamp: any;
  parentPeriodId: string;
  thruDate: any;
  fromDate: any;
  isClosed: string;
  organizationPartyId: string;
  _DELEGATOR_NAME_: string;
  customTimePeriodId: string;
}

export interface ToManyBudgetRole {
  lastUpdatedStamp: any;
  roleTypeId: string;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  budgetId: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
}

export interface ToManyBudgetReview {
  lastUpdatedStamp: any;
  reviewDate: any;
  createdTxStamp: any;
  budgetReviewResultTypeId: string;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  budgetId: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
  budgetReviewId: string;
}

export interface ToOneUom {
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  description: string;
  lastUpdatedTxStamp: any;
  uomId: string;
  _DELEGATOR_NAME_: string;
  abbreviation: string;
  uomTypeId: string;
  numericCode: number;
}

export interface ToManyTaxAuthorityProductPrice {
  taxInPrice: string;
  termUomId?: any;
  priceWithTax: number;
  createdStamp: number;
  _ENTITY_NAME_: string;
  productStoreGroupId: string;
  taxAuthPartyId: string;
  lastModifiedByUserLogin?: any;
  customPriceCalcService?: any;
  price: number;
  taxAuthGeoId: string;
  _DELEGATOR_NAME_: string;
  productPricePurposeId: string;
  createdByUserLogin?: any;
  lastUpdatedStamp: number;
  productId: string;
  lastModifiedDate?: any;
  createdTxStamp: number;
  taxPercentage: number;
  lastUpdatedTxStamp: number;
  thruDate?: any;
  fromDate: number;
  currencyUomId: string;
  createdDate?: any;
  priceWithoutTax: number;
  taxAmount: number;
  productPriceTypeId: string;
}

export interface ToManyCarrierShipmentBoxType {
  packagingTypeCode: string;
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  oversizeCode?: any;
  _DELEGATOR_NAME_: string;
  partyId: string;
  shipmentBoxTypeId: string;
}

export interface ToManyBillingAccountRole {
  fromDate: number;
  lastUpdatedStamp: number;
  roleTypeId: string;
  createdTxStamp: number;
  createdStamp: number;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: number;
  billingAccountId: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
  thruDate?: any;
}

export interface ToManyFromCustRequest {
  reason?: any;
  fromPartyId: string;
  salesChannelEnumId?: any;
  fulfillContactMechId?: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  description: string;
  custRequestDate: any;
  internalComment?: any;
  lastModifiedByUserLogin: string;
  custRequestId: string;
  productStoreId: string;
  _DELEGATOR_NAME_: string;
  createdByUserLogin: string;
  closedDateTime?: any;
  lastUpdatedStamp: any;
  custRequestName: string;
  responseRequiredDate?: any;
  lastModifiedDate: any;
  createdTxStamp: any;
  lastUpdatedTxStamp: any;
  priority: number;
  maximumAmountUomId?: any;
  openDateTime?: any;
  currencyUomId?: any;
  createdDate: any;
  statusId: string;
  custRequestTypeId: string;
  custRequestCategoryId?: any;
}

export interface ToManyQuote {
  lastUpdatedStamp: number;
  salesChannelEnumId: string;
  createdTxStamp: number;
  createdStamp: number;
  _ENTITY_NAME_: string;
  description?: any;
  lastUpdatedTxStamp: number;
  quoteId: string;
  validThruDate: number;
  quoteTypeId: string;
  currencyUomId: string;
  statusId: string;
  validFromDate: number;
  productStoreId: string;
  _DELEGATOR_NAME_: string;
  partyId: string;
  issueDate: number;
  quoteName: string;
}

export interface ToManyToShipment {
  partyIdFrom: string;
  latestCancelDate?: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  estimatedReadyDate?: any;
  lastModifiedByUserLogin?: any;
  estimatedArrivalWorkEffId?: any;
  additionalShippingCharge?: any;
  destinationTelecomNumberId: string;
  estimatedShipCost: number;
  _DELEGATOR_NAME_: string;
  createdByUserLogin?: any;
  estimatedShipWorkEffId?: any;
  destinationFacilityId?: any;
  lastUpdatedStamp: any;
  addtlShippingChargeDesc?: any;
  lastModifiedDate?: any;
  originContactMechId: string;
  createdTxStamp: any;
  lastUpdatedTxStamp: any;
  primaryReturnId?: any;
  originFacilityId: string;
  currencyUomId?: any;
  createdDate: any;
  statusId: string;
  destinationContactMechId: string;
  shipmentId: string;
  originTelecomNumberId: string;
  primaryOrderId: string;
  estimatedShipDate?: any;
  partyIdTo: string;
  shipmentTypeId: string;
  estimatedArrivalDate?: any;
  picklistBinId?: any;
  primaryShipGroupSeqId: string;
  handlingInstructions?: any;
}
