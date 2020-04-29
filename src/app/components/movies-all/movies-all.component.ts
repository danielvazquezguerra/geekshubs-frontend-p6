import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-all',
  templateUrl: './movies-all.component.html',
  styleUrls: ['./movies-all.component.css']
})
export class MoviesAllComponent implements OnInit {

  movies;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.MoviesAll();
  }

    // MOVIES ALL
    MoviesAll(){
      console.log(this.movies);
      this.moviesService.getMoviesAll().subscribe((movies: any) => {
        this.movies = movies;
      });
    }
}
