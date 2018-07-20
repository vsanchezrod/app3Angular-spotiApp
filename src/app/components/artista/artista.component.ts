import { Component, OnInit } from '@angular/core';

// Se necesita importar ActivatedRoute para saber cual es la ruta activa y recuperar el ID
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {

  constructor(private router: ActivatedRoute) {

    // Con params se recupera el valor recibido
    this.router.params.subscribe (params => {
      console.log(params);
    });

  }

}
