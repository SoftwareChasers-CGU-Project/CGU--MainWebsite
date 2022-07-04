import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { ProgramsService} from 'src/app/services/programs.service';
import { MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-register-session-dialog',
  templateUrl: './register-session-dialog.component.html',
  styleUrls: ['./register-session-dialog.component.css']
})
export class RegisterSessionDialogComponent implements OnInit {

  sessionRegisterForm : FormGroup= new FormGroup ({});
  email_pattern="^[a-z0-9\\.]+@(uom){1}\\.(lk){1}$";
   // email_pattern2="^[a-z]+\\.[0-9][0-9]+@(uom){1}\\.(lk){1}$";

  constructor(@Inject(MAT_DIALOG_DATA) public data: String,private formBuilder: FormBuilder,
  private ProgramsService:ProgramsService,private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<RegisterSessionDialogComponent>) { }

  ngOnInit(): void {
    this.sessionRegisterForm= this.formBuilder.group({
      'email': new FormControl('',[Validators.required, Validators.pattern(this.email_pattern)]),
      })
  }

  registerSession(){
    var obj = {
      eventId : this.data,
      undergradEmail : this.sessionRegisterForm.get('email')?.value
    };

    console.log(obj);
    

    this.ProgramsService.registerSession(obj).subscribe(data =>{
      this._snackBar.open("You Registered Successfully");
      this.closeDialog();

      console.log(data);
    }, err =>{
      console.log(err.error.msg);
      this._snackBar.open("You have to sign to the website first");
      this.sessionRegisterForm.reset(); 
    })
 
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
