import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from '../../providers/dataService/data.service';

import { BookTransferEmail, IBookTransferData } from '../../classes/BookTransferEmail';

@Component({
	selector: 'georgioupolis-taxi-book-transfer',
	templateUrl: './book-transfer.component.html',
	styleUrls: ['./book-transfer.component.less']
})

export class BookTransferComponent {

	bookTransferEmail: BookTransferEmail;
	
	bookTransferData: IBookTransferData;

	date: Date = new Date();
	minDate: Date = new Date();
	maxDate: Date = new Date();
	
	myForm: any;

	public destinations:string[];
	
	public selected:string;
	
	babySheatOptions = [
		{ value: 'yes', display: 'Yes' },
		{ value: 'no', display: 'No' }
	];

	noPeopleOptions = [
		{ value: '1', display: '1' },
		{ value: '2', display: '2' },
		{ value: '3', display: '3' },
		{ value: '4', display: '4' },
		{ value: '5', display: '5' },
		{ value: '6', display: '6' },
		{ value: '7', display: '7' },
		{ value: '8', display: '8' }	
	];

	constructor(private dataService: DataService){


		this.minDate.setDate(this.minDate.getDate() + 0);
		this.maxDate.setDate(this.maxDate.getDate() + 120);

		console.log(this.myForm);

		console.log(this.date.toLocaleDateString());
		console.log(this.date.getUTCMonth() );
		console.log(this.date.getMonth() );
		
		console.log(this.date.getDate());
		console.log(this.date.getUTCDay());
		
		console.log(this.date.getFullYear());
				
		//this.myDate = this.mytime.toLocaleDateString();

		this.dataService.getData("https://georgioupolis-taxi.firebaseio.com/destinations.json")
		.subscribe(
			data => {
				this.destinations = data as string[];
				console.log('destinations received: ' + this.destinations)
			}
		);

		this.bookTransferData = {
			firstName: '',
			lastName: '',
			email: '',
			noPeople: 'Select an option',
			babySheat: this.babySheatOptions[1].value,
			comments: '',
			date: '',
			time: '',
		};

		this.bookTransferEmail = new BookTransferEmail(this.dataService, this.bookTransferData);
		
		console.log(this.bookTransferEmail);

	}


	onSubmitMail(form: any){
		console.log(form);
		/*
		let myDate = form.date.toLocaleDateString();
		let myTime = form.date.getHours() + " : " + form.getMinutes();
		
		console.log('Date = ' + myDate);
		console.log('Time = ' + myTime);
		*/
		this.bookTransferEmail.read(this.bookTransferData);
	
		this.bookTransferEmail.sendMail();

	}

}
