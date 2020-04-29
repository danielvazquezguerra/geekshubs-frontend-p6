import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { GenresService } from '../../services/genres.service';
import { OrdersService } from '../../services/orders.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import * as moment from 'moment';

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
  populares: any;
  premieres: any;
  actores: any;
  pedidos;
  movie: any;
  daysRent: any = 1;
  pedido;
  moviesGenre;
  generos = [];
  nombre;
  public message: string;
  public errorMsg: string;
  public successMsg: string;

  constructor(
    public usersService: UsersService,
    public ordersService: OrdersService,
    public genresService: GenresService,
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // this.fetchMoviesById(params.id);
      this.detailsById(params.id);
      // this.fetchMoviesRecommendedById(params.id);
      // this.fetchMoviesSimilarById(params.id);
      this.movie = params.id;
      this.getGenreId
    });
  }

  detailsById(id: number) {
    this.moviesService.getMoviesById(id).subscribe((pelicula: any) => {
      this.detalle = pelicula;
      this.genres = pelicula.Genres;
      for(const genre of this.genres){
        this.generos.push(genre.id);
        
      }
      const genre1 = this.generos[0]
      this.getGenreId(genre1);
      this.actores = pelicula.Actors;
      
    });
  }

  getGenreId(genre1){
    console.log(`${genre1}`)
    this.genresService.getGenresById(genre1).subscribe((genres: any) => {
      for(const genre of genres){
        this.nombre = genre.name;
        this.moviesGenre = genre.Movies;
      }
      console.log(`MovieGenres2: ${this.moviesGenre}`);
    })

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



  // ORDER CREATE
  OrderCreate(orderForm: NgForm){
    const token = localStorage.getItem('authToken') || '';
    const order = {
      // dateRent: moment(new Date()).toDate(),
      // dateArrival: moment(new Date()).add(2, 'days').toDate(),
      // daysRent: parseInt(this.daysRent),
      price: (this.daysRent) * 1.8,
      UserId: this.usersService['user']['id'],
      MovieId: parseInt(this.movie),
      };
    console.log(order)
    this.ordersService.getOrderCreate(order)
    .subscribe(
        (res: HttpResponse<any>) => {
        this.successMsg = res['message'];
        console.log(this.successMsg);
        setTimeout(() => {
        }, 2000);
        },
        (error: HttpErrorResponse) => {
        this.errorMsg = error.error.message;
        setTimeout(() =>  this.errorMsg = '' , 2000);

    });
}

  

rentMovieGuest() {
  this.router.navigate(['login']);
}

rentMovieLogin() {
  console.log('boton si esta logueado');
  this.router.navigate(['login']);
}

}