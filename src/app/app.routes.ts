import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
    { path: '', component: Home },          // Za / se podrazumeva da se tu nalazi, zato je prazno
    { path: 'about', component: About },   // Isto vazi i za ovaj deo, bice na putanji /about
    { path: '**', redirectTo: '' }        // Ovde za bilo koju pogresno unetu putanju vraca na pocetnu stranicu
];
