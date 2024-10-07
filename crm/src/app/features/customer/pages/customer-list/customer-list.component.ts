import { Component, inject, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

  public errorMessage: string | null = null;
  public loading = false;
  public customers: Customer[] = [];

  // Dependency Injection
  customerService =  inject(CustomerService);

  // constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.loading = true;
    this.errorMessage = null;
    this.customerService.getAll()
      .subscribe({
        next: (customers) => {
          this.customers = customers;
          this.loading = false;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.loading = false;
        }
      });
  }

  deleteCustomer(id: number) {
    this.loading = true;
    this.errorMessage = null;
    this.customerService.deleteById(id)
      .subscribe({
        next: () => {
          // this.loadCustomers();
          this.customers = this.customers.filter((customer) => {
            return customer.id !== id
          });
          this.loading = false;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.loading = false;
        }
      });
  }
}
