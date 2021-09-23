import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  movieName: string;
  public movie: any[];
  searchMovie(movieName: String)
  {
    console.log('in comp'+movieName)
    this.searchService.searchMovieService(movieName)
    .subscribe(data => {
      this.movie = data['results'];
      console.log(data['results'][0].title);
    });
  }
  constructor(private searchService: SearchService) { }
}
