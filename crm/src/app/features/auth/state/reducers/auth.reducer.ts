import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { User } from '../../model/user';

export const authFeatureKey = 'auth';

export interface State {
  // Define the shape of your state here
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  // Define the initial state here
  user: null,
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, loading: true, error: null })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user, loading: false })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(AuthActions.logout, () => initialState),
);

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer,
});

