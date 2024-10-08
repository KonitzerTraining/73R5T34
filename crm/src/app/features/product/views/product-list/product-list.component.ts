import { Component, inject } from '@angular/core';

import { Store } from '@ngrx/store';
import { selectError, selectLoading, selectProducts } from '../../state/selectors/product.selectors';
import { Observable } from 'rxjs';
import { ProductActions } from '../../state/actions/product.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  readonly #store = inject(Store);
  products$ = this.#store.select(selectProducts);
  loading$: Observable<null | boolean> = this.#store.select(selectLoading);
  errorMessage$ =   this.#store.select(selectError);

  deleteProduct(productId: number) {
    // Delete product
    this.#store.dispatch(ProductActions.deleteProduct({ productId }));
  }
}
