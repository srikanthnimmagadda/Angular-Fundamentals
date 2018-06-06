import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, ProfileComponent]
})
export class UserModule { }
