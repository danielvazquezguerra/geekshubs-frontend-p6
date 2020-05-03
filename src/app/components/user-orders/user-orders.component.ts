import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  public orders;
  public movies;

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getOrders();
    });
  }

  getOrders(){
    const token = localStorage.getItem('authToken');
    if (token) {
      console.log(token);
      this.ordersService.getOrdersUser(token).subscribe(res => {
          this.orders = res;
          console.log(this.orders);
      }
      );
    }
  }

  // Crear funcion para sumar precio total
  TotalPrecio(price: number){
    // for(let user of users){

    // }
  }

}
