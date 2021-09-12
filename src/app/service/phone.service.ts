import { Injectable } from '@angular/core'; //
import { Observable } from 'rxjs/internal/Observable';
import { Phone } from '../models/phone';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  apiURL: string = 'http://localhost:8010/angularexample-dda6c/us-central1/webApi/api/v1';

  constructor(private httpClient: HttpClient) { }

  getPhones() {
    return this.httpClient.get<Phone[]>(`${this.apiURL}/phones`);
  }

  getPhone() {
    return this.httpClient.get<Phone[]>(`${this.apiURL}/phone`);
  }
}
