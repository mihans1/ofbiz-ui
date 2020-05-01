import "./becomePartner.scss"
import { inject } from 'aurelia-framework';
import { bindable } from "aurelia-templating";
import { AffManagerService } from "../../../services/affManagerService";

@inject(AffManagerService)
export class BecomePartner {

  @bindable guest;
  becomePartnerError;
  becomePartnerSuccess;

  constructor(affManagerService) {
    this.affManagerService = affManagerService;
  }

  async becomeAffPartner() {
    const response = await this.affManagerService.becomeAffPartner();
    if (response && response.ok) {
      this.setBecomePartnerSuccess(true);
      return
    }
    this.setBecomePartnerError(true);
  }

  setBecomePartnerError(value) {
    this.becomePartnerError = value;
  }

  setBecomePartnerSuccess(value) {
    this.becomePartnerSuccess = value;
  }

}
