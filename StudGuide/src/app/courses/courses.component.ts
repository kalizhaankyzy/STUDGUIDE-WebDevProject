import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[]=[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses(){
    this.coursesService.getNews().subscribe((data)=>{
      this.courses = data;
    })
  }
}