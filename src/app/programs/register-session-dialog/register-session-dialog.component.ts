import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ProgramsService} from 'src/app/services/programs.service';
import { MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-register-session-dialog',
  templateUrl: './register-session-dialog.component.html',
  styleUrls: ['./register-session-dialog.component.css']
})
export class RegisterSessionDialogComponent implements OnInit {

  sessionRegisterForm : FormGroup= new FormGroup ({});

  constructor(@Inject(MAT_DIALOG_DATA) public data: String,private formBuilder: FormBuilder,
  private ProgramsService:ProgramsService,private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<RegisterSessionDialogComponent>) { }

  ngOnInit(): void {
    this.sessionRegisterForm= this.formBuilder.group({
      'email' : new FormControl(''),
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
      this._snackBar.open("Unable to register to the event..Use valid Email Address");
      this.sessionRegisterForm.reset(); 
    })
 
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
