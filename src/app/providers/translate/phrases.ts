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
	creteGreece: string;
	myName: string;
	copyrightsReserved: string;
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
		'creteGreece': '',
		'myName': '',
		'copyrightsReserved': ''
		
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