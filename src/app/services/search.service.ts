import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  route = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getOrderByDateRent(){
    return this.http.get(`${this.route}orders`);
  }

}
