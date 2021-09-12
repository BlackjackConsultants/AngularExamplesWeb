import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';


@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent {
  model: any;

  constructor(private localStorageService: LocalStorageService) { }

  save() {
    this.localStorageService.storeOnLocalStorage('test', { firstName: 'jorge', lastName: 'perez', height: '5\'11\'\'' });
  }

  load() {
    this.model = this.localStorageService.getOnLocalStorage('test');
  }

}
