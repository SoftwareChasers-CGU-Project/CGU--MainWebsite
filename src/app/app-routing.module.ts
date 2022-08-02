import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVacanciesComponent } from './vacancies/add-vacancies/add-vacancies.component';
import { ListVacanciesComponent } from './vacancies/list-vacancies/list-vacancies.component';
import { ViewVacancyComponent } from './vacancies/view-vacancy/view-vacancy.component';
import { ListConsultationComponent } from './consultation/list-consultation/list-consultation.component';
import { RequestConsultationComponent } from './consultation/request-consultation/request-consultation.component';
import { ApplyVacanciesComponent } from './vacancies/apply-vacancies/apply-vacancies.component';
import { AddUsersComponent } from './user-registration/add-users/add-users.component';
import { ListProgramsComponent } from './programs/list-programs/list-programs.component';
import { SessionRequestComponent } from './programs/session-request/session-request.component';
import { ViewProgramComponent } from './programs/view-program/view-program.component';
import { ViewSessionComponent } from './programs/view-session/view-session.component';
import { LoginComponent } from './login/login/login.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { HomeComponent } from './home-page/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', children: [{ path: '', component: HomeComponent }] },
  {
    path: 'vacancies',
    children: [
      { path: '', component: ListVacanciesComponent },
      { path: 'list', component: ListVacanciesComponent },
      { path: 'view/:vacancyId', component: ViewVacancyComponent },
      { path: 'create', component: AddVacanciesComponent },
      { path: 'apply/:vacancyId', component: ApplyVacanciesComponent },
    ],
  },


//   { path: 'login', children: [{ path: '', component: LoginComponent },
// ] },

{
  path: 'login',
  children: [
    { path: '', component: LoginComponent },
    { path: 'forget-password', component: ForgetPasswordComponent },
    { path: 'reset-password/:token', component: ResetPasswordComponent },
  ],
},

    
    {path: 'consultation',
      children: [
        {path: '', component: ListConsultationComponent},
        {path: 'list', component: ListConsultationComponent},
        {path: 'type/:sessionType', component: RequestConsultationComponent},
      ]
    },


  {
    path: 'user-registration',
    children: [{ path: 'create', component: AddUsersComponent }],
  },

  {
    path: 'programs',
    children: [
      { path: '', component: ListProgramsComponent },
      { path: 'list', component: ListProgramsComponent },
      { path: 'session-request', component: SessionRequestComponent },
      { path: 'viewprogram/:programId', component: ViewProgramComponent },
      { path: 'viewsession/:sessionId', component: ViewSessionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
