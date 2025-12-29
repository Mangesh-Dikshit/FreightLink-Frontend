import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Landing } from './landing/landing';
import { RouteTracking } from './route-tracking/route-tracking';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Landing,RouteTracking],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FreightLink-Frontend');
}
