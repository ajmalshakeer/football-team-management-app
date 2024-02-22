import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    arr2: String[] = [];
    loginname: String = '';
    password:any="";
    authenticationfail_message:string='';

    constructor(private router: Router) {}

    ngOnInit() {
        const STORED_DATA = localStorage.getItem('userRecords');
        if (STORED_DATA) {
            this.arr2 = JSON.parse(STORED_DATA);
        }   
    }

    verify() {
        if (this.arr2.find((user) => user === this.loginname)) {
            if(this.password=='password'){
                this.router.navigate(['/Dashboard']);
            }
            else{
                this.authenticationfail_message='password incorrect'
            }   
        }
         else {
            this.authenticationfail_message='Oops User not found!'
        }
    }
}
