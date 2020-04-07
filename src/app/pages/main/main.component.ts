import { Component, OnInit } from '@angular/core';
import { InfoPeliculasService } from 'src/app/services/info-peliculas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public infoPeliculasService: InfoPeliculasService ) { }

  ngOnInit(): void {
  }

}
