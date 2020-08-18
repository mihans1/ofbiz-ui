import { HttpClient, json } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class Productservice {
  baseUrl = 'api/generic/v1/';

  constructor(httpClient) {
    this.client = httpClient;
  }

  getProducts() {
    return this.client
      .fetch(`${this.baseUrl}entities/Product`)
      .then(response => response.json())
      .catch(reason => {
        console.error(reason);
        return [];
      });
  }

  createNewProduct(product) {
    this.client
      .fetch(`${this.baseUrl}services/createProduct`, {
        method: 'post',
        body: json(product)
      })
      .catch(reason => {
        // do something useful here
        console.error(reason);
      });
  }
  deleteProductById(id) {
    return this.client
      .fetch(
        `${this.baseUrl}entities/Product?productId=` + id,
        {
          method: "DELETE"
        }
      );
  }
  get(type) {
    return this.client
      .fetch(`${this.baseUrl}entities/` + type)
      .then(response => response.json())
      .catch(reason => {
        console.error(reason);
        return [];
      });
  }
  editProduct(product) {
    this.client
      .fetch(`${this.baseUrl}services/updateProduct`, {
        method: 'PUT',
        body: json(product)
      })
  }
}

