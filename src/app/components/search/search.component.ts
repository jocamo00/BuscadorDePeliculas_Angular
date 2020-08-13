import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InfoPeliculasService } from 'src/app/services/info-peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() cambio = new EventEmitter();

  constructor( private infoPeliculasService: InfoPeliculasService ) { }

  ngOnInit(): void {
  }


  buscarPelicula( peliSearch: string ) {
    // console.log(peliSearch);
    this.cambio.emit(peliSearch);
  }

}
