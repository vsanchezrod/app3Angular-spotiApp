import { Component, OnInit } from '@angular/core';

// Se importa el Servicio que va a usar el componente y se usa en el constructor
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  // Se crea una propiedad
  nuevasCanciones: any [] = [];

  constructor(private _spotifyService: SpotifyService) {

    // En el constructor se llama al método getNewReleases del servicio que trae información del Spotify
    this._spotifyService.getNewReleases().subscribe((respuesta: any) => {
      this.nuevasCanciones = respuesta;
    });
  }

  ngOnInit() {
  }

}


