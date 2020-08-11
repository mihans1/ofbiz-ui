import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework'
import {ProductCategoryService} from "../../../service/product-category-service";
import {ProductCategory} from "../../../model/product-category";

@inject (Router, ProductCategoryService)
export class List {

  categories: ProductCategory[] = [];
  filteredCategories: ProductCategory[] = [];
  filterStr: string = '';
  sortAsc = true;

  constructor(private router: Router,
              private productCategoryService: ProductCategoryService) {
    this.loadCategories();
  }

  onSearchFilterChanged() {
    this.filteredCategories = this.categories.filter((p) => {
      return p.categoryName && p.categoryName.toLowerCase().startsWith(this.filterStr.toLowerCase())
      || p.longDescription && p.longDescription.toLowerCase().includes(this.filterStr.toLowerCase())
      || p.description && p.description.toLowerCase().includes(this.filterStr.toLowerCase());
    });
  }

  sortBy(prop) {
    this.sortAsc = !this.sortAsc;
    this.categories = this.categories.sort((a, b) => {
      if (a[prop] > b[prop]) return this.sortAsc ? 1 : -1;
      if (a[prop] < b[prop]) return this.sortAsc ? -1 : 1;
      return 0;
    });
  }

  goToProducts() {
    this.router.navigateToRoute('products')
  }

  private loadCategories() {
    this.productCategoryService.getAll()
      .then((categories) => this.categories = categories)
      .then(()=> console.log(this.categories))
      .then(() => this.onSearchFilterChanged());
  }

  onClickCategory(category: ProductCategory) {
    this.router.navigateToRoute('detail', {id: category.productCategoryId})
  }
}
