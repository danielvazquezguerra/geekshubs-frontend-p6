import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  BASE = 'http://localhost:3000/';
  private user: User;
  private token: string;


  constructor(
    private http: HttpClient
  ) { }

  register(user: User): Observable<object>{
    return this.http.post<User>(`${this.BASE}users/register`, user);
  }

  login(user: User): Observable <any> {
    return this.http.post<User>(`${this.BASE}users/login`, user);
  }

  logout(token: string){
    return this.http.get(`${this.BASE}users/logout`, {
      headers: {
        authorization: token
      }
    });
  }

  getUserInfo(token){
    return this.http.get<User>(`${this.BASE}users/info`, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  getUsersAll(){
    this.token = localStorage.getItem('authToken');
    return this.http.get(`${this.BASE}users/info/all`, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  getUsersById(id: number){
    return this.http.get(`${this.BASE}users/info/id=${id}`, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  getUserByEmail(email: string){
    return this.http.get(`${this.BASE}users/info/email=${email}`, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  getUserByUsername(username: string){
    return this.http.get(`${this.BASE}users/info/username=${username}`, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  modifiedUserById(body: any){
    this.token = localStorage.getItem('authToken');
    return this.http.put(`${this.BASE}users/update`, body, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  deleteUserById(id: number){
    return this.http.delete(`${this.BASE}users/${id}`);
  }

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

}
