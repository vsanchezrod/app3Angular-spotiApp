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
  loading: boolean;
  mensaje: string;

  error = false;

  constructor(private _spotifyService: SpotifyService) {

    // Se inicializa el loading a true cuando están cargando los datos
    this.loading = true;
    this.error = false;

    // En el constructor se llama al método getNewReleases del servicio que trae información del Spotify
    this._spotifyService.getNewReleases().subscribe((respuesta: any) => {
      this.nuevasCanciones = respuesta;
      // Se cambia el loading a false cuando ya se ha obtenido la respuesta de la petición
      this.loading = false;
    }, (errorServicio) => {  // Función que se lanza cuando algo va mal

        this.loading = false;
        this.error = true;
        this.mensaje = errorServicio.error.error.message; }
    );

  }

  ngOnInit() {
  }

}


