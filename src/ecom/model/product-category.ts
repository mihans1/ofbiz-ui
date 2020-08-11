import {Model} from "./model";
import {ProductCategoryType} from "./product-category-type";

export class ProductCategory extends Model {
  longDescription: string;
  lastUpdatedStamp: any;
  productCategoryTypeId: string;
  _toOne_ProductCategoryType: ProductCategoryType;
  detailScreen: string;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  description: string;
  lastUpdatedTxStamp: any;
  linkTwoImageUrl?: any;
  categoryName: string;
  _toMany_ParentProductCategoryRollup: ToManyParentProductCategoryRollup[];
  _toMany_PrimaryProduct: ToManyPrimaryProduct[];
  productCategoryId: string;
  _toMany_ProdCatalogCategory: ToManyProdCatalogCategory[];
  linkOneImageUrl?: any;
  _toMany_PrimaryChildProductCategory: ToManyPrimaryChildProductCategory[];
  primaryParentCategoryId: string;
  categoryImageUrl?: any;
  showInSelect?: any;
  _DELEGATOR_NAME_: string;
  _toMany_ProductCategoryMember: ToManyProductCategoryMember[];
  _toMany_ProductPromoCategory: ToManyProductPromoCategory[];
  _toMany_ProductCategoryContent: ToManyProductCategoryContent[];
  _toMany_ProductCategoryLink: ToManyProductCategoryLink[];
  _toMany_CurrentProductCategoryRollup: ToManyCurrentProductCategoryRollup[];
  _toOne_PrimaryParentProductCategory: ToOnePrimaryParentProductCategory;
  _toMany_TaxAuthorityCategory: ToManyTaxAuthorityCategory[];
  _toMany_ProductFeatureCategoryAppl: ToManyProductFeatureCategoryAppl[];
  _toMany_ProductCategoryRole: ToManyProductCategoryRole[];

  // Only in post
  productId?: string
}

export interface ToManyParentProductCategoryRollup {
  fromDate: any;
  lastUpdatedStamp: any;
  productCategoryId: string;
  sequenceNum?: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  parentProductCategoryId: string;
  _DELEGATOR_NAME_: string;
  thruDate?: any;
}

export interface ToManyPrimaryProduct {
  originGeoId?: any;
  detailScreen?: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  requireInventory?: any;
  quantityUomId: string;
  mediumImageUrl?: any;
  productName: string;
  introductionDate?: any;
  shippingHeight?: number;
  originalImageUrl?: any;
  inShippingBox?: any;
  detailImageUrl?: any;
  supportDiscontinuationDate?: any;
  productWidth?: any;
  includeInPromotions: string;
  configId?: any;
  billOfMaterialLevel?: number;
  lotIdFilledIn?: any;
  _DELEGATOR_NAME_: string;
  productRating?: any;
  createdByUserLogin: string;
  brandName: string;
  requireAmount: string;
  productId: string;
  smallImageUrl?: any;
  taxable: string;
  primaryProductCategoryId: string;
  salesDiscontinuationDate?: any;
  createdTxStamp: any;
  lastUpdatedTxStamp: any;
  salesDiscWhenNotAvail?: any;
  returnable: string;
  weightUomId?: any;
  isVirtual: string;
  priceDetailText?: any;
  reserv2ndPPPerc?: any;
  widthUomId?: any;
  longDescription: string;
  diameterUomId?: any;
  autoCreateKeywords: string;
  amountUomTypeId?: any;
  productDiameter?: any;
  ratingTypeEnum?: any;
  description: string;
  chargeShipping: string;
  reservNthPPPerc?: any;
  quantityIncluded?: number;
  heightUomId?: any;
  internalName: string;
  lastModifiedByUserLogin: string;
  virtualVariantMethodEnum: string;
  shippingWeight?: number;
  shippingWidth?: number;
  shippingDepth?: number;
  reservMaxPersons?: number;
  fixedAmount?: any;
  inventoryItemTypeId?: any;
  piecesIncluded?: number;
  productDepth?: any;
  lastUpdatedStamp: any;
  facilityId?: any;
  comments?: any;
  releaseDate?: any;
  productHeight?: any;
  lastModifiedDate: any;
  defaultShipmentBoxTypeId?: any;
  orderDecimalQuantity?: any;
  inventoryMessage?: any;
  productWeight?: number;
  depthUomId?: any;
  productTypeId: string;
  createdDate: any;
  isVariant: string;
  largeImageUrl?: any;
  requirementMethodEnumId: string;
}

