import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { BrowseJobsComponent } from './pages/browse-jobs/browse-jobs.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { JobPostComponent } from './pages/job-post/job-post.component';
import { NewPostComponent } from './pages/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogSingleComponent,
    BrowseJobsComponent,
    CandidatesComponent,
    ContactComponent,
    HomeComponent,
    JobPostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
