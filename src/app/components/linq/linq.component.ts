import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-linq',
  templateUrl: './linq.component.html',
  styleUrls: ['./linq.component.css']
})
export class LinqComponent implements OnInit {
  contacts1!: Contact[];
  foundContact!: Contact;

  constructor() { }

  ngOnInit() {
    this.contacts1 = [];
    this.contacts1.push({ id: '1', FirstName: 'jorge1' } as Contact);
    this.contacts1.push({ id: '2', FirstName: 'jorge2' } as Contact);
    this.contacts1.push({ id: '3', FirstName: 'jorge3' } as Contact);
    this.contacts1.push({ id: '4', FirstName: 'jorge4' } as Contact);
  }

  filter() {
    const foundContact = this.contacts1.filter(u => u.id === '3');
    this.foundContact = foundContact[0];
  }
}
