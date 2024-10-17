import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { MovieResponse } from '../../../data/interfaces/movie/movieReponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = environment.apiUrl;
  private image_url = environment.image_url;
  constructor(
    private http: HttpClient
  ) { }

  public getMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.url}movie/popular`);
  }

  public getRatedMovies() {
    return this.http.get<MovieResponse>(`${this.url}movie/top_rated`);
  }

  public searchMovie(query: string) {
    return this.http.get<any>(`${this.url}search/movie?&query=${query}`);
  }

  public getImage(resolution: string, path: string) {
    return `${this.image_url}/${resolution}/${path}`;
  }
}
