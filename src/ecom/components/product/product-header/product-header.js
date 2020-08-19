import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Productservice } from '../../../service/productservice.js';
import { Store } from 'aurelia-store';

@inject(EventAggregator, Productservice, Store)
export class ProductHeader {
  constructor(ea, productService, store) {
    this.ea = ea;
    this.productService = productService;
    this.store = store;
  }

  newProduct() {
    let product = { productName: this.product.productName, category: this.product.category, description: this.product.description, issueDate: new Date().valueOf() };
    this.productService.createNewProduct(product);
  };
  search() {
    var products = [];
    var searchInput = this.searchInput;
    this.store.productsCopy.forEach(function (product) {
      if (product.productId.toLowerCase().includes(searchInput.toLowerCase())
        || product.productName.toLowerCase().includes(searchInput.toLowerCase())) {
        products.push(product);
      }
    });
    this.store.products = products;
  }
}
