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





import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { ConsultationModule } from './consultation/consultation.module';
import {HomePageModule } from './home-page/home/home-page.module';
import { ProgramsModule } from './programs/programs.module';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListAboutUsComponent } from './about-us/list-about-us/list-about-us.component';
import { NgxTranslateModule } from './translate/translate.module';
// import { TranslateModule } from '@ngx-translate/core';
import { LoginModule } from './login/login.module';

import { authInterceptorProviders } from './helpers/auth.interceptor'


@NgModule({
  declarations: [
    AppComponent,
    ListAboutUsComponent,
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
    HomePageModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
