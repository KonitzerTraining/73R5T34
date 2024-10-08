import { Component } from '@angular/core';

@Component({
  selector: 'app-product-index',
  template: `
   <h1 class="display-3">
      Product Index
   </h1>
   <router-outlet></router-outlet>
  `
})
export class ProductIndexComponent {

}
