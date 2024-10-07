import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerIndexComponent } from './customer-index.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { provideHttpClient } from '@angular/common/http';
import { CoreModule } from '../../core/core.module';
import { CustomerNewComponent } from './pages/customer-new/customer-new.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerFormComponent } from './forms/customer-form/customer-form.component';

@NgModule({
  declarations: [
    CustomerIndexComponent,
    CustomerListComponent,
    CustomerNewComponent,
    CustomerEditComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // Shared Module
    CoreModule,
    CustomerRoutingModule
  ],
  providers: [
    provideHttpClient(),
  ]
})
export class CustomerModule { }
