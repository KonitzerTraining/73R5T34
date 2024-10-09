import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { AuthActions } from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

  #actions$ = inject(Actions);
  #auth = inject(AuthService);
  #router = inject(Router);

  login$ = createEffect(() => this.#actions$.pipe(
    ofType(AuthActions.login),
    concatMap(({ login }) => this.#auth.getUser(login).pipe(
      map(user => AuthActions.loginSuccess({ user })),
      catchError(error => of(AuthActions.loginFailure({ error })))
    ))
  ));

  logout$ = createEffect(() => this.#actions$.pipe(
    ofType(AuthActions.logout),
    tap(() => {
      this.#router.navigate(['/login']);
    })
  ), { dispatch: false });

}
