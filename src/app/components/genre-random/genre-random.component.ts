import { Component, OnInit } from '@angular/core';
import { GenresService } from '../../services/genres.service';
@Component({
  selector: 'app-genre-random',
  templateUrl: './genre-random.component.html',
  styleUrls: ['./genre-random.component.css']
})
export class GenreRandomComponent implements OnInit {
  constructor(
    private genresService: GenresService
  ) { }


  random: number;
  genres: '';
  name: '';
  imageURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  notImage = 'https://cinedata.uy/contenidos/uploads/2018/04/afiche-por-defecto.jpg';


  ngOnInit(): void {
    this.randomGenerosId();
  }

  randomGenerosId(){
    const random = Math.floor((Math.random() * 20));
    const idGenres = [12, 14, 16, 18, 27, 28, 35, 36, 37, 53, 80, 99, 878, 9648, 10402, 10479, 10751, 10752, 10770];
    const id = idGenres[random];
    this.randomGenero(id);
  }

  randomGenero(id: number){
    this.genresService.getGenresById(id).subscribe((genero: any) => {
      this.name = genero.name;
      this.genres = genero.Movies;
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
