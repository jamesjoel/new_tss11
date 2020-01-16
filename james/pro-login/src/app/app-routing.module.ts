import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './gurds/auth.guard';
import { AfterLoginGuard } from './gurds/after-login.guard';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
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
