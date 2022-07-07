import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterEventComponent } from './register-event/register-event.component';
import { ListProgramsComponent } from './list-programs/list-programs.component';
import { RouterModule} from '@angular/router';
import { SessionRequestComponent } from './session-request/session-request.component';
import { MatSnackBarModule,MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import { ViewProgramComponent } from './view-program/view-program.component';
import { ViewSessionComponent } from './view-session/view-session.component';
import { RegisterSessionDialogComponent } from './register-session-dialog/register-session-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
  
    ListProgramsComponent,
    SessionRequestComponent,
    ViewProgramComponent,
    RegisterEventComponent,
    ViewSessionComponent,
    RegisterSessionDialogComponent
    
  ],
  entryComponents:[
    RegisterEventComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    TranslateModule,
  
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {duration: 2500, panelClass: ['green-snackbar'], verticalPosition: 'top'}
    }
  ]
})

export class ProgramsModule { }
