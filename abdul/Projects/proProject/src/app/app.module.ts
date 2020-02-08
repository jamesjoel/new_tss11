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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ModalComponent,
    DeleteComponent,
    ViewDetailComponent,
    AddUserComponent,
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
