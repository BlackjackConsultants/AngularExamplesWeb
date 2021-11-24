import { Contact } from './contact';

export class Address {
  Name?: string;
  ZipCode?: string;
  id?: string;
  contactId?: number;
  parent?: Contact;

  constructor(address?: any) {
    this.Name = address.name;
    this.ZipCode = address.zipCode;
  }

  wait(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Done waiting");
        resolve(ms)
      }, ms )
    })
  }

  delayTest() {
    (async () => {
      console.log(`delayTest level 3 before... ${Date.now()}`)
      await this.wait(5000);
      console.log(`delayTest level 3 after.... ${Date.now()}`)
    })();
  }

}
