import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ProgramsService} from 'src/app/services/programs.service';
import { MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent implements OnInit {

  eventRegisterForm : FormGroup= new FormGroup ({});
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: String,private formBuilder: FormBuilder,
  private ProgramsService:ProgramsService,private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<RegisterEventComponent>) { }

  ngOnInit(): void {
    

    this.eventRegisterForm= this.formBuilder.group({
      'email' : new FormControl(''),
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
      // this.router.navigate(["/programs/list"])
      this.closeDialog();

      console.log(data);
    }, err =>{
      console.log(err.error.msg);
      this._snackBar.open("Unable to register to the event..Use valid Email Address");
      this.eventRegisterForm.reset(); 
    })

 
  }

  closeDialog() {
    this.dialogRef.close();
  }

  
}
