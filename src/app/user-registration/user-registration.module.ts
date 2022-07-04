import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersComponent } from './add-users/add-users.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AddUsersComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule 
  ],
  providers:[
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {duration: 1000, panelClass: ['green-snackbar'], verticalPosition: 'top'}
    }
  ]
})
export class UserRegistrationModule { }
