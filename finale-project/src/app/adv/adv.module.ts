import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdvRoutingModule } from './adv-routing.module';
import { SingupComponent } from './pages/singup/singup.component';
import { LoginComponent } from './pages/login/login.component';
import { AdvComponent } from './adv.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [SingupComponent, LoginComponent, AdvComponent, DashboardComponent, ProfileComponent],
  imports: [
    CommonModule,
    AdvRoutingModule,
    FormsModule
  ]
})
export class AdvModule { }
