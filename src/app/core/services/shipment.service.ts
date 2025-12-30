import { Injectable } from '@angular/core';
import { Shipment } from '../models/shipment.model';
import { Booking } from '../models/booking.model';
import { Graph } from '../graph/graph';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  private shipments:Shipment[] = [];
  private shipmentCounter = 1;

  constructor(private graph:Graph){}

  checkPoint:number  = 1;


  createShipmentFromBooking(booking: Booking):Shipment{
    const routeResult = this.graph.getRoute(booking.origin,booking.destination);

    

    const shipment: Shipment={
      shipmentId: this.shipmentCounter++,
      bookingId:booking.bookingId,
      currentLocation: booking.origin,
      status:'IN_TRANSIT',
      routePath:routeResult.route,
      totalDistance:routeResult.totalDistance,
      estimatedTime:routeResult.estimatedTime,
      price:routeResult.price,
      lastUpdated:new Date()

    };

    this.shipments.push(shipment);
    return shipment;




  }

  getShipmentByBooking(bookingId:number){
    return this.shipments.find(s => s.bookingId === bookingId);
  }

  nextCheckpoint(){
    this.shipments[0].currentLocation = this.shipments[0].routePath[this.checkPoint++]
  }

  // getShipmentForCustomer(customerId:number){
  //   return this.shipments.filter(s =>)
  // }




  


}
