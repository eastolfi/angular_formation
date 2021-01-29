import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class MessagesGuard implements CanActivate {
  constructor(private readonly auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.auth.connectedUser$.pipe(
      map((user: User) => user != null)
    );
  }
  
}
