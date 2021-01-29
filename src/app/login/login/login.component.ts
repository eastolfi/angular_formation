import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public connectionForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z]{2,}@email.com$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  public messageError = null;

  constructor(
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  public askServiceToConnect(): void {
    this.authService.connect(this.connectionForm.value as User)
    .subscribe((connected: boolean) => this.messageError = !connected);
  }

}
