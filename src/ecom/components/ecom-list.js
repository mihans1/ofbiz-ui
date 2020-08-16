import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { EcomService } from '../services/ecom-service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getStatusBadge, convertStatus } from '../../commons/util/status-utils';

@inject(Router, EcomService)
export class EcomList {
  constructor(router, ecomService) {
    this.router = router;
    this.ecomService = ecomService;
    this.faPlus = faPlus;
  }

  attached() {
    const grid = document.querySelector('vaadin-grid');
    this.initGridColumns();
    this.ecomService
      .getProjectList()
      .then((response) => (grid.items = response));
  }

  initGridColumns() {
    const columns = document.querySelectorAll('vaadin-grid-column');
    columns[0].renderer = (root, column, rowData) => {
      const ecomId = rowData.item.projectId;
      root.innerHTML = `<a href="javascript:void(0);">${ecomId}<a/>`;
      root.addEventListener('click', () => this.handleSelectProject(ecomId));
    };

    columns[2].renderer = (root, column, rowData) => {
      const status = rowData.item.currentStatusId;
      root.innerHTML = `
          <span class="badge ${getStatusBadge(status)}">
            ${convertStatus(status)}
          </span >
        `;
    };
  }

  handleSelectProject(ecomId) {
    this.router.navigateToRoute('ecom-view', { id: ecomId });
  }

  handleAddProject() {
    this.router.navigate('new-project');
  }
}
