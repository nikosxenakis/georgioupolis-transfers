import { Component, TemplateRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Inject, InjectionToken } from '@angular/core';

import { DataService } from '../../providers/dataService/data.service';
import { Phrases, IPhrasesDictionary } from '../../providers/translate/phrases';
import { AosToken } from '../../providers/aos';

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
	styleUrls: ['./book-transfer.component.less']
})

export class BookTransferComponent {

	data: IPhrasesDictionary;
	
	bookTransferModel: IBookTransferModel;
	
	bookTransferData: IBookTransferData;
	
	bookTransferEmail: BookTransferEmail;
	
	minDate: Date = new Date();
	maxDate: Date = new Date();

	myForm: any;

	aos: any;
	
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

	constructor(private dataService: DataService, @Inject(AosToken) aos){

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
		this.aos = aos;

		this.bsConfig = Object.assign({}, {containerClass: null});
		
		this.minDate.setDate(this.minDate.getDate() + 0);
		this.maxDate.setDate(this.maxDate.getDate() + 120);

		this.bookTransferModel = {
			firstName: '',
			lastName: '',
			email: '',
			noPeople: '',
			babySheat: this.babySheatOptions[1].value,
			comments: '',
			date: new Date(),
			time: new Date(),
			meetingPoint: '',
			destination: ''
		};

		//console.log(this.myForm);
	}

	ngOnInit (){
		this.aos.init({
			easing: "ease-in-out-sine"
		});
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
