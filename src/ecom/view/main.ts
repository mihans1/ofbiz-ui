import {Aurelia} from 'aurelia-framework';
import * as environment from '../config/environment.json';
import {PLATFORM} from 'aurelia-pal';
import 'bulma-helpers/css/bulma-helpers.min.css'
import "smart-webcomponents-community/source/styles/smart.default.css";
import "bulma/css/bulma.min.css";
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'aurelia-bootstrap-select/dist/amd/bootstrap-select-bs4.css';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use
    .plugin(PLATFORM.moduleName('aurelia-bootstrap-select'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
