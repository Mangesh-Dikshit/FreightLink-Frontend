import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-book-freight',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './book-frieght.html',
  styleUrls: ['./book-frieght.css']
})
export class BookFreight {
  places: string[] = ['Mumbai', 'Pune', 'Delhi', 'Chennai', 'Bangalore'];

  bookingData = {
    origin: '',
    destination: '',
    mode: '',
    weight: '',
    status: 'Confirmed'
  };

  constructor(private router: Router) {} 
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
