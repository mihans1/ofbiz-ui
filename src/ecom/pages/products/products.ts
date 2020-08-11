import { PLATFORM } from 'aurelia-pal';
import {Router} from "aurelia-router";

export class Products {
  router: Router;

  configureRouter(config, router) {
    config.title = 'Products';
    config.options.pushState = true;
    // config.options.root = '/';
    config.map([
      { route: ['', 'list'], moduleId: PLATFORM.moduleName('./list/products'), name: 'list' },
      { route: ['/:id/detail'], moduleId: PLATFORM.moduleName('./detail/detail'), name: 'detail' },
      { route: ['new', 'new'], moduleId: PLATFORM.moduleName('./new/new'), name: 'new' },
    ]);
    this.router = router;
  }
}
