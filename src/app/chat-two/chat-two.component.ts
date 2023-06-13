import { Component } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';

@Component({
  selector: 'app-chat-two',
  templateUrl: './chat-two.component.html',
  styleUrls: ['./chat-two.component.css']
})
export class ChatTwoComponent {
    message2: string = "";
    constructor(public chats : ChatServiceService){}
    allChats: string[] = [];
    ngOnInit(){
        console.log(this.chats.getChat());
        this.allChats = this.chats.getChat();
    }
    sendMessage(){
        if(this.message2!=""){
            this.allChats.push(this.message2);
            console.log(this.allChats);
            this.message2 = "";
        }
    }
}
