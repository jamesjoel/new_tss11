import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersROutingModule } from './teachers-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    TeachersROutingModule
  ]
})
export class TeachersModule { }