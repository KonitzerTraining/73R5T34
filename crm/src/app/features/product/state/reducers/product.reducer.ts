import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductActions } from '../actions/product.actions';
import { Product } from '../../model/product';

export const productFeatureKey = 'product';

export interface State {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
    },
  ],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, state => {
    return {
      ...state, // Spread-Operator
      loading: true,
      error: null,
    };
  }),

  /* on(ProductActions.loadProductsSuccess, (state, action) => state),
  on(ProductActions.loadProductsFailure, (state, action) => state), */
);

export const productFeature = createFeature({
  name: productFeatureKey,
  reducer,
});

