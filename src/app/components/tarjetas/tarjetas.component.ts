import { Component, Input } from '@angular/core';
// Se importa Input para poder traer información desde el componente padre


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})

export class TarjetasComponent{

  // Se va a recibir información desde el componente padre en un elemento items que será un array vacío
  @Input() items: any [] = [];

  constructor() { }

}
