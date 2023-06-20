import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeAuthComponent } from './components/home-auth/home-auth.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
