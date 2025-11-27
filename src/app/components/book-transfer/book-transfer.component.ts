import { Component, TemplateRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ModalModule } from 'ngx-bootstrap/modal';

import { DataService } from '../../providers/dataService/data.service';
import { Phrases, IPhrasesDictionary } from '../../providers/translate/phrases';

import { BookTransferEmail, IBookTransferData } from '../../classes/BookTransferEmail';


interface IBookTransferModel {
	firstName: string;
	lastName: string;
	email: string;
	noPeople: string;
	babySheat: string;
	comments: string;
	date: Date;
	time: Date;
	meetingPoint: string;
	destination: string;
}

@Component({
	selector: 'georgioupolis-taxi-book-transfer',
	templateUrl: './book-transfer.component.html',
	styleUrls: ['./book-transfer.component.less'],
	standalone: true,
	imports: [CommonModule, FormsModule, BsDatepickerModule, TimepickerModule, TypeaheadModule, ModalModule]
})

export class BookTransferComponent {

	data: IPhrasesDictionary;
	
	bookTransferModel: IBookTransferModel;
	
	bookTransferData: IBookTransferData;
	
	bookTransferEmail: BookTransferEmail;
	
	minDate: Date = new Date();
	maxDate: Date = new Date();

	myForm: any;

	destinations:string[];
	
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

	bsConfig: Partial<BsDatepickerConfig>;

	constructor(private dataService: DataService){

		this.destinations = [
			"Kalives",
			"Kefalas",
			"Vrises",
			"Kavros",
			"Lake of Kournas",
			"Chania city",
			"Chania airport CHQ",
			"Heraklion city",
			"Heraklion airport HER",
			"Sfakia",
			"Vamos",
			"Rethymno",
			"Plakias",
			"Almirida",
			"Georgioupolis"
		];
		/*
		this.dataService.getData("https://georgioupolis-taxi.firebaseio.com/destinations.json")
		.subscribe(
			data => {
				this.destinations = data as string[];
				console.log('destinations received: ' + this.destinations)
			}
		);
		*/
		this.data = Phrases.getPhrasesDictionary();

		this.bsConfig = Object.assign({}, {containerClass: null});
		
		// Set min date to today, max date to 120 days from now
		this.minDate.setDate(this.minDate.getDate());
		this.maxDate.setDate(this.maxDate.getDate() + 120);

		// Set default date to tomorrow
		const defaultDate = new Date();
		defaultDate.setDate(defaultDate.getDate() + 1);

		// Set default time to 9:00 AM
		const defaultTime = new Date();
		defaultTime.setHours(9, 0, 0, 0);

		this.bookTransferModel = {
			firstName: '',
			lastName: '',
			email: '',
			noPeople: '',
			babySheat: this.babySheatOptions[1].value,
			comments: '',
			date: defaultDate,
			time: defaultTime,
			meetingPoint: '',
			destination: ''
		};

		//console.log(this.myForm);
	}

	ngOnInit (){
		// Animation now handled by directive in template
	}
	
	setDestination(obj: any){
		this.bookTransferModel.meetingPoint = obj.airport;
		this.bookTransferModel.destination = obj.destination;
	}

	onSubmitMail(form: any){

		this.bookTransferData = {
			firstName: this.bookTransferModel.firstName,
			lastName: this.bookTransferModel.lastName,
			email: this.bookTransferModel.email,
			noPeople: this.bookTransferModel.noPeople,
			babySheat: this.bookTransferModel.babySheat,
			comments: this.bookTransferModel.comments,
			date: this.bookTransferModel.date.toLocaleDateString(),
			time: this.bookTransferModel.time.getHours() + ":"+ this.bookTransferModel.time.getMinutes(),
			meetingPoint: this.bookTransferModel.meetingPoint,
			destination: this.bookTransferModel.destination
		};

		this.bookTransferEmail = new BookTransferEmail(this.dataService, this.bookTransferData);
		
		console.log(this.bookTransferEmail);

		this.bookTransferEmail.sendMail();
	}
}
