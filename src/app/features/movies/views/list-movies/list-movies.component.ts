import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../../data/interfaces/movie/movie';
import { MovieResponse } from '../../../../data/interfaces/movie/movieReponse';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieCarrouselComponent } from "../../components/movie-carrousel/movie-carrousel.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [
    MovieCardComponent,
    MovieCarrouselComponent,
    CommonModule
],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss'
})
export class ListMoviesComponent {
  public movies!: Movie[];
  public ratedMovies!: Movie[];
  constructor(
    private movieService: MovieService
  ) {
    this.getMovies();
    this.getRatedMovies();
  }

  private getMovies() {
    this.movieService.getMovies().subscribe(
      (movies: MovieResponse) => {
        this.movies = movies.results;
    });
  }
  private getRatedMovies() {
    this.movieService.getRatedMovies().subscribe(
      (movies: MovieResponse) => {
        this.ratedMovies = movies.results;
    });
  }

  public getPosterUrl(posterPath: string) {
    return this.movieService.getImage('w500', posterPath);
  }
}
