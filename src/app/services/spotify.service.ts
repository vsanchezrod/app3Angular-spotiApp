import { Injectable } from '@angular/core';

// Para hacer la petición es necesario importar HttpClient
// Para mandar los datos en la cabecera del token es necesario importar HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Se utiliza en el constructor HttpClient
  constructor(private http: HttpClient) {
    console.log('Spotify Service Ready!');
  }

  // MÉTODO para generar la petición de los últimos lanzamientos de Spotify, con la petición de la API
  getNewReleases() {

    // Creamos una constante para mandar los datos de la cabecera que necesita la petición
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBo6MJz_EXCbTJ9raEwi0-IyDiat4iVQCVDhQtAPNAMu_oGlYT9YIo1O2VX1k-3RiK2fL66PNUR1fCRHaM'
    });

    // Se realiza la peticion, pasándole la URL y los datos de la cabecera
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe((respuesta: any) => {
      console.log(respuesta);
    });
  }

}
