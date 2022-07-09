import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContactUsComponent } from './list-contact-us/list-contact-us.component';
import { AppRoutingModule } from '../app-routing.module';
import {RouterModule} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
//import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
// import { ViewNewsComponent } from './view-news/view-news.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    ListContactUsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class ContactUsModule { }
