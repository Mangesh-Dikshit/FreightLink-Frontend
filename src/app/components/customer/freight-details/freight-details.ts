import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';
import { Sidebar } from '../shared/sidebar/sidebar';

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
        status: params['status'],
        orderId: params['bookingId']
      }; 
    }); 
  }

  // Add this method
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
