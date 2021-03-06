import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-indexed-db',
  templateUrl: './indexed-db.component.html',
  styleUrls: ['./indexed-db.component.css']
})
export class IndexedDbComponent {
  db!: IDBDatabase;
  index!: IDBIndex;
  contacts: Array<Contact> = [];
  contactStore!: IDBObjectStore;
  occupationIndex!: IDBIndex;

  constructor() {
    new Contact()
    this.contacts.push(new Contact({ FirstName: 'Lucrecia', LastName: 'Enriquez', Occupation: 'teacher', Phones: [] }));
    this.contacts.push(new Contact({ FirstName: 'Melissa', LastName: 'Munoz', Occupation: 'teacher', Phones: [] }));
    this.contacts.push(new Contact({ FirstName: 'Andre', LastName: 'Enriquez', Occupation: 'programmer', Phones: [] }));
    this.contacts.push(new Contact({ FirstName: 'Alex', LastName: 'Enriquez', Occupation: 'Finance Analyst', Phones: [] }));
    this.contacts.push(new Contact({ FirstName: 'Adriam', LastName: 'Enriquez', Occupation: 'programmer', Phones: [] }));

    this.contacts[0].Phones?.push({number: '3053033333', type: 'home'});
    this.contacts[1].Phones?.push({number: '3053022222', type: 'home'});
    this.contacts[2].Phones?.push({number: '3053011111', type: 'home'});
    this.contacts[3].Phones?.push({number: '3053044444', type: 'home'});
    this.contacts[4].Phones?.push({number: '3053055555', type: 'home'});
  }

  /**
   * this behavior can go in the initialization of the application.
   */
  openDb() {
    const request = window.indexedDB.open('MyTestDatabase', 1);
    request.onerror = (event) => {
      this.db = request.result;
      console.error(`something went wrong with ${this.db.name} `);
    };
    request.onsuccess = (event: Event) => {
      this.db = request.result;
      console.log(`Database ${this.db.name} has been opened.`);
    };
    request.onupgradeneeded = (e) => {
      this.db = request.result;
      if (!this.db.objectStoreNames.contains('Contact')) {
        this.contactStore = this.db.createObjectStore('Contact', { keyPath: 'id', autoIncrement: true });
      }
      if (!this.db.objectStoreNames.contains('Menu')) {
        this.db.createObjectStore('Menu');
      }
      this.occupationIndex = this.contactStore?.createIndex('occupationIndex', 'Occupation');
    };
    return request;
  }

  Count() {
    if (this.db == null) {
      alert('click on open db first');
    } else {
      const tx = this.db.transaction(['Contact'], 'readwrite');
      const store = tx.objectStore('Contact');
      const request = store.count();
      request.onsuccess = function (event) {
        const count: number = (event.target as any).result;
        if (count > 0) {
          console.log(`There is a count of ${count} contacts in the database.`);
        } else {
          console.log(`no contacts found. click on insert button to add them to db`);
        }
      };
    }
  }

  GetAllContacts() {
    if (this.db == null) {
      alert('click on open db first');
    } else {
      const tx = this.db.transaction(['Contact'], 'readwrite');
      const store = tx.objectStore('Contact');
      const request = store.getAll();
      request.onsuccess = function (event) {
        const contacts: Array<Contact> = (event.target as any).result;
        if (contacts.length > 0) {
          contacts.forEach(c => {
            console.log(`contact ${c.FirstName}, ${c.LastName}`);
          });
        } else {
          console.log(`no contacts found. click on insert button to add them to db`);
        }
      };
    }
  }

  GettingContactWithOccupation() {
    if (this.db == null) {
      alert('click on open db first');
    } else {
      const tx = this.db.transaction(['Contact'], 'readwrite');
      const store = tx.objectStore('Contact');
      const index = store.index('occupationIndex');
      const request = index.getAll('teacher');
      request.onsuccess = function (event) {
        const contacts: Array<Contact> = (event.target as any).result;
        if (contacts.length > 0) {
          console.log(`found ${contacts.length} teacher contacts:`);
          for (let i = 0; i < contacts.length; i++) {
            const c = contacts[i];
            console.log(`${i}: contact ${c.FirstName}, ${c.LastName}`);
          }
        } else {
          console.log(`no contacts found. click on insert button to add them to db`);
        }
      };
    }
  }

  GetContactById() {
    if (this.db == null) {
      alert('click on open db first');
    } else {
      const tx = this.db.transaction(['Contact'], 'readwrite');
      const store = tx.objectStore('Contact');
      const request = store.get('1');
      request.onsuccess = (event) => {
        const contact = (event?.target as any)?.source;
        if (contact != null) {
          console.log(`contact ${contact.FirstName}, ${contact.LastName}`);
        } else {
          console.log(`no contacts found. click on insert button to add them to db`);
        }
      };
    }
  }

  /**
   * updates a contact.
   */
  UpdateContact() {
    // tslint:disable-next-line: no-debugger
    debugger;
    const tx = this.db?.transaction(['Contact'], 'readwrite');
    const store = tx?.objectStore('Contact');
    const request = store?.get(1);
    if (request) {
      request.onsuccess = function (event) {// Get the old value that we want to update
        const contact: Contact = (event.target as any).result;

        // update the value(s) in the object that you want to change
        contact.FirstName = 'Biden';

        // Put this updated object back into the database.
        const requestUpdate = store?.put(contact);
        if (requestUpdate) {
          requestUpdate.onerror = function (event1) {
            // Do something with the error
            console.log(event1.toString());

          };
          requestUpdate.onsuccess = function (event1) {
            // Success - the data is updated! F
            console.log(event1.toString());
          };
        }
      };
      request.onerror = function (event) {
        console.log(`error`);
      };
    }


  }

  /**
   * inserts a contact
   */
  InsertContact() {
    const tx = this?.db?.transaction(['Contact'], 'readwrite');
    const store = tx?.objectStore('Contact');
    this.contacts.forEach(contact => {
      const request = store?.add(contact);
      if (request) {
        request.onsuccess = function (event) {
          // note: the id is hte only thing that returns from event. the rest you get from the object you saved.
          console.log(`successfully added contact with id: ${(event?.currentTarget as any).result}, first name: ${contact.FirstName}, last name: ${contact.LastName}`);
        };
        request.onerror = function (event) {
          console.log(`error`);
        };
      }
    });
  }

  DeleteContact() { }
  SearchContact() { }
}
