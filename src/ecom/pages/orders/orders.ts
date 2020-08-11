import { PLATFORM } from 'aurelia-pal';
import {Router} from "aurelia-router";

export class Products {
  router: Router;

  configureRouter(config, router) {
    config.title = 'Orders';
    config.options.pushState = true;
    // config.options.root = '/';
    config.map([
      { route: ['', 'list'], moduleId: PLATFORM.moduleName('./list/orders'), name: 'list' },
      { route: ['/new'], moduleId: PLATFORM.moduleName('./new/new-order'), name: 'new' },
      { route: ['/:id/detail'], moduleId: PLATFORM.moduleName('./detail/orders-detail'), name: 'detail' },
    ]);
    this.router = router;
  }
}
