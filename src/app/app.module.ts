/*node_modules folder*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule, CarouselModule, BsDatepickerModule, TimepickerModule, CollapseModule, TypeaheadModule, ModalModule } from 'ngx-bootstrap';

/*services*/
import { DataService } from './providers/dataService/data.service';
import { TranslateService } from './providers/translate/translate.service';
import { TRANSLATION_PROVIDERS } from './providers/translate/translation';

/*shared*/
import { LoaderComponent } from './shared/loader/loader.component';

/*components*/
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookTransferComponent } from './components/book-transfer/book-transfer.component';
import { ToursComponent } from './components/tours/tours.component';
import { IndexCarouselComponent } from './components/index-carousel/index-carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { PricesComponent } from './components/prices/prices.component';
import { MotoComponent } from './components/moto/moto.component';

@NgModule({
  declarations: [
  	LoaderComponent,
    IndexComponent,
    MotoComponent,
    IndexCarouselComponent,
    NavbarComponent,
    BookTransferComponent,
    ToursComponent,
    FooterComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService,
    TRANSLATION_PROVIDERS,
    TranslateService,
  ],
  bootstrap: [IndexComponent]
})
export class AppModule { }