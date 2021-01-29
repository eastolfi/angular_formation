import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageMentionComponent } from './pages/page-mention/page-mention.component';
import { PageMessagesComponent } from './pages/page-messages/page-messages.component';
import { MessagesGuard } from './services/messages.guard';

const routes: Routes = [
  {
    path: 'mention',
    component: PageMentionComponent
  },
  {
    path: 'messages',
    component: PageMessagesComponent,
    canActivate: [ MessagesGuard ]
  },
  {
    path: '',
    component: PageLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
