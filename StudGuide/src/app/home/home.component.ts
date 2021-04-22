import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { CoursesService } from '../courses.service';
import { Course, News, Review } from '../models';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reviews:Review[] = [];
  courses:Course[] = [];
  news:News[] = [];
  constructor(private categoryService: CategoryService,
              private newsService: NewsService,
              private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getReviews();
    this.getCourses();
    this.getNews();
  }

  getReviews(){
    this.categoryService.getReviews().subscribe((data)=>{
      this.reviews = data;
    })
  }

  getCourses(){
    this.coursesService.getCourses().subscribe((data) =>{
      this.courses = data;
    })
  }
  getNews(){
    this.newsService.getNews().subscribe((data)=>{
    this.news = data;
    })
  }
}
