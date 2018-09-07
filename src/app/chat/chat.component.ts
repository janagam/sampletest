import { Component, OnInit, OnDestroy , HostListener  } from '@angular/core';
import { ChatserviceService } from './chatservice/chatservice.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit , OnDestroy {
  messages = [];
  connectionMessage;
  connectionUsers;
  backconnect;
  message;
  username;
  userInput;
  users;
  showdiv: boolean;

  constructor( private chatservice: ChatserviceService) {
    this.showdiv = false;
   }


  @HostListener('window:beforeunload')
  onExit() {
    if (this.username) {
      this.chatservice.exitSession(this.username);
    }
  }

  sendMessage() {
    this.chatservice.sendMessage(this.message, this.username);
    this.message = '';
    if (this.messages.length > 8) { this.messages.splice(0, 1); }
  }
  ngOnInit() {
    this.connectionMessage = this.chatservice.getMessages().subscribe(message => {
      this.messages.push(message);
    });
    this.connectionUsers = this.chatservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  saveUsername() {
    if (this.userInput.length > 0) {
    this.username = this.userInput;
      this.chatservice.saveUsername(this.username);
    }
  }
  openpopup(): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    if (this.showdiv === false) {
      this.showdiv = true;
    } else {
      this.showdiv = false;
    }
  }

  ngOnDestroy() {
    this.connectionMessage.unsubscribe();
    this.connectionUsers.unsubscribe();
  }

}
