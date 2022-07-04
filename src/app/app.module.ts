import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { UserRegistrationModule } from './user-registration/user-registration.module';
import { HttpClientModule } from '@angular/common/http';





import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { ProgramsModule } from './programs/programs.module';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from './login/login.module';

import { authInterceptorProviders } from './helpers/auth.interceptor'


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
    UserRegistrationModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,

    LoginModule,

    ProgramsModule,
    ProgramsModule,
    MatDialogModule,
    NgbModule,

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
