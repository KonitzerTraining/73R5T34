import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

// UserName Selector

export const selectUserName = createSelector(
  selectAuthState,
  (state) => state.user?.username
);


// isAuhtenticated
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => !!state.user
);


