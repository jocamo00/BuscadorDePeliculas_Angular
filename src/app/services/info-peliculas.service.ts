import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPeliculasService {

  pelisFavorites: Array<any>;
  pelisNombre: Array<any>;

  constructor( private http: HttpClient ) {
    this.cargarInfoPeliculasFavorites();
    this.cargarInfoPeliculasNombre();
  }


  private cargarInfoPeliculasFavorites(){
    this.http.get( 'https://api.themoviedb.org/3/movie/popular?api_key=7f8494efa25bfa40d25abdd2fd435c69&language=en-US&page=1')
    .subscribe( (resp: any) => {
      this.pelisFavorites = resp.results;
      console.log(resp.results);
    });
  }


  private cargarInfoPeliculasNombre() {
    this.http.get('https://api.themoviedb.org/3/search/movie?api_key=7f8494efa25bfa40d25abdd2fd435c69&language=en-US&query=spiderman&page=1&include_adult=false')
      .subscribe((resp: any) => {
        this.pelisNombre = resp.results;
        console.log(resp.results);
      });
  }

}
