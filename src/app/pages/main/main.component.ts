import { Component, OnInit, Input } from '@angular/core';
import { InfoPeliculasService } from 'src/app/services/info-peliculas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  pelisNombre: any;

  // peli = 'avengers';
  peli;

  constructor(public infoPeliculasService: InfoPeliculasService ) { }

  ngOnInit(): void{
    this.fetchPeliculasNombre(this.peli);
  }


  fetchPeliculasNombre(e) {
    this.peli = e;
    this.infoPeliculasService.cargarInfoPeliculasNombre(this.peli).subscribe((pelis: any) => {
      console.log(pelis);
      this.pelisNombre = pelis.results;
    });
  }

}
