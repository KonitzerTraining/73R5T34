import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductIndexComponent } from './product-index.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductNewComponent } from './views/product-new/product-new.component';
import { ProductEditComponent } from './views/product-edit/product-edit.component';
import { provideHttpClient } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/effects/product.effects';
import { StoreModule } from '@ngrx/store';
import { productFeature, productFeatureKey } from './state/reducers/product.reducer';


@NgModule({
  declarations: [
    ProductIndexComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature(productFeatureKey, productFeature.reducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  providers: [
    provideHttpClient()
  ]
})
export class ProductModule { }
