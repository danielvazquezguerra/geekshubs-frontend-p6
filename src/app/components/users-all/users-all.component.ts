import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-all',
  templateUrl: './users-all.component.html',
  styleUrls: ['./users-all.component.css']
})
export class UsersAllComponent implements OnInit {

  usuarios: '';

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.AllUsers();
  }

  // ALL ORDERS
  AllUsers(){
    this.usersService.getUsersAll().subscribe((usuario: any) => {
      this.usuarios = usuario;
    });
  }
}
