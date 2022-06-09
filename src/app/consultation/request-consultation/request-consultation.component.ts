import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConsultationService } from 'src/app/services/consultation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-consultation',
  templateUrl: './request-consultation.component.html',
  styleUrls: ['./request-consultation.component.css']
})
export class RequestConsultationComponent implements OnInit {
  requestConsultationForm: FormGroup =new FormGroup({});
  selected: String = '';
  @Input() type: string | undefined;
  
  constructor(
    private formBuilder: FormBuilder,
    private consultationService: ConsultationService, 
    private router: Router,
    private  _snackBar: MatSnackBar,
   
  ) { }
 
  ngOnInit(): void {
    this.requestConsultationForm=this.formBuilder.group({
      // 'undergraduate_email': new FormControl('', [Validators.required]),
      // 'consultantLName': new FormControl('', [Validators.required]),
      // 'universityName': new FormControl('', [Validators.required]),
      // 'post':new FormControl('',[Validators.required]),
      'undergraduate_email': new FormControl('',)
    })
    // let myCompOneObj = new ListConsultationComponent();
    // myCompOneObj.OnMatCardClickEvent(this.clicked_id);
  }

  sendRequest(){  
    this.consultationService.requestConsultation(this.requestConsultationForm.value).subscribe(data =>{   
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sent!',
        text:'Request sent Successfully!',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      });
      
    },err =>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Unable to send Request!',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      });
    })
    //this.router.navigate(["/consultants/list"]);
  }

}







