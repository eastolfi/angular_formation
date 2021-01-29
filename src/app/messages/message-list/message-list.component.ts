import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/services/interfaces/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @Input()
  public messages: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
