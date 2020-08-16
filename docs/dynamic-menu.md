# Dynamic Menu Guide

## Register you product in `applications.json` e.g (Temporary solution with static resources):
```json
  {
    "name": "project",
    "url": "project",
    "title": "Projects"
  },
```
*url attribute represents the path to your main screen.*

Set you fontawesome icon in `button-icon.js`.

## Introduce child router to your module. In the parent router config `ecom.js` you simply link to a view model that is itself a router.

`ecom.js` (parent router):
```javascript
{
    route: 'project',
    moduleId: PLATFORM.moduleName('project/project'),
    name: 'project',
    title: 'Projects'
},
```
**Please note that name of this parent route must match your product name defined in `applications.json`.**

Define child routes in routes object in `navigation-service.js` e.g:
```javascript
const routes = {
  project: [
    {
      route: '',
      moduleId: PLATFORM.moduleName('project/components/project-list'),
      name: 'project',
      nav: true,
      title: 'Projects'
    },
    {
      route: 'new-orders',
      moduleId: PLATFORM.moduleName('project/orders/components/orders-edit'),
      name: 'new-orders',
      nav: true,
      title: 'My Tasks'
    },
    {
      route: 'project/:id',
      moduleId: PLATFORM.moduleName('project/orders/components/orders-list'),
      name: 'project-view'
    },
    {
      route: 'new-project',
      moduleId: PLATFORM.moduleName('project/components/project-edit'),
      name: 'new-project',
      title: 'Create Project'
    }
  ],
  crm: [
    { route: '', redirect: 'pipeline' },
    {
      route: 'pipeline',
      moduleId: PLATFORM.moduleName('crm/components/pipeline/pipeline'),
      name: 'pipeline',
      title: 'CRM',
      nav: true
    },
    {
      route: 'listview',
      moduleId: PLATFORM.moduleName('crm/components/listview/listview'),
      name: 'listview'
    },
    {
      route: 'cardview',
      moduleId: PLATFORM.moduleName('crm/components/cardview/cardview'),
      name: 'cardview'
    }]
};
```
Provide a title and set `nav: true` for routes, you want to be displayed in the navbar.

Inject the `NavigationService` in your child router component and get routes for your ecom e.g:
`project.js` (child router):
```javascript
import { inject } from 'aurelia-dependency-injection';
import { NavigationService } from '../commons/services/navigation-service';

@inject(NavigationService)
export class ProjectMainComponent {
  constructor(navigationService) {
    this.navigationService = navigationService;
    this.navigationService
      .getRoutes('crm') // your project name here
      .then((response) => (this.routes = response));
  }

  configureRouter(config) {
    config.options.pushState = true;
    config.options.root = '/';
    config.map(this.routes);
  }
}
```
The routes from the injected service will also be used in the navbar.

This approach will also keep `ecom.js` clean from child routes as the ecom will grow larger.








