import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public user;
  public message: string;


  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    });
    this.user = this.usersService.getUser();
  }

  // MODIFICAR USUARIO
  ModifyUser(userModifyForm: NgForm) {
    console.log(this.user);
    const body = userModifyForm.value;
    this.usersService.modifiedUserById(body).subscribe(
      (res: HttpResponse<object>) => {
      this.message = res['message'];
      }
    );
  }

}
