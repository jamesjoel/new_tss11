import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './gurds/auth.guard';
import { AfterLoginGuard } from './gurds/after-login.guard';
import { CheckComponent } from './pages/check/check.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NewSignupComponent } from './pages/new-signup/new-signup.component';

const routes: Routes = [
  {
    path : "newsignup",
    component : NewSignupComponent
  },
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "signup",
    component : SignupComponent
  },
  {
    path : "check",
    component : CheckComponent
  },
  {
    path : "login",
    component : LoginComponent,
    canActivate : [AfterLoginGuard]
  },
  {
    path : "profile",
    component : ProfileComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
