import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports:[CommonModule,RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  isDetailsPage = false;

  /*constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isDetailsPage = this.router.url === '/details';
    });
  }*/
}
