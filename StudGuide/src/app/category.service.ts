import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './models';

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
}
