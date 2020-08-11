import {inject} from 'aurelia-framework';
import {PartyService} from "../../../service/party-service";
import {Party} from "../../../model/party";
import {Person} from "../../../model/person";
import {PersonService} from "../../../service/person-service";
import {ContactMech} from "../../../model/contact-mech";
import {ContactMechService} from "../../../service/contact-mech-service";
import {PostalAddress} from "../../../model/postal-address";
import {PostalAddressService} from "../../../service/postal-address-service";
import {CountryCodeService} from "../../../service/country-code-service";
import {CountryCode} from "../../../model/country-code";

@inject(PartyService, PersonService, ContactMechService, PostalAddressService, CountryCodeService)
export class CustomersNew {
  party = new Party();
  person = new Person();
  emailContact = new ContactMech();
  phoneContact = new ContactMech();
  postalAddress = new PostalAddress();
  countryCodes: CountryCode[] = [];

  constructor(private partyService: PartyService,
              private personService: PersonService,
              private contactMechService: ContactMechService,
              private postalAddressService: PostalAddressService,
              private countryCodeService: CountryCodeService) {
    this.countryCodeService.getAll()
      .then((codes) => this.countryCodes = codes);
  }

  createParty() {
    this.personService.createPerson(this.person)
      .then((res) => {
        this.person.partyId = res.partyId;

        this.emailContact.partyId = res.partyId;
        this.emailContact.contactMechTypeId = "EMAIL_ADDRESS"

        this.phoneContact.partyId = res.partyId;
        this.phoneContact.contactMechTypeId = "TELECOM_NUMBER";

        console.log(this.emailContact)

        this.contactMechService.createPartyContactMech(this.emailContact)
          .then((resp) => console.log(resp));

        this.contactMechService.createPartyContactMech(this.phoneContact)
          .then((resp) => console.log(resp));

        this.postalAddress.partyId = res.partyId;
        this.postalAddressService.createPartyPostalAddress(this.postalAddress)
          .then((resp) => console.log(resp));
      });
  }

  private createRelatedEntities(party: Party) {
    this.person.partyId = party.partyId;
    this.personService.createPerson(this.person)
      .then((res) => console.log(res));

    // TODO CONTACT/ADDRESS - phone, email and address fields
  }
}
