import { Component, OnInit } from '@angular/core';
import { VacancyService } from 'src/app/services/vacancy.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ApplyVacanciesComponent } from '../apply-vacancies/apply-vacancies.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-vacancy',
  templateUrl: './view-vacancy.component.html',
  styleUrls: ['./view-vacancy.component.css']
})
export class ViewVacancyComponent implements OnInit {
  vacancyId : String = '';
  VacancyDetails : any;
  constructor(private VacancyService : VacancyService, private activatedRoute : ActivatedRoute, private MatDialog: MatDialog,  private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
       this.vacancyId  = data.vacancyId;
    });
    this.VacancyService.ViewVacancies(this.vacancyId ).subscribe(data => {
       this.VacancyDetails = data;
       console.log(this.VacancyDetails);
    });
    var shouldOpenRegisterDialog =
      window.sessionStorage.getItem('openRegDialog');
    if (shouldOpenRegisterDialog) {
      this.onOpenDialogClick();
      window.sessionStorage.setItem('openRegDialog', "");
    }
  }

  onOpenDialogClick(){
    if(localStorage.getItem('token') == null){
      var locationPath = '/vacancies/view/' + this.vacancyId;
      window.sessionStorage.setItem('path', locationPath);
      window.sessionStorage.setItem('openRegDialog', 'yes');
      this.router.navigateByUrl('/login');
    }else{
      this.MatDialog.open(ApplyVacanciesComponent,
        {
          //Sending vacancyId
          data:this.vacancyId
        });
    }
    
  }
}