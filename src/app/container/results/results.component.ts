import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { MoviesService } from '../../services/movies.service';
import { GenresService } from '../../services/genres.service';
import { ActorsService } from '../../services/actors.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  varios: any = '';
  id: number;
  title: '';
  name: '';
  generos: '';
  actors: '';
  peliculas: any;
  movies: any;
  imageURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  notImage = 'https://cinedata.uy/contenidos/uploads/2018/04/afiche-por-defecto.jpg';


  constructor(
    private moviesService: MoviesService,
    private genresService: GenresService,
    private actorsService: ActorsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }

  // PELICULAS POR ID
  getAllMoviesById(id: number) {
    this.moviesService.getMoviesById(id).subscribe((pelicula: any) => {
      this.peliculas = pelicula;
    });
  }

  // PELICULAS POR TITULO
  getAllMoviesByTitle(title: string) {
    this.moviesService.getMoviesByTitle(title).subscribe((pelicula: any) => {
      this.movies = pelicula;
    });
  }

  // PELICULAS POR GENERO
  getGenresByName(name: string) {
    this.genresService.getGenresByName(name).subscribe((pelicula: any) => {
      this.generos = pelicula;
    });
  }

  // ACTORES
  getActorsByName(name: string) {
    this.actorsService.getActorByName(name).subscribe((pelicula: any) => {
      this.actors = pelicula;
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
