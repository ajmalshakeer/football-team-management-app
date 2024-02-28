import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit, AfterViewInit {
  @ViewChild('inputName') inputBox!: ElementRef;

  index = 0;
  deleteModalIndex: number = 0;
  title = 'Admin Record';
  isShowAddOrUpdateButton = true;
  AdminName: String = '';
  LocalStorageArray: String[] = [];

  ngOnInit() {
    const STORED_DATA = localStorage.getItem('userRecords');
    if (STORED_DATA) {
      this.LocalStorageArray = JSON.parse(STORED_DATA);
    }
  }

  ngAfterViewInit(): void {
    this.inputBox.nativeElement.focus();
  }

  addNewAdmin() {
    if ((this.AdminName = this.AdminName.replace(/\s+$/, '').trim())) {
      this.LocalStorageArray.push(this.AdminName);
      this.saveDataToLocalStorage();
      this.AdminName = '';
      this.inputBox.nativeElement.focus();
    } else {
      alert('No values entered,please enter some values');
      this.inputBox.nativeElement.focus();
      this.AdminName = '';
    }
  }

  editAdmin(i: number) {
    this.AdminName = this.LocalStorageArray[i];
    this.isShowAddOrUpdateButton = false;
    this.index = i;
    this.inputBox.nativeElement.focus();
  }

  updateAdmin() {
    this.isShowAddOrUpdateButton = true;
    this.AdminName = this.AdminName.replace(/\s+$/, '').trim();
    this.LocalStorageArray[this.index] = this.AdminName;
    this.saveDataToLocalStorage();
    this.AdminName = '';
    this.inputBox.nativeElement.focus();
  }

  private saveDataToLocalStorage() {
    localStorage.setItem('userRecords', JSON.stringify(this.LocalStorageArray));
  }

  deleteAdmin(deleteindex: number) {
    this.deleteModalIndex = deleteindex;
    this.AdminName = '';
    this.isShowAddOrUpdateButton = true;
    this.inputBox.nativeElement.focus();
  }

  deletemodal() {
    this.LocalStorageArray.splice(this.deleteModalIndex, 1);
    this.saveDataToLocalStorage();
  }
}
