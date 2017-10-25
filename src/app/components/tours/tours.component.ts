import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from '../../providers/dataService/data.service';
import { Phrases, IPhrasesDictionary } from '../../providers/translate/phrases';

import { TourEmail, ITourData } from '../../classes/TourEmail';

@Component({
	selector: 'georgioupolis-taxi-tours',
	templateUrl: './tours.component.html',
	styleUrls: ['./tours.component.css','../book-transfer/book-transfer.component.less']
})

export class ToursComponent {

	data: IPhrasesDictionary;

	tourEmail: TourEmail;

	tourData: ITourData;

	toursForm: any;

	constructor(private dataService: DataService/*, private modalService: BsModalService*/){

		this.tourData = {
			email: '',
			message: ''
		};

		this.data = Phrases.getPhrasesDictionary();

		this.tourEmail = new TourEmail(this.dataService, this.tourData);

	}

	onSubmitMail(form: any){
		
		console.log(form);
		this.tourEmail.read(this.tourData);
		this.tourEmail.sendMail();

	}

}
