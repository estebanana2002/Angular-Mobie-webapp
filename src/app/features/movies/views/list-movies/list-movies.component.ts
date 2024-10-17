import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../../data/interfaces/movie/movie';
import { MovieResponse } from '../../../../data/interfaces/movie/movieReponse';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieCarrouselComponent } from "../../components/movie-carrousel/movie-carrousel.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [
    MovieCardComponent,
    MovieCarrouselComponent,
    CommonModule,
    FormsModule
],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss'
})
export class ListMoviesComponent {
  public movies!: Movie[];
  public ratedMovies!: Movie[];
  public search: string = '';
  constructor(
    private movieService: MovieService,
    private router: Router
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

  public searchMovies() {
    this.router.navigate(['/movies/movie-search', this.search]);

  }

  public getPosterUrl(posterPath: string) {
    return this.movieService.getImage('w500', posterPath);
  }
}
