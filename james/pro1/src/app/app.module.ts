import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HelloDirective } from './directives/hello.directive';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AddEmpComponent } from './shared/add-emp/add-emp.component';
import { DeleteEmpComponent } from './shared/delete-emp/delete-emp.component';
import { DemoDirective } from './directives/demo.directive';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    NotFoundComponent,
    HelloDirective,
    EmployeeComponent,
    AddEmpComponent,
    DeleteEmpComponent,
    DemoDirective,
    LoginComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
