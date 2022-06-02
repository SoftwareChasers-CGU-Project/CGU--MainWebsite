import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { VacancyService } from 'src/app/services/vacancy.service';

import Swal from 'sweetalert2'



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
  addVacancyForm :FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private VacancyService: VacancyService) { }

  ngOnInit(): void {
     this.addVacancyForm = this.formBuilder.group({
        'companyName': new FormControl(''),
        'companyEmail' : new FormControl(''),
        'vacancyTitle' : new FormControl(''),
        'vacancyDesc' : new FormControl(''),
        'closingDate' : new FormControl(''),
        'poster' : new FormControl('')
        // 'VacancyType' : new FormControl('')
     })
 }

 url="./assets/uomlogo.png";

 onSelectFile(e: any){
   if(e.target.files){
     var reader = new FileReader();
     reader.readAsDataURL(e.target.files[0]);
     reader.onload=(event:any)=>{
       this.url= event.target.result;
     }

   }
 }

//  VacancyTypes: VacancyType[] = [
//   {value: 'government-0', viewValue: 'Government'},
//   {value: 'semi-government-1', viewValue: 'Semi-government'},
//   {value: 'private-2', viewValue: 'Private'},
//   {value: 'ngo-3', viewValue: 'NGO'},
//   {value: 'internship-4', viewValue: 'Internship'},
//   {value: 'volunteer-5', viewValue: 'Volunteer'},
// ];

 createVacancy(){
  this.VacancyService.addVacancies(this.addVacancyForm.value).subscribe(data => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Vacancy created successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }, error => {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Unable to create Vacancy',
      showConfirmButton: false,
      timer: 1000
    })
  })
  this.addVacancyForm.reset();
 }
}
