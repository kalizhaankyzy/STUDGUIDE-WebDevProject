import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Review } from '../models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  review;
  // review_email = "";
  // review_text = "";
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.review={
      sender:'',
      text:''
    };
  }
  addReview(){
    this.categoryService.addReview(this.review).subscribe(
      responce=>{
        alert("Thank you for your response! Your review was sent.")
      },
      error=>{
        alert(error)
      }
    );
    // this.review_email = "";
    // this.review_text = "";
  }
}
