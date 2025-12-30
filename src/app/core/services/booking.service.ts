import { Injectable } from '@angular/core';
import { Booking,BookingStatus } from '../models/booking.model';
import { ShipmentService } from './shipment.service';

@Injectable({
  providedIn: 'root',
})
export class BookingService {


  private bookings: Booking[] = [];

 
  constructor(private shipmentService:ShipmentService) {}

  

  createBooking(data: Omit<Booking, 'bookingId' | 'status'>): Booking {
    const booking: Booking = {
      bookingId: this.bookings.length+1,
      status: 'BOOKED',
      ...data
    };
 
    this.bookings.push(booking);
 
    // ⬇ Automatically create shipment
    this.shipmentService.createShipmentFromBooking(booking);
 
    return booking;
  }
 

  getAllBookings(): Booking[] {
    return this.bookings;
  }
 

  getBookingById(id: number): Booking | undefined {
    return this.bookings.find(b => b.bookingId === id);
  }
 

  getBookingsByCustomer(customerId: number): Booking[] {
    return this.bookings.filter(b => b.customerId === customerId);
  }
 


  
 

  updateBookingStatus(id: number, newStatus: BookingStatus): void {
    const booking = this.getBookingById(id);

    if (booking) {
      booking.status = newStatus;
    }

  }
 
}
