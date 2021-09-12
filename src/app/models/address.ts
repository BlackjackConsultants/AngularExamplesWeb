import { Contact } from './contact';

export class Address {
  Name?: string;
  ZipCode?: string;
  id?: string;
  contactId?: number;
  parent?: Contact;
}
