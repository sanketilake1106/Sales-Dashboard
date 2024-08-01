import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formdata: any;
  users: any;

  user: any;
  pass: any;

  constructor(private api: ApiService, private router: Router) {}

  // eye button for password
  togglePassword(): void {
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl('tp@gmail.com'),
      password: new FormControl('1234'),
    });
  }

  login(data: any) {
    console.log(data);

    this.api.postLogin('admins/login',data).subscribe((result: any) => {
      console.log(result); 

      if (result.status == "success") {

        localStorage.setItem('loginuser', JSON.stringify(result));
        localStorage.setItem('usertype', 'user');

        alert('Login Successful....');
        this.formdata.reset();
        this.router.navigate(['/admin/dashboard']);
      } else {
        alert('Invalid Credentials');
      }
    });
  }
}
