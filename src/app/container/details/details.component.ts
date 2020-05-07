import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { GenresService } from '../../services/genres.service';
import { OrdersService } from '../../services/orders.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import * as moment from 'moment';

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
  daysRent;
  pedido;
  moviesGenre;
  generos = [];
  nombre;
  order;
  public message: string;
  public errorMsg: string;
  public successMsg: string;
  optionList = [
    { label: '5 dias = 7€', days: 5, price: 7 },
    { label: '10 dias = 12€', days: 10, price: 12 }
  ];
  selectedValue: any = {};

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
      this.detailsById(params.id);
      this.movie = params.id;
      // this.getGenreId;
      // this.order = this.usersService.getOrder();
    });
  }

  detailsById(id: number) {
    this.moviesService.getMoviesById(id).subscribe((pelicula: any) => {
      this.detalle = pelicula;
      console.log(this.detalle);
      this.genres = pelicula.Genres;
      console.log(this.genres);
      for (const genre of this.genres){
        this.generos.push(genre.id);
      }
      const genre1 = this.generos[0];
      this.getGenreId(genre1);
      this.actores = pelicula.Actors;
      console.log(this.actores)
    });
  }

  getGenreId(genre1){
    console.log(`${genre1}`);
    this.genresService.getGenresById(genre1).subscribe((genres: any) => {
      for (const genre of genres){
        this.nombre = genre.name;
        this.moviesGenre = genre.Movies;
      }
    });
  }

  getImage(pelicula: any){
    if (pelicula?.poster_path){
      return this.imageURL + (pelicula?.poster_path);
    }
    else {
      return this.notImage;
    }
  }

  getImage3(actor: any){
    if (actor.profile_path){
      return this.imageURL + (actor.profile_path);
    }
    else {
      return this.notImage;
    }
  }

  // ORDER CREATE
  orderCreate(event){
    const order = {
      dateRent: moment(new Date()).toDate(),
      dateArrival: moment(new Date()).add(2, 'days').toDate(),
      daysRent: this.selectedValue.days,
      price: this.selectedValue.price,
      // tslint:disable-next-line: no-string-literal
      UserId: this.usersService['user']['id'],
      // tslint:disable-next-line: radix
      MovieId: parseInt(this.movie),
      };
    this.ordersService.getOrderCreate(order)
    .subscribe(
        (res: HttpResponse<any>) => {
        console.log(res);
        this.ordersService.order = order;
        this.pedido = this.ordersService.order;
        console.log(order);
        // tslint:disable-next-line: no-string-literal
        this.successMsg = res['message'];
        console.log(order);
        // setTimeout(() => {
        //   this.router.navigate(['']);
        // }, 2000);
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
  
    this.router.navigate(['login']);
    
  }

}
