import { Phone } from 'src/app/models/phone';
import { Address } from 'src/app/models/address';

export class Contact {
  constructor(contact?: any) {
    this.FirstName = contact?.firstName;
    this.LastName = contact?.LastName;
    this.alias = contact?.email;
    this.Phones = [];
    this.Addresses = [];
  }
  BirthDay?: Date;
  Occupation?: string;
  alias?: string;
  FirstName?: string;
  LastName?: string;
  MiddleName?: string;
  id?: string;
  Age?: number;
  Notes?: string;
  Phones?: Phone[] = [];
  Address?: Address;
  Addresses?: Address[];

  createFileAs?(): string {
    return `${this.LastName}, ${this.FirstName}`;
  }
}
