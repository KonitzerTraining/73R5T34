import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <app-navigation></app-navigation>
  
  <div class="container py-4">
    <router-outlet></router-outlet>
  </div>
  
  `
})
export class AppComponent {}
