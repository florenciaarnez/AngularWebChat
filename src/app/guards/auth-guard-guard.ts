import { inject } from '@angular/core/primitives/di';
import { CanActivateFn, Router } from '@angular/router';
export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const adminLogged = localStorage.getItem('isogged');
  
  if (adminLogged=== true.toString()) {
    return router.parseUrl('/home'); // Redirige a home
  } else {
    return router.parseUrl('/login'); // Redirige al login
  }
};
