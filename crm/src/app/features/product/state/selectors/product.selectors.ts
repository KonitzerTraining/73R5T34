import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from '../reducers/product.reducer';

export const selectProductState = createFeatureSelector<fromProduct.State>(
  fromProduct.productFeatureKey
);

export const selectProducts = createSelector(
  selectProductState,
  (state: fromProduct.State) => state.products
);

export const selectLoading = createSelector(
  selectProductState,
  (state: fromProduct.State) => state.loading
);

export const selectError = createSelector(
  selectProductState,
  (state: fromProduct.State) => state.error
);
