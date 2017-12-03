import { Component, OnInit, ViewChild } from '@angular/core';

import { TranslateService } from '../../providers/translate/translate.service';
import { Phrases } from '../../providers/translate/phrases';

@Component({
  selector: 'georgioupolis-taxi-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  constructor(private _translate: TranslateService) {
    
    Phrases.setTranslateService(this._translate);
    Phrases.refreshText();
  }
  
  ngOnInit(){
    this.selectLang('en');
  }

  selectLang(lang: string) {
    console.log('selectLang: ' + lang);
    
    this._translate.use(lang);
    
    Phrases.refreshText();
  }

  setDestination(){
    console.log("HERE");
  }
}
