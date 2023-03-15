import { Injectable} from "@angular/core";

import{HttpClient, HttpErrorResponse} from "@angular/common/http"
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs";
import { IOMDBResponce } from "../pmdbresponce";

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {
  private _siteUrl="https://www.omdbapi.com"
  private _key="?apikey=f2d4f867&t="
  constructor(private _http:HttpClient){}

  getMovieData(movieName:string):Observable<IOMDBResponce>{
    return this._http.get<IOMDBResponce>(this._siteUrl+this._key+movieName)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    )
  }
  private handleError(err:HttpErrorResponse){
    console.log('OmdbApiService:' + err.message);
    return throwError(() => new Error("OmdbApiService:" + err.message))
  }
}

