import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdvtGuardGuard } from '../guards/advt-guard.guard';
import { AfterLoginGuard } from '../guards/after-login.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';


const routes: Routes = [
  {
    path : "",
    children : [
      {
        path : "login",
        canActivate : [AfterLoginGuard],
        component : LoginComponent
      },
      {
        path : "signup",
        canActivate : [AfterLoginGuard],
        component : SignupComponent
      },
      {
        path : "dashboard",
        canActivate : [AdvtGuardGuard],
        component : DashboardComponent
      },
      {
        path : "profile",
        canActivate : [AdvtGuardGuard],
        component : ProfileComponent
      },
      {
        path : "edit",
        canActivate : [AdvtGuardGuard],
        component : EditProfileComponent
      },
      {
        path : "upload",
        canActivate : [AdvtGuardGuard],
        component : FileUploadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvRoutingModule { }
