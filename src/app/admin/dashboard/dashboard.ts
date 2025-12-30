import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';
import { Sidebar } from '../shared/sidebar/sidebar';

 
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Header,
    Footer,
    Sidebar,
    RouterModule
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
 
  // controls sidebar open / close
  isSidebarOpen = true;
 
  // called when hamburger icon is clicked
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
 