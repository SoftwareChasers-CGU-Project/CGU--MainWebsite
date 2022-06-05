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
  addUserForm :FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private UserRegistrationService: UserRegistrationService) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'undergradFName': new FormControl(''),
      'undergradLName' : new FormControl(''),
      'email' : new FormControl(''),
      'faculty' : new FormControl(''),
      'batch' : new FormControl(''),
      'undergradPassword' : new FormControl(''),
      'phone_number' : new FormControl('')
   })
  }

  createUser(){
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
