import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { MessagingService, IMessage } from './messaging.service';

export class UserUpdatedMessage implements IMessage {
  constructor() { }
  channel!: string;
  data: any;
}


/*

IMPORTANT!!!!!!!

DO NOT USE THIS SERVICE. IT WORKS FINE HERE, BUT WHEN BUILT TO PROUCTION IT BREAPS BECAUSE THE MINIFICATION DOES NOT KNOW WHAT TO DO WITH TEH TYPE UserUpdatedMessage.  See javascript.doc , the common
project has it implemented

*/




@Component({
  selector: 'app-messagin-service',
  templateUrl: './messagin-service.component.html',
  styleUrls: ['./messagin-service.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessaginServiceComponent {
  message: any;
  subscription: Subscription;

  constructor(private messagingService: MessagingService) {
    // subcriber using mvvm type messaging
    this.subscription = this.messagingService.of(UserUpdatedMessage).subscribe(message => {
      this.message = message;
      alert(this.message.text);
    }); 
  }

  publish(): void {
    // send message to subscribers via observable subject
    this.messagingService.publish(new UserUpdatedMessage());
  }

}
