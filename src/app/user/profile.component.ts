import { Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(private _userAuthService: UserAuthService, private _router: Router) { }

  ngOnInit() {
    this.firstName = new FormControl(this._userAuthService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this._userAuthService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  handleCancel() {
    this.handleRedirect();
  }

  onProfileSave(formValues) {
    if (this.profileForm.valid) {
      this._userAuthService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.handleRedirect();
    }
  }

  handleRedirect() {
    this._router.navigate(['events']);
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
}
