import { Component, OnInit } from '@angular/core';
import { News } from '../models';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: News[]=[];

  constructor(private newsService: NewsService,) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.newsService.getNews().subscribe((data)=>{
      this.news = data;
    })
  }
}
