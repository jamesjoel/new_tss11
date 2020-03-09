import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvComponent } from './adv.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { AdvGuardGuard } from '../guards/adv-guard.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ServiceComponent } from './pages/service/service.component';
import { UploadComponent } from './pages/upload/upload.component';
import { PaginationComponent } from './pagination/pagination.component';



const routes: Routes = [
  {
    path : "",
    component : AdvComponent,
    // pathMatch: "full", 
    children : [
      {
        path : "login",
        component : LoginComponent,
        pathMatch: "full"
      },
      {
        path : "signup",
        component : SingupComponent
        // pathMatch: "prefix"
      },
      {
        path : "dashboard",
        canActivate : [AdvGuardGuard],
        component : DashboardComponent
        // pathMatch: "prefix"
      },
      {
        path : "profile",
        canActivate : [AdvGuardGuard],
        component : ProfileComponent
        // pathMatch: "full"
      },
      {
        path: "service",
        canActivate: [AdvGuardGuard],
        component: ServiceComponent
        // pathMatch: "full"
      },
      {
        path : "upload",
        canActivate : [AdvGuardGuard],
        component : UploadComponent
        // pathMatch: "full"
      },
      {
        path : "pages",
        component : PaginationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvRoutingModule { }
