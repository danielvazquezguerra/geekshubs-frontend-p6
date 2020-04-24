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

  private token: any;


  constructor(
    public usersService: UsersService,
    public router: Router,
 
  ) { }

  ngOnInit(): void {
  }

  logout() {

    this.token = localStorage.getItem('authToken');
    
    this.usersService.logout(this.token)
      .subscribe(
        (data) => {
          console.log(data);
          localStorage.removeItem('authToken');
          setTimeout(() => {
          this.router.navigate(['/']);
          }, 2000);
          // this.usersService.setUser();
        },
        (error) => console.log(error)
      );
  }

}
