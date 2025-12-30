import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-freight-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './freight-details.html',
  styleUrls: ['./freight-details.css'],
})
export class FreightDetails {
  bookingData: any = {};

  constructor(private route: ActivatedRoute) {
     // Read booking data from query params 
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
}
