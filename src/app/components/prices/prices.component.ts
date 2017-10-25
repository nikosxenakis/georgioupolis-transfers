import { Component, OnInit } from '@angular/core';

import { DataService } from '../../providers/dataService/data.service';
import { Phrases, IPhrasesDictionary } from '../../providers/translate/phrases';
import { Inject, InjectionToken } from '@angular/core';
import { AosToken } from '../../providers/aos';

import { IDestination } from '../../classes/Destination';

@Component({
  selector: 'georgioupolis-taxi-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.less']
})
export class PricesComponent {

  destinationsDetails: IDestination[];

  data: IPhrasesDictionary;
  aos: any;

  constructor(private dataService: DataService, @Inject(AosToken) aos){

    this.data = Phrases.getPhrasesDictionary();
    this.aos = aos;
      
    this.destinationsDetails = new Array<IDestination>();

    this.destinationsDetails = [
      {"destination":"kalives","distance":0,"duration":0,"price":25},
      {"destination":"Kefalas","distance":0,"duration":0,"price":20},
      {"destination":"Vrises","distance":0,"duration":0,"price":10},
      {"destination":"Kavros","distance":0,"duration":0,"price":8},
      {"destination":"Lake of Kournas","distance":0,"duration":0,"price":7},
      {"destination":"Chania city","distance":0,"duration":0,"price":50},
      {"destination":"Chania airport CHQ","distance":0,"duration":0,"price":60},
      {"destination":"Heraklion city","distance":0,"duration":0,"price":120},
      {"destination":"Heraklion airport HER","distance":0,"duration":0,"price":120},
      {"destination":"Sfakia","distance":0,"duration":0,"price":60},
      {"destination":"Vamos","distance":0,"duration":0,"price":17},
      {"destination":"Rethymno","distance":0,"duration":0,"price":30},
      {"destination":"Plakias","distance":0,"duration":0,"price":60},
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

  ngOnInit (){
    this.aos.init({
      easing: "ease-in-out-sine"
    });
  }

}
