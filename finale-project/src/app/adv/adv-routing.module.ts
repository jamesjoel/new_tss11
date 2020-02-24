import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvComponent } from './adv.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { AdvGuardGuard } from '../guards/adv-guard.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';



const routes: Routes = [
  {
    path : "",
    component : AdvComponent,
    children : [
      {
        path : "login",
        component : LoginComponent
      },
      {
        path : "signup",
        component : SingupComponent
      },
      {
        path : "dashboard",
        canActivate : [AdvGuardGuard],
        component : DashboardComponent
      },
      {
        path : "profile",
        canActivate : [AdvGuardGuard],
        component : ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvRoutingModule { }
