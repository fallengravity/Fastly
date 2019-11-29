import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from "@ionic/angular";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {

  ngOnInit() {
    this.content.scrollToBottom();
  }

  messages = [
    {
      user: 'simon',
      msg: 'Hey Fallen, Cool App!'
    },
    {
      user: 'fallen',
      msg: 'Yeah Bro!'
    },
    {
      user: 'simon',
      msg: 'When will it be released???'
    }
  ];

  currentUser = 'fallen';
  otherUser = 'Dylie';
  userMSG = '';

  @ViewChild('content', { static: true }) private content: any;

  constructor() { }

  sendMessage() {
    this.messages.push({
      user: 'fallen',
      msg: this.userMSG
    });
    this.userMSG = '';
    setTimeout(() => {
      this.content.scrollToBottom();
    });
  }
}
