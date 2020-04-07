import { Component, OnInit } from '@angular/core';
import { InfoPeliculasService } from 'src/app/services/info-peliculas.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor( public infoPeliculasService: InfoPeliculasService ) { }

  ngOnInit(): void {
  }

}
