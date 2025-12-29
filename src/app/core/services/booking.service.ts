import { Injectable } from '@angular/core';
import { Booking,BookingStatus } from '../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {


  private bookings: Booking[] = [
    {
      bookingId: 1,
      customerId: 1,
      mode: 'ROAD',
      origin: 'Pune',
      destination: 'Mumbai',
      status: 'BOOKED',
    },
    {
      bookingId: 2,
      customerId: 2,
      mode: 'RAIL',
      origin: 'Delhi',
      destination: 'Jaipur',
      status: 'BOOKED',
    }
  ];
 
  constructor() {}
 

  getAllBookings(): Booking[] {
    return this.bookings;
  }
 

  getBookingById(id: number): Booking | undefined {
    return this.bookings.find(b => b.bookingId === id);
  }
 

  getBookingsByCustomer(customerId: number): Booking[] {
    return this.bookings.filter(b => b.customerId === customerId);
  }
 


  addBooking(booking: Booking): void {
    booking.bookingId = this.bookings.length + 1;
    booking.status = 'BOOKED';
    this.bookings.push(booking);
  }
 

  updateBookingStatus(id: number, newStatus: BookingStatus): void {
    const booking = this.getBookingById(id);

    if (booking) {
      booking.status = newStatus;
    }

  }
 
}
