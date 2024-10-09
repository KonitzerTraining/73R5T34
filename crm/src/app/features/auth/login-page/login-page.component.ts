import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from '../state/actions/auth.actions';
import { LoginData } from '../model/login-data';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  #store = inject(Store);
  loginFormGroup = inject(FormBuilder).group({
    email: ['tim@example.com', [Validators.required, Validators.email]],
    password: ['345rgerwr34r', [Validators.required]]
  });
    
  loginSubmit() {
    this.#store.dispatch(AuthActions.login({ login: this.loginFormGroup.value as LoginData}));
  }
}
