import { Component, OnInit } from '@angular/core';
import {StorageService} from "../storage/storage.service";

export interface LoginForm {
  phone?: string;
  password?: string;
}

export interface SignUpFrom extends LoginForm {}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(
    private readonly storageService: StorageService,
  ) { }

  login() {
    this.storageService.loginUser(this.form);

    window.location.replace('/home');
  }

  form: LoginForm = {
    phone: undefined,
    password: undefined,
  }
}
