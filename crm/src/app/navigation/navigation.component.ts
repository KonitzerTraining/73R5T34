import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '../features/auth/state/actions/auth.actions';
import { selectIsAuthenticated, selectUserName } from '../features/auth/state/selectors/auth.selectors';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  
  #store = inject(Store);
  isAuthenticated$ = this.#store.select(selectIsAuthenticated);
  userName$ = this.#store.select(selectUserName);


  logout() {
    this.#store.dispatch(AuthActions.logout());
  }
}
