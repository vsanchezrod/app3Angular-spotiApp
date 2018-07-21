import { Component, Input } from '@angular/core';
// Se importa Input para poder traer información desde el componente padre

// Se importa Router y se usa en el constructor para poder hacer redirecciones
import { Router } from '@angular/router';



@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
})

export class TarjetasComponent {

  // Se va a recibir información desde el componente padre en un elemento items que será un array vacío
  @Input() items: any [] = [];

  constructor(private router: Router) { }

  // Al hacer click en una tarjeta se llama a este método mandándole toda la información de la tarjeta
  verArtista(item: any) {

    let artistaID;

    // Es necesario fijarse en la propiedad "type" del item
    /*. Si es artista se recoge el ID
        Si es album se tendrá que buscar la propiedad artista y mirar dentro de sus propiedades el ID.*/

    if (item.type === 'artist') {
      artistaID = item.id;
    }

    if (item.type === 'album') {
      artistaID = item.artists[0].id;
    }

    // Se usan los [] para poder pasarle el parámetro de la ID
    this.router.navigate(['/artista', artistaID]);
  }

}
