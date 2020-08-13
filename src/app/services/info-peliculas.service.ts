import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoPeliculasService {


  constructor( private http: HttpClient ) {
  }


  cargarInfoPeliculasFavorites() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=7f8494efa25bfa40d25abdd2fd435c69&language=en-US&page=1');
  }


  cargarInfoPeliculasNombre(peliSearch: string) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=7f8494efa25bfa40d25abdd2fd435c69&language=en-US&query=${peliSearch}&page=1&include_adult=false`);
  }

}
