import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent implements OnInit {

  customerFormGroup: FormGroup;

  @Input()
  data ?: Customer;

  @Output()
  customerSubmit = new EventEmitter<Partial<Customer>>();

  constructor(private readonly fb: FormBuilder) {
    this.customerFormGroup = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      credit: [
        0,
        [
          Validators.required,
          Validators.min(0)
        ]
      ],
    });
  }
  
  ngOnInit(): void {
    if(this.data !== void 0 ) {
      this.customerFormGroup.patchValue(this.data);
    }
  }

  formSubmit() {
    const customer = this.customerFormGroup.value
    this.customerSubmit.emit(customer);
  }
}

/*

1. Formlaur löst formSubmit()
2. Das Custom Event customerSubmit wird mit emit ausgelöst
3. mit den Werten des Formulars als Prameter
4. in der customer-new.component.html wird auf das Event reagiert
5. EventHandler  createCustomer wird ausgelöst mit dem Payload des Events



*/