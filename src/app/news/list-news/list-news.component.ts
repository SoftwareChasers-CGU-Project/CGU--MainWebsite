import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { FormBuilder, FormControl} from '@angular/forms';
// import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  listNews: any;
  news:any;
  filterNewsForm:any;
  newsCate:String="false";
  constructor(private NewsService : NewsService, private formBuilder:FormBuilder) { }



  ngOnInit(): void {

    this.filterNewsForm = this.formBuilder.group({
      'newsCate': new FormControl(''),
    })
  if(this.newsCate == "false"){
    console.log(this.newsCate);
    this.NewsService.listNewsbyCat(this.newsCate).subscribe(data =>{
    this.news=data;
    console.log(this.news);
 });
    
  // }

}
}
filterProgram(){
  this.newsCate = this.filterNewsForm.value['newsCate']; 
      this.NewsService.listNewsbyCat(this.newsCate).subscribe(data =>{
        this.news=data;
        // console.log(this.programs);
      }); 
}
}

