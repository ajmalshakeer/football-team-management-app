import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit,AfterViewInit {
  @ViewChild('inputName') inputBox!: ElementRef;
  index: number = 0;
  deletemodalindex:number=0;
  title = 'User Record';
  isShowAddOrUpdateButton = true;
  name: String = '';
  arr: String[] = [];


   constructor()
   {

   }


  /* Load data from local storage upon initialization */
  ngOnInit() {
    const STORED_DATA = localStorage.getItem('userRecords');

    if (STORED_DATA) {
      this.arr = JSON.parse(STORED_DATA);      
     }
  }


  ngAfterViewInit(): void {
    this.inputBox.nativeElement.focus();
  }

  addingRecord() {
    if (this.name = this.name.replace(/\s+$/, '').trim()) {
      this.arr.push(this.name);
      this.saveDataToLocalStorage();
      this.name = '';
      this.inputBox.nativeElement.focus();
    } else {
      alert('No values entered,please enter some values');
      this.inputBox.nativeElement.focus();
      this.name = '';
    }
  }

  editingRecord(i: number) {
    this.name = this.arr[i];
    this.isShowAddOrUpdateButton = false;
    this.index = i;
    this.inputBox.nativeElement.focus();
  }

  updatingRecord() {
    this.isShowAddOrUpdateButton = true;
    this.name = this.name.replace(/\s+$/, '').trim()
    this.arr[this.index] = this.name;
    this.saveDataToLocalStorage();
    this.name = '';
    this.inputBox.nativeElement.focus();
  }

  /* Save data to local storage */
  private saveDataToLocalStorage() {
    localStorage.setItem('userRecords', JSON.stringify(this.arr));
  }

  deletingRecord(deleteindex: number) {
      this.deletemodalindex=deleteindex;
      this.name = '';
      this.isShowAddOrUpdateButton = true;
      this.inputBox.nativeElement.focus();
  }

  deletemodal(){
    this.arr.splice(this.deletemodalindex, 1);
    this.saveDataToLocalStorage();
  }


}



