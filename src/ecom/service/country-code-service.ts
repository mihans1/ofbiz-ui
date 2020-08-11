import {Service} from "./service";
import {Model} from "../model/model";
import {CountryCode} from "../model/country-code";

export class CountryCodeService extends Service<CountryCode> {
  getAll(): Promise<CountryCode[]> {
    return this.get<CountryCode[]>("/entities/CountryCode",
      (data) => Model.arrayFromJson(data as Object[], CountryCode)
    );
  }
}
