import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerIndexComponent } from './customer-index.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CoreModule } from '../../core/core.module';
import { CustomerNewComponent } from './pages/customer-new/customer-new.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerFormComponent } from './forms/customer-form/customer-form.component';
import { loggingInterceptor } from '../../core/services/logging.interceptor';

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
    provideHttpClient(
      withInterceptors([
        loggingInterceptor
      ])
    ),

  ]
})
export class CustomerModule { }
