import { StaticSymbol } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { CategoryService } from '../category.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  // static logged:boolean;
  logged=false;
  username = "";
  password = "";

  constructor(private categoryService: CategoryService) {
   }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  login(){
    this.categoryService.login(this.username, this.password).subscribe((data)=>{
      localStorage.setItem('token', data.token);
      this.logged = true;
      this.username = "";
      this.password = "";
      HeaderComponent.logged = this.logged;
    });
    
  }
  isItLogged(){
    return HeaderComponent.logged;
  }
}
