import { Component, Input } from '@angular/core';
import { Movie } from '../../../../data/interfaces/movie/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input({required: true}) movie!: Movie;

  constructor(
    private movieService: MovieService
  ) {

  }

  public getPosterUrl(posterPath: string) {
    return this.movieService.getImage('w500', posterPath);
  }
}
