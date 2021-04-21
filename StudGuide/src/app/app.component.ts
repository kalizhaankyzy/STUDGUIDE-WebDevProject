import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'StudGuide';
  
  static logged:boolean;
  static created:boolean;
  searchText = "";

  constructor(){}


  login(){
    return AppComponent.logged;
  }
  logout(){
    AppComponent.logged = false;
    localStorage.removeItem('token');
  }

  created(){
    return AppComponent.created;
  }

}
