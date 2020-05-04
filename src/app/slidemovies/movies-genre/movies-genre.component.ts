import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { GenresService } from '../../services/genres.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movies-genre',
  templateUrl: './movies-genre.component.html',
  styleUrls: ['./movies-genre.component.css']
})
export class MoviesGenreComponent implements OnInit {


  populares: '';
  estrenos: '';
  generos: '';
  imageURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  notImage = 'https://cinedata.uy/contenidos/uploads/2018/04/afiche-por-defecto.jpg';
  detalle: any;
  movieId: any;
  genres: any;
  moviesGenre: any;
  nombre;
  actores: any;

  constructor(
    private moviesService: MoviesService,
    private genresService: GenresService,
    public router: Router,
    public route: ActivatedRoute,

  ) {

  }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.detailsById(params.id);
      this.movieId = params.id;
      console.log(`esta es la peli:` + this.movieId);

    });
    // this.AllMoviesPopular();
    // this.AllMoviesPremiere();
  }

  detailsById(movieId: number) {
    this.moviesService.getMoviesById(movieId).subscribe((pelicula: any) => {
      this.detalle = pelicula;
      this.genres = pelicula.Genres;
      const genre1 = this.genres[0].id;
      this.getGenreId(genre1);
      
    });
  }

  getGenreId(genre1){
    console.log(genre1);
    this.genresService.getGenresById(genre1).subscribe((genre: any) => {
        console.log(genre);
        this.nombre = genre.name;
        console.log(this.nombre);
        this.moviesGenre = genre.Movies;
    });
  }

// PELICULAS POR TITULO
  // AllMoviesPopular() {
  //   this.moviesService.getPopularAll().subscribe((pelicula: any) => {
  //     this.populares = pelicula;
  //   });
  // }

  // AllMoviesPremiere() {
  //   this.moviesService.getPremiereAll().subscribe((pelicula: any) => {
  //     this.estrenos = pelicula;
  //   });
  // }

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

