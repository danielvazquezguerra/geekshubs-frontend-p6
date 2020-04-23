import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ReactiveFormsModule } from '@angular/forms';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './angularegister.html',
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
    console.log(registerForm);
    const user = registerForm.value;
    this.usuariosService.register(user)
    .subscribe(
      (res: HttpResponse<object>) => {
        this.successMsg = res[this.successMsg];
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 5000);
    },
    (error: HttpErrorResponse) => {
      this.errorMsg = error.error.message;
      setTimeout(() =>  this.errorMsg = '' , 2000);
    }
  );

  }
  // signup(signupForm: NgForm) {
  //   console.log(signupForm);
  //   if (signupForm.controls.password.errors?.pattern) {
  //     return this.notification.warning('Wrong password', 'Your password must contain at least a lowercase letter, a uppercase letter, a number, and must be between 8 and 40 characters')
  //   }
  //   if (signupForm.valid) {
  //     this.userService.signup(signupForm.value)
  //       .subscribe(res => {
  //         this.notification.success('User created', 'User successfully created', { nzDuration: 2000 });
  //         setTimeout(() => this.router.navigate(['/login']), 2000);
  //       });
  //   }
  // }


// caracter especial (?=.*[!@#$%^&*])
}
