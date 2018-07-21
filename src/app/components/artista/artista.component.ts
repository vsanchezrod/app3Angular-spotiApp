import { Component, OnInit } from '@angular/core';

// Se necesita importar ActivatedRoute para saber cual es la ruta activa y recuperar el ID
import { ActivatedRoute } from '@angular/router';

// Se importa el servicio para poder obtener el artista deseado
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {

  artista: any = {};
  loadingArtista: boolean;
  topTracks: any [] = [];

  constructor(private router: ActivatedRoute,
              private _spotifyService: SpotifyService) {

    this.loadingArtista = true;
    // Con params se recupera el valor recibido
    this.router.params.subscribe (params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  // Método para obtener el artista
  getArtista(id: string) {

    this.loadingArtista = true;
    // Se llama al método del servicio
    this._spotifyService.getArtista(id).subscribe(respArtista => {
      console.log(respArtista);
      // Se guarda el artista en la propiedad artista de la clase
      this.artista = respArtista;
      this.loadingArtista = false;
    });
  }


  // Método para obtener los Top-Tracks
  getTopTracks (id: string) {
    this._spotifyService.getTopTracks(id).subscribe(respTracks => {
       console.log(respTracks);
       this.topTracks = respTracks;
    });


  }

}
