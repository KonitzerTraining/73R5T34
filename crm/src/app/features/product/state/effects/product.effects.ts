import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, exhaustMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { ProductActions } from '../actions/product.actions';
import { ProductService } from '../../services/product.service';


@Injectable()
export class ProductEffects {

  #actions$: Actions = inject(Actions);
  #productService = inject(ProductService);

  loadProducts$ = createEffect(() => {
    return this.#actions$.pipe(

      /**
       * Pipable Operator: ofType from ngrx/effects
       */
      ofType(ProductActions.loadProducts),
      exhaustMap(() =>
        this.#productService.getProducts().pipe(
          map(products => ProductActions.loadProductsSuccess({ products })),
          catchError(error => of(ProductActions.loadProductsFailure({ error: error.message }))))
      )
    );
  });
 
}
