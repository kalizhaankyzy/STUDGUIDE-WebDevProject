import { Component, Input, OnInit, Output } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'StudGuide';
  
  static logged:boolean;

  login(){
    return AppComponent.logged;
  }

  logout(){
    AppComponent.logged = false;
    localStorage.removeItem('token');
  }
}
