import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { EditDetailComponent } from './pages/edit-detail/edit-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboaredComponent } from './pages/dashboared/dashboared.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  { path : "" , component : DashboaredComponent },
  { path : "home" , component : HomeComponent },
  { path : "student" , component : StudentComponent },
  { path : "edit" , component : EditDetailComponent },
  { path : "signin" , component : SigninComponent },
  { path : "signup" , component : SignupComponent },
  { path : "profile" , component : ProfileComponent },
  { path : "**" , component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
