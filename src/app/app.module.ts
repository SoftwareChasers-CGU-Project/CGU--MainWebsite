import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { ConsultationModule } from './consultation/consultation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    VacanciesModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    ConsultationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
