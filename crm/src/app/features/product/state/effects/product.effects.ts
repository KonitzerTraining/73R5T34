import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, exhaustMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { ProductActions } from '../actions/product.actions';
import { ProductService } from '../../services/product.service';
import { AuthActions } from '../../../auth/state/actions/auth.actions';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { RouterState } from '@angular/router';


@Injectable()
export class ProductEffects {

  #actions$: Actions = inject(Actions);
  #productService = inject(ProductService);

  // Variante 1: Laden nach Login
/*   login$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(AuthActions.loginSuccess),
      map(() => ProductActions.loadProducts())
    );
  }); */

  // Variante 2: Laden nach Navigation
  loadProductsOnNavigation$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      map((data : { payload: {routerState: {url: string}}}) => {
        const url = data.payload.routerState.url
        if(url === '/product-index') {
          return ProductActions.loadProducts()
        } else {
          return ProductActions.nothing()
        }
      })
    );
  });


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

  deleteProduct$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(ProductActions.deleteProduct),
      exhaustMap(({ productId }) =>
        this.#productService.deleteById(productId).pipe(
          map(() => ProductActions.deleteProductSuccess({ productId })),
          catchError(error => of(ProductActions.deleteProductFailure({ error: error.message }))))
      )
    );
  });


  /*   // Variante 1: Produkte komplett neu laden
    deleteProductSuccess$ = createEffect(() => {
      return this.#actions$.pipe(
  
        ofType(ProductActions.deleteProductSuccess),
        map(() => ProductActions.loadProducts())
      );
    }); */


}
