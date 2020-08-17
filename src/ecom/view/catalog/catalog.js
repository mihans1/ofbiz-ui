import { PLATFORM } from 'aurelia-pal';

export class catalog {
  configureRouter(config, router) {
    config.title = 'Catalog';
    config.options.pushState = true;
    // config.options.root = '/';
    config.map([
      { route: '', redirect: 'listview' },
      { route: 'listview', moduleId: PLATFORM.moduleName('ecom/components/catalog/listview/listview'), name: 'listview' },
      { route: 'cardview', moduleId: PLATFORM.moduleName('ecom/components/catalog/cardview/cardview'), name: 'cardview' },
      { route: 'product-edit', moduleId: PLATFORM.moduleName('ecom/components/catalog/product-edit/product-edit'), name: 'product-edit' },
    ]);
    this.router = router;
  }
}
