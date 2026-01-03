import { Injectable } from '@angular/core';
import { Shipment } from '../models/shipment.model';
import { Booking } from '../models/booking.model';
import { Graph } from '../graph/graph';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  private shipments:Shipment[] = [
    // {
    //   shipmentId:1,
    //   bookingId:1,
    //   currentLocation:"Pune",
    //   status:'IN_TRANSIT',
    //   routePath: ["Pune", "Mumbai",  "Nashik",  "Indore",  "Bhopal"],
    //   totalDistance:5000,
    //   estimatedTime:"12.9",
    //   price:15000,
    //   lastUpdated:new Date()
    // },
    // {
    //   shipmentId:2,
    //   bookingId:1,
    //   currentLocation:"Mumbai",
    //   status:'IN_TRANSIT',
    //   routePath: ["Mumbai",  "Nashik",  "Indore",  "Bhopal"],
    //   totalDistance:4300,
    //   estimatedTime:"24.0",
    //   price:13000,
    //   lastUpdated:new Date()
    // }
  ];
  private shipmentCounter = 1;

  constructor(private graph:Graph){}

  checkPoint:number  = 1;

  getAllShipments(){
    return this.shipments;
  }


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
    if(this.checkPoint === this.shipments[0].routePath[0].length){
      this.checkPoint = this.checkPoint - 1;
    }

    this.shipments[0].currentLocation = this.shipments[0].routePath[this.checkPoint++]
  }

  // getShipmentForCustomer(customerId:number){
  //   return this.shipments.filter(s =>)
  // }




  


}
