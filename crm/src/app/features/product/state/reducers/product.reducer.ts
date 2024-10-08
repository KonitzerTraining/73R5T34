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
  products: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,

  // Loading products
  on(ProductActions.loadProducts, state => {
    return {
      ...state, // Spread-Operator
      loading: true,
      error: null,
    };
  }),

 on(ProductActions.loadProductsSuccess, (state, {products}) => {
  return {
    ...state,
    products, // Shorthand property
    loading: false,
  }
 }),
  
 
 on(ProductActions.loadProductsFailure, (state, {error}) => {
  return {
    ...state,
    loading: false,
    error,
  }
 }), 

 // Delete product
  on(ProductActions.deleteProduct, state => {
    return {
      ...state, // Spread-Operator
      loading: true,
      error: null,
    };
  }),

 on(ProductActions.deleteProductSuccess, (state, {productId}) => {
  return {
    ...state,
    loading: false,
  }
 }),
  
 
 on(ProductActions.deleteProductFailure, (state, {error}) => {
  return {
    ...state,
    loading: false,
    error,
  }
 }), 
);

export const productFeature = createFeature({
  name: productFeatureKey,
  reducer,
});

