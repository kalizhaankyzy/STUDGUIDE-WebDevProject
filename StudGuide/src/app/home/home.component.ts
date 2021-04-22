import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Review } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reviews:Review[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(){
    this.categoryService.getReviews().subscribe((data)=>{
      this.reviews = data;
    })
  }
}
