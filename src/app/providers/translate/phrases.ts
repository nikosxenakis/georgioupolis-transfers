import { TranslateService } from '../../providers/translate/translate.service';

export interface IPhrasesDictionary {
	title: string;
	home: string;
	bookTransfer: string;
	tours: string;
	about: string;
	language: string;
	english: string;
	greek: string;
	search: string;
	description: string;
	georgioupolis: string;
	footerDescription: string;
	creteGreece: string;
	myName: string;
	copyrightsReserved: string;
	prices: string;
	motoString: string;
	indexCarouselTitle1: string;
	indexCarouselDescription1: string;
	indexCarouselTitle2: string;
	indexCarouselDescription2: string;
	indexCarouselTitle3: string;
	indexCarouselDescription3: string;
	indexCarouselTitle4: string;
	indexCarouselDescription4: string;
	bookTransferDescription: string;
	personalInfo: string;
	firstName: string;
	lastName: string;
	email: string;
	invalidFirstName: string;
	enterFirstName: string;
	invalidLastName: string;
	enterLastName: string;
	invalidEmail: string;
	enterEmail: string;
	passengersDetails: string;
	passengers: string;
	select: string;
	babySheat: string;
	tripDetails: string;
	meetingPoint: string;
	time: string;
	date: string;
	bookTransferMessage: string,
	firstNamePlaceholder: string,
	lastNamePlaceholder: string,
	emailPlaceholder: string,
	meetingPoingPlaceholder: string,
	destinationPlaceholder: string,
	datePlaceholder: string,
	destination: string,
	priceTable: string,
	priceTableDescription: string,
	bookNow: string,
	priceEuros: string,
	distanceKm: string,
	durationHours: string,
	priceTableDetails: string,
	comments: string,
	toursDescription: string,
	chaniaPriceTableTitle: string,
	heraklionPriceTableTitle: string,
};

export module Phrases{

	export var _translate: TranslateService = null;

	export var phrasesDictionary = {
		'title': '',
		'home': '',
		'bookTransfer': '',
		'tours': '',
		'about': '',
		'language': '',
		'english': '',
		'greek': '',
		'search': '',
		'description': '',
		'georgioupolis': '',
		'footerDescription': '',
		'creteGreece': '',
		'myName': '',
		'copyrightsReserved': '',
		'prices': '',
		'motoString': '',
		'indexCarouselTitle1': '',
		'indexCarouselDescription1': '',
		'indexCarouselTitle2': '',
		'indexCarouselDescription2': '',
		'indexCarouselTitle3': '',
		'indexCarouselDescription3': '',
		'indexCarouselTitle4': '',
		'indexCarouselDescription4': '',
		'bookTransferDescription': '',
		'personalInfo': '',
		'firstName': '',
		'lastName': '',
		'email': '',
		'invalidFirstName': '',
		'enterFirstName': '',
		'invalidLastName': '',
		'enterLastName': '',
		'invalidEmail': '',
		'enterEmail': '',
		'passengersDetails': '',
		'passengers': '',
		'select': '',
		'babySheat': '',
		'tripDetails': '',
		'meetingPoint': '',
		'destination': '',
		'time': '',
		'date': '',
		'bookTransferMessage': '',
		'firstNamePlaceholder': '',
		'lastNamePlaceholder': '',
		'emailPlaceholder': '',
		'meetingPoingPlaceholder': '',
		'destinationPlaceholder': '',
		'datePlaceholder': '',
		'priceTable': '',
		'priceTableDescription': '',
		'bookNow': '',
		'priceEuros': '',
		'distanceKm': '',
		'durationHours': '',
		'priceTableDetails': '',
		'comments': '',
		'toursDescription': '',
		'chaniaPriceTableTitle': '',
		'heraklionPriceTableTitle': '',
	};

	export function setTranslateService(translate: TranslateService) {
		Phrases._translate = translate;		
	}

	export function refreshText() {
		for (let key in Phrases.phrasesDictionary) {
			Phrases.phrasesDictionary[key] = Phrases._translate.instant(key);
		}
	}

	export function getPhrasesDictionary(){
		return Phrases.phrasesDictionary;
	}

	export function get(key: string){
		return Phrases.phrasesDictionary[key];
	}
}