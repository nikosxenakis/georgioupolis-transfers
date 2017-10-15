import { Component, HostListener } from '@angular/core';
//import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'georgioupolis-taxi-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.less','../../../../node_modules/aos/dist/aos.css'],
  animations: [
    /*
    trigger('moveCarAnimation', [
        state('start', style({
            transform: 'translateX(-30px)',
        })),
        state('finish', style({
          transform: 'translateX(0px)',
        })),
        transition('* => start', animate('100ms ease-in')),
        transition('* => finish', animate('100ms ease-out')),
        
        transition('start => finish', animate('500ms ease-in', keyframes([
            style({opacity: 1, transform: 'translateX(400%)',     offset: 0}),
            style({opacity: 1, transform: 'translateX(100%)',     offset: 1})
        ]))),
        transition('finish => start', animate('500ms ease-in', keyframes([
          style({opacity: 1, transform: 'translateX(100%)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(400%)',     offset: 1})
        ]))),
      ])
      */
  ]
})

export class MotoComponent{


  //animation
  /*
  state: string = 'finish';
  image: any;


  @HostListener('window:scroll', ['$event']) 
  onScrollEvent($event: any){
    
    
    this.state = 'start';
    
  
  }
  */

}
