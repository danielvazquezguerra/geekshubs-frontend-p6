import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../models/user.model';
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
  public mensaje: string;
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
        (res: User) => {
          localStorage.removeItem('authToken');
          this.usersService.setUser(null);
          setTimeout(() => {
          this.router.navigate(['login']);
          }, 2000);
          // this.usersService.setUser();
        },
        (error) => console.log(error)
      );
  }

  mensajeLogout($scope) {
    $scope.mensaje = 'Ya te vas?';
  }

}
