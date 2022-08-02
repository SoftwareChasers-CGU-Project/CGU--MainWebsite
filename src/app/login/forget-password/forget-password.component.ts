import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  forgetPwForm: FormGroup = new FormGroup({});
  hide = true;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.forgetPwForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  forgetPassword() {
    this.authService
      .forgetPassword(this.forgetPwForm.value)
      .subscribe((data) => {
        this._snackbar.open('Check your email ');
        console.log(data);
      });
  }
}



