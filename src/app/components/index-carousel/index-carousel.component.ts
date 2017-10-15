import { Component } from '@angular/core';

import { Phrases, IPhrasesDictionary } from '../../providers/translate/phrases';

@Component({
  selector: 'georgioupolis-taxi-index-carousel',
  templateUrl: './index-carousel.component.html',
  styleUrls: ['./index-carousel.component.less', '../../../../bower_components/flickity/dist/flickity.min.css']
})
export class IndexCarouselComponent{
  
  data: IPhrasesDictionary;

  constructor(){
    this.data = Phrases.getPhrasesDictionary();
  }

}
