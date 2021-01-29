import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageMessagesComponent } from './pages/page-messages/page-messages.component';

const routes: Routes = [
  {
    path: 'messages',
    component: PageMessagesComponent
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
