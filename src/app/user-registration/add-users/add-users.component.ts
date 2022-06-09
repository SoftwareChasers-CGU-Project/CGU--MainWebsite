import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  hide = true;

  userEmail : any;
  addUserForm :FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private UserRegistrationService: UserRegistrationService) { }

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
      'phone_number' : new FormControl('', [Validators.required, Validators.pattern(this.phoneNumPattern)])
   })
  }

  createUser(){
    // this.UserRegistrationService.checkUser(this.addUserForm.value.email).subscribe(data=>{
    //    this.userEmail = data;
    //    console.log(data);
    //    console.log(this.userEmail[0]['checkEmail']);
    //   //  const ids = this.userEmail.map((obj) => obj.checkEmail);
    //    if(this.userEmail[0]['checkEmail'] == 0){  
    //      console.log("hi");
    //    }
    // })


    this.UserRegistrationService.addUsers(this.addUserForm.value).subscribe(data => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User registered successfully',
        showConfirmButton: false,
        timer: 1000
      })
    }, error => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Unable to register user',
        showConfirmButton: false,
        timer: 1000
      })
    })
    this.addUserForm.reset();
   }
}
