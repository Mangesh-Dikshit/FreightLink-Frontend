export type ShipmentStatus = 'IN_TRANSIT' | 'DELIVERED';

export interface Shipment{
    shipmentId:number;
    bookingId:number;

    currentLocation:string;
    status:ShipmentStatus;

    lastUpdated: Date;

    routePath: string[];
    totalDistance: number;
    estimatedTime: string;
    price:number;

}