import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { OrdersService } from '../../services/orders.service';
import { MoviesService } from '../../services/movies.service';
import { User } from '../../models/user.model';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  token = localStorage.getItem('token');
  public user;
  public orders;
  public movies;


  constructor(
    private route: ActivatedRoute,
    public usersService: UsersService,
    public ordersService: OrdersService,
    public moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {});
    this.user = this.usersService.getUser();
  }



// UserInfoAll(){
  //   this.usersService.getUserInfoAll().subscribe( user => {
  //     this.users = user;
  //     console.log(this.users);
  //   });
  // }

  // this.pedidosService.pedido(this.userID)
  //     .subscribe(resp => {
  //         // @ts-ignore

  //         console.log(resp.movie_id);
  //         this.pedidoUser = resp;
  //         // @ts-ignore
  //         this.movieServices.getMovieById(resp.movie_id)
  //           .subscribe(tit => {
  //             this.datosPeli = tit;
  //           });
  //       },
  //       error => console.log(error)
  //     );
}
