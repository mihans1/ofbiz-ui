import {inject} from 'aurelia-framework';
import {ProductService} from "../../../service/product-service";
import {Product} from "../../../model/product";
import {ProductCategory} from "../../../model/product-category";
import {ProductCategoryService} from "../../../service/product-category-service";
import {ProductTypeService} from "../../../service/product-type-service";
import {ProductType} from "../../../model/product-type";
import {ProductPrice} from "../../../model/product-price";
import {ProductPriceService} from "../../../service/product-price-service";
import {ProductCategoryMemberService} from "../../../service/product-category-member-service";
import {Router} from "aurelia-router";
import {ProductKeyword} from "../../../model/product-keyword";
import {ProductKeywordService} from "../../../service/product-keyword-service";

@inject(
  ProductService,
  ProductCategoryService,
  ProductTypeService,
  ProductPriceService,
  ProductCategoryMemberService,
  ProductKeywordService,
  Router
)
export class New {
  product = new Product();
  productPrice = new ProductPrice();
  categories: ProductCategory[] = [];
  types: ProductType[] = [];
  productKeywords: ProductKeyword[] = [];
  newTag: string = '';

  selectedSubCategories: any[] = [];
  categoryMappings = {
    option: 'categoryName',
    id: 'productCategoryId'
  };
  typeMappings = {
    option: 'description',
    id: 'productTypeId'
  }
  pickerOptions = {
    actionsBox: true,
    dropupAuto: true,
    liveSearch: true
  };

  constructor(private productService: ProductService,
              private productCategoryService: ProductCategoryService,
              private productTypeService: ProductTypeService,
              private productPriceService: ProductPriceService,
              private productCategoryMemberService: ProductCategoryMemberService,
              private productKeywordService: ProductKeywordService,
              private router: Router) {
  }

  attached() {
    this.loadCategories();
    this.loadTypes();
  }

  createProduct() {
    this.product.internalName = this.product.productName;
    this.productService.createProduct(this.product)
      .then((product) => this.createRelatedEntities(product))
      .then(() => this.router.navigateBack())
  }

  onAddKeyword() {
    if (this.newTag.length === 0) return;
    const keyword = new ProductKeyword();
    keyword.keyword = this.newTag;
    this.productKeywords.push(keyword);
    this.newTag = '';
  }

  onRemoveKeyword(keyword: ProductKeyword) {
    this.productKeywords = this.productKeywords.filter((kw) => kw.keyword !== keyword.keyword);
  }

  private createRelatedEntities(product: Product) {
    console.log(1)
    this.productPrice.productId = product.productId;
    this.productPriceService.createProductPrice(this.productPrice)
      .then((res) => console.log(res));
    const copy = this.selectedSubCategories;
    copy.forEach((cat) => {
      cat.productId = product.productId;
      this.productCategoryMemberService.addProductToCategory(cat)
        .then((res) => console.log(res));
    });
    this.productKeywords.forEach((kw) => {
      kw.productId = product.productId;
      this.productKeywordService.addProductKeyword(kw)
        .then((res) => console.log(res));
    });
    //this.selectedSubCategories = []
  }

  private loadCategories() {
    this.productCategoryService.getAll()
      .then((categories) => categories.filter((c) => c.categoryName && c.categoryName !== ''))
      .then((categories) => this.categories = categories)
      .then(() => console.log(this.categories));
  }

  private loadTypes() {
    this.productTypeService.getAll()
      .then((types) => this.types = types);
  }
}
