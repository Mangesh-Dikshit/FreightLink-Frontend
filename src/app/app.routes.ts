import { Routes } from '@angular/router';
import { RouteTracking } from './route-tracking/route-tracking';
import { Landing } from './landing/landing';
import { BookFreight } from './book-frieght/book-frieght';
import { FreightDetails } from './freight-details/freight-details';
import { AdminRouteTracking } from './admin-route-tracking/admin-route-tracking';
import { Dashboard } from './admin/dashboard/dashboard';
import { AssignCarriers } from './admin/assign-carriers/assign-carriers';
import { MonitorShipments } from './admin/monitor-shipments/monitor-shipments';

export const routes: Routes = [
  { path: '', component: Landing },              // default home
  {path:'routetracking',component:RouteTracking},
  { path: 'book-freight', component: BookFreight },
  { path: 'freight-details', component: FreightDetails },
  {path: 'admin/routetracking', component:AdminRouteTracking},

  {path: 'admin/dashboard', component: Dashboard},
  {path: 'admin/assign-carriers', component:AssignCarriers},
  {path: 'admin/monitor-shipments', component:MonitorShipments}
];
