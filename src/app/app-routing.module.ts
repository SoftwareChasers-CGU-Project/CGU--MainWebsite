import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVacanciesComponent } from './vacancies/add-vacancies/add-vacancies.component';
import { DeleteVacanciesComponent } from './vacancies/delete-vacancies/delete-vacancies.component';
import { ListVacanciesComponent } from './vacancies/list-vacancies/list-vacancies.component';
import { ViewVacancyComponent } from './vacancies/view-vacancy/view-vacancy.component';
import { AcceptVacanciesComponent } from './vacancies/accept-vacancies/accept-vacancies.component';
import { ListConsultationComponent } from './consultation/list-consultation/list-consultation.component';
import { RequestConsultationComponent } from './consultation/request-consultation/request-consultation.component';

const routes: Routes = [
  
  {path: 'vacancies',
      children: [
        {path: '', component: ListVacanciesComponent},
        {path: 'list', component: ListVacanciesComponent},
        {path: 'delete/:vacancyId', component: DeleteVacanciesComponent},
        {path: 'view/:vacancyId', component: ViewVacancyComponent},
        {path: 'create', component: AddVacanciesComponent},
        {path: 'accept/:vacancyId', component: AcceptVacanciesComponent},
      ]
    },
    {path: 'consultation',
      children: [
        {path: '', component: ListConsultationComponent},
        {path: 'list', component: ListConsultationComponent},
        {path: 'type', component: RequestConsultationComponent},
      ]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
