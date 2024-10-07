import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const url: string = environment.api + 'customers/';


@Injectable({
  providedIn: 'root'
})
/** 
 * Wird verwendet in Customer-Komponenten
 * 
 * @class CustomerSerfvice
 */
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Gets all Customers
   * 
   * @returns Observable<Customer[]>
   */
  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(url);
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(url + id);
  }

  // Alternative: Omit<Customer, 'id'>
  postCustomer (customer: Partial<Customer>): Observable<Customer> {
    return this.http.post<Customer>(url, customer);
  }

  // Vollständig überarbeiten
  putCustomer (customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(url + customer.id, customer);
  }

  //Teilweise überarbeiten
  /*   updateCustomer(id: number, customer: Partial<Customer>) {
    return this.http.patch(url + id, customer)
  } */
  
    deleteById(id: number) {
    return this.http.delete(url + id);
  }
}
