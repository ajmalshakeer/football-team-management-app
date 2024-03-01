import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    AdminNameStoredArray: String[] = [];
    loginUserName  = '';
    password: any = '';
    

    constructor(private router: Router, private toastr: ToastrService) { }

    ngOnInit() {
        this.adminRecord();
    }

    verifyAdmin() {
        if (this.checkIfUserExists()) {
            if (this.password == "asdfghjkl;'") {
                this.router.navigate(['/Dashboard']);
                this.toastr.success("Successfully logged in");
            } else {
                this.toastr.error("Password Incorrect");
            }
        } else {
            this.toastr.error('Oops user not Found!')
        }
    }

    checkIfUserExists(): boolean {
        return !!this.AdminNameStoredArray.find((user) => user === this.loginUserName);
    }

    adminRecord() {
        const storedAdminData = localStorage.getItem('userRecords');
        this.AdminNameStoredArray = storedAdminData ? JSON.parse(storedAdminData) : [];
    }
}
