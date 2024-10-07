import { Component } from '@angular/core';
import type { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html'
})
export class CustomerNewComponent {

  public errorMessage: string | null = null;
  public loading = false;

  constructor(

    private customerService: CustomerService,
    private router: Router,
  ) {}
  
  createCustomer(customer: Partial<Customer>) {
    // this.router.navigate(['/dashboard']);
    this.loading = true;
    this.errorMessage = null;
    
    this.customerService.postCustomer(customer)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
          // this.loading = false;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.loading = false;
        }
      });
  }
}
