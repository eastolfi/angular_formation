import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from 'src/app/services/interfaces/message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  public messages$: Observable<Message[]>;

  constructor(
    private readonly messagesService: MessagesService
  ) { }
  
  ngOnInit(): void {
    this.messages$ = this.messagesService.messages$;
    this.messagesService.getMessages();
  }

  ngOnDestroy(): void {
  }

  public requestMessageCreation(text: string): void {
    this.messagesService.sendMessage(text);
  }

}
