import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
@Component({
  selector: 'app-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrls: ['./oauth2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OAuth2Component implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }


  ngOnInit() {
    this.clientid = this.storage.get('clientid');
    this.clientid2 = this.storage.get('clientid2');
    this.authorizeEndpoint = this.storage.get('authorizeEndpoint');
    this.authorizeEndpoint2 = this.storage.get('authorizeEndpoint2');
    this.clientSecret2 = this.storage.get('clientSecret2');
  }

  GeneratePinUrl() {
    this.storage.set('clientid', this.clientid);
    this.storage.set('authorizeEndpoint', this.authorizeEndpoint);
    this.pinUrl = this.pinUrl = this.authorizeEndpoint + '?client_id=' + this.clientid + '&response_type=pin&state=test';
  }


  GenerateACUrl() {
    this.storage.set('clientid2', this.clientid2);
    this.storage.set('authorizeEndpoint2', this.authorizeEndpoint2);
    this.storage.set('clientSecret2', this.clientSecret2);
    this.acUrl = this.acUrl = this.authorizeEndpoint + '?client_id=' + this.clientid + '&client_secret2=' + this.clientSecret2 + '&response_type=code&state=test';
  }

  OpenPinAuthForm() {
    window.open(this.pinUrl);
  }

  OpenACAuthForm() {
    window.open(this.acUrl);
  }

  pinUrl!: string;
  acUrl!: string;
  clientid!: string;
  clientid2!: string;
  clientSecret2!: string;
  authorizeEndpoint!: string;
  authorizeEndpoint2!: string;

}
