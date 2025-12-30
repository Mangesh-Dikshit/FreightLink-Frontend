import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../shared/sidebar/sidebar';
 
interface Booking {
  id: string;
  origin: string;
  destination: string;
  carrierId?: number;
}
 
interface Carrier {
  id: number;
  name: string;
}
 
@Component({
  selector: 'app-assign-carriers',
  standalone: true,
  imports: [Header, Footer,FormsModule,CommonModule,Sidebar],
  templateUrl: './assign-carriers.html',
  styleUrls: ['./assign-carriers.css']
})
export class AssignCarriers {

  bookings: Booking[] = [
    { id: 'B101', origin: 'Pune', destination: 'Mumbai' },
    { id: 'B102', origin: 'Hyderabad', destination: 'Chennai' },
    { id: 'B103', origin: 'Bangalore', destination: 'Mysore' }
  ];
 

  carriers: Carrier[] = [
    { id: 1, name: 'BlueDart' },
    { id: 2, name: 'DTDC' },
    { id: 3, name: 'Delhivery' }
  ];
 
  assignCarrier(booking: Booking) {
    if (!booking.carrierId) {
      alert('Please select a carrier');
      return;
    }
 

    alert(`Carrier assigned for Booking ${booking.id}`);
 
    
    this.bookings = this.bookings.filter(b => b.id !== booking.id);
  }
  
  isSidebarOpen = true;
 
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
}