// import { Routes } from '@angular/router';

import { Dashboard } from './admin/dashboard/dashboard';
import { AssignCarriers } from './admin/assign-carriers/assign-carriers';
import { MonitorShipments } from './admin/monitor-shipments/monitor-shipments';
import { Routes } from '@angular/router';
import { BookFreight } from './customer/book-frieght/book-frieght';
import { FreightDetails } from './customer/freight-details/freight-details';
import { CustomerDashboard } from './customer/customer-dashboard/customer-dashboard';
import { TrackShipments } from './customer/track-shipments/track-shipments';

export const routes: Routes = [

  { path: '', component: CustomerDashboard },
  { path: 'book-freight', component: BookFreight },
  { path: 'freight-details', component: FreightDetails },
  { path:'track-shipments', component:TrackShipments},


  { path: 'admin', component: Dashboard},
  { path: 'admin/assign-carriers', component:AssignCarriers},
  { path: 'admin/monitor-shipments', component:MonitorShipments},

  


]; 




