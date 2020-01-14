import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './pages/student/student.component';
import { AddModalComponent } from './shared/add-modal/add-modal.component';
import { DeleteModalComponent } from './shared/delete-modal/delete-modal.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddModalComponent,
    DeleteModalComponent,
    PageNotFoundComponent
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
