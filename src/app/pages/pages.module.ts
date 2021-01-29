import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { MessagesModule } from '../messages/messages.module';
import { MentionModule } from '../mention/mention.module';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageMessagesComponent } from './page-messages/page-messages.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageMentionComponent } from './page-mention/page-mention.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PageFooterComponent, PageHeaderComponent, PageMessagesComponent, PageLoginComponent, PageMentionComponent],
  imports: [
    CommonModule,
    RouterModule,
    LoginModule,
    MessagesModule,
    MentionModule
  ],
  exports: [PageMessagesComponent, PageLoginComponent, PageMentionComponent]
})
export class PagesModule { }
