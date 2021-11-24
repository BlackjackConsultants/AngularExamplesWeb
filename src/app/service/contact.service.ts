import { Injectable } from '@angular/core'; //
import { Observable } from 'rxjs/internal/Observable';
import { Contact } from 'src/app/models/contact';
import { Address } from 'src/app/models/address';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsObs!: Observable<Contact[]>;
  private addressesObs!: Observable<Address[]>;
  private contactObs!: Observable<Contact>;
  private addressObs!: Observable<Address>;
  private contacts: Contact[] = [];
  private contact!: Contact;

  constructor() { }

  getAddress(addressId: number): Observable<Address> {
    this.addressObs = new Observable(observer => {
      setTimeout(() => {
        let address = new Address({ Name: '1039nw', ZipCode: '33333' });
        observer.next(address);
      }, 4000);

      setTimeout(() => {
        observer.complete();
      }, 5000);
    });
    return this.addressObs;
  }

  getAddressesByContactId(contactId: string | undefined): Observable<Address[]> {
    this.addressesObs = new Observable<Address[]>(observer => {
      setTimeout(() => {
        let addresses = [new Address({ Name: '1039nw', ZipCode: '33333' }),
                        new Address({ Name: '1039nw', ZipCode: '33333' })];
        observer.next(addresses);
      }, 4000);

      setTimeout(() => {
        observer.complete();
      }, 5000);
    });
    return this.addressesObs;
  }

  getAddresses(): Observable<Address[]> {
    this.addressesObs = new Observable(observer => {
      setTimeout(() => {
        let addresses = [
          new Address({ Name: '1039nw', ZipCode: '11111', ContactId: 1 }),
          new Address({ Name: '1039nw', ZipCode: '22222', ContactId: 2 }),
          new Address({ Name: '1039nw', ZipCode: '33333', ContactId: 1 }),
          new Address({ Name: '1039nw', ZipCode: '44444', ContactId: 2 }),
        ];
        observer.next(addresses);
      }, 4000);

      setTimeout(() => {
        observer.complete();
      }, 5000);
    });
    return this.addressesObs;
  }

  getContacts(): Observable<Contact[]> {
    this.contactsObs = new Observable<Contact[]>(observer => {
      setTimeout(() => {
        this.contacts = [
          new Contact({ 'id': '1', 'FirstName': 'jorge', 'LastName': 'luiz' }),
          new Contact({ 'id': '2', 'FirstName': 'joe', 'LastName': 'gonzales' })
        ];

        observer.next(this.contacts);
      }, 4000);

      setTimeout(() => {
        observer.complete();
      }, 5000);

    });
    return this.contactsObs
  }

  getContact() {
    this.contactObs = new Observable(observer => {
      setTimeout(() => {
        this.contact = new Contact({ 'id': '1', 'FirstName': 'jorge', 'LastName': 'luiz' });
        if (this.contact && this.contact.Address) {
          this.contact.Address = undefined;
        }
        observer.next(this.contact);
      }, 4000);

      setTimeout(() => {
        observer.complete();
      }, 5000);

    });
    return this.contactObs
  }

  getContactAndAdresses(): Observable<Contact> {
    this.contactObs = new Observable<Contact>(observer => {
      let parent = this.getContact();
      parent.subscribe(c => {
        this.getAddressesByContactId(c.id).subscribe(a => {
          c.Addresses = a;
          observer.next(c);
        })
      });
    });
    return this.contactObs;
  }
}
