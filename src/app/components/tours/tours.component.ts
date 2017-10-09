import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from '../../providers/data.service';

import { TourEmail, ITourData } from '../../classes/TourEmail';

@Component({
	selector: 'georgioupolis-taxi-tours',
	templateUrl: './tours.component.html',
	styleUrls: ['./tours.component.css']
})

export class ToursComponent {

	tourEmail: TourEmail;

	tourData: ITourData;

	destinations:string[];

	constructor(private dataService: DataService){

		this.tourData = {
				email: 'defaultEmail',
				message: 'deafaultMessage'
		};

		this.tourEmail = new TourEmail(this.dataService, this.tourData);

		console.log(this.tourEmail);

		this.dataService.getData("https://georgioupolis-taxi.firebaseio.com/destinations.json")
		.subscribe(
			data => {
				this.destinations = data as string[];
				console.log('destinations received: ' + this.destinations)
			}
		);

	}

	onSubmitMail(form: any){
		console.log(form);

    this.tourEmail.read(this.tourData);

    this.tourEmail.sendMail();

	}

}
