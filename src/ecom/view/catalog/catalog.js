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
      { route: 'quote-edit', moduleId: PLATFORM.moduleName('ecom/components/catalog/quote-edit/quote-edit'), name: 'quote-edit' },
    ]);
    this.router = router;
  }
}
