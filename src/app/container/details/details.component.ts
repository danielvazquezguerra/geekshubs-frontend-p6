import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { ActorsService } from '../../services/actors.service';
import { OrdersService } from '../../services/orders.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  imageURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  notImage = 'https://cinedata.uy/contenidos/uploads/2018/04/afiche-por-defecto.jpg';
  detalle: any;
  genres: any;
  companies: any;
  populares: '';
  premieres: '';
  actores: any;
  pedidos;
  movie: any;
  daysRent: any = 1;

  constructor(
    public usersService: UsersService,
    public ordersService: OrdersService,
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // this.fetchMoviesById(params.id);
      this.detailsById(params.id);
      // this.AllMoviesPopular();
      // this.AllMoviesPremieres();
      // this.fetchMoviesRecommendedById(params.id);
      // this.fetchMoviesSimilarById(params.id);
      // this.YouTubeById(params.id);
      this.movie = params.id;

    });
  }

  detailsById(id: number) {
    this.moviesService.getMoviesById(id).subscribe((pelicula: any) => {
      this.detalle = pelicula;
      this.genres = pelicula.Genres;
      this.actores = pelicula.Actors;
    });
  }

  getImage(pelicula: any){
    if (pelicula.poster_path){
      return this.imageURL + (pelicula.poster_path);
    }
    else {
      return this.notImage;
    }
  }

  getImage3(detalle: any){
    if (detalle.profile_path){
      return this.imageURL + (detalle.profile_path);
    }
    else {
      return this.notImage;
    }
  }

  // PELICULAS POPULARES
  AllMoviesPopular(){
    this.moviesService.getPopularAll().subscribe((pelicula: any) => {
      this.populares = pelicula;
    });
  }

  // PELICULAS PREMIERES
  AllMoviesPremieres(){
    this.moviesService.getPremiereAll().subscribe((pelicula: any) => {
      this.premieres = pelicula;
    });
  }

  // ORDER CREATE
  OrderCreate(movie){
    const token = localStorage.getItem('authToken');
    if (token){
      // this.ordersService.daysToRent(this.daysRent);
      this.ordersService.OrderCreate(movie);
    }

}
rentMovieGuest() {
  this.router.navigate(['login']);
}

rentMovieLogin() {
  console.log('boton si esta logueado');
  this.router.navigate(['login']);
}

}

