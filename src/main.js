import 'regenerator-runtime/runtime';
import * as environment from '../config/environment.json';
import { PLATFORM } from 'aurelia-pal';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '@progress/kendo-ui/js/kendo.all';
import '@progress/kendo-ui/css/web/kendo.common.min.css';
import '@progress/kendo-ui/css/web/kendo.bootstrap.min.css';
import { initialState } from './store/store';
import '@vaadin/vaadin';
import 'bulma-helpers/css/bulma-helpers.min.css';
import 'smart-webcomponents-community/source/styles/smart.default.css';
import 'bulma/css/bulma.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'aurelia-bootstrap-select/dist/amd/bootstrap-select-bs4.css';


export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .globalResources([
      PLATFORM.moduleName('commons/converters/status-badge'),
      PLATFORM.moduleName('commons/converters/status')
    ])
    .plugin(PLATFORM.moduleName('aurelia-fontawesome'))
    .plugin(PLATFORM.moduleName('aurelia-dialog'))
    .plugin(PLATFORM.moduleName('aurelia-validation'))
    .plugin(PLATFORM.moduleName('aurelia-store'), { initialState })
    .plugin(PLATFORM.moduleName('bcx-aurelia-reorderable-repeat'))
    .plugin(PLATFORM.moduleName('aurelia-kendoui-bridge'))
    .plugin(PLATFORM.moduleName('au-table'))
    .plugin(PLATFORM.moduleName('aurelia-bootstrap-select'))
    .plugin(PLATFORM.moduleName('aurelia-cookie'));

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }
  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
