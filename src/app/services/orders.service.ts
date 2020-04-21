import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  route = 'http://localhost:3000/';

  constructor(
    // public order: object,
    private http: HttpClient
  ) { }

  // 1 ALL ORDERS
  getOrdersAll(){
    return this.http.get(`${this.route}orders`);
  }

  // 1.5 ALL USER ORDERS (similar al 1)
  getUsersOrdersAll(){
    return this.http.get(`${this.route}order`);
  }

  // 2 ORDER BY ORDER ID
  getOrderById(id: number){
    return this.http.get(`${this.route}order=${id}`);
  }

  // 3 ORDER BY USER EMAIL **
  getOrderByEmail(email: string){
    return this.http.get(`${this.route}order=${email}`);
  }

  // 4 ORDER BY ORDER DATE ¿?
  getUserOrderDates(){
    return this.http.get(`${this.route}/orderDate`);
  }

  // 5 ORDER CREATE
  getOrderCreate(order: object): Observable<object>{
    return this.http.get(`${this.route}order`, order);
  }

  // 6 ORDER MODIFY
  getOrderModify(id: number){
    return this.http.get(`${this.route}order=${id}`);
  }

  // 7 ORDER DELETE
  getOrderDelete(id: number){
    return this.http.get(`${this.route}order=${id}`);
  }

  // 8 ALL A USER ORDERS BY USER ID
  getUsersOrdersByUserId(id: number){
    return this.http.get(`${this.route}order/id=${id}`);
  }

   // 8.5 ALL A USER ORDERS BY USER ID
   getOrdersByUserId(id: number){
    return this.http.get(`${this.route}/order/user=${id}`);
  }

  // 9 A USER ORDERS BY ID
  getOrdersAllUser(id: number){
    return this.http.get(`${this.route}orders/users`);
  }
}
