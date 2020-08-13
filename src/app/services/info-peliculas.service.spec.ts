import { TestBed } from '@angular/core/testing';

import { InfoPeliculasService } from './info-peliculas.service';

describe('InfoPeliculasService', () => {
  let service: InfoPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
