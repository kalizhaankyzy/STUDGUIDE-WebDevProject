import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { HeaderComponent } from '../header/header.component';
import { Course } from '../models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[]=[];
  logged = HeaderComponent.logged;
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses(){
    this.coursesService.getCourses().subscribe((data)=>{
      this.courses = data;
    })
  }

  getRate(rate){
    if(rate<2 && rate>0) return "assets/star1.png";
    else if(rate<3) return "assets/star2.png"
    else if(rate<4) return "assets/star3.png"
    else if(rate<5) return "assets/star4.png"
    else if(rate>=5) return "assets/star5.png"
    return "assets/star0.png"
  }

  getLevel(level_id){
    if(level_id==1) return "assets/lvlo1.png"
    else if(level_id==2) return "assets/lvlo2.png"
    return "assets/lvlo3.png"
  }

}
