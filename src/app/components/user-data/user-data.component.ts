import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  users: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    public usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    // this.UsersById(params.id);
  });
  }

  UsersById(id: number){
    this.usersService.getUsersById(id).subscribe( user => {
      this.users = user;
      console.log(this.users);
    });
  }



}
