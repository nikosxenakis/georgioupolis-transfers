import { Component, OnInit } from '@angular/core';
import { Inject, InjectionToken } from '@angular/core';

import { Phrases, IPhrasesDictionary } from '../../providers/translate/phrases';
import { AosToken } from '../../providers/aos';

@Component({
  selector: 'georgioupolis-taxi-index-carousel',
  templateUrl: './index-carousel.component.html',
  styleUrls: ['./index-carousel.component.less']
})
export class IndexCarouselComponent{
  
  data: IPhrasesDictionary;
  aos: any;

  constructor(@Inject(AosToken) aos){
    this.data = Phrases.getPhrasesDictionary();
    this.aos = aos;
  }

  ngOnInit (){
    this.aos.init({
      easing: "ease-in-out-sine"
    });
  }

}
