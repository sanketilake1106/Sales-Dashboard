import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  loginuser:any;
  user:any;
  constructor(private router: Router) {}
  ngOnInit(): void {}

  logOut() {
    localStorage.removeItem('loginuser');
    localStorage.removeItem('usertype');
    this.loginuser = null;
    this.user = null;
    this.router.navigate(['/login']);
  }
}
