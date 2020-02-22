import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvComponent } from './adv.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';



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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvRoutingModule { }
