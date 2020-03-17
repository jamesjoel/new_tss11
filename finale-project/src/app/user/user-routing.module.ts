import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UserComponent } from './user.component';
import { ShowComponent } from './pages/show/show.component';

const routes: Routes = [
  {
    path : "",
    component : UserComponent,
    children : [
      {
        path : "",
        component : HomeComponent
       
      },
      {
        path : "about",
        component : AboutComponent
        
      },
      {
        path : "show",
        component : ShowComponent
      }
      // { path: 'login', redirectTo: '', pathMatch: 'full' },
      // { path: 'signup', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
