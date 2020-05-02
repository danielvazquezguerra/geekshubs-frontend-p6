import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  movies: '';

  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit(): void {
    // this.MovieModify((movieModifyForm:NgForm, id: number)
  }

    // MOVIE MODIFY
    // MovieModify(movieModifyForm:NgForm, id: number){
    //   this.moviesService.getMovieUpdate(id).subscribe((movies: any) => {
    //     this.movies = movies;
    //   });
    // }
}
