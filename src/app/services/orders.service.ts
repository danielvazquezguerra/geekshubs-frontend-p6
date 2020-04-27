import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.movie';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  BASE = 'http://localhost:3000/';
  public order: Order;
  private token: string;
  private daysRent:any;
  private totalAmount:any;
  // alquiler: any = {id: this.movie.id, daysRent: this.daysRent, payingAmount: this.totalAmount}

  constructor(
    // public order: object,
    private http: HttpClient
  ) { }

  // 1 ALL ORDERS
  getOrdersAll(token) {
    return this.http.get(`${this.BASE}orders/info/all`, {
      headers: {
        Authorization: token
      }
    });
  }

  // 1.5 ALL USER ORDERS (similar al 1)
  getUsersOrdersAll(){
    return this.http.get(`${this.BASE}order`);
  }

  // 2 ORDER BY ORDER ID
  getOrderById(id: number){
    return this.http.get(`${this.BASE}order=${id}`);
  }

  // 3 ORDER BY USER EMAIL **
  getOrderByEmail(email: string){
    return this.http.get(`${this.BASE}order=${email}`);
  }

  // 4 ORDER BY ORDER DATE ¿?
  getUserOrderDates(){
    return this.http.get(`${this.BASE}/orderDate`);
  }

  daysToRent(numDays){
    console.log('funciona daysToRent');
    this.daysRent = numDays;
    this.totalAmount = parseInt(this.daysRent) * 1.8;
    console.log(this.daysRent);
    console.log(this.totalAmount);
  }

  // 5 ORDER CREATE
  OrderCreate(movie): Observable<object>{
    if (movie){
      console.log(`pelicula ${movie}`)
      return this.http.post<Order>(`${this.BASE}order`,
      {
        MovieId: movie,
        daysRent: this.daysRent,
        price: this.totalAmount},
        {
        headers: {
          Authorization: this.token
        }
      });
    }
  }



  // 6 ORDER MODIFY
  getOrderModify(id: number, body: any){
    return this.http.get(`${this.BASE}order=${id}`, body);
  }

  // 7 ORDER DELETE
  getOrderDelete(id: number){
    return this.http.get(`${this.BASE}order=${id}`);
  }

  // 8 ALL A USER ORDERS BY USER ID
  getUsersOrdersByUserId(id: number){
    return this.http.get(`${this.BASE}order/id=${id}`);
  }

   // 8.5 ALL A USER ORDERS BY USER ID
   getOrdersByUserId(id: number){
    return this.http.get(`${this.BASE}orders/order/user=${id}`, {
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    });
  }

  // 9 A USER ORDERS
  // getOrdersAllUser(id: number){
  //   return this.http.get(`${this.BASE}orders/users`);
  // }

  getOrdersUser(token) {
    return this.http.get(`${this.BASE}orders/user`, {
      headers: {
        Authorization: token
      }
    });
  }

  
}
