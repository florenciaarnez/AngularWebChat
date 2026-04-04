import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const adminLogged = localStorage.getItem('isLogged');
  
  if (adminLogged=== "true") {
    return true;
  } else {
    return router.parseUrl('/login'); 
};


}

export const notAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const adminLogged = localStorage.getItem('isLogged');
  
  if (adminLogged === "true") {
    return router.parseUrl('/chats'); 
  } else {
    return true;
  }}