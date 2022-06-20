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
  phoneNumPattern = "^((\\+94-?)|0)?[0-9]{10}$";

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'undergradFName': new FormControl('',[Validators.required, Validators.pattern(this.namePattern)]),
      'undergradLName' : new FormControl('',[Validators.required, Validators.pattern(this.namePattern)]),
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'faculty' : new FormControl('', Validators.required),
      'batch' : new FormControl('', Validators.required),
      'undergradPassword' : new FormControl('', [Validators.required, Validators.minLength(8)]),
      'confirmpassword' : new FormControl('', [Validators.required, Validators.minLength(8)]),
      'phone_number' : new FormControl('', [Validators.required, Validators.pattern(this.phoneNumPattern)])
   },
     CustomValidators.mustMatch('undergradPassword', 'confirmpassword') 
   ) 
  }


  createUser(){
    this.UserRegistrationService.addUsers(this.addUserForm.value).subscribe(data => {
      this._snackbar.open("User registered successfully");
      this.refreshPage();
    }, error=>{
      this._snackbar.open("Unable to register User");
      this.refreshPage();
    })
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