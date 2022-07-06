import { Component, OnInit} from '@angular/core';
import { ProgramsService } from 'src/app/services/programs.service';
import { FormBuilder, FormControl} from '@angular/forms';




@Component({
  selector: 'app-list-programs',
  templateUrl: './list-programs.component.html',
  styleUrls: ['./list-programs.component.css']
})
export class ListProgramsComponent implements OnInit {
  // listPrograms:any;
  listComSessions:any;
  programs:any = [];
  filterProgramForm:any;
  programCat:String="false";
  // selectedValue=String;
  totalLength:any;
  p:number=1;
  p2:number=1;
  p3:number=1;
  p4:number=1;
  ComSessions:any;
  listPastPrograms:any;
  listPastComsessions:any;

  constructor(private ProgramsService:ProgramsService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

     this.filterProgramForm = this.formBuilder.group({
    'programCat': new FormControl(''),
  })

    if(this.programCat == "false"){
      console.log(this.programCat);
      this.ProgramsService.listProgramsbyCat(this.programCat).subscribe(data =>{
      this.programs=data;
     
      this.ProgramsService.listComSessions().subscribe(data => {
      this.listComSessions=data;
    });

      this.ProgramsService.listPastPrograms().subscribe(data => {
      this.listPastPrograms=data;
    });

      this.ProgramsService.listPastComsessions().subscribe(data => {
      this.listPastComsessions=data;
          
        
          
      });
    });

    }

}

  filterProgram(){
    this.programCat = this.filterProgramForm.value['programCat']; 
    if(this.programCat!="Company")  {
      this.ProgramsService.listProgramsbyCat(this.programCat).subscribe(data =>{
        this.programs=data;

      });
     
    }else{
      this.ProgramsService.listComSessions().subscribe(data => {
        this.listComSessions=data;
        this.programs=null;
    });
   
  }
    
}



}




  
