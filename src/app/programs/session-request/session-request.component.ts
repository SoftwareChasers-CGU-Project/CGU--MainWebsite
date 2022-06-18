import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { ProgramsService} from 'src/app/services/programs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-request',
  templateUrl: './session-request.component.html',
  styleUrls: ['./session-request.component.css']
})
export class SessionRequestComponent implements OnInit {

  sendRequestForm : FormGroup= new FormGroup ({});
  constructor(private formBuilder: FormBuilder,
    private ProgramsService:ProgramsService,
    private _snackBar: MatSnackBar,
    private router:Router) { }
    // emailPattern ="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" ;

  ngOnInit(): void {
    this.getDate();
    this.sendRequestForm= this.formBuilder.group({
      // 'programImage': new FormControl(''),
      'companyName' : new FormControl('',[Validators.required]),
      'companyEmail': new FormControl('',[Validators.required,Validators.email]),
      'sessionTopic': new FormControl('',[Validators.required]),
      'TargetGroup': new FormControl('',[Validators.required]),
      'sessionDate': new FormControl('',[Validators.required]),
      'sessionDesc': new FormControl('',[Validators.required]),
      

 
    })
  }

  sendRequest(){
    this.ProgramsService.sendSessionRequest(this.sendRequestForm.value).subscribe(data =>{
      this._snackBar.open("You registerd Successfully");
      this.router.navigate(["/programs/list"])
    }, err =>{
      this._snackBar.open("Unable to register for the event..Please try again")
      this.refreshPage();
    })
 
  }

  minDate:any="";
  getDate(){
    var date:any= new Date();
    var toDate:any=date.getDate();
    if(toDate<10){
      toDate= '0'+toDate;
    }
    var month = date.getMonth()+1;
    if(month<10){
      month='0'+month;
    }
    var year=date.getFullYear();
    this.minDate=year+"-"+month+"-"+toDate;
    console.log(this.minDate)
  }

  refreshPage(){
    window.location.reload();
  }

}


