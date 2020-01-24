import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
const routes: Routes = [
  {
    path : "",
    component : DashComponent
  },
  {
    path : "account",
    pathMatch : 'full',
    component : MyaccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
