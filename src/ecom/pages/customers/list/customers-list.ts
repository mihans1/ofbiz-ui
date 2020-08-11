import {PartyService} from "../../../service/party-service";
import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework'
import {ContactMechService} from "../../../service/contact-mech-service";
import {Party} from "../../../model/party";
import {OrderAndPartyContactMechService} from "../../../service/order-and-party-contact-mech-service";

@inject(Router, PartyService, ContactMechService, OrderAndPartyContactMechService)
export class CustomersList {
  parties: Party[] = [];
  filteredParties: Party[] = [];
  nameFilter: string = '';

  constructor(private router: Router,
              private partyService: PartyService,
              private contactMechService: ContactMechService,
              private orderAndPartyContactMechService: OrderAndPartyContactMechService) {
    this.initParties();
  }

  initParties() {
    this.partyService.getAll()
      .then(res => {
        res.map((party) => {
          if (party._toMany_PartyContactMech) {
            party._toMany_PartyContactMech.forEach((contact) => {
              // this.contactMechService.getById(contact.contactMechId)
              //   .then((contactJson) => {
                  if (contact._toOne_ContactMech.contactMechTypeId === "EMAIL_ADDRESS"){
                    party.__toOne_EmailAddress = contact._toOne_ContactMech // Cuz aurelia
                  }
              //  });
              // Ofbiz has no relation here so we have to fetch separately
              this.orderAndPartyContactMechService.getForPartyId(party.partyId)
                .then((orders) => party.__toMany_OrderAndPartyContactMech = orders);
            });
          }
        });
        this.parties = res;
        this.filteredParties = res;
      });
  }

  onSearchFilterChanged() {
    this.filteredParties = this.parties.filter((p) => {
      return p.partyId.toLowerCase().startsWith(this.nameFilter.toLowerCase())
      || p.__toOne_EmailAddress && p.__toOne_EmailAddress.infoString.toLowerCase().includes(this.nameFilter.toLowerCase())
      || p._toOne_Person.firstName && p._toOne_Person.firstName.toLowerCase().includes(this.nameFilter.toLowerCase())
      || p._toOne_Person.lastName && p._toOne_Person.lastName.toLowerCase().includes(this.nameFilter.toLowerCase());
    });
  }

  //convertTime(ms: number) {
  //  return TimeUtils.convertDate(ms);
  //}

  onClickCustomer(party) {
    this.router.navigateToRoute('customers-detail', {id: party.partyId})
  }

  goToNewCustomer() {
    this.router.navigateToRoute('customers-new')
  }

}
