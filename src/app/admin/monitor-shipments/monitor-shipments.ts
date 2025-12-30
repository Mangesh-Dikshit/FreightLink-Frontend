import { Component } from '@angular/core';
import { Footer } from "../shared/footer/footer";
import { Header } from '../shared/header/header';
import { Sidebar } from '../shared/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Shipment } from '../../core/models/shipment.model';
import { ShipmentService } from '../../core/services/shipment.service';


@Component({
  selector: 'app-monitor-shipments',
  imports: [Footer,Header,Sidebar,CommonModule,FormsModule],
  templateUrl: './monitor-shipments.html',
  styleUrl: './monitor-shipments.css',
})
export class MonitorShipments {
  // controls sidebar open / close
  isSidebarOpen = true;
 
  // called when hamburger icon is clicked
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  
  shipments?:Shipment[];

  constructor(private shipmentService:ShipmentService){}

  ngOnInit():void{
    this.loadComponent();
  }

  loadComponent(){
    this.shipments = this.shipmentService.getAllShipments()
  }

  nextCheckpoint(){
    this.shipmentService.nextCheckpoint();
  }




}
