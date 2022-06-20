import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomValidators } from 'src/app/user-registration/CustomValidators';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  hide = true;

  userEmail : any;
  undergradPassword:any;
  confirmPassword: any;
  addUserForm :FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private UserRegistrationService: UserRegistrationService, private router: Router, private _snackbar:MatSnackBar ) { }

  namePattern ="[a-zA-Z]*"; 
  namePattern2 ="[0-9]*";
  phoneNumPattern = "^((\\+94?)|0)?[0-9]{10}$";
  email_pattern="^[a-z0-9\\.]+@(uom){1}\\.(lk){1}$";
  
  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'undergradFName': new FormControl('',[Validators.required, Validators.pattern(this.namePattern)]),
      'undergradLName' : new FormControl('',[Validators.required, Validators.pattern(this.namePattern)]),
      'email' : new FormControl('', [Validators.required, Validators.pattern(this.email_pattern)]),
      'faculty' : new FormControl('',[Validators.required, Validators.pattern(this.namePattern2)]),
      'batch' : new FormControl('', Validators.required),
      'batch2' : new FormControl('', Validators.required),
      'undergradPassword' : new FormControl('', [Validators.required, Validators.minLength(8)]),
      'confirmpassword' : new FormControl('', [Validators.required, Validators.minLength(8)]),
      'phone_number' : new FormControl('', [Validators.required, Validators.pattern(this.phoneNumPattern)])
   }
   ) 
  }


  createUser(){
    this.undergradPassword =  this.addUserForm.value['undergradPassword'];
    console.log( this.undergradPassword);
    console.log(this.confirmPassword);
    this.confirmPassword = this.addUserForm.value['confirmpassword'];
    if (this.undergradPassword != this.confirmPassword) {
        alert("Passwords do not match.");   
    }else{
      this.UserRegistrationService.addUsers(this.addUserForm.value).subscribe(data => {
        this._snackbar.open("User registered successfully");
        this.refreshPage();
      }, error=>{ 
        this.refreshPage();
        this._snackbar.open("User already registered.");    
      })
    }   
  }
  
   refreshPage() {
    window.location.reload();
   }
    

}


// MustMatch(controlName: string, matchingControlName: string) {
//   return (formGroup: FormGroup) => {
//   const control = formGroup.controls[controlName];
//   const matchingControl = formGroup.controls[matchingControlName];
//   if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//   return;
//   }
//   if (control.value !== matchingControl.value) {
//   matchingControl.setErrors({ mustMatch: true });
//   } else {
//   matchingControl.setErrors(null);
//   }
//   }
//   }