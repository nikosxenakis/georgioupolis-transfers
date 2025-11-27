import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DataService } from '../../providers/dataService/data.service';
import { Phrases, IPhrasesDictionary } from '../../providers/translate/phrases';

import { IDestination } from '../../classes/Destination';

@Component({
  selector: 'georgioupolis-taxi-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.less'],
  standalone: true
})
export class PricesComponent {

  destinationsChaniaDetails: IDestination[];
  destinationsHeraklionDetails: IDestination[];

  data: IPhrasesDictionary;

  constructor(private dataService: DataService){

    this.data = Phrases.getPhrasesDictionary();
      
    this.destinationsChaniaDetails = new Array<IDestination>();
    this.destinationsHeraklionDetails = new Array<IDestination>();
    
    this.destinationsChaniaDetails = [
      {"destination":"Chania city","distance":14,"duration":20,"price":20},
      {"destination":"kalives","distance":28,"duration":31,"price":40},
      {"destination":"Almirida","distance":32,"duration":37,"price":45},
      {"destination":"Vamos","distance":35,"duration":41,"price":48},
      {"destination":"Kefalas","distance":40,"duration":50,"price":55},
      {"destination":"Vrises","distance":39,"duration":40,"price":55},
      {"destination":"Georgioupolis","distance":45,"duration":59,"price":65},
      {"destination":"Kavros","distance":49,"duration":47,"price":70},
      {"destination":"Lake of Kournas","distance":50,"duration":51,"price":70},
      {"destination":"Rethymno","distance":69,"duration":69,"price":90},
      {"destination":"Plakias","distance":97,"duration":98,"price":105},
      {"destination":"Sfakia","distance":104,"duration":154,"price":110},
      {"destination":"Heraklion city","distance":147,"duration":130,"price":185},
    ];
    
    this.destinationsHeraklionDetails = [
      {"destination":"Rethymno","distance":82,"duration":73,"price":95},
      {"destination":"Georgioupolis","distance":103,"duration":89,"price":120},
      {"destination":"Kavros","distance":100,"duration":82,"price":125},
      {"destination":"Lake of Kournas","distance":106,"duration":90,"price":128},
      {"destination":"Vrises","distance":110,"duration":91,"price":130},
      {"destination":"Vamos","distance":114,"duration":101,"price":133},
      {"destination":"Plakias","distance":114,"duration":104,"price":135},
      {"destination":"Kefalas","distance":116,"duration":105,"price":135},
      {"destination":"kalives","distance":123,"duration":102,"price":150},
      {"destination":"Almirida","distance":127,"duration":108,"price":155},
      {"destination":"Chania city","distance":142,"duration":123,"price":180},
      {"destination":"Sfakia","distance":173,"duration":203,"price":225},
    ];
    /*
    this.dataService.getData("https://georgioupolis-taxi.firebaseio.com/destinationDetails.json")
    .subscribe(
      data => {
        console.log(data);
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            var val = data[key];
            let destinationDetails: IDestination = {
              destination: key,
              distance: val.distance,
              price: val.price,
              duration: val.duration
            };
            this.destinationsDetails.push(destinationDetails);
          }
        }
        console.log(this.destinationsDetails);
      }
    );
    */
  }

  @Output() destinationEvent = new EventEmitter<any>();

  ngOnInit (){
    // Animation now handled by directive in template
  }

  bookTransfer(airport: string, dest: IDestination){
    this.destinationEvent.emit({
      airport: airport,
      destination: dest.destination
    });

  }

}