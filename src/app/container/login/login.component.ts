import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';

import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './angularlogin.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public message: string;
  public errorMsg: string;
  public successMsg: string;

  constructor(
    private usuariosService: UsersService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this.usuariosService.login(loginForm.value)
        .subscribe(
          (res: HttpResponse<any>) => {
            /* tslint:disable:no-string-literal */
            this.successMsg = res['message'];
            console.log(this.successMsg);
            localStorage.setItem('authToken', res['token']);
            this.usuariosService.setUser(res['user']);
            setTimeout(() => {
              this.router.navigate(['home']);
            }, 2000);
          },

          (error: HttpErrorResponse) => {
          this.errorMsg = error.error.message;
          console.log(this.errorMsg);
          setTimeout(() =>  this.errorMsg = '' , 2000);
         }
        );
    }
  }
}
