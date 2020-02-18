import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { ModalComponent } from './pages/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './shared/delete/delete.component';
import { ViewDetailComponent } from './shared/view-detail/view-detail.component';
import { AddUserComponent } from './shared/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDetailComponent } from './pages/edit-detail/edit-detail.component';
import { DashboaredComponent } from './pages/dashboared/dashboared.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ModalComponent,
    DeleteComponent,
    ViewDetailComponent,
    AddUserComponent,
    EditDetailComponent,
    DashboaredComponent,
    PageNotFoundComponent,
    SignupComponent,
    SigninComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
