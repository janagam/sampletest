import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';

@Injectable()
export class ChatserviceService {
  private socket;

  constructor() { }

  sendMessage(message, username) {
    this.socket.emit('add-message', message, username);
    this.socket.emit('users');
  }

  saveUsername(username) {
    this.socket.emit('saveUser', username);
  }

  getMessages() {
    const observable = new Observable(observer => {
      this.socket = io(environment.apiUrl);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  getUsers() {
    const observable = new Observable(observer => {
      this.socket = io(environment.apiUrl);
      this.socket.on('users', (data) => {
        const myArray = [];

        for (let i = 0; i < data.users.length; i++) {
          const user = {
            username: String
          };
          user.username = data.users[i];
          myArray.push(user);
        }

        observer.next(myArray);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  exitSession(username) {
    this.socket.emit('exitSession', username);
  }
}
