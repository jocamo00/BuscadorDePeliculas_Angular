import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPeliculasService {

  pelisFavorites: Array<any>;

  constructor( private http: HttpClient ) {
    this.cargarInfoPeliculasFavorites();
  }


  private cargarInfoPeliculasFavorites(){
    this.http.get( 'https://api.themoviedb.org/3/movie/popular?api_key=7f8494efa25bfa40d25abdd2fd435c69&language=en-US&page=1')
    .subscribe( (resp: any) => {
      this.pelisFavorites = resp.results;
      console.log(resp.results);
    });
  }
}
