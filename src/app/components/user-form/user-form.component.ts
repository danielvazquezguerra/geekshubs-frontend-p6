import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: '';
  public message: string;
  id: 2;


  constructor(
    private usersService: UsersService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  // MODIFICAR USUARIO
  ModifyUser(id: number, userForm: NgForm) {
    const body = userForm.value;
    this.usersService.modifiedUserById(id, body).subscribe(
      (res: HttpResponse<object>) => {
      this.message = res['message'];
      this.usersService.modifiedUserById(res['user'], [body]);
    }
  );
}

}
