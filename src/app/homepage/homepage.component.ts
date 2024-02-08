import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  index: number = 0;
  title = 'User Record';
  btnview: boolean = true;
  name: String = '';
  arr: String[] = [];
constructor(){}
  ngOnInit() {
    // Load data from local storage upon initialization
    const storedData = localStorage.getItem('userRecords');
    if (storedData) {
      this.arr = JSON.parse(storedData);
    }
  }

  add() {
    if (this.name != '') {
      this.arr.push(this.name);
      this.saveDataToLocalStorage();
      this.name = '';
    } else {
      alert('enter a name');
    }
  }
  delete(i: number) {
    this.arr.splice(i, 1);
    this.saveDataToLocalStorage();
    this.name='';
    this.btnview=true
  }
  edit(i: number) {
    this.name = this.arr[i];

    this.btnview = false;
    this.index = i;
  }

  update() {
    this.btnview = true;
    this.arr[this.index] = this.name;
    this.saveDataToLocalStorage();
    this.name = '';
  }

  private saveDataToLocalStorage() {
    // Save data to local storage
    localStorage.setItem('userRecords', JSON.stringify(this.arr));
  }

 
}
