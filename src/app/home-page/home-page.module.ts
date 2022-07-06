import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule],
})
export class HomePageModule {}
