import { IUser } from './../model/iuser';
import { Injectable } from '@angular/core';
import { last } from '@angular/router/src/utils/collection';

@Injectable()
export class UserAuthService {
  currentUser: IUser;
  constructor() { }
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Srikanth',
      lastName: 'Nimmagadda',
      userName: userName
    };
  }

  isAuthencated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
