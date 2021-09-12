import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  convertToDecimal(date: Date) {
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let val = year * 1000000 + month * 10000 + day * 100 + hour + min / 10 + sec / 10000;
    return val;
  }
}
