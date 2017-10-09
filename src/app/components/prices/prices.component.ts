import { Component, OnInit } from '@angular/core';

import { Destinations, IDestination } from '../../classes/Destination';

@Component({
  selector: 'georgioupolis-taxi-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent {

	destinationsList: IDestination[];
  
    selectedDestination: IDestination;
  
    constructor(){
  
      this.destinationsList = Destinations.destinations;
      
      this.selectedDestination = Destinations.destinations[0];
  
    }
  
    public destinationSelected(dest: IDestination) {
      console.log('destinationSelected');
      if(dest)
        this.selectedDestination = dest;
  
    }

}
