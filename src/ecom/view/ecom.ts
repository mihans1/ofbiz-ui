import { autoinject } from "aurelia-framework";
import {PLATFORM} from 'aurelia-pal';
import {RouterConfiguration, Router} from 'aurelia-router';
import 'bootstrap';
import 'bootstrap-select'
//import 'aurelia-bootstrap-select/dist/amd/bootstrap-select-bs4.css'

@autoinject
export class ecom {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    console.log('configureRouter');
    this.router = router;
    config.title = "Router Test";
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      {route:[ "", "home"], name: 'home', moduleId: PLATFORM.moduleName('pages/index/index'), nav: false, title:'Home'},
      {route:[ "dashboard", "dashboard"], name: 'dashboard', moduleId: PLATFORM.moduleName('pages/dashboard/dashboard'), nav: false, title:'Dashboard'},
      {route:[ "products", "products"], name: 'products', moduleId: PLATFORM.moduleName('pages/products/products'), nav: false, title:'Products'},
      {route:[ "orders", "orders"], name: 'orders', moduleId: PLATFORM.moduleName('pages/orders/orders'), nav: false, title:'Orders'},
      {route:[ "customers"], name: 'customers', moduleId: PLATFORM.moduleName('pages/customers/customers'), nav: false, title:'Customers'},
      {route:[ "categories"], name: 'categories', moduleId: PLATFORM.moduleName('pages/categories/categories'), nav: false, title:'Categories'},
    ]);

    this.router = router;
    this.router.refreshNavigation();

  }
}
