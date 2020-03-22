import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// firebase import setup
import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

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

// initializing firebase 
firebase.initializeApp(environment.firebaseConfig);

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
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
