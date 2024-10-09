import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '../features/auth/state/actions/auth.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  #store = inject(Store);

  logout() {
    this.#store.dispatch(AuthActions.logout());
  }
}
