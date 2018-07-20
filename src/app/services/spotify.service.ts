import { Injectable } from '@angular/core';

// Para hacer la petición es necesario importar HttpClient
// Para mandar los datos en la cabecera del token es necesario importar HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Se importa el operador map para filtrar la información
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // Se utiliza en el constructor HttpClient
  constructor(private http: HttpClient) {
    console.log('Spotify Service Ready!');
  }

  // Método para centralizar las peticiones
  getQuery (query: string) {

    // Dos constantes, la parte fija de la petición y los datos que se van a mandar en la cabnecera de la petición
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB0RIhw3bPk2eRtUfaOmN7AzTc0txR1npxBdLbP_US6Rk52Wzjz2UJZw_pIvJjpAA9Cpefn_EmtIOpq7jY'
    });

    return this.http.get(url , {headers});

  }


  // Servicio para generar la petición de los últimos lanzamientos de Spotify con su API
  getNewReleases() {

    // Se realiza la peticion, pasándole la URL y los datos de la cabecera. Se utiliza el observable map para filtrar la información
    /*return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(map(respuesta => respuesta['albums'].items)
      );*/

    // Optimización. Se llama al getQuery que recibe la parte variable de la peticion y utiliza el observable map xa filtrar los resultados
    return this.getQuery('browse/new-releases?limit=20').pipe(map(respuesta => respuesta['albums'].items));

  }

  // Servicio para buscar artista que recibe el término de búsqueda
  getArtista(termino: string) {

    // Optimización igual q en el método getNewReleases
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map(respuesta => respuesta['artists'].items));

  }

}
