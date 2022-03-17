import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-view-program',
  templateUrl: './view-program.component.html',
  styleUrls: ['./view-program.component.css']
})
export class ViewProgramComponent implements OnInit {

  programId: String="";
  programDetails:any;
  router: any;
  constructor(private ProgramsService: ProgramsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.programId=data.programId;
      console.log( data.programId)
      console.log( this.programId)
    })

    this.ProgramsService.viewProgram(this.programId).subscribe(data => {
      
      this.programDetails=data;
      console.log(this.programDetails)
    })
  }

}
