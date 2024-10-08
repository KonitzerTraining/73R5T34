import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { customersMock } from '../../../../../__mocks__/api/customers';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('should return an Observable<Customer[]>', () => {
      expect(service.getProducts()).toBeInstanceOf(Observable);
    });
  });

  describe('deleteById', () => {
    it('should return an Observable<Customer[]>', () => {

      expect(service.deleteById(customersMock[0].id)).toBeInstanceOf(Observable);
    });
  });
});
