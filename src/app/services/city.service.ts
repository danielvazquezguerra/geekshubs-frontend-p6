import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  route = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getCityAll(){
    return this.http.get(`${this.route}cities`);
  }

  getCitiesUsers(){
    return this.http.get(`${this.route}cities/user`);
  }

  getCitByName(name: string){
    return this.http.get(`${this.route}cities/user=${name}`);
  }

}
