import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  resetPwForm: FormGroup = new FormGroup({});

  password: any;
  confirmPassword: any;
  email: any;
  hide = true;
  token: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private _snackbar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.token = data;
      console.log(data);
    });

    this.resetPwForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      undergradPassword1: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      undergradPassword2: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  resetPassword() {
    this.email = this.resetPwForm.value['email'];
    this.password = this.resetPwForm.value['undergradPassword1'];
    this.confirmPassword = this.resetPwForm.value['undergradPassword2'];

    if (this.password != this.confirmPassword) {
      alert('Passwords do not match.');
    } else {
      this.authService
        .resetPassword(this.email, this.confirmPassword, this.token)
        .subscribe(
          (data) => {
            this._snackbar.open('Password updated successfully');
            this.router.navigateByUrl('home');
          },
          (error) => {
            this._snackbar.open('Error updating password');
          }
        );
    }
  }
}
