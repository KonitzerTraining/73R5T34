import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerIndexComponent } from './customer-index.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerNewComponent } from './pages/customer-new/customer-new.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: CustomerIndexComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: CustomerListComponent
      },
      {
        path: 'new',
        component: CustomerNewComponent
      },
      {
        path: 'edit/:id',
        component: CustomerEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
