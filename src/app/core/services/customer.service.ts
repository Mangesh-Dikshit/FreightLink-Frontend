import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';


@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  private customers: Customer[] = [

    {
      customerId: 1,
      name: 'Mangesh Girish Dikshit',
      email: 'mangesh@gmail.com',
      contact: '9022633089',
      role:'ADMIN',
      preferredMode:'ROAD',
      accountStatus:'ACTIVE'
    },

    {
      customerId: 2,
      name: 'Vivek Kumar Singh',
      email: 'vivek@gmail.com',
      contact: '9087363637',
      role:'CUSTOMER',
      preferredMode:'ROAD',
      accountStatus:'ACTIVE'
    },

  ];
 
  constructor() {}
 


  getCustomers(): Customer[] {
    return this.customers;
  }
 

  getCustomerById(id: number): Customer | undefined {
    return this.customers.find(c => c.customerId === id);
  }
 

  addCustomer(customer: Customer): void {
    customer.customerId = this.customers.length + 1;
    this.customers.push(customer);
  }
 

  updateCustomer(updated: Customer): void {
    const index = this.customers.findIndex(c => c.customerId === updated.customerId);
    if (index !== -1) {
      this.customers[index] = updated;
    }
  }
 

  deleteCustomer(id: number): void {
    this.customers = this.customers.filter(c => c.customerId !== id);
  }
 


}
