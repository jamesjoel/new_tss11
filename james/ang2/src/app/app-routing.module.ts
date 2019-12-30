import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { HelpComponent } from './page/help/help.component';
import { TermsComponent  } from './page/terms/terms.component';


const routes: Routes = [
  {
    path : "terms",
    component : TermsComponent
  },
  {
    path : "help",
    component : HelpComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "",
    component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
