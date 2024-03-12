import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PlayerService } from '../Service/player.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {

  adminForm!: FormGroup;

  @ViewChild('inputName') inputBox!: ElementRef;
  @ViewChild('adminCancleButton') adminCancleButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('adminUpdateButton') adminUpdateButton!: ElementRef<HTMLButtonElement>;

  title = 'Admin Record';
  adminDetails: any[] = [];
  isSubmittedClicked = false;
  deleteAdminIndex = 0;
  updateAdminIndex = 0;

  constructor(private toastr: ToastrService, private formBuilder: FormBuilder, private service: PlayerService) { }

  ngOnInit() {
    this.getAdmin();
    this.validateForm();
  }

  getAdmin() {
    this.service.getAdmin().subscribe((adminRecords) => {
      this.adminDetails = adminRecords;
    })
  }

  addAdmin() {
    this.isSubmittedClicked = true;
    if (this.adminForm.valid) {
      this.service.addAdmin(this.adminForm.value).subscribe((response) => {
        this.toastr.success(`New Admin ${response.adminName}  added Successfully`);
        this.resetForm();
        this.isSubmittedClicked = false;
        (this.adminCancleButton.nativeElement as HTMLButtonElement).click()
        this.getAdmin();

      })
    }
  }

  fetchAdminId(adminId: number) {
    this.deleteAdminIndex = adminId;
  }

  deleteAdmin() {
    this.service.deleteAdmin(this.deleteAdminIndex).subscribe(() => {
      this.toastr.success("Deleted Succesfully");
      this.getAdmin();
    })
  }

  fetchUpdateAdminId(updateAdminId: number) {
    this.updateAdminIndex = updateAdminId;
    this.service.getAdminById(this.updateAdminIndex).subscribe((admindata) => {
      this.adminForm.patchValue(admindata);
    });
  }

  updateAdmin() {
    if (this.adminForm.valid) {
      this.service.updateAdmin(this.updateAdminIndex, this.adminForm.value).subscribe(() => {
        this.resetForm();
        this.isSubmittedClicked = false;
        (this.adminUpdateButton.nativeElement as HTMLButtonElement).click();
        this.toastr.success("updated Succesfully");
        this.getAdmin();
      })
    }
  }


  validateForm() {
    this.adminForm = this.formBuilder.group({
      adminCode: ['', Validators.required],
      adminName: ['', Validators.required],
      designation: ['', Validators.required],
      password: ['', Validators.required],
    })
  }


  resetForm() {
    this.adminForm.reset();
  }
}
