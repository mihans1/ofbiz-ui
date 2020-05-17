import * as _ from 'lodash';
import {PLATFORM} from 'aurelia-pal';

const routes = {
  'project': [
    {
      route: '',
      moduleId: PLATFORM.moduleName('project/components/project-list'),
      name: 'project',
      nav: true,
      title: 'Projects'
    },
    {
      route: 'my-tasks',
      moduleId: PLATFORM.moduleName('project/task/components/task-list'),
      name: 'my-tasks',
      nav: true,
      title: 'My Tasks'
    },
    {
      route: 'new-task',
      moduleId: PLATFORM.moduleName('project/task/components/task-edit'),
      name: 'new-task',
      title: 'Create Task'
    },
    {
      route: 'project/:id',
      moduleId: PLATFORM.moduleName('project/components/project-view'),
      name: 'project-view'
    },
    {
      route: 'new-project',
      moduleId: PLATFORM.moduleName('project/components/project-edit'),
      name: 'new-project',
      title: 'Create Project'
    },
    {
      route: 'resources',
      moduleId: PLATFORM.moduleName(
        'project/resource/components/resource-list'
      ),
      name: 'resource',
      title: 'Resources',
      nav: true
    },
    {
      route: 'new-resource',
      moduleId: PLATFORM.moduleName(
        'project/resource/components/resource-edit'
      ),
      name: 'new-resource'
    },
    {
      route: 'timesheets',
      moduleId: PLATFORM.moduleName(
        'project/timesheet/components/timesheet-list'
      ),
      title: 'Timesheets',
      name: 'timesheets',
      nav: true
    },
    {
      route: 'timesheet',
      moduleId: PLATFORM.moduleName(
        'project/timesheet/components/timesheet-view'
      ),
      title: 'My Time',
      name: 'my-timesheet',
      nav: true
    },
    {
      route: 'timesheet/:id',
      moduleId: PLATFORM.moduleName(
        'project/timesheet/components/timesheet-view'
      ),
      name: 'timesheet-view'
    },
    {
      route: 'new-timesheet',
      moduleId: PLATFORM.moduleName(
        'project/timesheet/components/timesheet-edit'
      ),
      title: 'Create timesheet',
      name: 'new-timesheet'
    },
    {
      route: 'new-time',
      moduleId: PLATFORM.moduleName(
        'project/timesheet/components/my-task-time'
      ),
      title: 'My Task Time',
      name: 'new-time'
    }
  ],
  'sfa': [
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
    }
  ],
  'crm': [], // TODO: add crm child routes here
  'cms': [], // TODO: add cms child routes here
  'marketdata': [], // TODO: add marketdata child routes here
  'object-dist': [] // TODO: add objectdist child routes here
};

export class NavigationService {
  getRoutes(app) {
    return new Promise((resolve) => {
      resolve(_.cloneDeep(routes[app]));
    });
  }
}
