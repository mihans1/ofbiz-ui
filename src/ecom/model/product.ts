import {Model} from "./model";
import {ProductType} from "./product-type";
import {ProductPrice} from "./product-price";
import {ProductCategory} from "./product-category";
import {ProductKeyword} from "./product-keyword";
import {ProductCategoryMember} from "./product-category-member";

export class Product extends Model {

  originGeoId?: any;
  detailScreen?: any;
  createdStamp: Date;
  requireInventory: string;
  quantityUomId: string;
  mediumImageUrl?: any;
  productName: string;
  introductionDate?: any;
  shippingHeight?: any;
  originalImageUrl?: any;
  inShippingBox?: any;
  detailImageUrl?: any;
  supportDiscontinuationDate?: Date;
  productWidth?: any;
  includeInPromotions: string;
  configId?: any;
  billOfMaterialLevel?: number;
  lotIdFilledIn?: any;
  productRating?: any;
  createdByUserLogin: string;
  brandName?: string;
  requireAmount: string;
  productId: string;
  smallImageUrl?: any;
  taxable: string;
  primaryProductCategoryId: string;
  salesDiscontinuationDate?: Date;
  createdTxStamp: Date;
  lastUpdatedTxStamp: Date;
  _toOne_ProductType?: ProductType;
  salesDiscWhenNotAvail?: any;
  returnable: string;
  weightUomId?: any;
  isVirtual: string;
  priceDetailText: string;
  reserv2ndPPPerc?: any;
  widthUomId?: any;
  _toMany_ProductKeyword?: ProductKeyword[];
  longDescription: string;
  diameterUomId?: any;
  autoCreateKeywords: string;
  amountUomTypeId: string;
  productDiameter?: any;
  ratingTypeEnum?: any;
  description?: string;
  chargeShipping: string;
  reservNthPPPerc?: any;
  quantityIncluded?: number;
  heightUomId?: any;
  internalName: string;
  lastModifiedByUserLogin: string;
  virtualVariantMethodEnum: string;
  shippingWeight?: any;
  shippingWidth?: any;
  shippingDepth?: any;
  reservMaxPersons?: number;
  fixedAmount?: any;
  inventoryItemTypeId?: any;
  piecesIncluded?: number;
  productDepth?: any;
  lastUpdatedStamp: Date;
  facilityId?: any;
  comments?: any;
  releaseDate?: Date;
  productHeight?: any;
  lastModifiedDate?: Date;
  defaultShipmentBoxTypeId?: any;
  orderDecimalQuantity?: any;
  inventoryMessage?: any;
  productWeight?: number;
  depthUomId?: any;
  productTypeId: string;
  createdDate?: Date;
  isVariant: string;
  largeImageUrl?: any;
  requirementMethodEnumId?: string;
  _toMany_ProductMaint?: ToManyProductMaint[];
  _toMany_InstanceOfFixedAsset: ToManyInstanceOfFixedAsset[];
  _toMany_WorkEffortGoodStandard: ToManyWorkEffortGoodStandard[];
  _toMany_ProductPrice: ProductPrice[];
  _toMany_MainProductAssoc: ToManyMainProductAssoc[];
  _toMany_ProductCostComponentCalc: ToManyProductCostComponentCalc[];
  _toMany_ProductFacility: ToManyProductFacility[];
  _toMany_CostComponent: ToManyCostComponent[];
  _toMany_InventoryItem: ToManyInventoryItem[];
  _toMany_SupplierProduct: ToManySupplierProduct[];
  _toMany_AssocProductAssoc: ToManyAssocProductAssoc[];
  _toMany_ProductContent: ToManyProductContent[];
  _toMany_QuoteItem: ToManyQuoteItem[];
  _toMany_ProductCategoryMember: ProductCategoryMember[];
  _toMany_ProductFacilityLocation: ToManyProductFacilityLocation[];
  _toMany_AgreementProductAppl: ToManyAgreementProductAppl[];
  _toOne_CreatedByUserLogin: ToOneCreatedByUserLogin;
  _toOne_LastModifiedByUserLogin: ToOneLastModifiedByUserLogin;
  _toOne_PrimaryProductCategory: ProductCategory;
  _toMany_ProductPromoProduct: ToManyProductPromoProduct[];
  _toMany_ProductFeatureAndAppl: ToManyProductFeatureAndAppl[];
  _toMany_ProductFeatureAppl: ToManyProductFeatureAppl[];
  _toMany_GoodIdentification: ToManyGoodIdentification[];
  _toMany_ShipmentReceipt: ToManyShipmentReceipt[];
  _toMany_InvoiceItem: ToManyInvoiceItem[];
  _toMany_ShipmentItem: ToManyShipmentItem[];
  _toMany_ProductReview: ToManyProductReview[];
  _toMany_OrderItem: ToManyOrderItem[];
  _toMany_ProductFacilityAssoc: ToManyProductFacilityAssoc[];
  _toMany_ProductSubscriptionResource: ToManyProductSubscriptionResource[];
  _toOne_RequirementMethodEnumeration: ToOneRequirementMethodEnumeration;
  _toMany_ProductProductConfig: ToManyProductProductConfig[];
  _toMany_ProductProductConfigProduct: ToManyProductProductConfigProduct[];
  _toOne_AmountUomType: ToOneAmountUomType;
  _toOne_VirtualVariantMethodEnumeration: ToOneVirtualVariantMethodEnumeration;
  _toOne_QuantityUom: ToOneQuantityUom;
  _toMany_FixedAssetProduct: ToManyFixedAssetProduct[];
}

