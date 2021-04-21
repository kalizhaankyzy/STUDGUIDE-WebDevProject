import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../models';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[]=[];

  constructor(private newsService: NewsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('category_id');
      this.newsService.getNewsByCategory(id).subscribe((news)=>{
        this.news = news;
      })
    })
  }
}
