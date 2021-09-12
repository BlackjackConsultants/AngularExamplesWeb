import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/models/phone';
import { PhoneService } from 'src/app/service/phone.service';
import { PlatformLocation } from '@angular/common';


@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit {
  private phones: Phone[] = [];
  constructor(private phoneService: PhoneService, platformLocation: PlatformLocation) {
    console.log((platformLocation as any).location);
    console.log((platformLocation as any).location.href);
    console.log((platformLocation as any).location.origin);
  }

  ngOnInit() {

  }

  getContacts() {
    this.phoneService.getPhones().subscribe(phones => {
      this.phones = phones;
    });
  }

  getContact() {
    this.phoneService.getPhone().subscribe(phones => {
      this.phones = phones;
    });
  }

  forkJoin() {
    alert('implement this method');
  }
}
