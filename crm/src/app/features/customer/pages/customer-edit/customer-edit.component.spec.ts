import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditComponent } from './customer-edit.component';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { MockComponent, MockComponents } from 'ng-mocks';
import { ErrorBoxComponent } from '../../../../core/components/error-box/error-box.component';
import { LoadingIndicatorComponent } from '../../../../core/components/loading-indicator/loading-indicator.component';
import { CustomerFormComponent } from '../../forms/customer-form/customer-form.component';
import { of, throwError } from 'rxjs';
import { customersMock } from '../../../../../../__mocks__/api/customers';
import { createCustomerServiceMock } from '../../../../../../__mocks__/services/customer.service.mock';
import { CustomerIndexComponent } from '../../customer-index.component';

describe('CustomerEditComponent', () => {
  let component: CustomerEditComponent;
  let fixture: ComponentFixture<CustomerEditComponent>;
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
        CustomerEditComponent,
        MockComponents(
          ErrorBoxComponent,
          LoadingIndicatorComponent,
          CustomerFormComponent
        )],
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

    fixture = TestBed.createComponent(CustomerEditComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('loadCustomer', () => {
    it('should call customerService.getById', () => {
      component.id = customersMock[0].id;

      fixture.detectChanges(); // triggers ngOnInit -> loadCustomers -> customerService.getAll
      expect(customerServiceMock.getById).toHaveBeenCalledOnceWith(customersMock[0].id);
    });

    it('should handle error', () => {
      component.id = customersMock[0].id;
      const errorMessage = 'Error message';
      customerServiceMock.getById.and.callFake(() => {
        return throwError(() => {
          return new Error(errorMessage);
        })
      });

      // fixture.detectChanges(); // triggers ngOnInit -> loadCustomers -> customerService.getAll
      component.loadCustomer();
      expect(component.errorMessage).toBe(errorMessage);
    });
  });


  describe('updateCustomer', () => {
    it('should call customerService.putCustomer', () => {
      const customer = customersMock[0]

      component.updateCustomer(customer);
      expect(customerServiceMock.putCustomer).toHaveBeenCalled();
    });

    it('should handle error', () => {
      const customer = customersMock[0];
      const errorMessage = 'Error message';
      customerServiceMock.putCustomer.and.callFake(() => {
        return throwError(() => {
          return new Error(errorMessage);
        })
      });
      component.updateCustomer(customer);
      expect(component.errorMessage).toBe(errorMessage);
    });

  });
});
