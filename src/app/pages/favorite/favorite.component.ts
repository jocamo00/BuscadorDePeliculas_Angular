import { Component, OnInit } from '@angular/core';
import { InfoPeliculasService } from 'src/app/services/info-peliculas.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  pelisFavorites: any;

  constructor( public infoPeliculasService: InfoPeliculasService ) { }

  ngOnInit(): void {
    this.fetchPeliculasFavorite();
  }


  fetchPeliculasFavorite(): void {
    this.infoPeliculasService.cargarInfoPeliculasFavorites().subscribe((pelis: any) => {
      console.log(pelis);
      this.pelisFavorites = pelis.results;
    });
  }

}
