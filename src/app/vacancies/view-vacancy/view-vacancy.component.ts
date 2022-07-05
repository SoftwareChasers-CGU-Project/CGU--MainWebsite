import { Component, OnInit } from '@angular/core';
import { VacancyService } from 'src/app/services/vacancy.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ApplyVacanciesComponent } from '../apply-vacancies/apply-vacancies.component';

@Component({
  selector: 'app-view-vacancy',
  templateUrl: './view-vacancy.component.html',
  styleUrls: ['./view-vacancy.component.css']
})
export class ViewVacancyComponent implements OnInit {
  vacancyId : String = '';
  VacancyDetails : any;
  router : any;
  constructor(private VacancyService : VacancyService, private activatedRoute : ActivatedRoute, private MatDialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
       this.vacancyId  = data.vacancyId;
    });
    this.VacancyService.ViewVacancies(this.vacancyId ).subscribe(data => {
       this.VacancyDetails = data;
    });
  }

  onOpenDialogClick(){
    if(localStorage.getItem('token') == null){
      this.router.navigate(['/login']);
    }else{
      this.MatDialog.open(ApplyVacanciesComponent,
        {
          //Sending vacancyId
          data:this.vacancyId
        });
    }
    
  }
}

