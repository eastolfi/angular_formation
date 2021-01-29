import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessageListItemComponent } from './message-list-item/message-list-item.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageWriterComponent } from './message-writer/message-writer.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [MessageListItemComponent, MessageListComponent, MessageWriterComponent, MessagesComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MessagesComponent]
})
export class MessagesModule { }
