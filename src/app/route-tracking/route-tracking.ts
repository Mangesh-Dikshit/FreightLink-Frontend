import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShipmentService } from '../core/services/shipment.service';

import { Shipment } from '../core/models/shipment.model';

@Component({
  selector: 'app-route-tracking',
  imports: [FormsModule,CommonModule],
  templateUrl: './route-tracking.html',
  styleUrl: './route-tracking.css',
})
export class RouteTracking {
  

  shipment?:Shipment;

  constructor(private shipmentService:ShipmentService){}

  ngOnInit():void{
    this.loadShipment(1);
  }

  loadShipment(bookingId:number){
    this.shipment = this.shipmentService.getShipmentByBooking(bookingId);
  }


  

}
