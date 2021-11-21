import { Phone } from 'src/app/models/phone';
import { Address } from 'src/app/models/address';

export class Contact extends EventTarget {
  constructor(contact?: any) {
    super()
    this.FirstName = contact?.firstName;
    this.LastName = contact?.lastName;
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

  private _complete: Event = new Event('complete')

  createFileAs?(): string {
    return `${this.LastName}, ${this.FirstName}`;
  }

  
  public start(): void {
    setTimeout(() => {
      this.dispatchEvent(this._complete)
    }, 2000)
  }

}
