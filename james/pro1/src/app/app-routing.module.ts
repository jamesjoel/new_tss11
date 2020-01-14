import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path : "profile",
    component : ProfileComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "dashboard",
    component: DashboardComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "",
    component : HomeComponent 
  },
  {
    path : "student",
    component : StudentComponent
  },
  {
    path : "employee",
    component : EmployeeComponent
  },
  {
    path : "**",
    component : NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
