import { Component } from '@angular/core';
import { IOMDBResponce } from './pmdbresponce';
import { OmdbApiService } from './services/omdb-api.service.spec';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Finder';
  movieData:IOMDBResponce | undefined;
  errorMessage:any;

  constructor(private _omdbService:OmdbApiService) { }

  getMovieDetails(movieName:string):boolean{
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log("Director name : "+ this.movieData.Director);
      }
    )
    return false;
  }

}
