import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(public usersService: UsersService) { }
  ngOnInit() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.usersService.getInfo(token)
        .subscribe((res: User) => {
          this.usersService.setUser(res);
        });
    }
  }
}

