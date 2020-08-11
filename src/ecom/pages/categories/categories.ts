import { PLATFORM } from 'aurelia-pal';
import {Router} from "aurelia-router";
import {ProductCategory} from "../../model/product-category";

export class Categories {
  router: Router;
  category = new ProductCategory();

  configureRouter(config, router) {
    config.title = 'Categories';
    config.options.pushState = true;
    // config.options.root = '/';
    config.map([
      { route: ['', 'list'], moduleId: PLATFORM.moduleName('./list/list'), name: 'list' },
      { route: ['/:id/detail'], moduleId: PLATFORM.moduleName('./detail/detail'), name: 'detail' },
      { route: ['new'], moduleId: PLATFORM.moduleName('./new/new'), name: 'new' },
    ]);
    this.router = router;
  }
}