export interface ToManyProductMaint {
  lastUpdatedStamp: any;
  productId: string;
  maintTemplateWorkEffortId?: any;
  maintName: string;
  createdTxStamp: any;
  createdStamp: any;
  lastUpdatedTxStamp: any;
  productMaintTypeId: string;
  intervalMeterTypeId: string;
  productMaintSeqId: string;
  intervalUomId?: any;
  intervalQuantity: number;
  repeatCount?: number;
}

export interface ToManyInstanceOfFixedAsset {
  dateNextService?: any;
  purchaseCostUomId: string;
  productionCapacity?: any;
  createdStamp: any;
  acquireOrderId?: any;
  locatedAtLocationSeqId?: any;
  actualEndOfLife?: any;
  dateLastServiced?: any;
  acquireOrderItemSeqId?: any;
  partyId: string;
  locatedAtFacilityId?: any;
  depreciation?: any;
  lastUpdatedStamp: any;
  roleTypeId: string;
  dateAcquired?: number;
  purchaseCost: number;
  serialNumber?: any;
  fixedAssetTypeId: string;
  classEnumId?: any;
  fixedAssetName: string;
  createdTxStamp: any;
  lastUpdatedTxStamp: any;
  uomId?: any;
  calendarId?: any;
  salvageValue?: any;
  fixedAssetId: string;
  parentFixedAssetId?: any;
  expectedEndOfLife?: number;
  instanceOfProductId: string;
}

export interface ToManyWorkEffortGoodStandard {
  workEffortId: string;
  lastUpdatedStamp: any;
  productId: string;
  estimatedQuantity?: any;
  createdTxStamp: any;
  createdStamp: any;
  lastUpdatedTxStamp: any;
  estimatedCost?: any;
  thruDate?: any;
  workEffortGoodStdTypeId: string;
  fromDate: any;
  statusId: string;
}

export interface ToManyMainProductAssoc {
  reason: string;
  scrapFactor?: any;
  lastUpdatedStamp: any;
  quantity?: number;
  recurrenceInfoId?: any;
  productId: string;
  sequenceNum?: number;
  estimateCalcMethod?: any;
  createdTxStamp: any;
  createdStamp: any;
  lastUpdatedTxStamp: any;
  thruDate?: any;
  fromDate: any;
  instruction?: any;
  productIdTo: string;
  productAssocTypeId: string;
  routingWorkEffortId?: any;
}

export interface ToManyProductCostComponentCalc {
  fromDate: number;
  lastUpdatedStamp: number;
  costComponentTypeId: string;
  productId: string;
  sequenceNum?: any;
  createdTxStamp: number;
  createdStamp: number;
  lastUpdatedTxStamp: number;
  costComponentCalcId: string;
  thruDate?: any;
}

export interface ToManyProductFacility {
  lastUpdatedStamp: any;
  facilityId: string;
  productId: string;
  createdTxStamp: any;
  createdStamp: any;
  lastUpdatedTxStamp: any;
  reorderQuantity: number;
  replenishMethodEnumId?: any;
  lastInventoryCount?: number;
  minimumStock: number;
  requirementMethodEnumId?: any;
  daysToShip: number;
}

