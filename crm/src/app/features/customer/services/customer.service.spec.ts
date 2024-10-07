import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

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
});
