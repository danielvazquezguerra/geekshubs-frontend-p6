import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public errorMsg: string;
  public successMsg: string;

  constructor(
    private usuariosService: UsersService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  register(registerForm: NgForm){
    const user = registerForm.value;
    this.usuariosService.register(user)
    .subscribe(
      (res: HttpResponse<object>) => {
        this.successMsg = res[this.successMsg];
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 2000);
    },
    (error: HttpErrorResponse) => {
      this.errorMsg = error.error.message;
      setTimeout(() =>  this.errorMsg = '' , 2000);
    }
  );

  }

}
