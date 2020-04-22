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
    return this.http.get(`${this.route}genres`);
  }

  getGenresById(id: number){
    return this.http.get(`${this.route}genres/id=${id}`);
  }

  getGenresByName(name: string){
    return this.http.get(`${this.route}genres/name=${name}`);
  }


}

