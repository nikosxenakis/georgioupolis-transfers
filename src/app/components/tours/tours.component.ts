import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from '../../providers/dataService/data.service';

import { TourEmail, ITourData } from '../../classes/TourEmail';

@Component({
	selector: 'georgioupolis-taxi-tours',
	templateUrl: './tours.component.html',
	styleUrls: ['./tours.component.css']
})

export class ToursComponent {

	tourEmail: TourEmail;


	tourData: ITourData;
	



	constructor(private dataService: DataService/*, private modalService: BsModalService*/){

		this.tourData = {
				email: 'defaultEmail',
				message: 'deafaultMessage'
		};

		this.tourEmail = new TourEmail(this.dataService, this.tourData);

		console.log(this.tourEmail);



	}

	onSubmitMail(form: any){
		console.log(form);

    this.tourEmail.read(this.tourData);

    this.tourEmail.sendMail();

	}

}
