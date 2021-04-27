import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  created = false;
  UserData;
  
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.UserData = {
      username: '',
      password: '',
      email: '',
    };
  }

  create(){
    this.categoryService.registerUser(this.UserData).subscribe(
      response => {
        alert('User ' + this.UserData.username + ' has been created.');
      },
      error => {
        alert("Error");
        // console.log("Error: ", error);
      }
    );
  }

}
