import { Component, Input, OnInit, Output } from '@angular/core';
import { News } from './models';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StudGuide';
  
  static logged:boolean;
  searchText = "";
  news: News[]=[];
  searching=false
  constructor(private newsService: NewsService){}

  ngOnInit(){
    this.getNews();
  }

  login(){
    return AppComponent.logged;
  }

  logout(){
    AppComponent.logged = false;
    localStorage.removeItem('token');
  }

  getNews(){
    this.newsService.getNews().subscribe((data)=>{
      this.news = data;
    })
  }
  search(){
    // alert(`Searching... ${this.searchText}`)
    const data = this.searchText;
    this.news = this.news.filter(
      news => news.title.toLowerCase().includes(data)
    );
    if(this.news.length) this.searching=true
  }
  
  
}
