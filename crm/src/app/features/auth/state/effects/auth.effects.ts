import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { AuthActions } from '../actions/auth.actions';


@Injectable()
export class AuthEffects {


  constructor(private actions$: Actions) {}
}
