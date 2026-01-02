import { Component } from '@angular/core';


@Component({
 selector: 'app-invoice',
 templateUrl: './invoice.html',
 styleUrls: ['./invoice.css']
})

export class Invoice {

    name= 'Tejas';
    orderId= 'ORD0001';
    source= 'Pune';
    destination= 'Hyderabad';
    weight= '15 kg';
    price= '₹ 750';
}