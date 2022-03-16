import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VacancyService } from 'src/app/services/vacancy.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-apply-vacancies',
  templateUrl: './apply-vacancies.component.html',
  styleUrls: ['./apply-vacancies.component.css']
})
export class ApplyVacanciesComponent implements OnInit {

  applyVacancyForm :FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private VacancyService: VacancyService) { }

  ngOnInit(): void {

    this.applyVacancyForm = this.formBuilder.group({
      'name': new FormControl(''),
      'email' : new FormControl(''),
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
applyVacancy(){
  this.VacancyService.applyVacancies(this.applyVacancyForm.value).subscribe(data => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Cv is submitted successfully',
      showConfirmButton: false,
      timer: 1000
    })
  }, error => {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Unable to submit CV',
      showConfirmButton: false,
      timer: 1000
    })
  })
  this.applyVacancyForm.reset();
 }
}


