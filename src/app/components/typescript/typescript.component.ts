import { Component, OnInit } from '@angular/core';
import { Type } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { Address } from 'src/app/models/address';
import { Perimeter } from '../../models/area';
import { AsyncService } from '../../service/async.service';
import { AnimalEnum } from 'src/app/enums/AnimalEnum';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {
  component!: Type<any>;
  list = ['1', '2', '3'];
  perimeter!: number;
  perimeter2!: number;
  perimeter4!: number;

  constructor() { }

  ngOnInit() {
    // using static method
    this.component = TypescriptComponent;
    console.log('instance name is ' + this.component.name);
  }

  onAccessPrivateVariables() {
    const address: Address = new Address();
    address.id = '1';
    address.Name = '255 w 64 st';
    address.ZipCode = '33012';
    (<any>address)._state = 'Florida';
    console.log((<any>address)._state);
  }

  arrayInsert() {
    this.list.splice(0, 0, '0');
  }

  findInArray() {
    const contacts = [{ name: 'jorge' }, { name: 'alex' }, { name: 'adrian' }];
    const c = contacts.find(({ name }) => name === 'alex');
    console.log('finding alex: ' + c?.name);
  }

  createDictionary() {
    const map: Map<number, Contact> = new Map<number, Contact>();
    map.set(0, new Contact('test1'));
    map.set(1, new Contact('test2'));
    map.set(2, new Contact('test3'));
    map.set(3, new Contact('test4'));
    // tslint:disable-next-line: no-console
    console.debug(map?.get(2)?.FirstName);
  }

  foreach() {
    console.log('before foreach');
    this.list.forEach(listItem => {
      console.log('list item: ' + listItem);
    });
    console.log('after foreach');
  }

  functionOverloading() {
    const perimeter = new Perimeter();
    this.perimeter = perimeter.calculate(5);
    this.perimeter2 = perimeter.calculate(5, 10);
  }

  iteratingThroughObjectPropertiesDynamically() {
    // tslint:disable-next-line: no-debugger
    debugger;
    // Evil response in a variable. Here are all my vehicles.
    const car = {
      color: 'red',
      model: 'Mazda',
      year: '2013'
    };
    // Step 1. Get all the object keys.
    const carProps = Object.keys(car);
    // Step 1. Get all the object keys.
    for (const prop in carProps) {
      console.log('using for in: property name: ' + prop + ', value: ' + carProps[prop]);
    }
  }

  outParams() {
    // this method does not change the value of the string or any other value type. need to use an object
    const arg1 = 'originalValue';
    this.testOutParams(arg1);
    console.log('arg1 = ' + arg1);
    // this method does change the value of the string or any other value type. need to use an object
    const arg2 = { val: 'originalValue' };
    this.testOutParams2(arg2);
    console.log('arg2 = ' + arg2.val);
  }

  testOutParams(val: string) {
    val = 'changedValue';
  }

  testOutParams2(arg: any) {
    arg.val = 'changedValue';
  }

  async asyncSample() {
    const asyncService = new AsyncService();
    const c = await asyncService.getValue();
    console.log(c.FirstName);
  }

  /**
   * shows how to create a pet string literal that only takes the value of 'cat'
   * */
  stringLiterals() {
    // tslint:disable-next-line: no-debugger
    debugger;
    let pet: 'cat';
    pet = 'cat';
    // pet = 'dog'; /* when you uncomment this line, you get a compilationg error*/
  }

  callbackFunctions() {
    // tslint:disable-next-line: no-debugger
    debugger;
    // using function types (e.g. s : (r: number) => void)
    let add: (a: number, b: number, s: (r: number) => void, e: (e: string) => void) => void;
    add = function (a: number, b: number, s: (r: number) => void, e: (e: string) => void) {
      if (a > 10 || b > 10) {
        e('parameters cannot exceed 10');
      } else {
        s(a + b);
      }
    };
    add(3, 3, (s) => {
      // tslint:disable-next-line: no-console
      console.debug('success: ' + s);
    }, (e) => {
      // tslint:disable-next-line: no-console
      console.debug('error: ' + e);
    });
    add(13, 13, (s) => {
      // tslint:disable-next-line: no-console
      console.debug('success: ' + s);
    }, (e) => {
      // tslint:disable-next-line: no-console
      console.debug('error: ' + e);
    });

    // withtout arrow functions and function type
    // <add code here>
  }

  templateStrings() {
    const fullName = `Bob Bobbington`;
    const sentence = `Hello, my name is ${fullName}.`;
    // tslint:disable-next-line: no-console
    console.debug(sentence);
  }

  /**
   *
   */
  getEnumString() {
    // iterating
    // tslint:disable-next-line: forin
    for (const enumMember in AnimalEnum) {
      const isValueProperty = parseInt(enumMember, 10) >= 0;
      if (isValueProperty) {
        console.log('enum member: ', AnimalEnum[enumMember]);
      }
    }

    // if you have the number
    console.log(`i have 2: ${AnimalEnum[2]}`);
    console.log(`i have 0: ${AnimalEnum[0]}`);
    console.log(`i have 1: ${AnimalEnum[1]}`);
  }

  jsonToObject() {
    const contactJson = `{"FirstName": "jorge", "LastName": "perez"}`;
    const contact: Contact = JSON.parse(contactJson);
    console.log(`First Name: ${contact.FirstName}, Last Name: ${contact.LastName}`);
    const test = contact as Contact ?? new Contact();
    // try {
    //   // this wont work
    //   if (test) {
    //     test.createFileAs();
    //   }
    // } catch {}

    // const test2 = new Contact(contact);
    // test2.createFileAs();
  }
}
