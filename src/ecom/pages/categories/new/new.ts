import {inject} from 'aurelia-framework'
import {ProductCategoryService} from "../../../service/product-category-service";
import {ProductCategory} from "../../../model/product-category";
import {ProductCategoryType} from "../../../model/product-category-type";
import {ProductCategoryTypeService} from "../../../service/product-category-type-service";
import {Router} from "aurelia-router";

@inject(ProductCategoryService, ProductCategoryTypeService, Router)
export class New {
  category = new ProductCategory();
  categories: ProductCategory[] = [];
  types: ProductCategoryType[] = [];

  categoryMappings = {
    option: 'categoryName',
    id: 'productCategoryId'
  };
  typeMappings = {
    option: 'description',
    id: 'productCategoryTypeId'
  };
  pickerOptions = {
    actionsBox: true,
    dropupAuto: true,
    liveSearch: true
  };

  constructor(private productCategoryService: ProductCategoryService,
              private productCategoryTypeService: ProductCategoryTypeService,
              private router: Router) {
    productCategoryService.getAll()
      .then((categories) => categories.filter((c) => c.categoryName && c.categoryName !== ''))
      .then((categories) => this.categories = categories);
    productCategoryTypeService.getAll()
      .then((types) => this.types = types);
  }

  createCategory() {
    this.productCategoryService.createProductCategory(this.category)
      .then((res) => console.log(res))
      .then(() => this.router.navigateBack())
  }
}
