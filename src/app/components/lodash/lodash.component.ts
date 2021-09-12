import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import { Contact } from '../../models/contact';
import { Address } from '../../models/address';

@Component({
  selector: 'app-lodash',
  templateUrl: './lodash.component.html',
  styleUrls: ['./lodash.component.css']
})
export class LodashComponent implements OnInit {
  data = [{ rel: 'link1', href: 'url1' },
  { rel: 'link2', href: 'url2' },
  { rel: 'link3', href: 'url3' },
  { rel: 'link4', href: 'url4' }];
  data2 = [{ rel: 'link11', href: 'url1' },
  { rel: 'link12', href: 'url2' },
  { rel: 'link13', href: 'url3' },
  { rel: 'link14', href: 'url4' }];

  convert() {
    var hashmap = _.chain(this.data)
      .keyBy('rel')
      .mapValues('href')
      .value();
    var test = hashmap['link2']
    console.debug(test);
  }

  concat() {
    var array = [1];
    var other = _.concat(array, 2, [3]);

    console.log(other);
  }

  filter() {
    var array = [{ name: 'a' }, { name: 'b' }, { name: 'a' }, { name: 'c' }];
    var other = _.filter(array, { 'name': 'a' });
    console.debug(other);
  }

  clone() {
    let c: Contact = new Contact();
    c.FirstName = "Perez";
    c.LastName = "Jorge";
    c.Address = new Address();
    c.Address.parent = c;
    c.Address.ZipCode = '33333';
    let clone = _.clone(c);
    console.debug(c.FirstName);
  }

  union() {
    console.debug('union items');
    let unionedArray = _.union(this.data, this.data2);
    for (var i = 0; i < unionedArray.length; i++) {
      var link = unionedArray[i];
      console.debug('union item ' + i.toString() + '. ' + link.rel);
    }
  }

  cloneDeepWith() {
    //todo: implement
  }

  constructor() { }

  ngOnInit() {
  }

}
