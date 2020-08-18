import { inject } from 'aurelia-framework';
import { Productservice } from '../../../service/productservice';
import { Store } from 'aurelia-store';

@inject(Productservice, Store)
export class ListView {
  constructor(productservice, store) {
    this.productService = productservice;
    this.store = store;
  }

  attached() {
    this.productService.getProducts()
      .then(
        data => this.store.products = data,
      );
    this.productService.getProducts()
      .then(
        data => this.store.productsCopy = data,
      );
  }
  deleteProduct(id, index) {
    this.store.products.splice(index, 1);
    this.productService.deleteProductById(id);
  }
}
