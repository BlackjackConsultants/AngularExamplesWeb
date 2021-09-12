import { Phone } from "src/app/models/phone";
import { Address } from "src/app/models/address";
import { EntityBase } from './entity-base';

export class Student extends EntityBase {
  constructor(firstName?: string) {
    super();
    this.FirstName = firstName;
  }
  FirstName?: string;
  LastName?: string;
}
