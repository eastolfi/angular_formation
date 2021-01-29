import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { User } from './services/interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private readonly router: Router,
    private readonly auth: AuthService
  ) {}
  
  ngOnInit(): void {
    this.sub = this.auth.connectedUser$
    .pipe(delay(2000))
    .subscribe((user: User) => {
      if (user) {
        this.router.navigate(['messages']);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
