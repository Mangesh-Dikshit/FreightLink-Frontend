import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
 
@Component({
  selector: 'app-customer-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
 
  @Output() menuClick = new EventEmitter<void>();
 
  showUserActions = false;
 
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = (event as NavigationEnd).urlAfterRedirects;
 
        // ✅ Show Customer + Logout only for dashboard page
        this.showUserActions = url === '/' || url === '/dashboard';
      });
  }
 
  toggleSidebar() {
    this.menuClick.emit();
  }
 
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}