import { Component } from '@angular/core';
import { Shipment } from '../core/models/shipment.model';
import { ShipmentService } from '../core/services/shipment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-route-tracking',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-route-tracking.html',
  styleUrl: './admin-route-tracking.css',
})
export class AdminRouteTracking {

  adminShipment?:Shipment;

  constructor(private shipmentService:ShipmentService){}

  ngOnInit(id:number):void{
    this.loadComponent(1);
  }

  loadComponent(bookingId:number){
    this.adminShipment=this.shipmentService.getShipmentByBooking(bookingId);
  }

  nextCheckpoint(){
    this.shipmentService.nextCheckpoint();
  }

}
