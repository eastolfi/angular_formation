import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Message } from './interfaces/message';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public messages$: BehaviorSubject<Message[]> = new BehaviorSubject([]);

  constructor(
    private readonly http: HttpClient,
    private readonly auth: AuthService,
  ) { }

  public getMessages(): void {
    this.http
      .get<Message[]>(environment.RESSOURCE_MESSAGES)
      .subscribe((messages: Message[]) => this.messages$.next(messages))
  }

  public sendMessage(text: string): void {
    const connectedUser: User = this.auth.connectedUser$.value as User;

    const message: Omit<Message, 'id'> = {
      userId: connectedUser.id,
      text
    }

    this.http
      .post<Message>(environment.RESSOURCE_MESSAGES, message)
      .subscribe(_messages => this.getMessages());
  }
}
