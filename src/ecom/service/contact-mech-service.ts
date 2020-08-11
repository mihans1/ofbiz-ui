import {Model} from "../model/model";
import {Service} from "./service";
import {ContactMech} from "../model/contact-mech";

export class ContactMechService extends Service<ContactMech> {

  getAll(): Promise<ContactMech[]> {
    return this.get<ContactMech[]>("/entities/ContactMech",
      (data) => Model.arrayFromJson(data as Object[], ContactMech));
  }

  getById(id: string): Promise<ContactMech[]> {
    return this.get<ContactMech[]>("/entities/ContactMech",
      (data) => Model.arrayFromJson(data as Object[], ContactMech),
      {contactMechId: id}
    );
  }

  createPartyContactMech(contactMech: ContactMech): Promise<ContactMech> {
    return this.post("/services/createPartyContactMech",
      contactMech,
      (data) => Model.fromJson(data as Object, ContactMech)
    );
  }

  updateContactMech(contactMech: ContactMech): Promise<ContactMech> {
    return this.post("/services/updateContactMech",
      contactMech,
      (data) => Model.fromJson(data as Object, ContactMech))
  }
}
