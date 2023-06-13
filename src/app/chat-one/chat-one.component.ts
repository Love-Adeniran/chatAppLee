import { Component } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';

@Component({
  selector: 'app-chat-one',
  templateUrl: './chat-one.component.html',
  styleUrls: ['./chat-one.component.css']
})
export class ChatOneComponent {
    message: string = "";
    constructor(public chats: ChatServiceService) {  }
    allChats: string[] = [];
    ngOnInit() {
        console.log(this.chats.getChat());
        this.allChats = this.chats.getChat();
    }
    sendMessage(){
        if(this.message!=""){
        this.allChats.push(this.message);
        console.log(this.allChats);
        this.message = "";
        }
    }
}
