import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNewComponent } from './customer-new.component';
import { CustomerService } from '../../services/customer.service';
// import { of } from 'rxjs';
import { MockComponents } from 'ng-mocks';
import { ErrorBoxComponent } from '../../../../core/components/error-box/error-box.component';
import { LoadingIndicatorComponent } from '../../../../core/components/loading-indicator/loading-indicator.component';
import { CustomerFormComponent } from '../../forms/customer-form/customer-form.component';

fdescribe('CustomerNewComponent', () => {
  let component: CustomerNewComponent;
  let fixture: ComponentFixture<CustomerNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
          useValue: {}
        }
      ],
    }) 
      .compileComponents();

    fixture = TestBed.createComponent(CustomerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
