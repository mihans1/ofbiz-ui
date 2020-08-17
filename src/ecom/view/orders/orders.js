import { PLATFORM } from 'aurelia-pal';

export class Orders {
  configureRouter(config, router) {
    config.title = 'Orders';
    config.options.pushState = true;
    config.map([
      { route: '', redirect: 'listview' },
      { route: 'listview', moduleId: PLATFORM.moduleName('ecom/components/order/listview/listview'), name: 'listview' },
      { route: 'cardview', moduleId: PLATFORM.moduleName('ecom/components/order/cardview/cardview'), name: 'cardview' },
      { route: 'order-edit', moduleId: PLATFORM.moduleName('ecom/components/order/order-edit/order-edit'), name: 'order-edit' },
    ]);
    this.router = router;
  }
}
