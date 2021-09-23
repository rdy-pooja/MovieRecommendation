import { Movie } from './../movie.model';
import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }
  searchMovieService(movieName: String)
  {
    console.log('in search'+movieName);
    return this.httpClient.get<Movie>('https://api.themoviedb.org/3/search/movie?api_key=2664359dc640196696ca66aa54e0af2d&language=en-US&query='+movieName+'&page=1&include_adult=false');
  }
}
