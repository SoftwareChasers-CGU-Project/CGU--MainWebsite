import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from 'src/app/services/consultation.service';

@Component({
  selector: 'app-request-consultation',
  templateUrl: './request-consultation.component.html',
  styleUrls: ['./request-consultation.component.css'],
})
export class RequestConsultationComponent implements OnInit {
  requestConsultationForm: FormGroup = new FormGroup({});
  dropDown_list: any;
  selectedConsultant: String = '';
  consultantId: String = '';
  sessionType: any;

  email_pattern = '^[a-z0-9.]+@(uom){1}.(lk){1}$';
  constructor(
    private formBuilder: FormBuilder,
    private consultationService: ConsultationService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.sessionType = data.sessionType;
      console.log(data.sessionType);
    });
    this.consultationService.listConsultants().subscribe((data) => {
      this.dropDown_list = data;
      console.log(this.dropDown_list);
    });

    this.requestConsultationForm = this.formBuilder.group({
      undergraduate_email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.email_pattern),
      ]),
      consultant: new FormControl('', [Validators.required]),
    });
  }
  get undergradEmail() {
    return this.requestConsultationForm.get('undergraduate_email');
  }
  sendRequest() {
    var obj = {
      consultant:
        this.requestConsultationForm.get('consultant')?.value.consultantId,
      undergraduate_email: this.requestConsultationForm.get(
        'undergraduate_email'
      )?.value,
      sessionType: this.sessionType,
    };

    console.log(obj);
    this.consultantId = obj.consultant;
    console.log(this.consultantId);
    console.log(this.requestConsultationForm.value);
    this.selectedConsultant = this.requestConsultationForm.value['consultant'];
    console.log(this.selectedConsultant);

    this.consultationService
      .requestConsultation(obj, this.consultantId)
      .subscribe(
        (data) => {
          this._snackBar.open('Request Sent Successfully');

          console.log(data);
        },
        (err) => {
          console.log(err.error.msg);
          this._snackBar.open('Email is not registered in the system!');
          this.requestConsultationForm.reset();
        }
      );

    this.router.navigate(['/consultation/list']);
  }
}
