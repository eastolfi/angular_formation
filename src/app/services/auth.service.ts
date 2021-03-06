import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public connectedUser$ = new BehaviorSubject(null);
  private connectedUser: User = null;

  constructor(
    private readonly http: HttpClient
  ) {
    const connectedUser = localStorage.getItem('user');

    if (connectedUser) {
      this.saveConnectedUser(JSON.parse(connectedUser));
      this.emitCurrentUser();
    }
  }

  public connect(credentials: Omit<User, 'id'>): Observable<boolean> {
    const API_ENDPOINT = environment.RESSOURCE_USER;
    const { email, password } = credentials;
    
    const URL = `${API_ENDPOINT}?email=${email}&password=${password}`;
    return this.http
      .get<User[]>(URL)
      .pipe(
        tap(console.log),
        map((users: User[]) => {
          const valid = users.length !== 0;

          if (valid) {
            this.saveConnectedUser(users[0]);
            this.emitCurrentUser();
          }

          return valid;
        })
      );
  }

  private saveConnectedUser(user: User) {
    this.connectedUser = user;
    localStorage.setItem('user', JSON.stringify(this.connectedUser));
  }

  private emitCurrentUser(): void {
    this.connectedUser$.next(this.connectedUser);
  }
}
