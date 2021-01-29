import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {
  }

  public askServiceToConnect(): void {
    console.table(this.connectionForm.value as User);
  }

}
