import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : "",
    loadChildren: "./user/user.module#UserModule"
    
  },
  {
    path: "adv",
    loadChildren: "./adv/adv.module#AdvModule"
    
    

  },
  {
    path : "admin",
    loadChildren : "./admin/admin.module#AdminModule"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
