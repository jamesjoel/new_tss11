import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UserComponent } from './user.component';
import { ShowComponent } from './pages/show/show.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, UserComponent, ShowComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
