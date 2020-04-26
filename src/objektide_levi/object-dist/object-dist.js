import {HttpClient, json} from 'aurelia-fetch-client';
import {Router} from 'aurelia-router';
import {inject} from 'aurelia-dependency-injection';
import {v1 as uuidv1} from 'uuid';
import {QueryBuilder} from "./query-builder/query-builder";
import toWords from 'split-camelcase-to-words';

@inject(QueryBuilder)
export class ObjectDist {

  httpClient = new HttpClient();
  queryBuilder;
  selectedEntity;

  dataTypeMapping = {
    "ofbiz": "dataType",
    "id": "number",
    "id-long": "number",
    "id-vlong": "number",
    "numeric": "number",
    "date": "datetime",
    "date-time": "datetime",
    "description": "string",
    "currency-amount": "number",
    "indicator": "boolean",
    "short-varchar": "string",
    "long-varchar": "string",
    "very-long": "string",
    "very-short": "string",
    "comment": "string"
  }

  constructor(queryBuilder) {
    this.setHTTPClient();
    this.fetchPublishers();
    this.fetchSubscribers();
    this.fetchOfbizEntities();
    this.queryBuilder = queryBuilder;
  }

  attached() {
    this.queryBuilderLoad();
  }

  queryBuilderLoad() {

    let queryBuilders = document.querySelectorAll('smart-query-builder');
    for (let queryBuilder of queryBuilders) {
      queryBuilder.addEventListener('click', function() {
        var list = this.getElementsByClassName('smart-conditions-menu');
        var elements = this.getElementsByClassName('smart-element smart-menu-item smart-unselectable');
        for (let item of list) {
          if (item.style.left === '38px') {
            for (let element of elements) {
              if (element.value === 'or') {
                element.style.display = 'none';
              } else {
                element.style.display = '';
              }
            }
          } else if (item.style.left === '11px') {
            for (let element of elements) {
              element.style.display = '';
            }
          }
        }
      });
    }
  }

  setHTTPClient() {
    this.httpClient.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://localhost:8443/api/')
        .withDefaults({
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .withInterceptor({
          request(request) {
            console.log(`Requesting ${request.method} ${request.url}`);
            return request;
          },
          response(response) {
            console.log(`Received ${response.status} ${response.url}`);
            return response;
          }
        });
    });
  }

  addEventListeners(isPublisher) {
    let entity = document.getElementById("publisherEntitiesSelect");
    if (!isPublisher) {
      entity = document.getElementById("subscriberEntitiesSelect");
    }
    let _self = this;
    entity.addEventListener("click", function () {
      let options = entity.querySelectorAll("option");
      let count = options.length;
      if (typeof (count) === "undefined" || count < 2) {
        if (isPublisher) {
          addActivityItemPublisher();
        } else {
          addActivityItemSubscriber();
        }
      }
    });

    entity.addEventListener("change", function () {
      if (isPublisher) {
        addActivityItemPublisher();
      } else {
        addActivityItemSubscriber();
      }
    });

    function addActivityItemPublisher() {
      _self.clearFields();
      _self.selectedEntity = document.getElementById("publisherEntitiesSelect").options[document.getElementById("publisherEntitiesSelect").selectedIndex].text;
      _self.getEntityFields(true);
    }

    function addActivityItemSubscriber() {
      _self.clearFields();
      _self.selectedEntity = document.getElementById("subscriberEntitiesSelect").options[document.getElementById("subscriberEntitiesSelect").selectedIndex].text;
      _self.getEntityFields(false);
    }
  }

  getEntityFields(isPublisher) {
    this.fetchOfbizEntityFields(isPublisher);
  }

  fetchPublishers() {
    this.httpClient.fetch('objectdist/publishers')
      .then(response => response.json())
      .then(data => {
        this.populatePublishers(data);
      });
  }

