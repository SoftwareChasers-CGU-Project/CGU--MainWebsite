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
  ComSessions:any;

  constructor(private ProgramsService:ProgramsService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

     this.filterProgramForm = this.formBuilder.group({
    'programCat': new FormControl(''),
  })

    if(this.programCat == "false"){
      console.log(this.programCat);
      this.ProgramsService.listProgramsbyCat(this.programCat).subscribe(data =>{
      this.programs=data;
      // console.log(this.programs);
      
        this.ProgramsService.listComSessions().subscribe(data => {
          this.listComSessions=data;
          console.log(this.listComSessions);
      });
   });

  }

  }

  filterProgram(){
    // this.refreshPage();
    // console.log("hi");
    // console.log(this.filterProgramForm.value);
    this.programCat = this.filterProgramForm.value['programCat']; 
    // console.log(this.programCat);
    if(this.programCat!="Company")  {
      this.ProgramsService.listProgramsbyCat(this.programCat).subscribe(data =>{
        this.programs=data;
        // console.log(this.programs);
      });
      this.listComSessions=null;
      console.log(this.listComSessions);
    }else{
      this.ProgramsService.listComSessions().subscribe(data => {
        this.listComSessions=data;
    });
    this.programs=null;
  }
    
}



}




  
