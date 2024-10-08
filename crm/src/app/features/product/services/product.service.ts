import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

const url = environment.api + 'products/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  #http = inject(HttpClient);
  
  getProducts(): Observable<Product[]> {
    return this.#http.get<Product[]>(url);
  }
}
