import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatButton } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatButton],
})
export class HomePageModule {}
