import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { BookFreight } from './book-frieght/book-frieght';
import { FreightDetails } from './freight-details/freight-details';

export const routes: Routes = [
  { path: '', component: Landing },              // default home
  { path: 'book-freight', component: BookFreight },
  { path: 'freight-details', component: FreightDetails },
];
