import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductIndexComponent } from './product-index.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductNewComponent } from './views/product-new/product-new.component';
import { ProductEditComponent } from './views/product-edit/product-edit.component';


@NgModule({
  declarations: [
    ProductIndexComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
