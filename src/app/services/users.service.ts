import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public user: object;

  BASE = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  register(user: object): Observable<object>{
    return this.http.post(`${this.BASE}users/register`, user);
  }

  login(user: object): Observable <any> {
    return this.http.post(`${this.BASE}users/login`, user);
  }

  logout(token: string){
    return this.http.get(`${this.BASE}users/logout`, {
      headers: {
        authorization: token
      }
    });
  }

  getUsersAll(){
    return this.http.get(`${this.BASE}users/`);
  }

  getUsersById(id: number){
    return this.http.get(`${this.BASE}users/${id}`);
  }

  getUsersByName(name: string){
    return this.http.get(`${this.BASE}users/${name}`);
  }

  modifiedUserById(id: number, body: any){
    return this.http.put(`${this.BASE}users/${id}`, body);
  }

  deleteUserById(id: number){
    return this.http.delete(`${this.BASE}users/${id}`);
  }

  setUser(user: object) {
    this.user = user;
  }

}
