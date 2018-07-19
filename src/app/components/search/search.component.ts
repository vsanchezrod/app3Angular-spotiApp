import { Component, OnInit } from '@angular/core';

// Se importa el servicio
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  artistas: any [] = [];

  constructor(private _spotifyService: SpotifyService) { }

  // Método buscar artista y recibe un string para la busqueda
  buscar(termino: string) {

    this._spotifyService.getArtista(termino).subscribe( (respuesta: any ) => {
      console.log(respuesta.artists.items);
      this.artistas = respuesta.artists.items;
    });

  }
}
