import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  AdminArray: String[] = [];
  loginName: String = '';
  password: any = '';
  authenticationfail_message: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.adminRecord();
  }

  verify() {
    if (this.AdminArray.find((user) => user === this.loginName)) {
      if (this.password == 'password') {
        this.router.navigate(['/Dashboard']);
      } else {
        this.authenticationfail_message = 'password incorrect';
      }
    } else {
      this.authenticationfail_message = 'Oops User not found!';
    }
  }

  adminRecord() {
    const STORED_DATA = localStorage.getItem('userRecords');
    if (STORED_DATA) {
      this.AdminArray = JSON.parse(STORED_DATA);
    }
  }
}
