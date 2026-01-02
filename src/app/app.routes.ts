import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Invoice } from './invoice/invoice';


export const routes: Routes = [
    {path: '', redirectTo: 'landing', pathMatch: 'full'},
    {path: 'landing', component: Landing},
    {path: 'invoice', component: Invoice},
    
];
