import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor() { }
  message : string[] = [];

  getChat(){
    return this.message
  }
}
