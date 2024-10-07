import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        /**
         * HttpClient wird durch provideHttpClient ersetzt
         */
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('should return an Observable<Customer[]>', () => {
      expect(service.getAll()).toBeInstanceOf(Observable);
    });
  });

  describe('getById', () => {
    it('should return an Observable<Customer[]>', () => {
      expect(service.getById(1)).toBeInstanceOf(Observable);
    });
  })

  describe('postCustomer', () => {
    it('should return an Observable<Customer[]>', () => {
      expect(service.postCustomer({})).toBeInstanceOf(Observable);
    });
  });

  describe('putCustomer', () => {
    it('should return an Observable<Customer[]>', () => {
      expect(service.putCustomer({
        id: 1,
        name: 'Test',
        credit: 100
      })).toBeInstanceOf(Observable);
    });
  });

  describe('deleteById', () => {
    it('should return an Observable<Customer[]>', () => {
      expect(service.deleteById(1)).toBeInstanceOf(Observable);
    });
  })
});
