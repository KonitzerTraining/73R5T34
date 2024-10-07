import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNewComponent } from './customer-new.component';
import { CustomerService } from '../../services/customer.service';
// import { of } from 'rxjs';
import { MockComponent, MockComponents } from 'ng-mocks';
import { ErrorBoxComponent } from '../../../../core/components/error-box/error-box.component';
import { LoadingIndicatorComponent } from '../../../../core/components/loading-indicator/loading-indicator.component';
import { CustomerFormComponent } from '../../forms/customer-form/customer-form.component';
import { Customer } from '../../model/customer';
import { of, throwError } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CustomerIndexComponent } from '../../customer-index.component';
import { createCustomerServiceMock } from '../../../../../../__mocks__/services/customer.service.mock';
import { customersMock } from '../../../../../../__mocks__/api/customers';

describe('CustomerNewComponent', () => {
  let component: CustomerNewComponent;
  let fixture: ComponentFixture<CustomerNewComponent>;
  let customerServiceMock: jasmine.SpyObj<CustomerService>;

  beforeEach(async () => {

    customerServiceMock = createCustomerServiceMock();
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([
          {
            path: 'dashboard',
            component: MockComponent(CustomerIndexComponent)
          }
        ])
      ],
      declarations: [
        CustomerNewComponent,
        MockComponents(
          ErrorBoxComponent,
          LoadingIndicatorComponent,
          CustomerFormComponent
        )
      ],
      providers: [
        {
          provide: CustomerService,
          useValue: customerServiceMock
        }
      ],
      // This is needed to avoid the error: 'Cannot read property 'destroy' of undefined'
      teardown: { destroyAfterEach: false }  
    }) 
      .compileComponents();

    fixture = TestBed.createComponent(CustomerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('createCustomer', () => {
    it('should call customerService.postCustomer', () => {
      const customer = customersMock[0]

     component.createCustomer(customer);
     expect(customerServiceMock.postCustomer).toHaveBeenCalled(); 
    });

    it('should handle error', () => {
      const customer = customersMock[0];
      const errorMessage = 'Error message';
      customerServiceMock.postCustomer.and.callFake(() => {
        return throwError(() => {
          return new Error(errorMessage);
        })
      });
      component.createCustomer(customer);
      expect(component.errorMessage).toBe(errorMessage);
    });

  });
});
