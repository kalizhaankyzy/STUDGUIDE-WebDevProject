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

  review_email = "";
  review_text = "";
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

  search(){
    alert(`Searching... ${this.searchText}`)
    this.searchText = "";
  }
  
  addReview(){
    alert("Thank you for your response! Your review was sent.")
    this.review_email = "";
    this.review_text = "";
  }
}
