import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: any;
  id = 1;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {

    this.UsersById(this.id)

  }

UsersById(id: number){
    this.usersService.getUsersById(id).subscribe( user => {
      this.users = user;
      console.log(this.users);
    });
  }



}
