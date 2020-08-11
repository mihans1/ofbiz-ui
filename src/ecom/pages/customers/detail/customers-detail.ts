import {Party} from "../../../model/party";
import {PartyService} from "../../../service/party-service";
import {inject} from 'aurelia-framework';
import {ContactMechService} from "../../../service/contact-mech-service";
import {PostalAddressService} from "../../../service/postal-address-service";
import {ContactMech} from "../../../model/contact-mech";
import {PostalAddress} from "../../../model/postal-address";
import {OrderAndPartyContactMechService} from "../../../service/order-and-party-contact-mech-service";
import {OrderHeaderService} from "../../../service/order-header-service";
import {TimeUtils} from "../../../util/time-utils";
import {PersonService} from "../../../service/person-service";
import {Person} from "../../../model/person";

@inject(PartyService, ContactMechService, PostalAddressService, OrderAndPartyContactMechService, OrderHeaderService, PersonService)
export class CustomersDetail {

  emailContact? = new ContactMech();
  phoneContact? = new ContactMech();
  postalAddress? = new PostalAddress();
  party?: Party = null;
  isEditingMode: boolean = false

  constructor(private partyService: PartyService,
              private contactMechService: ContactMechService,
              private postalAddressService: PostalAddressService,
              private orderAndPartyContactMechService: OrderAndPartyContactMechService,
              private orderHeaderService: OrderHeaderService,
              private personService: PersonService) {
  }

  activate(params) {
    this.loadParty(params.id)
  }

  private loadParty(id: string) {
    console.log(id)
    this.partyService.getSingle(id)
      .then((party) => {
        if (party[0]._toMany_PartyContactMech) {
          party[0]._toMany_PartyContactMech.forEach((contact) => {
            if (contact._toOne_ContactMech.contactMechTypeId === "EMAIL_ADDRESS") {
              this.emailContact = contact._toOne_ContactMech;
            } else if (contact._toOne_ContactMech.contactMechTypeId === "TELECOM_NUMBER") {
              this.phoneContact = contact._toOne_ContactMech;
            } else if (contact._toOne_ContactMech.contactMechTypeId === "POSTAL_ADDRESS") {
              this.postalAddressService.getByContactMechId(contact.contactMechId)
                .then((address) => this.postalAddress = address[0]);
            }
          });
        }
        this.party = party[0];
        this.orderAndPartyContactMechService.getForPartyId(this.party.partyId)
          .then((res) => {
            res.forEach((el) => {
              this.orderHeaderService.getSingle(el.orderId)
                .then((orderHeader) => el.__toOne_OrderHeader = orderHeader[0])
            });
            this.party.__toMany_OrderAndPartyContactMech = res;
          })
      })
      .then(() => console.log(this.party));
  }

  updateData() {
    this.isEditingMode = false;
    const newPerson = Person.fromJson(this.party._toOne_Person, Person);
    this.personService.updatePerson(newPerson)
      .then((res) => console.log(res));
  }

  formatDate(ms: number): string {
    return TimeUtils.convertDate(ms);
  }
}
