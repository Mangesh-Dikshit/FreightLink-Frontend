import { Routes } from '@angular/router';
import { Dashboard } from './admin/dashboard/dashboard';
import { AssignCarriers } from './admin/assign-carriers/assign-carriers';

 
export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path:'assign-carriers',
    component: AssignCarriers
  },
  
];
 