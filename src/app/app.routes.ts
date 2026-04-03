import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { NewContact } from './views/NewContact/NewContact';
import { Login } from './views/login/login';
    
export const routes: Routes = [
    { path: "", component: Home},
    { path: "home", component: Home },
    { path: "new-contact", component: NewContact },
    { path: "login", component: Login }
];
