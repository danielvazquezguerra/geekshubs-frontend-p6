import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  BASE = 'http://localhost:3000/';
  public movie: Movie;
  private token: string;

  constructor(

    private http: HttpClient
  ) { }

  getMoviesAll(){
    return this.http.get(`${this.BASE}movies/`);
  }

  getMoviesById(id: number){
    return this.http.get(`${this.BASE}movies/id=${id}`);
  }

  getMoviesByTitle(title: string){
    return this.http.get(`${this.BASE}movies/title=${title}`);
  }

  getPopularAll(){
    return this.http.get(`${this.BASE}movies/popular`);
  }

  getPopularByGenre(name: string){
    return this.http.get(`${this.BASE}movies/popular/genre=${name}`);
  }

  getPremiereAll(){
    return this.http.get(`${this.BASE}movies/premiere`);
  }

  getPremiereByGenre(name: string){
    return this.http.get(`${this.BASE}movies/premiere/genre=${name}`);
  }

  MovieCreate(movie): Observable<object>{
    return this.http.post(`${this.BASE}movies`, movie, {
      headers: {
        Authorization: localStorage.getItem('authToken') || ''
      }
    });
  }

  getMovieUpdate(id: number){
    return this.http.get(`${this.BASE}movies/id=${id}`);
  }

  getMovieDelete(id: number){
    return this.http.get(`${this.BASE}movies/id=${id}`);
  }

  getMoviesOrder(token) {
    return this.http.get(`${this.BASE}movies/user`, {
      headers: {
        Authorization: token
      }
    });
  }

  getById(MovieId: number) {
    return this.http.get(`${this.BASE}movies/id=${MovieId}`);
  }

}
