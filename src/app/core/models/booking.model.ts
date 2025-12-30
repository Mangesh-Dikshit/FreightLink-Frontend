export type FreightMode = 'ROAD' | 'RAIL' | 'SEA';
export type BookingStatus = 'BOOKED' | 'ASSIGNED' | 'CANCELLED';



export interface Booking{
  bookingId:number,
  customerId:number;

  mode: FreightMode;
  origin: string;
  destination: string;

  weight: number;

  status: BookingStatus;
}