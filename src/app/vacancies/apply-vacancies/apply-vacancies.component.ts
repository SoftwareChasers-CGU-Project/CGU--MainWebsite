import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VacancyService } from 'src/app/services/vacancy.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-vacancies',
  templateUrl: './apply-vacancies.component.html',
  styleUrls: ['./apply-vacancies.component.css']
})
export class ApplyVacanciesComponent implements OnInit {
  vacancyId : String = '';
  applyVacancyForm :FormGroup = new FormGroup({});
  constructor( @Inject(MAT_DIALOG_DATA) private data: String, private formBuilder: FormBuilder, private VacancyService: VacancyService, private _snackBar: MatSnackBar, private router: Router) { }

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
    this._snackBar.open("Applied for the vacancy successfully");
    this.router.navigate(['/vacancies/view',this.vacancyId]);
    this.refresh();
  }, error=>{
    this._snackBar.open("User is not registered.");
    this.refresh();
  }) 
 }

 refresh(){
  window.location.reload();
 }

 
 
}
