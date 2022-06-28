import { Component, OnInit } from '@angular/core';
import { ProgramsService } from 'src/app/services/programs.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {RegisterSessionDialogComponent } from '../register-session-dialog/register-session-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-session',
  templateUrl: './view-session.component.html',
  styleUrls: ['./view-session.component.css']
})
export class ViewSessionComponent implements OnInit {
  sessionId: String="";
  sessionDetails:any;
  router: any;
  isPastDate : boolean = false;

  constructor(private ProgramsService: ProgramsService, private activatedRoute: ActivatedRoute, private MatDialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.sessionId=data.sessionId;
    })

    this.ProgramsService.viewSession(this.sessionId).subscribe(data => {
      
      this.sessionDetails=data;
      var dateNow = Date.now();

      var sessionDate =Math.floor( new Date(this.sessionDetails[0].sessionDate).getTime());
      if(dateNow > sessionDate){
        this.isPastDate = true;
      }
    })

    
  }

  onOpenDialogClick(){
    this.MatDialog.open(RegisterSessionDialogComponent,{
      width: '500px',
      data:this.sessionId
    });
  }

}
