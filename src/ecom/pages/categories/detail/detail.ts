import {inject} from 'aurelia-framework'
import {ProductCategoryService} from "../../../service/product-category-service";
import {ProductCategory} from "../../../model/product-category";
import {ProductCategoryTypeService} from "../../../service/product-category-type-service";
import {ProductCategoryType} from "../../../model/product-category-type";

@inject(ProductCategoryService, ProductCategoryTypeService)
export class Detail {
  category: ProductCategory = null;
  categories: ProductCategory[] = [];
  types: ProductCategoryType[] = [];
  isEditingMode: boolean = false;

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
              private productCategoryTypeService: ProductCategoryTypeService) {
  }

  activate(params) {
    this.loadCategory(params.id);
    this.productCategoryService.getAll()
      .then((categories) => categories.filter((c) => c.categoryName && c.categoryName !== ''))
      .then((categories) => this.categories = categories);
    this.productCategoryTypeService.getAll()
      .then((types) => types.filter((t) => t.description && t.description !== ''))
      .then((types) => this.types = types);
  }

  updateData() {
    this.productCategoryService.updateProductCategory(this.category)
      .then((resp) => console.log(resp))
      .then(() => this.loadCategory(this.category.productCategoryId));
    this.isEditingMode = false
  }

  private loadCategory(id: string) {
    this.productCategoryService.getSingle(id)
      .then((category) => this.category = category[0])
      .then(() => console.log(this.isEditingMode, this.category));
  }

}
