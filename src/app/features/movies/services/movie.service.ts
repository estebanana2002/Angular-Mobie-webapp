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
  constructor(
    private http: HttpClient
  ) { }

  public getMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.url}/movie/popular`);
  }
}
