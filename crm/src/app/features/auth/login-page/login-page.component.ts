import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  loginFormGroup = inject(FormBuilder).group({
    email: ['tim@example.com', [Validators.required, Validators.email]],
    password: ['345rgerwr34r', [Validators.required]]
  });
    
  loginSubmit() {
    console.log(this.loginFormGroup.value);
  }
}
