import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from 'src/app/services/vacancy.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-accept-vacancies',
  templateUrl: './accept-vacancies.component.html',
  styleUrls: ['./accept-vacancies.component.css']
})
export class AcceptVacanciesComponent implements OnInit {
  vacancyId: string = '';
  VacancyDetails: any;

  constructor(private activatedRoute: ActivatedRoute, private VacancyService : VacancyService,
  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.vacancyId = data.vacancyId;
      console.log(this.vacancyId);
   });
  
//    this.applyVacancyForm = this.formBuilder.group({
//     'companyName': new FormControl(''),
//     'companyEmail' : new FormControl(''),
//     'vacancyTitle' : new FormControl(''),

//  })
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

// createVacancy(){
//   this.VacancyService.addVacancies(this.addVacancyForm.value).subscribe(data => {
//     Swal.fire({
//       position: 'center',
//       icon: 'success',
//       title: 'Vacancy created successfully',
//       showConfirmButton: false,
//       timer: 1000
//     })
//   }, error => {
//     Swal.fire({
//       position: 'center',
//       icon: 'error',
//       title: 'Unable to create Vacancy',
//       showConfirmButton: false,
//       timer: 1000
//     })
//   })
//   this.addVacancyForm.reset();
//  }
// }