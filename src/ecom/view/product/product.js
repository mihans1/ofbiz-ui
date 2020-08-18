import { PLATFORM } from 'aurelia-pal';

export class product {
  configureRouter(config, router) {
    config.title = 'Product';
    config.options.pushState = true;
    // config.options.root = '/';
    config.map([
      { route: '', redirect: 'listview' },
      { route: 'listview', moduleId: PLATFORM.moduleName('ecom/components/product/listview/listview'), name: 'listview' },
      { route: 'cardview', moduleId: PLATFORM.moduleName('ecom/components/product/cardview/cardview'), name: 'cardview' },
      { route: 'product-edit', moduleId: PLATFORM.moduleName('ecom/components/product/product-edit/product-edit'), name: 'product-edit' },
    ]);
    this.router = router;
  }
}
