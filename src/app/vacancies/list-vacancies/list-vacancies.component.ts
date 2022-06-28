import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { VacancyService } from 'src/app/services/vacancy.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-vacancies',
  templateUrl: './list-vacancies.component.html',
  styleUrls: ['./list-vacancies.component.css']
})
export class ListVacanciesComponent implements OnInit {
  selectedValue = String;
  vacancytype : String = "false";
  acceptedvacancies: any = [];
  p:number=1;
  filterVacancyForm :FormGroup = new FormGroup({});
  
  constructor(private activatedRoute: ActivatedRoute, private VacancyService : VacancyService, private formBuilder: FormBuilder) { }

 
  ngOnInit(): void {
    this.filterVacancyForm = this.formBuilder.group({
      'vacancyType': new FormControl(''),
    })
    if(this.vacancytype == "false"){
      this.VacancyService.listAcceptedVacancies().subscribe(data =>{
        this.acceptedvacancies = data as String[];
      });
    }
    }

  filterVacancy(){
    this.vacancytype = this.filterVacancyForm.value['vacancyType']; 
    this.VacancyService.listVacanciesbyType(this.vacancytype).subscribe(data =>{
      this.acceptedvacancies = data as String[];
    });
  }

}


