import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Question } from './question/question';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { Profile } from './profile/profile';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'signup', component: Signup },
    { path: '', component: Home },          // Za / se podrazumeva da se tu nalazi, zato je prazno
    { path: 'about', component: About },   // Isto vazi i za ovaj deo, bice na putanji /about
    { path: 'questions', component: Question},
    { path: 'profile', component: Profile},
    { path: '**', redirectTo: '' }        // Ovde za bilo koju pogresno unetu putanju vraca na pocetnu stranicu
];
