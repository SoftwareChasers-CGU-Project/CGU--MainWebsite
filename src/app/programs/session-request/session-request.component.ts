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
  time: string="";

  constructor(private formBuilder: FormBuilder,
    private ProgramsService:ProgramsService,
    private _snackBar: MatSnackBar,
    private router:Router) {}
   

  ngOnInit(): void {
    this.getDate();
    this.sendRequestForm= this.formBuilder.group({
      'companyName' : new FormControl('',[Validators.required]),
      'companyEmail': new FormControl('',[Validators.required,Validators.email]),
      'sessionTopic': new FormControl('',[Validators.required,Validators.maxLength(100)]),
      'TargetGroup': new FormControl('',[Validators.required]),
      'sessionDate': new FormControl('',[Validators.required]),
      'sessionDesc': new FormControl('',[Validators.required]),
      'sessionTime': new FormControl('',[Validators.required])
    })
    this.setNow(); 
  }

  sendRequest(){
    console.log(this.sendRequestForm.value);
    
    this.ProgramsService.sendSessionRequest(this.sendRequestForm.value).subscribe(data =>{
      this._snackBar.open("You registerd Successfully");
      this.router.navigate(["/programs/list"])
    }, err =>{
      this._snackBar.open("This email already exists..!!")
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
  }

  refreshPage(){
    window.location.reload();
  }

  setNow(){
    let now = new Date();
    let hours = ("0" + now.getHours()).slice(-2);
    let minutes = ("0" + now.getMinutes()).slice(-2);
    let str = hours + ':' + minutes;
    this.time = str;
    this.sendRequestForm.patchValue({
      sessionTime : str
    })
    
  }



}


