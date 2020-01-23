import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { AfterLogin } from './inter/afterlogin';
import { CheckComponent } from './pages/check/check.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewSignupComponent } from './pages/new-signup/new-signup.component';
import { BoxComponent } from './shared/box/box.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    CheckComponent,
    SignupComponent,
    NewSignupComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AfterLogin, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
