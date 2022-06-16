import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VacancyService } from 'src/app/services/vacancy.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-apply-vacancies',
  templateUrl: './apply-vacancies.component.html',
  styleUrls: ['./apply-vacancies.component.css']
})
export class ApplyVacanciesComponent implements OnInit {
  vacancyId : String = '';
  applyVacancyForm :FormGroup = new FormGroup({});
  constructor( @Inject(MAT_DIALOG_DATA) private data: String, private formBuilder: FormBuilder, private VacancyService: VacancyService) { }

  ngOnInit(): void {
    this.vacancyId =this. data;
  
    this.applyVacancyForm = this.formBuilder.group({
      'vacancyId'  : this.vacancyId,
      'undergrad_email' : new FormControl('',[Validators.required, Validators.email]),
      'linkedin' : new FormControl('', Validators.required),
   })
  }
  url="./assets/uomlogo.png";
 
applyVacancy(){
  this.VacancyService.applyVacancies(this.applyVacancyForm.value).subscribe(data => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Linkedin Profile is submitted successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }, error => {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Unable to submit Linkedin Profile',
      showConfirmButton: false,
      timer: 1000
    })
  })
  this.applyVacancyForm.reset();
 }

 
}

 // onSelectFile(e: any){
  //   if(e.target.files){
  //     var reader = new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload=(event:any)=>{
  //       this.url= event.target.result;
  //     }
  //   }
  // }
  
