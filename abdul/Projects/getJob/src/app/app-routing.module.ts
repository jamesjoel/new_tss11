import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrowseJobsComponent } from './pages/browse-jobs/browse-jobs.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { JobPostComponent } from './pages/job-post/job-post.component';
import { NewPostComponent } from './pages/new-post/new-post.component';


const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'browsjob', component : BrowseJobsComponent },
  { path : 'candidate', component : CandidatesComponent },
  { path : 'blog', component : BlogComponent },
  { path : 'contact', component : ContactComponent },
  { path : 'newpost', component : NewPostComponent },
  { path : 'postjob', component : JobPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
