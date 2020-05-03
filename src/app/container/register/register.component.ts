import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './registerPrueba.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(
    private usersService: UsersService,
    public router: Router,
    private notification: NzNotificationService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.setChangeValidate()
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'name': [null, Validators.required],
      'password': [null, [Validators.required, this.checkPassword]],
      'validate': ''
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.formGroup.get('name').setValidators(Validators.required);
        }
        this.formGroup.get('name').updateValueAndValidity();
      }
    )
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Email es requerido' :
      this.formGroup.get('email').hasError('pattern') ? 'No es un email' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'Este email ya esta en uso' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Contraseña es requerida (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'Contraseña necesitPassword needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  onSubmit(post) {
    this.post = post;
  }

  // register(registerForm: NgForm){
  //   if (registerForm.controls.password.errors?.pattern) {
  //     return this.notification.warning('Wrong password',
  //     'Your password must contain at least a lowercase letter, a uppercase letter, a number, and must be between 8 and 40 characters')
  //   }
  //   console.log(registerForm);
  //   const user = registerForm.value;
  //   this.usersService.register(user)
  //   .subscribe(
  //     (res: HttpResponse<object>) => {
  //       this.successMsg = res[this.successMsg];
  //       setTimeout(() => {
  //         this.router.navigate(['login']);
  //       }, 2000);
  //   },
  //   (error: HttpErrorResponse) => {
  //     this.errorMsg = error.error.message;
  //     setTimeout(() =>  this.errorMsg = '' , 2000);
  //   }
  // );

  // }
  // signup(signupForm: NgForm) {
  //   console.log(signupForm);
  //   if (signupForm.controls.password.errors?.pattern) {
  //     return this.notification.warning('Wrong password',
  // 'Your password must contain at least a lowercase letter, a uppercase letter, a number, and must be between 8 and 40 characters')
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
