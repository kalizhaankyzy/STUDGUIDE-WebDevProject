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
  username = "";
  password = "";
  email = "";

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.created = true;
    }
  }

  create(){
    this.categoryService.create(this.username, this.password, this.email).subscribe((data)=>{
      localStorage.setItem('token', data.token);
      this.username = "";
      this.password = "";
      this.email = "";
      this.created = true;
      AppComponent.created = this.created;
    });

  }
  isCreated(){
    return AppComponent.created;
  }

}
