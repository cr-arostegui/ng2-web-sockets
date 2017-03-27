import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  messages;
  connection;
  message;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.messages = [];
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    });
  }

  ngOnDestroy(){
    this.connection.unsubscribe;
  }

  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

}