  fetchOfbizEntityFields(isPublisher) {
    this.httpClient.fetch('generic/v1/structure/entities/' + this.selectedEntity)
      .then(response => response.json())
      .then(data => {
        let customFields = []
        data.sort(function(a, b) {
          let textA = a.name.toUpperCase();
          let textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        for (let field of data) {
          customFields.push({
            label: toWords(field.name),
            dataField: field.name,
            dataType: this.dataTypeMapping[field.type],
            filterOperations: ["="] // ONLY "EQUALS" OPERATOR AVAILABLE
          })
        }
        const queryBuilders = document.querySelectorAll('smart-query-builder');
        if (isPublisher) {
          queryBuilders[1].fields = customFields;
        } else {
          queryBuilders[0].fields = customFields;
        }
      });
  }

  fetchOfbizEntities() {
    this.httpClient.fetch('generic/v1/structure/entities/')
      .then(response => response.json())
      .then(data => {
        this.populateSubscriberEntitiesDropdown(data);
        this.populatePublisherEntitiesDropdown(data);
        this.fetchOfbizEntityFields(false);
        this.fetchOfbizEntityFields(true);
      });
  }

  populateSubscriberEntitiesDropdown(data) {
    let select = document.getElementById('subscriberEntitiesSelect');
    for (let entity of data) {
      let opt = document.createElement('option');
      opt.value = entity;
      opt.innerHTML = entity;
      select.appendChild(opt);
    }
    this.addEventListeners(false);
    this.selectedEntity = document.getElementById("subscriberEntitiesSelect").options[document.getElementById("subscriberEntitiesSelect").selectedIndex].text;
  }

  populatePublisherEntitiesDropdown(data) {
    let select = document.getElementById('publisherEntitiesSelect');
    for (let entity of data) {
      let opt = document.createElement('option');
      opt.value = entity;
      opt.innerHTML = entity;
      select.appendChild(opt);
    }
    this.addEventListeners(true);
    this.selectedEntity = document.getElementById("publisherEntitiesSelect").options[document.getElementById("publisherEntitiesSelect").selectedIndex].text;
  }

  populatePublishers(data) {
    let table = document.getElementById('publisherTable');
    for (let entry in data) {  // currently duplicate with populateSubscribers, will change in future
      if (data.hasOwnProperty(entry)) {
        let content = data[entry];
        let row = table.insertRow();

        let cell1 = row.insertCell(0);
        cell1.className = 'text-center';
        cell1.innerHTML = content.entityName;

        let cell2 = row.insertCell(1);
        cell2.className = 'text-center';
        cell2.innerHTML = content.description;

        let cell3 = row.insertCell(2);
        cell3.innerHTML = '<td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editPublisher" style="margin: 2% 0 2% 0" id="publisher_' + content.publisherId + '">EDIT</button> / <button type="button" class="btn btn-primary" style="margin: 2% 0 2% 0" id="publisherDelete_' + content.publisherId + '">Delete</button></td>';
        cell3.className = 'text-center';
        let self = this;
        document.getElementById("publisher_" + content.publisherId).addEventListener('click', function (event) {
          self.httpClient.fetch('generic/v1/entities/OfbizPublisher?OfbizPublisherId=' + event.target.id.substring(10))
            .then(response => response.json())
            .then(data => {
              self.editSubscriber(data);
            });
        });
        document.getElementById("publisherDelete_" + content.publisherId).addEventListener('click', function (event) {
          self.httpClient.delete('objectdist/publishers/delete/' + event.target.id.substring(16)).then(r => {
            self.refreshPage();
          });
        });
      }
    }
  }

  populateSubscribers(data) {
    let table = document.getElementById('subscriberTable');
    for (let entry in data) {
      if (data.hasOwnProperty(entry)) {
        let content = data[entry];
        let row = table.insertRow();

        let cell1 = row.insertCell(0);
        cell1.className = 'text-center';
        cell1.innerHTML = content.entityName;

        let cell2 = row.insertCell(1);
        cell2.className = 'text-center';
        cell2.innerHTML = content.description;

        let cell3 = row.insertCell(2);
        cell3.innerHTML = '<td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editSubscriber" style="margin: 2% 0 2% 0" id="subscriber_' + content.subscriberId + '">EDIT</button> / <button type="button" class="btn btn-primary" style="margin: 2% 0 2% 0" id="subscriberDelete_' + content.subscriberId + '">Delete</button></td>';
        cell3.className = 'text-center';
        let self = this;
         document.getElementById("subscriber_" + content.subscriberId).addEventListener('click', function (event) {
           self.httpClient.fetch('generic/v1/entities/OfbizSubscriber?OfbizSubscriberId=' + event.target.id.substring(11))
               .then(response => response.json())
               .then(data => {
                 self.editSubscriber(data);
               });
         });
        document.getElementById("subscriberDelete_" + content.subscriberId).addEventListener('click', function (event) {
          self.httpClient.delete('objectdist/subscribers/delete/' + event.target.id.substring(17)).then(r => {
            self.refreshPage()
          });
        });
      }
    }
  }

  editSubscriber(subscriber) {
    let entity = subscriber[0];
    let builder = document.querySelectorAll('smart-query-builder')[1];
    let filterJson = JSON.parse(entity.filter);
    let builderValues = [];
    for (let entry in filterJson) {
      let list = [];
      for(let property in filterJson[entry]) {
        list.push([toWords(property), "=", filterJson[entry][property][0]])
        list.push("and");
      }
      list.pop()
      builderValues.push(list);
    }

    document.getElementById('editSubscriberName').value = entity.OfbizEntityName;
    document.getElementById('editSubscriberTopic').value = entity.topic;
    document.getElementById('editSubscriberDescription').value = entity.description;
    builder.value = builderValues;
  }

  fetchSubscribers() {
    this.httpClient.fetch('objectdist/subscribers')
      .then(response => response.json())
      .then(data => {
        this.populateSubscribers(data);
      });
  }

  makePostSubscriberPublisher(data, url) {
    this.httpClient.fetch(url, {
      method: 'post',
      body: data
    }).then(r => {
      this.refreshPage();
    });
  }

  subscriberPostRequest() {
    let data = {
      'OfbizSubscriberId': '0',
      'OfbizEntityName': this.selectedEntity,
      'topic': document.getElementById('subscriberTopic').value,
      'description': document.getElementById('subscriberDescription').value,
      'filter': this.getFilterFromComponent(false)
    };
    this.makePostSubscriberPublisher(JSON.stringify(data), 'subscribers/create');
  }

  publisherPostRequest() {
    let data = {
      'OfbizPublisherId': '0',
      'OfbizEntityName': this.selectedEntity,
      'topic': document.getElementById('publisherTopic').value,
      'description': document.getElementById('publisherDescription').value,
      'filter': this.getFilterFromComponent(true)
    };
    this.makePostSubscriberPublisher(JSON.stringify(data), 'publishers/create');
  }

  refreshPage() {
    location.reload();
  }

  getFilterFromComponent(isPublisher) {
    const queryBuilders = document.querySelectorAll('smart-query-builder');
    let queryBuilder = queryBuilders[0];
    if (isPublisher) {
      queryBuilder = queryBuilders[1];
    }
    let queryArray = queryBuilder.value;
    let filters = [];
    for (let i = 0; i < queryArray.length; i++) {
      if (typeof queryArray[i] == "object") {
        let filter = {};
        for (let j = 0; j < queryArray[i].length; j++) {
          const data = queryArray[i][j];
          if (typeof data == "object") {
            // filter[data[0]] = [data[1], data[2]];
            filter[data[0]] = [data[2]];
          }
        }
        filters.push(filter)
      }
    }
    return JSON.stringify(filters);
  }

  generateKey() {
    return uuidv1();
  }

  generatePublisherTopic() {
    document.getElementById('publisherTopic').value = this.generateKey();
  }

  clearFields() {
    const queryBuilders = document.querySelectorAll('smart-query-builder');
    for (let queryBuilder of queryBuilders) {
      queryBuilder.value = [];
    }
  }
}
