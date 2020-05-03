import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert = 'Este campo es necesario';
  post: any = '';

  constructor(
    private usersService: UsersService,
    public router: Router,
    private notification: NzNotificationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.setChangeValidate();
  }

  createForm() {
    const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(emailregex)]],
      username: [null, Validators.required],
      password: [null, [Validators.required, this.checkPassword]],
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.formGroup.get('username').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.formGroup.get('username').setValidators(Validators.required);
        }
        this.formGroup.get('username').updateValueAndValidity();
      }
    )
  }

  get username() {
    return this.formGroup.get('username') as FormControl;
  }

  checkPassword(control) {
    const enteredPassword = control.value;
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { requirements: true } : null;
  }

  // checkInUseEmail(control) {
  //   // mimic http database access
  //   let db = ['tony@gmail.com'];
  //   return new Observable(observer => {
  //     setTimeout(() => {
  //       let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
  //       observer.next(result);
  //       observer.complete();
  //     }, 4000)
  //   })
  // }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Email es requerido' :
      this.formGroup.get('email').hasError('pattern') ? 'No es un email' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'Este email ya esta en uso' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Contraseña es requerida' :
      this.formGroup.get('password').hasError('requirements') ? 'Debe contener al menos una mayuscula, una minuscula y un número' : '';
  }

  onSubmit(post) {
    this.post = post;
  }

  register(){
    const user = this.formGroup.value;
    this.usersService.register(user)
    .subscribe(
      (res:HttpResponse<object>) =>{
        this.notification.success(
          'Registro realizado con éxito',
          res['message']
          );
        setTimeout(() => {
            this.router.navigate(['login']);
          }, 2500);
      },
      (error:HttpErrorResponse)=>{
        this.notification.error(
          'Problema al registrar usuario',
          error['error']['message']
          );
      }
    )
  }
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
