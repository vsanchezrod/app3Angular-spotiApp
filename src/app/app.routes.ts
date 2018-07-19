import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'artista', component: ArtistaComponent},
    // Cualquier path vació redirige al home
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    // Cualquier otro path redirige al home
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];



