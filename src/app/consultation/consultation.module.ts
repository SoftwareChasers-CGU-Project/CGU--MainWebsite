import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListConsultantsComponent } from './list-consultants/list-consultants.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ListConsultantsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ConsultationModule { }
