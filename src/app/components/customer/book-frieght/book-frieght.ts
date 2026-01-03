import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Graph } from '../../../core/graph/graph';
import { RouteResult } from '../../../core/models/route.model';
import { Booking } from '../../../core/models/booking.model';
import { FreightMode } from '../../../core/models/booking.model';
import { BookingService } from '../../../core/services/booking.service';

import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';
import { Sidebar } from '../shared/sidebar/sidebar';

@Component({
  selector: 'app-book-freight',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, Header, Footer, Sidebar],
  templateUrl: './book-frieght.html',
  styleUrls: ['./book-frieght.css'],
})
export class BookFreight {
  isSidebarOpen = true;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  cities: string[] = [];

  constructor(
    private graph: Graph,
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cities = this.graph.getCities();
  }


  submitBooking(form: NgForm): void {
    console.log(form.value);
    const bookingData = {
      customerId: 1,
      mode: form.value.mode,
      origin: form.value.origin,
      destination: form.value.destination,
      weight: form.value.weight,
    };

    const booking = this.bookingService.createBooking(bookingData);

    // this.router.navigate(['/']);

    this.router.navigate(['/freight-details'],{
      queryParams: {...booking}
    });
  }
}
