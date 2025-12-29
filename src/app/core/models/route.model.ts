export interface Edge{
    to:string;
    distance:number;
}

export interface RouteResult{
    route:string[];
    totalDistance:number;
    estimatedTime:string;
    price:number;
}