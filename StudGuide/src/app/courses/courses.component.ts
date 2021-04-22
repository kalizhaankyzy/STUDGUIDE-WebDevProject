import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CoursesService } from '../courses.service';
import { Course } from '../models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[]=[];
  logged = AppComponent.logged;
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses(){
    this.coursesService.getCourses().subscribe((data)=>{
      this.courses = data;
    })
  }
}
