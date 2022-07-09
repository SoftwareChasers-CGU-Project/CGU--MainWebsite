import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { NewsModule } from './news/news.module';
import { UserRegistrationModule } from './user-registration/user-registration.module';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { ConsultationModule } from './consultation/consultation.module';
import {HomePageModule } from './home-page/home/home-page.module';
import { ProgramsModule } from './programs/programs.module';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListAboutUsComponent } from './about-us/list-about-us/list-about-us.component';
import { NgxTranslateModule } from './translate/translate.module';
import { LoginModule } from './login/login.module';
import {ReactiveFormsModule } from '@angular/forms';
import { ListContactUsComponent } from './contact-us/list-contact-us/list-contact-us.component';
import { authInterceptorProviders } from './helpers/auth.interceptor'


@NgModule({
  declarations: [
    AppComponent,
    ListAboutUsComponent,
    ListContactUsComponent,
  ],

 

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    VacanciesModule,
    NewsModule,
    UserRegistrationModule,
    HttpClientModule,
    MatListModule,
    ReactiveFormsModule,
    MatTableModule,
    ConsultationModule,
    // NgbModule,
    ProgramsModule,
    MatDialogModule,
    NgbModule,
    // NgbModule
    NgxTranslateModule, 
    // TranslateModule,
    LoginModule,
    MatCardModule,
    HomePageModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
