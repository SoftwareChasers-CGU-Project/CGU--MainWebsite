import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  newsId: String="";
  news:any;
  router: any;
  constructor(private NewsService: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.newsId=data.newsID;
      console.log( data.newsId)
      console.log( this.newsId)
    })

    this.NewsService.viewNews(this.newsId).subscribe(data => {
      
      this.news=data;
      console.log(this.news)
    })

     
  }
}

