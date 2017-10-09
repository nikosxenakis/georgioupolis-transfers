import { Component } from '@angular/core';

import { Phrases, IPhrasesDictionary } from '../../providers/translate/phrases';

@Component({
  selector: 'georgioupolis-taxi-index-carousel',
  templateUrl: './index-carousel.component.html',
  styleUrls: ['./index-carousel.component.css']
})
export class IndexCarouselComponent{
  
  data: IPhrasesDictionary;
  myInnerHeight: number;

  constructor(){
    this.data = Phrases.getPhrasesDictionary();
    this.myInnerHeight = 13*(window.innerHeight/16);
  }

}
