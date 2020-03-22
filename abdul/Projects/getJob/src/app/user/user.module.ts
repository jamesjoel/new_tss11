import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { TeamComponent } from './pages/team/team.component';


@NgModule({
  declarations: [UserComponent, HomeComponent, AboutComponent, ServiceComponent, TeamComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
