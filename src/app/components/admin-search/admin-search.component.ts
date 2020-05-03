import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { UsersService } from 'src/app/services/users.service';
import { OrdersService } from 'src/app/services/orders.service';
import { NzDividerComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent implements OnInit {

  pelicula;
  usuario;
  pedido;
  title;
  idU;
  idM;
  idO;
  email;
  username;

  constructor(
    private moviesService: MoviesService,
    private usersService: UsersService,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
  }

  // BUSQUEDA USUARIO POR ID USUARIO
  UserById(id: number) {
    console.log(id);
    this.usersService.getUsersById(id).subscribe((usuarios: any) => {
      console.log(usuarios);
      this.usuario = usuarios;
    });
  }

  // BUSQUEDA USUARIO POR EMAIL USUARIO
  UserByEmail(email: string) {
    console.log(email);
    this.usersService.getUserByEmail(email).subscribe((usuarios: any) => {
      console.log(usuarios);
      this.usuario = usuarios;
    });
  }

  // BUSQUEDA USUARIO POR USERNAME USUARIO
  UserByUsername(username: string) {
    console.log(username);
    this.usersService.getUserByUsername(username).subscribe((usuarios: any) => {
      this.usuario = usuarios;
      console.log(this.usuario);
    });
  }

  // BUSQUEDA PELICULA POR ID
  MovieById(id: number) {
    console.log(id);
    this.moviesService.getMoviesById(id).subscribe((peliculas: any) => {
      this.pelicula = peliculas;
      console.log(this.pelicula);
    });
  }

  // PELICULAS POR TITULO
  MoviesByTitle(title: string) {
    this.moviesService.getMoviesByTitle(title).subscribe((peliculas: any) => {
      this.pelicula = peliculas;
    });
  }

  // BUSQUEDA PELICULA POR ID
  OrderById(id: number) {
    console.log(id);
    this.ordersService.getOrderById(id).subscribe((pedidos: any) => {
      this.pedido = pedidos;
    });
  }
}




