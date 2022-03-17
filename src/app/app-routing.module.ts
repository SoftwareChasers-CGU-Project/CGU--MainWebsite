import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVacanciesComponent } from './vacancies/add-vacancies/add-vacancies.component';
import { DeleteVacanciesComponent } from './vacancies/delete-vacancies/delete-vacancies.component';
import { ListVacanciesComponent } from './vacancies/list-vacancies/list-vacancies.component';
import { ViewVacancyComponent } from './vacancies/view-vacancy/view-vacancy.component';
import { AcceptVacanciesComponent } from './vacancies/accept-vacancies/accept-vacancies.component';
import { RegisterProgramComponent } from './programs/register-programs/register-program.component';
import { ListProgramsComponent } from './programs/list-programs/list-programs.component';
import { SessionRequestComponent} from './programs/session-request/session-request.component';
import { ViewProgramComponent} from './programs/view-program/view-program.component';
import { ApplyVacanciesComponent } from './vacancies/apply-vacancies/apply-vacancies.component';

const routes: Routes = [
  
  {path: 'vacancies',
      children: [
        {path: '', component: ListVacanciesComponent},
        {path: 'list', component: ListVacanciesComponent},
        {path: 'delete/:vacancyId', component: DeleteVacanciesComponent},
        {path: 'view/:vacancyId', component: ViewVacancyComponent},
        {path: 'create', component: AddVacanciesComponent},
        {path: 'apply/:vacancyId', component:  ApplyVacanciesComponent},
      ]
    },

    {path: 'programs',
      children: [
        {path: '', component: ListProgramsComponent},
        {path: 'list', component: ListProgramsComponent},
        {path: 'register', component: RegisterProgramComponent},
        {path: 'session-request', component:SessionRequestComponent},
        {path: 'view/:programId', component:ViewProgramComponent},
      ]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
