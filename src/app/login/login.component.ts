import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  arr2:String[]=[]
  loginname:String='';
  constructor(private router:Router){

  }
  ngOnInit() {
    // Load data from local storage upon initialization
    const storedData = localStorage.getItem('userRecords');
    if (storedData) {
      this.arr2 = JSON.parse(storedData);
    }
  }
verify(){
  if(this.arr2.find((user)=>user===this.loginname)){
    this.router.navigate(['/homepage'])
  }
  else{
        alert('Oops! User not found')
  }
}
  
}
