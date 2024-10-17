import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../../data/interfaces/movie/movie';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NotFoundComponent,
    MovieCardComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public searchedMovies: Movie[] = [];
  public search: string = '';

  constructor(
    private acRouter: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.acRouter.params.subscribe(
      (params: any) => {
        this.searchMovies(params.search);
        this.search = params.search;
      }
    )
  }

  private searchMovies(query: string) {
    this.movieService.searchMovie(query).subscribe(
      (movies: any) => {
        this.searchedMovies = movies.results;
        console.log('Search results:', this.searchedMovies);
      }
    )
  }

}
