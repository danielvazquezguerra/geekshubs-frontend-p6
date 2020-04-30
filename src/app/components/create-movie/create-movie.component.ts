import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { NgForm } from '@angular/forms';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  public errorMsg: string;
  public successMsg: string;
  message;

  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit(): void {
  }

  // MOVIE CREATE
  MovieCreate(movieForm: NgForm){
    const movie = movieForm.value;
    console.log(movie);
    this.moviesService.MovieCreate(movie)
      .subscribe(
        (res: HttpResponse<any>) => {
        // tslint:disable-next-line: no-string-literal
        this.successMsg = res['message'];
        console.log(this.successMsg);
        setTimeout(() => {
        }, 2000);
        },
        (error: HttpErrorResponse) => {
        this.errorMsg = error.error.message;
        setTimeout(() =>  this.errorMsg = '' , 2000);
    });
  }
}
