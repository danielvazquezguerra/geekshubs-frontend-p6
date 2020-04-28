import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { OrdersService } from '../../services/orders.service';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  public errorMsg: string;
  public successMsg: string;
  message;
  pedidos;
  movies;

  constructor(
    private ordersService: OrdersService,
    private moviesService: MoviesService,
    public router: Router
  ) { }

  ngOnInit(): void {
    // this.MoviesAll();
  }


  // SEARCH ORDER BY ORDER ID
  SearchOrderById(id: number){
    this.ordersService.getOrderById(id).subscribe((pedidos: any) => {
      this.pedidos = pedidos;
    });
  }

   // SEARCH ORDER BY EMAIL
   SearchOrderByEmail(email: string){
    this.ordersService.getOrderByEmail(email).subscribe((pedidos: any) => {
      this.pedidos = pedidos;
    });
  }

  // SEARCH ORDER BY USER ID
  SearchOrderByUserId(id: number){
    this.ordersService.getUsersOrdersByUserId(id).subscribe((pedidos: any) => {
      this.pedidos = pedidos;
    });
  }

  // ORDER CREATE
  OrderCreate(orderForm: NgForm){
    const token = localStorage.getItem('authToken');
    if (token){
      const order = orderForm.value;
      this.ordersService.getOrderCreate(order)
      .subscribe((pedidos: any) => {
        this.pedidos = pedidos;
      });
    }
  }

  // ORDER MODIFY
  // OrderModify(id: number, orderForm: NgForm){
  //   const body = orderForm.value;
  //   this.ordersService.getOrderModify(id, body).subscribe((pedidos: any) => {
  //     this.pedidos = pedidos;
  //   });
  // }

  // ORDER DELETE
  OrderDelete(id: number){
    this.ordersService.getOrderDelete(id).subscribe((pedidos: any) => {
      this.pedidos = pedidos;
    });
  }

  // MOVIES ALL
  MoviesAll(){
    console.log(this.movies)
    this.moviesService.getMoviesAll().subscribe((movies: any) => {
      this.movies = movies;
    });
  }

  // MOVIE CREATE
  MovieCreate(movieForm: NgForm){
    const movie = movieForm.value;
    console.log(movie);
    this.moviesService.MovieCreate(movie)
      .subscribe(
        (res: HttpResponse<any>) => {
        this.successMsg = res['message'];
        console.log(this.successMsg)
        setTimeout(() => {
        }, 2000);
        },
        (error: HttpErrorResponse) => {
        this.errorMsg = error.error.message;
        setTimeout(() =>  this.errorMsg = '' , 2000);
    })
  }

  // MOVIE MODIFY
  MovieModify(id: number){
    this.moviesService.getMovieUpdate(id).subscribe((movies: any) => {
      this.movies = movies;
    });
  }

  // MOVIE DELETE
  MovieDelete(id: number){
    this.moviesService.getMovieDelete(id).subscribe((movies: any) => {
      this.movies = movies;
    });
  }

}
