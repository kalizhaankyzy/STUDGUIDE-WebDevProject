import { Component, OnInit } from '@angular/core';
import { News } from '../models';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  static logged:boolean;
  searchText = "";
  news: News[]=[];
  searchRes:News[]=[];
  searching=false
  constructor(private newsService: NewsService){}

  ngOnInit(){
    this.getNews();
    this.searchRes=[];
  }

  login(){
    return HeaderComponent.logged;
  }

  logout(){
    HeaderComponent.logged = false;
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
    this.searchRes = this.news.filter(
      news => news.title.toLowerCase().includes(data)
    );
    if(this.searchRes.length) this.searching=true

  }
  

}
