import { PLATFORM } from 'aurelia-pal';

export class Customers {
  configureRouter(config, router) {
    config.title = 'Customer';
    config.options.pushState = true;
    // config.options.root = '/';
    config.map([
      { route: '', redirect: 'pipeline' },
      { route: 'pipeline', moduleId: PLATFORM.moduleName('ecom/components/customer/pipeline/pipeline'), name: 'pipeline' },
      { route: 'listview', moduleId: PLATFORM.moduleName('ecom/components/customer/listview/listview'), name: 'listview' },
      { route: 'cardview', moduleId: PLATFORM.moduleName('ecom/components/customer/cardview/cardview'), name: 'cardview' },
      { route: 'opportunity-edit', moduleId: PLATFORM.moduleName('ecom/components/customer/opportunity-edit/opportunity-edit'), name: 'opportunity-edit' },
      { route: 'formview', moduleId: PLATFORM.moduleName('ecom/components/customer/formview/formview'), name: 'formview' },
    ]);
    this.router = router;

  }
}
