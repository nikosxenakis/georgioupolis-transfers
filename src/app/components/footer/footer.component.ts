import { Component } from '@angular/core';
import { Phrases, IPhrasesDictionary } from '../../providers/translate/phrases';

@Component({
  selector: 'georgioupolis-taxi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

  data: IPhrasesDictionary;
  
    constructor(){
      this.data = Phrases.getPhrasesDictionary();
    }

}
