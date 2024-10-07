import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { CustomerService } from '../../services/customer.service';
// import { Component } from '@angular/core';
import { of } from 'rxjs';
import { MockComponents } from 'ng-mocks';
import { ErrorBoxComponent } from '../../../../core/components/error-box/error-box.component';
import { LoadingIndicatorComponent } from '../../../../core/components/loading-indicator/loading-indicator.component';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: CustomerService,
          useValue: {
            getAll: () => { return of([]) }
          }
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
    component = fixture.componentInstance;
    // triggers ngOnInit -> loadCustomers -> customerService.getAll
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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