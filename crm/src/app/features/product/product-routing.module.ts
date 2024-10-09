import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductIndexComponent } from './product-index.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'product-index',
    component: ProductIndexComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: ProductListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
