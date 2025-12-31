import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-book-freight',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule,Header,Footer,Sidebar],
  templateUrl: './book-frieght.html',
  styleUrls: ['./book-frieght.css']
})
export class BookFreight {
  isSidebarOpen = true;
  places: string[] = ['Mumbai', 'Pune', 'Delhi', 'Chennai', 'Bangalore'];

  bookingData = {
    origin: '',
    destination: '',
    mode: '',
    weight: '',
    status: 'Confirmed'
  };

  constructor(private router: Router) {} 
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  private generateOrderId(): string {
     // Simple unique ID: prefix + timestamp + random number
      return 'ORD-' + Date.now() + '-' + Math.floor(Math.random() * 1000); 
    }
  submitBooking(form: any): void {
     if (form.valid) { 
      // Navigate to booking-details page with bookingData 
      const orderId = this.generateOrderId(); 
      this.router.navigate(['/freight-details'], { 
        queryParams: { ...this.bookingData, orderId } 
      });
      }
    }
}
