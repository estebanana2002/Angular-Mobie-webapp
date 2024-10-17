import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../../data/interfaces/movie/movie';
import { MovieResponse } from '../../../../data/interfaces/movie/movieReponse';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss'
})
export class ListMoviesComponent {
  public movies!: Movie[];
  constructor(
    private movieService: MovieService
  ) {
    this.getMovies();
  }

  private getMovies() {
    this.movieService.getMovies().subscribe(
      (movies: MovieResponse) => {
        this.movies = movies.results;
        console.log('Movies', this.movies);
    });
  }

}
