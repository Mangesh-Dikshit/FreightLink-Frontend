import { Edge } from "../models/route.model"

export const IndianCities:Record<string,Edge[]>={
   Mumbai: [
    { to: 'Pune', distance: 150 },
    { to: 'Nashik', distance: 165 },
    { to: 'Ahmedabad', distance: 530 },
    { to: 'Surat', distance: 285 },
    {to:'Hyderabad',distance:100}
  ],
 
  Pune: [
    { to: 'Mumbai', distance: 150 },
    { to: 'Satara', distance: 110 },
    { to: 'Kolhapur', distance: 235 },
    { to: 'Bengaluru', distance: 840 }
  ],
 
  Nashik: [
    { to: 'Mumbai', distance: 165 },
    { to: 'Indore', distance: 420 },
    { to: 'Aurangabad', distance: 160 }
  ],
 
  Surat: [
    { to: 'Mumbai', distance: 285 },
    { to: 'Vadodara', distance: 155 }
  ],
 
  Ahmedabad: [
    { to: 'Mumbai', distance: 530 },
    { to: 'Vadodara', distance: 110 },
    { to: 'Jaipur', distance: 675 },
    { to: 'Udaipur', distance: 260 }
  ],
 
  Vadodara: [
    { to: 'Ahmedabad', distance: 110 },
    { to: 'Surat', distance: 155 },
    { to: 'Indore', distance: 375 }
  ],
 
  // SOUTH INDIA
  Bengaluru: [
    { to: 'Pune', distance: 840 },
    { to: 'Hyderabad', distance: 570 },
    { to: 'Chennai', distance: 350 },
    { to: 'Mysuru', distance: 145 }
  ],
 
  Chennai: [
    { to: 'Bengaluru', distance: 350 },
    { to: 'Vellore', distance: 140 },
    { to: 'Coimbatore', distance: 500 }
  ],
 
  Hyderabad: [
    { to: 'Bengaluru', distance: 570 },
    { to: 'Nagpur', distance: 500 },
    { to: 'Vijayawada', distance: 275 }
  ],
 
  Mysuru: [
    { to: 'Bengaluru', distance: 145 },
    { to: 'Mangaluru', distance: 255 }
  ],
 
  Coimbatore: [
    { to: 'Chennai', distance: 500 },
    { to: 'Kochi', distance: 190 }
  ],
 
  Kochi: [
    { to: 'Coimbatore', distance: 190 },
    { to: 'Thiruvananthapuram', distance: 210 }
  ],
 
  // CENTRAL INDIA
  Indore: [
    { to: 'Nashik', distance: 420 },
    { to: 'Vadodara', distance: 375 },
    { to: 'Bhopal', distance: 190 }
  ],
 
  Bhopal: [
    { to: 'Indore', distance: 190 },
    { to: 'Nagpur', distance: 355 }
  ],
 
  Nagpur: [
    { to: 'Hyderabad', distance: 500 },
    { to: 'Bhopal', distance: 355 },
    { to: 'Raipur', distance: 285 }
  ],
 
  Raipur: [
    { to: 'Nagpur', distance: 285 },
    { to: 'Visakhapatnam', distance: 560 }
  ],
 
  // NORTH INDIA
  Jaipur: [
    { to: 'Ahmedabad', distance: 675 },
    { to: 'Delhi', distance: 280 }
  ],
 
  Delhi: [
    { to: 'Jaipur', distance: 280 },
    { to: 'Agra', distance: 230 },
    { to: 'Chandigarh', distance: 245 },
    { to: 'Lucknow', distance: 555 }
  ],
 
  Agra: [
    { to: 'Delhi', distance: 230 },
    { to: 'Kanpur', distance: 280 }
  ],
 
  Lucknow: [
    { to: 'Delhi', distance: 555 },
    { to: 'Kanpur', distance: 90 },
    { to: 'Patna', distance: 530 }
  ],
 
  Chandigarh: [
    { to: 'Delhi', distance: 245 },
    { to: 'Amritsar', distance: 230 }
  ],
 
  Amritsar: [
    { to: 'Chandigarh', distance: 230 }
  ],
 
  // EAST INDIA
  Patna: [
    { to: 'Lucknow', distance: 530 },
    { to: 'Kolkata', distance: 585 }
  ],
 
  Kolkata: [
    { to: 'Patna', distance: 585 },
    { to: 'Bhubaneswar', distance: 440 },
    { to: 'Guwahati', distance: 1000 }
  ],
 
  Bhubaneswar: [
    { to: 'Kolkata', distance: 440 },
    { to: 'Visakhapatnam', distance: 445 }
  ],
 
  Visakhapatnam: [
    { to: 'Bhubaneswar', distance: 445 },
    { to: 'Raipur', distance: 560 }
  ],
 
  // NORTH EAST
  Guwahati: [
    { to: 'Kolkata', distance: 1000 },
    { to: 'Shillong', distance: 100 }
  ],
 
  Shillong: [
    { to: 'Guwahati', distance: 100 }
  ]
}
