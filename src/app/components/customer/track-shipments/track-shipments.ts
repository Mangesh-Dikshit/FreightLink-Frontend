import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShipmentService } from '../../../core/services/shipment.service';
import { Shipment } from '../../../core/models/shipment.model';

import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';
import { Sidebar } from '../shared/sidebar/sidebar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-track-shipments',
  imports: [FormsModule, CommonModule, Header, Footer, Sidebar, RouterLink],
  templateUrl: './track-shipments.html',
  styleUrl: './track-shipments.css',
})
export class TrackShipments {

  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    localStorage.clear();
    window.location.href = '/';
  }



  shipment?:Shipment;

  constructor(private shipmentService:ShipmentService){}

  ngOnInit():void{
    this.loadShipment(1);
  }

  loadShipment(bookingId:number){
    this.shipment = this.shipmentService.getShipmentByBooking(bookingId);
  }
}