export interface ToManyCostComponent {
  workEffortId?: any;
  lastUpdatedStamp: any;
  costComponentTypeId: string;
  cost: number;
  productId: string;
  createdTxStamp: any;
  createdStamp: any;
  productFeatureId?: any;
  lastUpdatedTxStamp: any;
  costComponentId: string;
  costComponentCalcId?: any;
  thruDate?: any;
  fromDate: any;
  geoId?: any;
  fixedAssetId?: any;
  costUomId: string;
  partyId?: any;
}

export interface ToManyInventoryItem {
  softIdentifier?: any;
  createdStamp: any;
  binNumber?: any;
  oldAvailableToPromise?: any;
  quantityOnHandTotal: number;
  datetimeManufactured?: any;
  expireDate?: any;
  oldQuantityOnHand?: any;
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

export interface ToManySupplierProduct {
  supplierProductName: string;
  canDropShip: string;
  minimumOrderQuantity: number;
  createdStamp: any;
  supplierRatingTypeId?: any;
  quantityUomId?: any;
  unitsIncluded?: any;
  availableFromDate: any;
  agreementId?: any;
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

export interface ToManyAssocProductAssoc {
  reason: string;
  scrapFactor?: any;
  lastUpdatedStamp: any;
  quantity?: number;
  recurrenceInfoId?: any;
  productId: string;
  sequenceNum?: number;
  estimateCalcMethod?: any;
  createdTxStamp: any;
  createdStamp: any;
  lastUpdatedTxStamp: any;
  thruDate?: any;
  fromDate: any;
  instruction?: any;
  productIdTo: string;
  productAssocTypeId: string;
  routingWorkEffortId?: any;
}

export interface ToManyProductContent {
  lastUpdatedStamp: any;
  purchaseFromDate?: any;
  useTimeUomId: string;
  productId: string;
  sequenceNum?: any;
  createdTxStamp: any;
  createdStamp: any;
  contentId: string;
  lastUpdatedTxStamp: any;
  useCountLimit?: any;
  productContentTypeId: string;
  thruDate?: any;
  fromDate: any;
  useRoleTypeId?: any;
  useTime?: number;
  purchaseThruDate?: any;
}

export interface ToManyQuoteItem {
  workEffortId?: any;
  reservPersons?: any;
  deliverableTypeId?: any;
  createdStamp: number;
  isPromo?: any;
  reservStart?: any;
  configId?: any;
  custRequestId?: any;
  selectedAmount?: any;
  lastUpdatedStamp: number;
  quantity: number;
  reservLength?: any;
  comments: string;
  productId: string;
  createdTxStamp: number;
  quoteItemSeqId: string;
  productFeatureId?: any;
  quoteUnitPrice: number;
  lastUpdatedTxStamp: number;
  uomId?: any;
  estimatedDeliveryDate?: any;
  quoteId: string;
  custRequestItemSeqId?: any;
  skillTypeId?: any;
  leadTimeDays?: any;
}

export interface ToManyProductFacilityLocation {
  lastUpdatedStamp: any;
  facilityId: string;
  productId: string;
  moveQuantity?: number;
  createdTxStamp: any;
  createdStamp: any;
  lastUpdatedTxStamp: any;
  minimumStock?: number;
  locationSeqId: string;
}

export interface ToManyAgreementProductAppl {
  lastUpdatedStamp: any;
  productId: string;
  price?: number;
  createdTxStamp: any;
  createdStamp: any;
  agreementId: string;
  agreementItemSeqId: string;
  lastUpdatedTxStamp: any;
}

export interface ToOneCreatedByUserLogin {
  lastUpdatedStamp: any;
  successiveFailedLogins?: any;
  passwordHint?: any;
  createdTxStamp: any;
  createdStamp: any;
  externalAuthId?: any;
  lastUpdatedTxStamp: any;
  lastTimeZone?: any;
  enabled?: any;
  lastLocale?: any;
  currentPassword: string;
  userLoginId: string;
  isSystem?: any;
  disabledDateTime?: any;
  disabledBy?: any;
  hasLoggedOut?: any;
  userLdapDn?: any;
  requirePasswordChange?: any;
  lastCurrencyUom?: any;
  partyId: string;
}

export interface ToOneLastModifiedByUserLogin {
  lastUpdatedStamp: any;
  successiveFailedLogins?: any;
  passwordHint?: any;
  createdTxStamp: any;
  createdStamp: any;
  externalAuthId?: any;
  lastUpdatedTxStamp: any;
  lastTimeZone?: any;
  enabled?: any;
  lastLocale?: any;
  currentPassword: string;
  userLoginId: string;
  isSystem?: any;
  disabledDateTime?: any;
  disabledBy?: any;
  hasLoggedOut?: any;
  userLdapDn?: any;
  requirePasswordChange?: any;
  lastCurrencyUom?: any;
  partyId: string;
}

export interface ToManyProductPromoProduct {
  lastUpdatedStamp: any;
  productId: string;
  productPromoActionSeqId: string;
  createdTxStamp: any;
  productPromoRuleId: string;
  createdStamp: any;
  productPromoApplEnumId: string;
  lastUpdatedTxStamp: any;
  productPromoId: string;
  productPromoCondSeqId: string;
}

export interface ToManyProductFeatureAndAppl {
  productFeatureTypeId: string;
  amount?: any;
  productId: string;
  sequenceNum?: number;
  recurringAmount?: any;
  idCode: string;
  productFeatureId: string;
  numberSpecified?: number;
  productFeatureCategoryId: string;
  description: string;
  uomId: string;
  thruDate?: any;
  fromDate: any;
  defaultSequenceNum?: number;
  defaultAmount?: any;
  productFeatureApplTypeId: string;
  abbrev?: any;
}

export interface ToManyProductFeatureAppl {
  lastUpdatedStamp: any;
  amount?: any;
  productId: string;
  sequenceNum?: number;
  recurringAmount?: any;
  createdTxStamp: any;
  createdStamp: any;
  productFeatureId: string;
  lastUpdatedTxStamp: any;
  thruDate?: any;
  fromDate: any;
  productFeatureApplTypeId: string;
}

export interface ToManyGoodIdentification {
  lastUpdatedStamp: number;
  productId: string;
  createdTxStamp: number;
  createdStamp: number;
  goodIdentificationTypeId: string;
  lastUpdatedTxStamp: number;
  idValue: string;
}

export interface ToManyShipmentReceipt {
  orderItemSeqId: string;
  lastUpdatedStamp: number;
  productId: string;
  orderId: string;
  createdTxStamp: number;
  quantityAccepted: number;
  createdStamp: number;
  lastUpdatedTxStamp: number;
  shipmentPackageSeqId?: any;
  shipmentItemSeqId?: any;
  quantityRejected: number;
  inventoryItemId: string;
  rejectionId?: any;
  shipmentId: string;
  receivedByUserLoginId?: any;
  returnId?: any;
  returnItemSeqId?: any;
  datetimeReceived: number;
  itemDescription?: any;
  receiptId: string;
}

export interface ToManyInvoiceItem {
  createdStamp: any;
  description: string;
  invoiceItemSeqId: string;
  taxAuthPartyId: string;
  parentInvoiceId: string;
  parentInvoiceItemSeqId: string;
  taxAuthGeoId: string;
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
  inventoryItemId: string;
  invoiceId: string;
  salesOpportunityId?: any;
}

export interface ToManyShipmentItem {
  lastUpdatedStamp: any;
  quantity: number;
  productId: string;
  shipmentContentDescription?: any;
  shipmentId: string;
  createdTxStamp: any;
  createdStamp: any;
  lastUpdatedTxStamp: any;
  shipmentItemSeqId: string;
}

export interface ToManyProductReview {
  lastUpdatedStamp: number;
  productId: string;
  createdTxStamp: number;
  createdStamp: number;
  lastUpdatedTxStamp: number;
  postedDateTime?: any;
  productReviewId: string;
  productReview: string;
  userLoginId: string;
  statusId: string;
  productStoreId: string;
  postedAnonymous?: any;
  productRating: number;
}

export interface ToManyOrderItem {
  orderId: string;
  createdStamp: any;
  deploymentId?: any;
  cancelBackOrderDate?: any;
  itemDescription: string;
  selectedAmount: number;
  orderItemSeqId: string;
  unitPrice: number;
  productId: string;
  unitRecurringPrice?: any;
  createdTxStamp: any;
  isItemGroupPrimary?: any;
  autoCancelDate?: any;
  productFeatureId?: any;
  overrideGlAccountId?: any;
  lastUpdatedTxStamp: any;
  budgetId?: any;
  supplierProductId?: any;
  estimatedDeliveryDate?: number;
  quoteId?: any;
  statusId: string;
  syncStatusId?: any;
  estimatedShipDate?: any;
  shoppingListItemSeqId?: any;
  subscriptionId?: any;
  salesOpportunityId?: any;
  dontCancelSetUserLogin?: any;
  isPromo: string;
  isModifiedPrice: string;
  reserveAfterDate?: any;
  shipBeforeDate?: any;
  productCategoryId?: any;
  shoppingListId?: any;
  unitListPrice: number;
  unitAverageCost?: any;
  orderItemTypeId: string;
  lastUpdatedStamp: any;
  dontCancelSetDate?: any;
  quantity: number;
  comments?: any;
  recurringFreqUomId?: any;
  orderItemGroupSeqId?: any;
  quoteItemSeqId?: any;
  externalId?: any;
  fromInventoryItemId?: any;
  budgetItemSeqId?: any;
  correspondingPoId?: any;
  cancelQuantity?: any;
  shipAfterDate?: any;
  changeByUserLoginId?: any;
  prodCatalogId: string;
}

export interface ToManyProductFacilityAssoc {
  lastUpdatedStamp: any;
  facilityId: string;
  productId: string;
  sequenceNum: number;
  createdTxStamp: any;
  createdStamp: any;
  transitTime: number;
  lastUpdatedTxStamp: any;
  facilityIdTo: string;
  thruDate?: any;
  fromDate: any;
  facilityAssocTypeId: string;
}

export interface ToManyProductSubscriptionResource {
  maxLifeTimeUomId?: any;
  useTimeUomId: string;
  subscriptionResourceId: string;
  createdStamp: number;
  _ENTITY_NAME_: string;
  canclAutmExtTimeUomId?: any;
  gracePeriodOnExpiryUomId: string;
  availableTime?: any;
  useRoleTypeId?: any;
  useTime: number;
  _DELEGATOR_NAME_: string;
  lastUpdatedStamp: number;
  purchaseFromDate?: any;
  productId: string;
  createdTxStamp: number;
  lastUpdatedTxStamp: number;
  useCountLimit?: any;
  availableTimeUomId?: any;
  thruDate?: any;
  fromDate: number;
  canclAutmExtTime?: any;
  automaticExtend?: any;
  maxLifeTime?: any;
  purchaseThruDate?: any;
  gracePeriodOnExpiry: number;
}

export interface ToOneRequirementMethodEnumeration {
  enumTypeId: string;
  lastUpdatedStamp: number;
  enumId: string;
  enumCode: string;
  createdTxStamp: number;
  createdStamp: number;
  description: string;
  lastUpdatedTxStamp: number;
  sequenceId: string;
}

export interface ToManyProductProductConfig {
  configItemId: string;
  longDescription?: any;
  lastUpdatedStamp: any;
  productId: string;
  sequenceNum: number;
  defaultConfigOptionId?: any;
  createdTxStamp: any;
  createdStamp: any;
  description: string;
  lastUpdatedTxStamp: any;
  thruDate?: any;
  fromDate: any;
  configTypeId: string;
  isMandatory: string;
}

export interface ToManyProductProductConfigProduct {
  configItemId: string;
  lastUpdatedStamp: any;
  quantity: number;
  productId: string;
  sequenceNum?: any;
  createdTxStamp: any;
  configOptionId: string;
  createdStamp: any;
  lastUpdatedTxStamp: any;
}

export interface ToOneAmountUomType {
  lastUpdatedStamp: any;
  parentTypeId?: any;
  hasTable: string;
  createdTxStamp: any;
  createdStamp: any;
  description: string;
  lastUpdatedTxStamp: any;
  uomTypeId: string;
}

export interface ToOneVirtualVariantMethodEnumeration {
  enumTypeId: string;
  lastUpdatedStamp: any;
  enumId: string;
  enumCode: string;
  createdTxStamp: any;
  createdStamp: any;
  description: string;
  lastUpdatedTxStamp: any;
  sequenceId: string;
}

export interface ToOneQuantityUom {
  lastUpdatedStamp: any;
  createdTxStamp: any;
  createdStamp: any;
  description: string;
  lastUpdatedTxStamp: any;
  uomId: string;
  abbreviation: string;
  uomTypeId: string;
  numericCode?: any;
}

export interface ToManyFixedAssetProduct {
  lastUpdatedStamp: number;
  comments?: any;
  quantity?: any;
  productId: string;
  sequenceNum?: any;
  createdTxStamp: number;
  createdStamp: number;
  lastUpdatedTxStamp: number;
  quantityUomId?: any;
  thruDate?: any;
  fromDate: number;
  fixedAssetId: string;
  fixedAssetProductTypeId: string;
}
