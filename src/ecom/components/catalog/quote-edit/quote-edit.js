import { inject } from 'aurelia-framework';
import { Productservice } from '../../../service/productservice';

@inject(Productservice)
export class QuoteEdit {
    constructor(quoteService) {
      this.quoteService = quoteService;
    }

    attached() {
      this.quotes = this.quoteService.getQuotes();
      this.parties = this.quoteService.get("Party");
    }

    activate(params, routeConfig, navigationInstruction) {
      this.quote = params.quote;
    }
    editQuote() {
      let quote = {quoteId: this.quote.quoteId, quoteName: this.quote.quoteName, partyId: this.quote.partyId };

      this.quoteService.editQuote(quote);
      this.back();
    };
    back() {
      history.back();
    }
}
