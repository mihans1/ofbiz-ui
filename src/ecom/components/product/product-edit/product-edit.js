import { inject } from 'aurelia-framework';
import { Productservice } from '../../../service/productservice';

@inject(Productservice)
export class ProductEdit {
    constructor(productService) {
      this.productService = productService;
    }

    attached() {
      this.products = this.productService.getProducts();
    }

    activate(params, routeConfig, navigationInstruction) {
      this.product = params.quote;
    }
    editProduct() {
      let product = {productName: this.product.productName, description: this.product.description, category: this.product.category };

      this.productService.editProduct(product);
      this.back();
    };
    back() {
      history.back();
    }
}
