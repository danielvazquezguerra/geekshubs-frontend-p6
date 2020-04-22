import { Component, OnInit } from '@angular/core';

import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders-all',
  templateUrl: './orders-all.component.html',
  styleUrls: ['./orders-all.component.css']
})
export class OrdersAllComponent implements OnInit {

  pedidos: '';

  constructor(
    private ordersService: OrdersService,
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
}
