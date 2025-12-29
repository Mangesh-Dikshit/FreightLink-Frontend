import { Component } from '@angular/core';
import { Graph } from '../core/graph/graph';
import { RouteResult } from '../core/models/route.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route-tracking',
  imports: [FormsModule,CommonModule],
  templateUrl: './route-tracking.html',
  styleUrl: './route-tracking.css',
})
export class RouteTracking {
  cities:string[]=[];
  source:string='';
  destination:string='';

  routeResult?:RouteResult;

  constructor(private graph:Graph){}

  ngOnInit():void{
    this.cities = this.graph.getCities();
  }

  isRouteVisible:boolean = false;
  
  calculateRoute(){
    this.isRouteVisible = true;
    this.routeResult = this.graph.getRoute(this.source,this.destination);
    // console.log(this.routeResult);
  }

  

}
