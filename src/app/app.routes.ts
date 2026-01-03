// import { Routes } from '@angular/router';

import { Dashboard } from './components/admin/dashboard/dashboard';
import { AssignCarriers } from './components/admin/assign-carriers/assign-carriers';
import { MonitorShipments } from './components/admin/monitor-shipments/monitor-shipments';
import { Routes } from '@angular/router';
import { BookFreight } from './components/customer/book-frieght/book-frieght';
import { FreightDetails } from './components/customer/freight-details/freight-details';
import { CustomerDashboard } from './components/customer/customer-dashboard/customer-dashboard';
import { TrackShipments } from './components/customer/track-shipments/track-shipments';

export const routes: Routes = [

  { path: '', component: CustomerDashboard },
  { path: 'book-freight', component: BookFreight },
  { path: 'freight-details', component: FreightDetails },
  { path:'track-shipments', component:TrackShipments},


  { path: 'admin', component: Dashboard},
  { path: 'admin/assign-carriers', component:AssignCarriers},
  { path: 'admin/monitor-shipments', component:MonitorShipments},

  


]; 




