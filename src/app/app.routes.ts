import { Routes } from '@angular/router';
import { RouteTracking } from './route-tracking/route-tracking';
import { Landing } from './landing/landing';

export const routes: Routes = [
    {path:'',component:Landing},
    {path:'routetracking',component:RouteTracking},
];
