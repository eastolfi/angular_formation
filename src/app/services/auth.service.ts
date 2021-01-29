import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private connectedUser: User = null;

  constructor(
    private readonly http: HttpClient
  ) { }

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
            this.connectedUser = users[0];
          }

          return valid;
      })
      );
  }
}
