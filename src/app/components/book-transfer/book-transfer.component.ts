import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from '../../providers/data.service';

import { BookTransferEmail, IBookTransferData } from '../../classes/BookTransferEmail';

@Component({
	selector: 'georgioupolis-taxi-book-transfer',
	templateUrl: './book-transfer.component.html',
	styleUrls: ['./book-transfer.component.css']
})

export class BookTransferComponent {

	bookTransferEmail: BookTransferEmail;
	
	bookTransferData: IBookTransferData;

	date: Date = new Date();
	
	babySheatOptions = [
		{ value: 'yes', display: 'Yes', checked:'false' },
		{ value: 'no', display: 'No', checked:'true' }
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

		console.log(this.date.toLocaleDateString());
		console.log(this.date.getUTCMonth() );
		console.log(this.date.getMonth() );
		
		console.log(this.date.getDate());
		console.log(this.date.getUTCDay());
		
		console.log(this.date.getFullYear());
		
		//this.myDate = this.mytime.toLocaleDateString();

		this.bookTransferData = {
			firstName: '',
			lastName: '',
			email: '',
			noPeople: '',
			babySheat: '',
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
