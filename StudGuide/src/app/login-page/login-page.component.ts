import { StaticSymbol } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  logged=false;

  username = " ";
  password = "";

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.username, this.password);
    this.logged = true;
  }
}
