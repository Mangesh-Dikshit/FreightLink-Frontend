/*import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { BookFreight } from './book-frieght/book-frieght';
import { FreightDetails } from './freight-details/freight-details';

export const routes: Routes = [
  { path: '', component: Landing },              // default home
  { path: 'book-freight', component: BookFreight },
  { path: 'freight-details', component: FreightDetails },
]; */
import { Routes } from '@angular/router';
import { BookFreight } from './customer/book-frieght/book-frieght';
import { FreightDetails } from './customer/freight-details/freight-details';
import { CustomerDashboard } from './customer/customer-dashboard/customer-dashboard';


export const routes: Routes = [
  
 
  // Pages WITH header & sidebar
  
    { path: '', component: CustomerDashboard },
  { path: 'book-freight', component: BookFreight },
  { path: 'freight-details', component: FreightDetails }
  
];
