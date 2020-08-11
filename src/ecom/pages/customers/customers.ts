
import { PLATFORM } from 'aurelia-pal';
import {Router} from "aurelia-router";

export class Customers {
  router: Router;

  configureRouter(config, router) {
    config.title = 'Customers';
    config.options.pushState = true;
    // config.options.root = '/';
    config.map([
      { route: [''], moduleId: PLATFORM.moduleName('./list/customers-list'), name: 'list' },
      { route: ['/:id/detail'], name: 'customers-detail', moduleId: PLATFORM.moduleName('./detail/customers-detail'), nav: false, title:'Detail'},
     { route: ['/new'], name: 'customers-new', moduleId: PLATFORM.moduleName('./new/customers-new'), nav: false, title:'New'},
    ]);
    this.router = router;
  }
}
