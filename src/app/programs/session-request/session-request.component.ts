import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';

import { ProgramsService} from 'src/app/services/programs.service';

@Component({
  selector: 'app-session-request',
  templateUrl: './session-request.component.html',
  styleUrls: ['./session-request.component.css']
})
export class SessionRequestComponent implements OnInit {

  sendRequestForm : FormGroup= new FormGroup ({});
  constructor(private formBuilder: FormBuilder,
    private ProgramsService:ProgramsService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.sendRequestForm= this.formBuilder.group({
      // 'programImage': new FormControl(''),
      'companyName' : new FormControl(''),
      'companyEmail': new FormControl(''),
      'sessionTopic': new FormControl(''),
      'TargetGroup': new FormControl(''),
      'sessionDate': new FormControl(''),
      'sessionDesc': new FormControl('')
    })
  }

  sendRequest(){
    this.ProgramsService.sendSessionRequest(this.sendRequestForm.value).subscribe(data =>{
      // this._snackBar.open("Event Added Successfully");
      this.sendRequestForm.reset(); 
    }, err =>{
      this._snackBar.open("Unable to Add Event")
    })
 
  }

}


