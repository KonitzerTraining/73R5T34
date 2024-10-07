import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditComponent } from './customer-edit.component';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { MockComponents } from 'ng-mocks';
import { ErrorBoxComponent } from '../../../../core/components/error-box/error-box.component';
import { LoadingIndicatorComponent } from '../../../../core/components/loading-indicator/loading-indicator.component';
import { CustomerFormComponent } from '../../forms/customer-form/customer-form.component';
import { of } from 'rxjs';

describe('CustomerEditComponent', () => {
  let component: CustomerEditComponent;
  let fixture: ComponentFixture<CustomerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
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
          useValue: {
            getById: () => { return of({}) },
          }
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
