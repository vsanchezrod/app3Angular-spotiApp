import { Component, OnInit } from '@angular/core';
// Se importa HttpClient y se usa en el constructor
import { HttpClient } from '@angular/common/http';

// Se importa el Servicio que va a usar el componente y se usa en el constructor
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient,
              private _spotifyService: SpotifyService) {
    this._spotifyService.getNewReleases();
  }

  ngOnInit() {
  }

}


