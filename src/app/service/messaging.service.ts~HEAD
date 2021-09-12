import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDictionary } from '../interfaces/IDictionary';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private subjects: IDictionary<Subject<any>> = {};

  private getSubject(key: string): Subject<any> {
    if (this.subjects[key] == null)
      this.subjects[key] = new Subject<any>();
    return this.subjects[key];
  }

  sendMessage(key: string, message: any) {
    this.getSubject(key).next(message);
  }

  getMessage(key: string): Observable<any> {
    return this.getSubject(key).asObservable();
  }
}
