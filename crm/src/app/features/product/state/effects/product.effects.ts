import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ProductActions } from '../actions/product.actions';


@Injectable()
export class ProductEffects {

  /* loadProducts$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ProductActions.loadProducts),
      concatMap(() =>
        EMPTY.pipe(
          map(data => ProductActions.loadProductsSuccess({ data })),
          catchError(error => of(ProductActions.loadProductsFailure({ error }))))
      )
    );
  });
 */

  
  constructor(private actions$: Actions) {}
}
