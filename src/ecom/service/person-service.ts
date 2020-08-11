import {Service} from "./service";
import {Model} from "../model/model";
import {Person} from "../model/person";

export class PersonService extends Service<Person> {
  getAll(): Promise<Person[]> {
    return this.get<Person[]>("/entities/Person",
      (data) => Model.arrayFromJson(data as Object[], Person),
      {_depth: 1}
    );
  }

  createPerson(person: Person): Promise<Person> {
    return this.post("/services/createPerson",
      person,
      (data) => Model.fromJson(data as Object[], Person)
    );
  }

  getSingle(id: string): Promise<Person[]> {
    return this.get<Person[]>("/entities/Person",
      (data) => Model.arrayFromJson(data as Object[], Person),
      {productId: id, _depth: 1}
    );
  }

  updatePerson(person: Person): Promise<Person> {
    return this.post("/services/updatePerson",
      person,
      (data) => Model.fromJson(data as Object[], Person))
  }
}
