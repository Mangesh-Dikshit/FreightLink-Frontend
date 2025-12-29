import { Injectable } from '@angular/core';
import { Edge } from '../models/route.model';
import { RouteResult } from '../models/route.model';
import { IndianCities } from './indianCities';



@Injectable({
  providedIn: 'root',
})
export class Graph {

  private graph = IndianCities;

  getCities():string[]{
    return Object.keys(this.graph);
  }

  getRoute(source:string,destination:string):RouteResult{
    return this.dijkstra(source,destination);
  }



  private dijkstra(source:string,destination:string):RouteResult{
    const distances: Record<string, number> = {};

    const previous: Record<string, string | null> = {};

    const visited = new Set<string>();
 
    // Init

    Object.keys(this.graph).forEach(city => {

      distances[city] = Infinity;

      previous[city] = null;

    });
 
    distances[source] = 0;
 
    while (visited.size < Object.keys(this.graph).length) {
 
      const current = Object.keys(distances)

        .filter(city => !visited.has(city))

        .reduce((a, b) => distances[a] < distances[b] ? a : b);
 
      if (current === destination) break;
 
      visited.add(current);
 
      this.graph[current].forEach(edge => {

        const newDistance = distances[current] + edge.distance;

        if (newDistance < distances[edge.to]) {

          distances[edge.to] = newDistance;

          previous[edge.to] = current;

        }

      });

    }
 
    const route = this.buildRoute(previous, destination);

    const totalDistance = distances[destination];
 
    return {

      route,

      totalDistance,

      estimatedTime: this.calculateTime(totalDistance),

      price: this.calculatePrice(totalDistance)

    };

  }
 
  private buildRoute(previous: Record<string, string | null>, destination: string): string[] {

    const path: string[] = [];

    let current: string | null = destination;
 
    while (current) {

      path.unshift(current);

      current = previous[current];

    }

    return path;

  }
 
  // ---------------- Business Logic ----------------

  private calculateTime(distance: number): string {

    const avgSpeed = 50; // km/hr

    const hours = distance / avgSpeed;

    return hours < 24

      ? `${hours.toFixed(1)} hours`

      : `${(hours / 24).toFixed(1)} days`;

  }
 
  private calculatePrice(distance: number): number {

    const ratePerKm = 15; // ₹ per km

    return Math.round(distance * ratePerKm);

  }
 
  }








