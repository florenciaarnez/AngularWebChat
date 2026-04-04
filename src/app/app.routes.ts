import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { NewContact } from './views/NewContact/NewContact';
import { Login } from './views/login/login';
import { authGuardGuard as authGuard } from '../app/guards/auth-guard-guard';
import { notAuthGuard } from '../app/guards/auth-guard-guard';

export const routes: Routes = [
   { path: "", redirectTo: 'login', pathMatch: 'full' }, 
    { path: "login", component: Login, canActivate: [notAuthGuard] },
    { path: "chats", component: Home, canActivate: [authGuard] }, 
    { path: "nuevo", component: NewContact, canActivate: [authGuard] }, 
    { path: "**", redirectTo: 'login' } 
];
