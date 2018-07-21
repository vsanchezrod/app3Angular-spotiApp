import { Component, OnInit } from '@angular/core';

// Se importa el servicio
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  artistas: any [] = [];
  loading: boolean;

  constructor(private _spotifyService: SpotifyService) {}

  // Método buscar artista y recibe un string para la busqueda
  buscar(termino: string) {
    this.loading = true;
    this._spotifyService.getArtistas(termino).subscribe( (respuesta: any ) => {
      this.artistas = respuesta;
      this.loading = false;
    });

  }
}
