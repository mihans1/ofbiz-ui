import {autoinject} from "aurelia-framework";
import {HttpClient, json} from "aurelia-fetch-client";
import {Model} from "../model/model";

/**
 * Copyright (C) Tavo Annus - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Tavo Annus <tavo.annus@gmail.com>, April 2020
 */

const bearerTokenPrefix = 'Bearer '
const noExpirationToken = 'eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0.8Xq0_kK9A1Y62bXtayGkcg0H9LtgOGEhB3Fx7fuV0GkfV9Q-Ily7uQ.UhkdE8uRn57L4MyPmzprTA.1SU6NYhi2ZvcgPnKWBSCBpSvL5cToxzI557FZnTQ8d_pFAHHsvqIlpgoaiB3FviVSncFqxe_GGXoisoxU8Pk9g3Czwhlskxe_xyPC5pwMhw2m4pe12JhPRmQk0vPrGwODaOdd7hZi94Q_VTVmbb-wkOT968fvkaCN9Wa32ASqdk7AP6lMI27GX3GxUAafeKYtple-9NP6MywTj5fQJRb5g-aL_VLx_NM3rX-7Tn17WT-IiFjLegnb5G6SZsZPL49z5OuKCCMQ1sTKbsaw9y2VbM7ojwaSqSdfNSfGVBDSw77cFpyfmxoFhEHSrErAmPlPIZ7k1nTFORguHFvVAqOEQ26UEg6gWhRRbmgv1elg8c.u5VMkqozNDVbSlDTDtSqRQ'

@autoinject
export class Service<T extends Model> {
  constructor(protected http: HttpClient) {
    this.http.configure(config => {
      config
        .withBaseUrl('/api/generic/v1')
        .withDefaults({
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch',
            'Authorization': bearerTokenPrefix + noExpirationToken
          }
        })
        .withInterceptor({
          request(request) {
            console.info(`Requesting ${request.method} ${request.url}`);
            //request.headers.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyTG9naW5JZCI6ImFkbWluIiwiaXNzIjoiQXBhY2hlT0ZCaXoiLCJleHAiOjE1ODc4NDI5OTk5OTk3MTgsImlhdCI6MTU4Nzg0MDkxOH0.3hZCbPuEoqQOUTYws1UtPToVuCZrQfaAVYkZIkPvAVd3m1cN-scUpIYErZFGTmMMfYHTEoMlbNlTG5l2GfkDVg")
            return request;
          },
          response(response) {
            console.info(`Received ${response.status} ${response.url}`);
            return response;
          }
        });
    });
  }

  protected formatUrl(url: string, params: Object): string {
    const esc = encodeURIComponent;
    const query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');
    return query.length > 0 ? url + '?' + query : url;
  }

  /**
   *
   * @param url backend url
   * @param converter converter to convert json response to ts object
   * @param params json object with query params
   */
  get<U extends T | T[]>(url: string, converter: (json: Object | Object[]) => U, params: Object = {}): Promise<U> {
    const formattedUrl = this.formatUrl(url, params);
    return this.http.fetch(formattedUrl)
      .then((response) => response.json())
      .then((json) => converter(json));
  }

  /**
   *
   * @param url backend url
   * @param data data to send (should extend model class)
   * @param converter converter to use for de-serializing response
   */
  post(url: string, data: T, converter: (json: Object) => T): Promise<T> {
    const jsonData = data.getPreparedJson();
    console.log("POST data:", jsonData, url);
    jsonData['login.username'] = "admin";
    jsonData['login.password'] = "ofbiz";
    return this.http.fetch(url, {
      method: 'post',
      body: json(jsonData) // <- needed to remove related entities
    })
      .then(response => response.json())
      .then((json) => converter(json));
  }

  /**
   *
   * @param url backend url
   * @param data data to upload (should extend model class)
   * @param converter converter to use converting response back to ts object
   */
  put(url: string, data: T, converter: (json: Object) => T): Promise<T> {
    console.log("PUT data:", json(data));
    data['login.username'] = "admin";
    data['login.password'] = "ofbiz";
    return this.http.fetch(url, {
      method: 'put',
      body: json(data.getPreparedJson()) // <- needed to remove related entities
    })
      .then(response => response.json())
      .then((json) => converter(json));
  }

  // ==================================== NOT RECOMMENDED SECTION ======================================

  /**
   * Gives way more power than normal get. WE DO NOT RECOMMEND TO USE as this is more of a bad practice.
   * Use PHP instead. Only here cuz Ahto insists. (And well, it is easy to use)
   *
   * @param url Url of data source
   * @param converter Either array or single object converter (see @Model)
   * @param params So-called REST params, aka fields to fetch / related entities
   */
  entityQuery<U extends T | T[]>(url: string, converter: (json: Object | Object[]) => U, params: Object = {}): Promise<U> {
    return this.http.fetch(url, {
      method: 'post',
      body: json(params)
    })
      .then((response) => response.json())
      .then((json) => converter(json));
  }
}
