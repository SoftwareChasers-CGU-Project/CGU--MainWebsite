import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RegisterEventComponent } from '../../programs/register-event/register-event.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userRole = String;
  logInForm: FormGroup = new FormGroup({});
  form: any = {
    email: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  hide = true;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private MatDialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.logInForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      undergradPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit(): void {

    console.log('onSubmit');
    this.authService.login(this.logInForm.value).subscribe(
      (data) => {
        console.log(data)
        this.tokenStorage.saveToken(data.accessToken);
        localStorage.setItem('token', data.accessToken);
        if(localStorage.getItem('token') != 'undefined')
        {
          this._snackBar.open("You LoggedIn Successfully");

        }

        // if(localStorage.getItem('token') != 'undefined' && localStorage.getItem('path') != 'undefined'){
        //  var dialogComponent=localStorage.getItem('path')
        //  console.log(dialogComponent)
        //   this.MatDialog.open(RegisterEventComponent,{
        //     width: '500px',
        //     data:"",
        //   });
        // }
        
        this.userRole = this.authService.getRole();
        // console.log(this.userRole);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();

        var shouldNavigateToViewPage = window.sessionStorage.getItem("path");
        if(shouldNavigateToViewPage){
          this.router.navigateByUrl(shouldNavigateToViewPage);
          window.sessionStorage.setItem("path", "");
        }else{
          this.router.navigateByUrl("/");
        }

      },
      (err) => {
        this.errorMessage = err.error.data;
        this.isLoginFailed = true;
        this._snackBar.open(err.error.data);
      }
    );
  }
  reloadPage(): void {
    console.log('reload');
    this.router.navigateByUrl('');
    // window.location.reload();
  }
}
