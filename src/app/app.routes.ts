import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    // La página del artista necesita recibir un id para saber q información mostrar
    {path: 'artista/:id', component: ArtistaComponent},
    // Cualquier path vació redirige al home
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    // Cualquier otro path redirige al home
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];



