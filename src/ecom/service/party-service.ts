import {Service} from "./service";
import {Party} from "../model/party";
import {Model} from "../model/model";

export class PartyService extends Service<Party> {

  getAll(): Promise<Party[]> {
    return this.entityQuery<Party[]>("/entityquery/Party",
      (data) => Model.arrayFromJson(data as Object[], Party),
      {
        "inputFields": {
          "partyTypeId": "PERSON"
        },
        "fieldList": ["partyId", "createdStamp", "status"],
        "entityRelations": {
          "_toOne_Person": {
            "fieldList": ["lastName", "firstName"]
          },
          "_toMany_PartyContactMech": {
            "entityRelations" : {
              "_toOne_ContactMech": {
                "fieldList": ["contactMechTypeId", "infoString"]
              }
            }
          }
        }
      }
    );
  }

  createParty(party: Party): Promise<Party> {
    return this.post("/services/createParty",
      party,
      (data) => Model.fromJson(data as Object[], Party)
    );
  }

  getSingle(id: string): Promise<Party[]> {
    return this.entityQuery<Party[]>("/entityquery/Party",
      (data) => Model.arrayFromJson(data as Object[], Party),
      {
        "inputFields": {
          "partyId": id
        },
        "fieldList": ["partyId", "createdStamp", "status", "partyTypeId"],
        "entityRelations": {
          "_toOne_Person": {
            "fieldList": ["lastName", "firstName"]
          },
          "_toMany_PartyContactMech": {
            "entityRelations" : {
              "_toOne_ContactMech": {
                "fieldList": ["contactMechTypeId", "infoString"]
              }
            }
          }
        }
      }
    );
  }
}
