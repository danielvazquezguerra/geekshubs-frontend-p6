import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-all',
  templateUrl: './users-all.component.html',
  styleUrls: ['./users-all.component.css']
})
export class UsersAllComponent implements OnInit {

  public usuarios;

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.AllUsers();
  }

  // ALL ORDERS
  AllUsers(){
    const token = localStorage.getItem('authToken');
    if (token) {
      console.log(token);
      this.usersService.getUsersAll().subscribe(usuario => {
        this.usuarios = usuario;
        console.log(this.usuarios);
      }
    )}
  }
}
