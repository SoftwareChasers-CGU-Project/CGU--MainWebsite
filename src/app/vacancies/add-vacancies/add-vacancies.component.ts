import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface VacancyType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-vacancies',
  templateUrl: './add-vacancies.component.html',
  styleUrls: ['./add-vacancies.component.css']
})

export class AddVacanciesComponent implements OnInit {

  vacancyType = String;
  addVacancyForm :FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private VacancyService: VacancyService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getDate();
     this.addVacancyForm = this.formBuilder.group({
        'companyName': new FormControl('', Validators.required),
        'companyEmail': new FormControl('', [Validators.required, Validators.email]),
        'vacancyTitle': new FormControl('', Validators.required),
        'vacancyType' : new FormControl('', Validators.required),
        'contractType' : new FormControl('', Validators.required),
        'location' : new FormControl('', Validators.required),
        'vacancyDesc' : new FormControl('', Validators.required),
        'closingDate' : new FormControl('', Validators.required),
     })
 }

 minDate:any="";

 //Function get the future dates
  getDate(){
    var date:any= new Date();
    var toDate:any=date.getDate();
    if(toDate<10){
      toDate= '0'+toDate;
    }
    var month = date.getMonth()+1;
    if(month<10){
      month='0'+month;
    }
    var year=date.getFullYear();
    this.minDate=year+"-"+month+"-"+toDate;
    console.log(this.minDate)
  }

 createVacancy(){
  this.VacancyService.addVacancies(this.addVacancyForm.value).subscribe(data => {
    this._snackBar.open("Vacancy created successfully");
    this.router.navigate(["vacancies/list"])
  }, error=>{
    this._snackBar.open("Unable to create Vacancy");
    this.refreshPage();
  })
 }

 refreshPage() {
  window.location.reload();
 }
}







