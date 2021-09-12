import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';
import { map } from 'rxjs/internal/operators/map';
import { School } from '../models/school';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {
  getValue(): Promise<Contact> {
    return new Promise<Contact>((resolve, reject) => {
      setTimeout(() => {
        const c = new Contact();
        c.FirstName = 'jorge';
        resolve(c);
      }, 1000);
    });
  }
}
