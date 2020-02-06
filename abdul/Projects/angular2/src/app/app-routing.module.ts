import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : "students",
    loadChildren : "./students/students.module#StudentsModule"
  },
  {
    path : "teachers",
    loadChildren : "./teachers/teachers.module#TeachersModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
