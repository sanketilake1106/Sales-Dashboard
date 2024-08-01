import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  loginuser: any;
  name: any;
  username: any;
  password: any;

  constructor() {}

  ngOnInit(): void {
    this.loginuser = JSON.parse(localStorage.getItem('loginuser') || '[]');
    this.name = this.loginuser.name;
    this.username = this.loginuser.username;
    this.password = this.loginuser.password;
  }
}
