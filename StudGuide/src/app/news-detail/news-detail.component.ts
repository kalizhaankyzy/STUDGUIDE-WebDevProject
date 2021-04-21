import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../models';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  news:News;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('news_id');
      this.newsService.getNewsById(id).subscribe((news)=>{
        this.news = news;
      })
    })
  }
}
