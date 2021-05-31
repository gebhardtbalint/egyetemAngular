import { Component, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from "@angular/common";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: "";
  password: "";
  user = "admin";
  pw = "admin";
  isLoggedin = false;

  constructor(
    @Inject(DOCUMENT) private document: Document
    // public router: AppRoutingModule
  ) { }

  ngOnInit(): void {

  }

  login(): void {
    if(this.user === this.username && this.pw === this.password){
      this.isLoggedin = true;
      localStorage.setItem('token', JSON.stringify(this.user));
      this.document.location.href = '/list';
    }else{
      this.isLoggedin = false;
      alert('Rossz felhasználónév vagy jelszó!');
    }
  }
}
