import { Component, OnInit } from '@angular/core';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  programs:any = [];
  listComSessions:any = [];
  constructor(private ProgramsService:ProgramsService) { }

  ngOnInit(): void {

    this.ProgramsService.listProgramsbyCat('false').subscribe(data =>{
      this.programs=data;
     

      this.ProgramsService.listComSessions().subscribe(data => {
        this.listComSessions=data;
  });

});

}
}
