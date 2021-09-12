import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
////import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  private contacts: Contact[] = [];
  contact!: Contact;
  private data!: Observable<string>;
  fruits: Array<string> = [];
  anyErrors!: boolean;
  finished!: boolean;

  squaredata!: number;
  processed = false;

  constructor(private contactService: ContactService) { };

  startWithService() {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      let count = contacts.length;
      for (let contact of this.contacts) {
        console.debug(contact.FirstName)
      }
    });
  }

  getContact() {
    this.contactService.getContact().subscribe(contact => {
      this.contact = contact;
    });
  }

  getContactAndAddress() {
    this.contactService.getContactAndAdresses().subscribe(contact => {
      this.contact = contact;
    });
  }

  getAddress(id?: number | undefined) {
    this.contactService.getAddress(id as number).subscribe(address => {
      if (this.contact) {
        this.contact.Address = address;
      }
    });
  }

  start() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next('Apple');
      }, 1000);

      setTimeout(() => {
        observer.next('mango');
      }, 2000);
      setTimeout(() => {
        observer.next('Orannge');
      }, 3000);
      setTimeout(() => {
        observer.error(new Error('error occured'));
      }, 4000);

      setTimeout(() => {
        observer.complete();
      }, 5000);

    });

    let subscription = this.data.subscribe(fruit => this.fruits.push(fruit), error => this.anyErrors = true, () => this.finished = true);

    this.processed = true;
  }
}
