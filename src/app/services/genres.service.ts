import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  route = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getGenresAll(){
    return this.http.get(`${this.route}cities`);
  }

  getGenresById(id: number){
    return this.http.get(`${this.route}cities/id=${id}`);
  }

  getGenresByName(name: string){
    return this.http.get(`${this.route}cities/name=${name}`);
  }


}

