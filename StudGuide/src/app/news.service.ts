import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author, News } from './models';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  BASE_URl = 'http://localhost:8000';
  constructor(private http:HttpClient) { }

  getNews(): Observable<News[]>{
    return this.http.get<News[]>(`${this.BASE_URl}/api/news/`);
  }

  getNewsByCategory(id:number):Observable<News[]>{
    return this.http.get<News[]>(`${this.BASE_URl}/api/categories/${id}/news/`);
  }

  getNewsById(id:number):Observable<News>{
    return this.http.get<News>(`${this.BASE_URl}/api/news/${id}`);
  }
  
  addNews(news: News):Observable<News>{
    return this.http.post<News>(`${this.BASE_URl}/api/news/`, news);
  }

  addAuthor(author: Author):Observable<Author>{
    return this.http.post<Author>(`${this.BASE_URl}/api/authors/`, author);
  }
}
