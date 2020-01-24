import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashComponent } from './dash/dash.component';
import { MyaccountComponent } from './myaccount/myaccount.component';


@NgModule({
  declarations: [DashComponent, MyaccountComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
