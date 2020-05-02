import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { UsersService } from 'src/app/services/users.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent implements OnInit {

  peliculas;
  usuario;
  pedidos;
  title;
  id;
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
  // UserById(id: number) {
  //   this.usersService.getUsersById(id).subscribe((usuarios: any) => {
  //     console.log(usuarios)
  //     this.usuario = usuarios;
  //   });
  // }

  // BUSQUEDA USUARIO POR EMAIL USUARIO
  // UserByEmail(email: string) {
  //     this.usersService.getUserByEmail(email).subscribe((usuario: any) => {
  //       this.usuarios = usuario;
  //     });
  //   }

  // BUSQUEDA USUARIO POR USERNAME USUARIO
  // UserByUsername(username: string) {
  //   this.usersService.getUserByUsername(username).subscribe((usuario: any) => {
  //     this.usuarios = usuario;
  //   });
  // }

  // BUSQUEDA PELICULA POR ID
  MovieById(id: number) {
    this.moviesService.getMoviesById(id).subscribe((pelicula: any) => {
      this.peliculas = pelicula;
    });
  }

  // PELICULAS POR TITULO
  MoviesByTitle(title: string) {
    this.moviesService.getMoviesByTitle(title).subscribe((pelicula: any) => {
      this.peliculas = pelicula;
    });
  }

  // BUSQUEDA PELICULA POR ID
  OrderById(id: number) {
    this.ordersService.getOrderById(id).subscribe((pedido: any) => {
      this.pedidos = pedido;
    });
  }
}
