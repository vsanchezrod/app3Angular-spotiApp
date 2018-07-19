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

  // Servicio para generar la petición de los últimos lanzamientos de Spotify, con la petición de la API
  getNewReleases() {

    // Creamos una constante para mandar los datos de la cabecera que necesita la petición
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBwktlEhDWWRYPVzxlQ53-vro2wGOrXr9BkXiEDbtsTQatYQ-9GBhXVM1ApGOg6qZWFySMocMAYoU8Cz0U'
    });

    // Se realiza la peticion, pasándole la URL y los datos de la cabecera
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  // Servicio para buscar artista que recibe el término de búsqueda
  getArtista(termino: string) {

    // Creamos una constante para mandar los datos de la cabecera que necesita la petición
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBwktlEhDWWRYPVzxlQ53-vro2wGOrXr9BkXiEDbtsTQatYQ-9GBhXVM1ApGOg6qZWFySMocMAYoU8Cz0U'
    });

    // Se realiza la peticion, pasándole la URL en forma de literal con el término de búsqueda y los datos de la cabecera
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
  }

}
