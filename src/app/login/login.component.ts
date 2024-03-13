import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlayerService } from '../Service/player.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    AdminNameStoredArray: String[] = [];
    loginUserName = '';
    password: any = '';
    authenticationErrorMessage = '';


    constructor(private router: Router, private toastr: ToastrService, private service: PlayerService) { }

    ngOnInit() {  
     }
    
    verifyAdmin() {
        this.service.verifyAdmin(this.loginUserName, this.password).subscribe((response) => {
            if (response.message === "Successfully loggedIn") {
                this.toastr.success(response.message);
                localStorage.setItem('adminName', this.loginUserName);
                this.router.navigate(['/Dashboard']);
            }
            else {
                this.authenticationErrorMessage = response.message;
            }
        });
    }
}
