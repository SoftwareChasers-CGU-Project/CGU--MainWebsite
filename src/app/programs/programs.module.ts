import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterProgramComponent } from './register-programs/register-program.component';
import { ListProgramsComponent } from './list-programs/list-programs.component';
import { RouterModule} from '@angular/router';
import { SessionRequestComponent } from './session-request/session-request.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import { ViewProgramComponent } from './view-program/view-program.component';



@NgModule({
  declarations: [
    RegisterProgramComponent,
    ListProgramsComponent,
    SessionRequestComponent,
    ViewProgramComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ]
})

export class ProgramsModule { }
