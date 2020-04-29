import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { GenresService } from '../../services/genres.service';

@Component({
  selector: 'app-movies-genre',
  templateUrl: './movies-genre.component.html',
  styleUrls: ['./movies-genre.component.css']
})
export class MoviesGenreComponent implements OnInit {

  movies: '';
  populares: '';
  estrenos: '';
  generos: '';
  imageURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  notImage = 'https://cinedata.uy/contenidos/uploads/2018/04/afiche-por-defecto.jpg';

  constructor(
    private moviesService: MoviesService,
    private genresService: GenresService,
  ) {

  }

  ngOnInit(): void {
    this.AllMoviesPopular();
    this.AllMoviesPremiere();
  }

// PELICULAS POR TITULO
  AllMoviesPopular() {
    this.moviesService.getPopularAll().subscribe((pelicula: any) => {
      this.populares = pelicula;
    });
  }

  AllMoviesPremiere() {
    this.moviesService.getPremiereAll().subscribe((pelicula: any) => {
      this.estrenos = pelicula;
    });
  }

  GenresById(id: number) {
    this.genresService.getGenresById(id).subscribe((pelicula: any) => {
      this.generos = pelicula;
    });
  }

  getImage(pelicula: any){
    if (pelicula.poster_path){
      return this.imageURL + (pelicula.poster_path);
    }
    else {
      return this.notImage;
    }
  }
}




