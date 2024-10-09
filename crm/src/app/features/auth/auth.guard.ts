import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from './state/selectors/auth.selectors';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  return inject(Store)
    .select(selectIsAuthenticated)
    .pipe(
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          router.navigate(['/login']);
        }
      }
      ))
};
