import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdvRoutingModule } from './adv-routing.module';
import { SingupComponent } from './pages/singup/singup.component';
import { LoginComponent } from './pages/login/login.component';
import { AdvComponent } from './adv.component';


@NgModule({
  declarations: [SingupComponent, LoginComponent, AdvComponent],
  imports: [
    CommonModule,
    AdvRoutingModule,
    FormsModule
  ]
})
export class AdvModule { }
