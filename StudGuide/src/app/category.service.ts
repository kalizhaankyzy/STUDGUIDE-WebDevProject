import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken, Category, Review} from './models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URl = 'http://localhost:8000';
  constructor(private http:HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.BASE_URl}/api/categories/`);
  }
  
  getCategory(id:number):Observable<Category>{
    return this.http.get<Category>(`${this.BASE_URl}/api/categories/${id}`);
  }

  login(username, password):Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.BASE_URl}/api/login/`,{
      username,
      password
    });
  }

  create(username: string, password: string, email: string) {
    return this.http.post<AuthToken>(`${this.BASE_URl}/api/signUp/`,{
      username,
      password,
      email
    });
  }

  getReviews():Observable<Review[]>{
    return this.http.get<Review[]>(`${this.BASE_URl}/api/reviews/`);
  }
}
