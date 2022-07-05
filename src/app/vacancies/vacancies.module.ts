import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVacanciesComponent } from './add-vacancies/add-vacancies.component';
import { ViewVacancyComponent } from './view-vacancy/view-vacancy.component';
import { ListVacanciesComponent } from './list-vacancies/list-vacancies.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ApplyVacanciesComponent } from './apply-vacancies/apply-vacancies.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [ 
    AddVacanciesComponent,
    ViewVacancyComponent,
    ListVacanciesComponent,
    ApplyVacanciesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    TranslateModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class VacanciesModule { } 
