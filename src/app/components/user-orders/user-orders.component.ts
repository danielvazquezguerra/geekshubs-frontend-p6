import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {


  users: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.UsersOrdersByUserId(params.id);
    });
  }

  UsersOrdersByUserId(id: number){
    this.ordersService.getOrdersByUserId(id).subscribe( user => {
      this.users = user;
      console.log(this.users);
    });
  }

  // Crear funcion para sumar precio total
  TotalPrecio(price: number){
    // for(let user of users){

    // }
  }

}