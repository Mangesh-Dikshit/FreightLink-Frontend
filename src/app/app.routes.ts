import { Routes } from '@angular/router';
import { RouteTracking } from './route-tracking/route-tracking';
import { Landing } from './landing/landing';
import { BookFreight } from './book-frieght/book-frieght';
import { FreightDetails } from './freight-details/freight-details';
import { AdminRouteTracking } from './admin-route-tracking/admin-route-tracking';

export const routes: Routes = [
  { path: '', component: Landing },              // default home
  {path:'routetracking',component:RouteTracking},
  { path: 'book-freight', component: BookFreight },
  { path: 'freight-details', component: FreightDetails },
  {path: 'admin/routetracking', component:AdminRouteTracking}
];
