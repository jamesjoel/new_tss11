import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentRoutingModule } from './student-routing.module';
import { UserlayoutComponent } from './userlayout/userlayout.component';



@NgModule({
  declarations: [DashboardComponent, UserlayoutComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  bootstrap : [UserlayoutComponent]
})
export class StudentModule { }
