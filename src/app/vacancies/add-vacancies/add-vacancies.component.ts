import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
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
  constructor(private formBuilder: FormBuilder, private VacancyService: VacancyService, private router: Router) { }

  ngOnInit(): void {
    this.getDate();
     this.addVacancyForm = this.formBuilder.group({
        'companyName': new FormControl('', Validators.required),
        'companyEmail' : new FormControl('', [Validators.required, Validators.email]),
        'vacancyTitle' : new FormControl('', Validators.required),
        'vacancyDesc' : new FormControl('', Validators.required),
        'closingDate' : new FormControl('', Validators.required),
        'poster' : new FormControl('')
        // 'VacancyType' : new FormControl('')
     })
 }

 minDate:any="";
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
  // this.addVacancyForm.reset();
  this.router.navigate(["/vacancies/list"]);
 }
}







//  get Name()
//  {
//     return this.addVacancyForm.get('companyName');
//  }
//  url="./assets/uomlogo.png";

//  onSelectFile(e: any){
//    if(e.target.files){
//      var reader = new FileReader();
//      reader.readAsDataURL(e.target.files[0]);
//      reader.onload=(event:any)=>{
//        this.url= event.target.result;
//      }
//    }
//  }

//  VacancyTypes: VacancyType[] = [
//   {value: 'government-0', viewValue: 'Government'},
//   {value: 'semi-government-1', viewValue: 'Semi-government'},
//   {value: 'private-2', viewValue: 'Private'},
//   {value: 'ngo-3', viewValue: 'NGO'},
//   {value: 'internship-4', viewValue: 'Internship'},
//   {value: 'volunteer-5', viewValue: 'Volunteer'},
// ];

 
