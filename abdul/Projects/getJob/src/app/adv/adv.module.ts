import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvRoutingModule } from './adv-routing.module';
import { AdvComponent } from './adv.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';


@NgModule({
  declarations: [AdvComponent, LoginComponent, SignupComponent, DashboardComponent, ProfileComponent, EditProfileComponent, FileUploadComponent],
  imports: [
    CommonModule,
    AdvRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdvModule { }
