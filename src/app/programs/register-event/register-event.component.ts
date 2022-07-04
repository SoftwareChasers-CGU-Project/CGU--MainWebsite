import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProgramsService} from 'src/app/services/programs.service';
import { MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent implements OnInit {

  eventRegisterForm : FormGroup= new FormGroup ({});
  email_pattern="^[a-z0-9\\.]+@(uom){1}\\.(lk){1}$";
   // email_pattern2="^[a-z]+\\.[0-9][0-9]+@(uom){1}\\.(lk){1}$";
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: String,private formBuilder: FormBuilder,
  private ProgramsService:ProgramsService,private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<RegisterEventComponent>) { }

  ngOnInit(): void {
    
   
    this.eventRegisterForm= this.formBuilder.group({
      'email': new FormControl('',[Validators.required, Validators.pattern(this.email_pattern)]),
      })
  }

  registerEvent(){
    var obj = {
      eventId : this.data,
      undergradEmail : this.eventRegisterForm.get('email')?.value
    };

    console.log(obj);
    
    this.ProgramsService.registerEvent(obj).subscribe(data =>{
      this._snackBar.open("You registerd Successfully");
      this.closeDialog();

      console.log(data);
    }, err =>{
      console.log(err.error.msg);
      this._snackBar.open("You have to sign up for the website first");
      this.eventRegisterForm.reset(); 
    })

 
  }

  closeDialog() {
    this.dialogRef.close();
  }

  
}
