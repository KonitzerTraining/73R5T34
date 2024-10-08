import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../../model/product';

export const ProductActions = createActionGroup({
  source: 'Product',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ products: Product[] }>(),
    'Load Products Failure': props<{ error: string }>(),

    'Delete Product': props<{productId: number}>(),
    'Delete Product Success': props<{productId: number}>(),
    'Delete Product Failure': props<{ error: string }>(),
  }
});
