import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramsService } from 'src/app/services/programs.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RegisterEventComponent } from '../register-event/register-event.component';


@Component({
  selector: 'app-view-program',
  templateUrl: './view-program.component.html',
  styleUrls: ['./view-program.component.css']
})
export class ViewProgramComponent implements OnInit {

  programId: String="";
  programDetails:any;
  router: any;
  isPastDate : boolean = false;

  constructor(private ProgramsService: ProgramsService, private activatedRoute: ActivatedRoute, private MatDialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.programId=data.programId;
    })

    this.ProgramsService.viewProgram(this.programId).subscribe(data => {
      
      this.programDetails=data;
      var dateNow = Date.now();
      var sessionDate =Math.floor( new Date(this.programDetails[0].programDate).getTime());
      if(dateNow > sessionDate){
        this.isPastDate = true;
      }
    })

   
  }

  onOpenDialogClick(){
    this.MatDialog.open(RegisterEventComponent,{
      width: '500px',
      data:this.programId
    });
  }

}
