import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginuser: any;
  user: any;
  name:any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loginuser = JSON.parse(localStorage.getItem('loginuser') || '[]');
    this.name = this.loginuser.admin.name;
    console.log(this.name);
  }

  signOut() {
    localStorage.removeItem('loginuser');
    localStorage.removeItem('usertype');
    this.loginuser = null;
    this.user = null;
    this.router.navigate(['/login']);
  }
}
