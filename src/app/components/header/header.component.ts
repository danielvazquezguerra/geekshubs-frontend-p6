import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public errorMsg: string;
  public successMsg: string;
  token: '';

  constructor(
    public usersService: UsersService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('authToken');
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }

}
