import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ProductActions = createActionGroup({
  source: 'Product',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ data: unknown }>(),
    'Load Products Failure': props<{ error: unknown }>(),
  }
});
