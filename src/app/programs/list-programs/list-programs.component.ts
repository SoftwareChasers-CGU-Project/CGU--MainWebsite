import { Component, OnInit } from '@angular/core';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-list-programs',
  templateUrl: './list-programs.component.html',
  styleUrls: ['./list-programs.component.css']
})
export class ListProgramsComponent implements OnInit {
  listPrograms:any;
  listComSessions:any;
  constructor(private ProgramsService:ProgramsService) { }

  ngOnInit(): void {
    this.ProgramsService.listPrograms().subscribe(data => {
      this.listPrograms=data;
      this.ProgramsService.listComSessions().subscribe(data => {
        this.listComSessions=data;
    });

    
    });
    
  }
  }

