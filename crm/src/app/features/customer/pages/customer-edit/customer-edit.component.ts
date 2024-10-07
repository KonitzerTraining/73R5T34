import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html'
})
export class CustomerEditComponent implements OnInit {

  public errorMessage: string | null = null;
  public loading = false;

  public id: number;
  public customer !: Customer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
  ) {

    // Vorzeichenänderung bewirkt impliziten Cast, alternativ: parseInt()
    // this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.id = +this.activatedRoute.snapshot.params['id'];
    console.log(this.id, typeof this.id);
  }

  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer() {
    this.loading = true;
    this.errorMessage = null;
    this.customerService.getById(this.id)
      .subscribe({
        next: (customer) => {
          this.customer = customer;
          this.loading = false;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.loading = false;
        }
      });
  }

  updateCustomer (customerPartial: Partial<Customer>) {
    
    const customer: Customer = {
      ...customerPartial, // Spread-Operator
      id: this.id
    } as Customer;

    this.loading = true;
    this.errorMessage = null;
    
    this.customerService.putCustomer(customer)
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
