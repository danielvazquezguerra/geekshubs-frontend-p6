import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  route = 'http://localhost:3000/';

  constructor(
    // public movie: object,
    private http: HttpClient
  ) { }

  getMoviesAll(){
    return this.http.get(`${this.route}movies`);
  }

  getMoviesById(id: number){
    return this.http.get(`${this.route}movies/id=${id}`);
  }

  getMoviesByTitle(title: string){
    return this.http.get(`${this.route}movies/title=${title}`);
  }

  getPopularAll(){
    return this.http.get(`${this.route}movies/popular`);
  }

  getPopularByGenre(name: string){
    return this.http.get(`${this.route}movies/popular/genre=${name}`);
  }

  getPremiereAll(){
    return this.http.get(`${this.route}movies/premiere`);
  }

  getPremiereByGenre(name: string){
    return this.http.get(`${this.route}movies/premiere/genre=${name}`);
  }

  getMovieCreate(movie: object): Observable<object>{
    return this.http.get(`${this.route}movies/`, movie);
  }

  getMovieUpdate(id: number){
    return this.http.get(`${this.route}movies/id=${id}`);
  }

  getMovieDelete(id: number){
    return this.http.get(`${this.route}movies/id=${id}`);
  }


}
