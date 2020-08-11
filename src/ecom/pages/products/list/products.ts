import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {ProductService} from "../../../service/product-service";
import {Product} from "../../../model/product";
import {ProductUtils} from "../../../util/product-utils";

@inject(ProductService, Router)
export class Products {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  filterStr: string = '';
  sortAsc = true;

  constructor(private productService: ProductService, private router: Router) {
    this.loadProducts()
  }

  onSearchFilterChanged() {
    this.filteredProducts = this.products.filter((p) => {
      return p.productName && p.productName.toLowerCase().includes(this.filterStr.toLowerCase())
      || p.productId.toLowerCase().includes(this.filterStr.toLowerCase())
      || p._toMany_ProductKeyword.filter((kw) => kw.keyword.toLowerCase().includes(this.filterStr.toLowerCase())).length > 0
      || p._toMany_ProductCategoryMember.filter((cm) => {
        return cm._toOne_ProductCategory.categoryName && cm._toOne_ProductCategory.categoryName.toLowerCase().includes(this.filterStr.toLowerCase())
        }).length > 0;
    });
  }

  public sortBy(prop) {
    this.sortAsc = !this.sortAsc;
    this.products = this.products.sort((a, b) => {
      if (a[prop] > b[prop]) return this.sortAsc ? 1 : -1;
      if (a[prop] < b[prop]) return this.sortAsc ? -1 : 1;
      return 0;
    })
  }

  public sortByRelated(propGetFunc: Function) {
    this.sortAsc = !this.sortAsc;
    this.products = this.products.sort((a, b) => {
      if (propGetFunc(a) > propGetFunc(b)) return this.sortAsc ? 1 : -1;
      if (propGetFunc(a) < propGetFunc(b)) return this.sortAsc ? -1 : 1;
      return 0;
    })
  }

  private loadProducts() {
    this.productService.getAll()
      .then((products) => this.products = products)
      .then(() => console.log(this.products))
      .then(() => this.onSearchFilterChanged());
  }

  getCategoryInfo(product: Product): string {
    return ProductUtils.getCategoryInfo(product);
  }

  getPriceWithoutTaxString(product: Product): string {
    return ProductUtils.getPriceWithoutTaxString(product);
  }
  getPriceWithTaxString(product: Product): string {
    return ProductUtils.getPriceWithTaxString(product);
  }

  onClickProduct(product: string) {
    console.log(product)
    this.router.navigateToRoute('detail', {id: product})
  }

  goToCategories() {
    this.router.navigateToRoute('categories')
  }
}
