import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormComponent } from './customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { customersMock } from '../../../../../../__mocks__/api/customers';

describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [CustomerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('formSubmit', () => {
    it(('should emit form value'), () => {
      const emitSpy = spyOn(component.customerSubmit, 'emit');
      component.formSubmit();
      expect(emitSpy).toHaveBeenCalledWith(component.customerFormGroup.value);
    });
  });

  
  describe('CustomerForm for Edit Customers', () => {
    it(('should patchValue'), () => {
      const patchValueSpy = spyOn(component.customerFormGroup, 'patchValue');
      
      component.data = customersMock[0];
      component.ngOnInit();

      expect(patchValueSpy).toHaveBeenCalledWith(customersMock[0]);
    });
  });
});
