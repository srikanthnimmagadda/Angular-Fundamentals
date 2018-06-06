import { UserAuthService } from './user-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseOverLogin: boolean;
  constructor(private _userAuthService: UserAuthService, private _router: Router) { }

  ngOnInit() {
  }

  handleLogin(formValues) {
    this._userAuthService.loginUser(formValues.userName, formValues.password);
    this.handleRedirect();
  }

  handleCancel() {
    this.handleRedirect();
  }

  handleRedirect() {
    this._router.navigate(['events']);
  }
}
