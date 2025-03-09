import { inject } from '@angular/core';
import { Router, CanActivateFn, UrlTree } from '@angular/router';

export const loginGuard: CanActivateFn = () => {
  const router = inject(Router);
  const currentUser = localStorage.getItem('currentUser');

  return currentUser ? router.createUrlTree(['/landingpage']) : true;
};
