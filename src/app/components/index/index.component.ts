import { Component, OnInit, ViewChild } from '@angular/core';

import { TranslateService } from '../../providers/translate/translate.service';
import { Phrases } from '../../providers/translate/phrases';
import { NavbarComponent } from '../navbar/navbar.component';
import { IndexCarouselComponent } from '../index-carousel/index-carousel.component';
import { MotoComponent } from '../moto/moto.component';
import { BookTransferComponent } from '../book-transfer/book-transfer.component';
// import { PricesComponent } from '../prices/prices.component'; // Hidden as requested
import { ToursComponent } from '../tours/tours.component';
import { FooterComponent } from '../footer/footer.component';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'georgioupolis-taxi-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    IndexCarouselComponent,
    MotoComponent,
    BookTransferComponent,
    // PricesComponent, // Hidden as requested
    ToursComponent,
    FooterComponent,
    LoaderComponent
  ]
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
