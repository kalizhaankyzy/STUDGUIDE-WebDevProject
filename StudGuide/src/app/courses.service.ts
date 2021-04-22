import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './models';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  BASE_URl = 'http://localhost:8000';
  constructor(private http:HttpClient) { }

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.BASE_URl}/api/courses/`);
  }
}