export interface ToManyProdCatalogCategory {
  fromDate: any;
  lastUpdatedStamp: any;
  prodCatalogCategoryTypeId: string;
  productCategoryId: string;
  sequenceNum: number;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  prodCatalogId: string;
  thruDate?: any;
}

export interface ToManyPrimaryChildProductCategory {
  longDescription: string;
  lastUpdatedStamp: any;
  productCategoryTypeId: string;
  detailScreen?: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  description?: any;
  lastUpdatedTxStamp: any;
  linkTwoImageUrl?: any;
  categoryName: string;
  productCategoryId: string;
  linkOneImageUrl?: any;
  primaryParentCategoryId: string;
  categoryImageUrl?: any;
  showInSelect?: any;
  _DELEGATOR_NAME_: string;
}

export interface ToManyProductCategoryMember {
  lastUpdatedStamp: any;
  comments: string;
  quantity?: any;
  productId: string;
  sequenceNum?: number;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  thruDate?: any;
  fromDate: any;
  productCategoryId: string;
  _DELEGATOR_NAME_: string;
}

export interface ToManyProductPromoCategory {
  lastUpdatedStamp: any;
  andGroupId: string;
  createdTxStamp: any;
  productPromoRuleId: string;
  createdStamp: any;
  includeSubCategories: string;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  productPromoId: string;
  productPromoCondSeqId: string;
  productCategoryId: string;
  productPromoActionSeqId: string;
  productPromoApplEnumId: string;
  _DELEGATOR_NAME_: string;
}

export interface ToManyProductCategoryContent {
  lastUpdatedStamp: any;
  purchaseFromDate?: any;
  createdTxStamp: any;
  createdStamp: any;
  contentId: string;
  useDaysLimit?: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  useCountLimit?: any;
  thruDate?: any;
  fromDate: any;
  prodCatContentTypeId: string;
  productCategoryId: string;
  purchaseThruDate?: any;
  _DELEGATOR_NAME_: string;
}

export interface ToManyProductCategoryLink {
  linkInfo: string;
  lastUpdatedStamp: any;
  comments?: any;
  sequenceNum: number;
  detailText: string;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  thruDate?: any;
  detailSubScreen?: any;
  fromDate: any;
  productCategoryId: string;
  titleText: string;
  imageUrl: string;
  imageTwoUrl?: any;
  linkTypeEnumId: string;
  _DELEGATOR_NAME_: string;
  linkSeqId: string;
}

export interface ToManyCurrentProductCategoryRollup {
  fromDate: any;
  lastUpdatedStamp: any;
  productCategoryId: string;
  sequenceNum?: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  lastUpdatedTxStamp: any;
  parentProductCategoryId: string;
  _DELEGATOR_NAME_: string;
  thruDate?: any;
}

export interface ToOnePrimaryParentProductCategory {
  longDescription: string;
  lastUpdatedStamp: any;
  productCategoryTypeId: string;
  detailScreen?: any;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  description?: any;
  lastUpdatedTxStamp: any;
  linkTwoImageUrl?: any;
  categoryName: string;
  productCategoryId: string;
  linkOneImageUrl?: any;
  primaryParentCategoryId: string;
  categoryImageUrl?: any;
  showInSelect?: any;
  _DELEGATOR_NAME_: string;
}

export interface ToManyTaxAuthorityCategory {
  taxAuthPartyId: string;
  lastUpdatedStamp: number;
  productCategoryId: string;
  createdTxStamp: number;
  createdStamp: number;
  _ENTITY_NAME_: string;
  taxAuthGeoId: string;
  lastUpdatedTxStamp: number;
  _DELEGATOR_NAME_: string;
}

export interface ToManyProductFeatureCategoryAppl {
  fromDate: any;
  lastUpdatedStamp: any;
  productCategoryId: string;
  createdTxStamp: any;
  createdStamp: any;
  _ENTITY_NAME_: string;
  productFeatureCategoryId: string;
  lastUpdatedTxStamp: any;
  _DELEGATOR_NAME_: string;
  thruDate?: any;
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
