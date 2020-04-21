import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';


import { OrdersService } from '../../services/orders.service';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  pedidos: '';
  movies: '';

  constructor(
    private ordersService: OrdersService,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.AllOrders();
  }

  // ALL ORDERS
  AllOrders(){
    this.ordersService.getOrdersAll().subscribe((pedidos: any) => {
      this.pedidos = pedidos;
    });
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
    const order = orderForm.value;
    this.ordersService.getOrderCreate(order)
    .subscribe((pedidos: any) => {
      this.pedidos = pedidos;
    });
  }

  // ORDER MODIFY
  OrderModify(id: number){
    this.ordersService.getOrderModify(id).subscribe((pedidos: any) => {
      this.pedidos = pedidos;
    });
  }

  // ORDER DELETE
  OrderDelete(id: number){
    this.ordersService.getOrderDelete(id).subscribe((pedidos: any) => {
      this.pedidos = pedidos;
    });
  }

  // MOVIE CREATE
  MovieCreate(movieForm: NgForm){
    const movie = movieForm.value;
    this.moviesService.getMovieCreate(movie).subscribe((movies: any) => {
      this.movies = movies;
    });
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
