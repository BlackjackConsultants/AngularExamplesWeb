import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
//// import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/service/contact.service';
import { forkJoin, combineLatest, interval, from, of, merge } from 'rxjs';
import { switchMap } from 'rxjs-compat/operator/switchMap';
import { map, filter, scan, take, delay, combineAll, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  private contactsObs1!: Observable<Contact[]>;
  private contactsObs2!: Observable<Contact[]>;
  private contactsObs3!: Observable<Contact[]>;
  private joined!: Observable<any[]>;

  private contacts: Contact[] = [];

  squaredata!: number;
  processed = false;

  constructor(private contactService: ContactService) { };

  ngOnInit() {
  }

  transformAndMerge() {
    this.contacts = [];
    this.contactsObs1 = this.contactService.getContacts().pipe(map(data => {
      (data as Array<Contact>).forEach(c => {
        c.FirstName = c.FirstName + '1';
      });
      return data;
    }));
    this.contactsObs2 = this.contactService.getContacts().pipe(map(data => {
      (data as Array<Contact>).forEach(c => {
        c.FirstName = c.FirstName + '2';
      });
      return data;
    }));;
    this.contactsObs3 = this.contactService.getContacts().pipe(map(data => {
      (data as Array<Contact>).forEach(c => {
        c.FirstName = c.FirstName + '3';
      });
      return data;
    }));
    merge(this.contactsObs2, this.contactsObs3).subscribe(c => {
      c.forEach(c1 => {
        this.contacts.push(c1);
      });
    });
  }

  /**
   * when all observables complete, give the last emitted value from each as an array
   * */
  forkJoin() {
      // tslint:disable-next-line: no-debugger
      debugger;
    const observable = forkJoin(
      of(1, 2, 3),
      of(4, 5, 6).pipe(delay(3000)),
      of(7, 8, 9).pipe(delay(1000))
    );
  }

  combineLatest() {
    this.contacts = [];
    this.contactsObs1 = this.contactService.getContacts();
    this.contactsObs2 = this.contactService.getContacts();
    this.contactsObs3 = this.contactService.getContacts();
    this.joined = combineLatest([this.contactsObs1, this.contactsObs2, this.contactsObs3]);
    this.joined.subscribe(contactLists => {
      contactLists.forEach(contactList => {
        contactList.forEach((contact: Contact) => {
          this.contacts.push(contact);
        });
      });
    });
  }

  map() {
    // emit (1,2,3,4,5)
    const source = from([1, 2, 3, 4, 5]);
    // add 10 to each value
    const example = source.pipe(map(val => val + 10));
    // output: 11,12,13,14,15
    // tslint:disable-next-line: no-console
  }

  take() {
    // emit value every 1s
    const interval$ = interval(1000);
    // take the first 5 emitted values
    const example = interval$.pipe(take(5));
    // output: 0,1,2,3,4
    // tslint:disable-next-line: no-console

  }

  combineAll() {
    // emit every 1s, take 2
    const source$ = interval(1000).pipe(take(2));
    // map each emitted value from source to interval observable that takes 5 values
    const example$ = source$.pipe(
      map(val =>
        interval(1000).pipe(
          map(i => `Result (Outer: ${val}): Inner: ${i}`),
          take(5)
        )
      )
    );
    /*
      2 values from source will map to 2 (inner) interval observables that emit every 1s.
      combineAll uses combineLatest strategy, emitting the last value from each
      whenever either observable emits a value
    */
    example$
      .pipe(combineAll())
      /*
      output:
      ["Result (0): 0", "Result (1): 0"]
      ["Result (0): 1", "Result (1): 0"]
      ["Result (0): 1", "Result (1): 1"]
      ["Result (0): 2", "Result (1): 1"]
      ["Result (0): 2", "Result (1): 2"]
      ["Result (0): 3", "Result (1): 2"]
      ["Result (0): 3", "Result (1): 3"]
      ["Result (0): 4", "Result (1): 3"]
      ["Result (0): 4", "Result (1): 4"]
    */
      // tslint:disable-next-line: no-console
      .subscribe(console.debug);
  }

  chaining() {
    // emit every 1s, take 2
    of(1, 2, 3).map(value => {
      return value * 10;
    }).map(value2 => {
      return value2 * 10;
    // tslint:disable-next-line: no-console
    }).subscribe(val => console.debug(val));
  }

  mergeOperator() {
    // tslint:disable-next-line: no-debugger
    debugger;
    const res: Observable<number>[] = [];
    /*
      when all observables complete, give the last
      emitted value from each as an array
    */
    const observable1 = of(1).pipe(delay(1000));
    res.push(observable1);
    const observable2 = of(2).pipe(delay(555));
    res.push(observable2);
    const observable3 = of(3).pipe(delay(333));
    res.push(observable3);
    // output: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]
  }
}
