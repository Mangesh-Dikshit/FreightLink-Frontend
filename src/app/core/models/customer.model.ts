export interface Customer{
  customerId:number;
  name:string;
  email:string;
  contact:string;
  role: 'CUSTOMER' | 'ADMIN'
  preferredMode: 'ROAD' | 'RAIL' | 'SEA';
  accountStatus: 'ACTIVE' | 'INACTIVE';
}