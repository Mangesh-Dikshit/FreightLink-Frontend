import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-freight-details',
  standalone: true,
  imports: [CommonModule,RouterModule,Header,Footer,Sidebar],
  templateUrl: './freight-details.html',
  styleUrls: ['./freight-details.css'],
})
export class FreightDetails {
  
 
  isSidebarOpen = true; 
  bookingData: any = {};

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => { 
      this.bookingData = {
        mode: params['mode'],
        origin: params['origin'], 
        destination: params['destination'], 
        weight: params['weight'],
        status: params['status'] || 'Confirmed',
        orderId: params['orderId']
      }; 
    }); 
  }

  // Add this method
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
