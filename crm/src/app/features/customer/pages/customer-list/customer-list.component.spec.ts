import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { CustomerService } from '../../services/customer.service';
// import { Component } from '@angular/core';
import { of, throwError } from 'rxjs';
import { MockComponents } from 'ng-mocks';
import { ErrorBoxComponent } from '../../../../core/components/error-box/error-box.component';
import { LoadingIndicatorComponent } from '../../../../core/components/loading-indicator/loading-indicator.component';
import { createCustomerServiceMock } from '../../../../../../__mocks__/services/customer.service.mock';
import { customersMock } from '../../../../../../__mocks__/api/customers';
import { RouterLink, RouterModule } from '@angular/router';

fdescribe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customerServiceMock: jasmine.SpyObj<CustomerService>;

  beforeEach(async () => {
    customerServiceMock = createCustomerServiceMock();

    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [
        {
          provide: CustomerService,
          useValue: customerServiceMock
        }
      ],
      declarations: [
        CustomerListComponent,
        /*         MockComponent(ErrorBoxComponent),
                MockComponent(LoadingIndicatorComponent), */
        MockComponents(
          ErrorBoxComponent,
          LoadingIndicatorComponent)
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance; // triggers ngOnInit -> loadCustomers -> customerService.getAll

    // triggers ngOnInit -> loadCustomers -> customerService.getAll
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('loadCustomers', () => {
    it('should call customerService.loadCustomers', () => {
      fixture.detectChanges(); // triggers ngOnInit -> loadCustomers -> customerService.getAll
      expect(customerServiceMock.getAll).toHaveBeenCalled();
    });

    it('should handle error', () => {
      const errorMessage = 'Error message';
      customerServiceMock.getAll.and.callFake(() => {
        return throwError(() => {
          return new Error(errorMessage);
        })
      });
      
      // fixture.detectChanges(); // triggers ngOnInit -> loadCustomers -> customerService.getAll
      component.loadCustomers();
      expect(component.errorMessage).toBe(errorMessage);
    });
  });
});



/* @Component({
  selector: 'app-error-box',
  template: ''
})
class ErrorBoxMockComponent { }

@Component({
  selector: 'app-loading-indicator',
  template: ''
})
class LoadingIndicatorMockComponent { } */