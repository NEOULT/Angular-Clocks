import { inject } from '@angular/core';
import { Router, CanActivateFn, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const currentUser = localStorage.getItem('currentUser');

  return currentUser ? true : router.createUrlTree(['/auth']);
};
