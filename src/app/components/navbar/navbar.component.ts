import { Component, Output, EventEmitter, ViewChild, ElementRef, HostListener, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { Phrases, IPhrasesDictionary } from '../../providers/translate/phrases';

@Component({
  selector: 'georgioupolis-taxi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './../../../assets/styles/languages.min.css'],
  imports: [CommonModule, BsDropdownModule],
  standalone: true,
  animations: [
    trigger('navbarAnimation', [
        state('visible', style({
            transform: 'translateY(0%)',
        })),
        state('invisible', style({
          transform: 'translateY(-100%)',
        })),
        transition('visible => invisible', animate('500ms ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0%)',     offset: 0}),
            style({opacity: 1, transform: 'translateY(-100%)',     offset: 1})
        ]))),
        transition('invisible => visible', animate('500ms ease-in', keyframes([
          style({opacity: 1, transform: 'translateY(-100%)',     offset: 0}),
          style({opacity: 1, transform: 'translateY(0%)',     offset: 1})
          
        ]))),
    ]),
]
})

export class NavbarComponent{

  data: IPhrasesDictionary;

  @Output() changeLangEvent = new EventEmitter<string>();

  @ViewChild('navbarToggler') navbarToggler:ElementRef;

  isHidden: boolean = false;

  lc: NgZone;

  lastScrollTop: number = 0;

  times: number = 0;

  isAnimating: boolean = false;

  //animation
  state: string = 'visible';

  animateMe(task: string) {
    if(window.pageYOffset == 0){
      this.state = "visible";
      return;
    }

    if(task == "hide")
      this.state = "invisible";
    else if(task == "show")
      this.state = "visible";
  }

  animationStarted(){
    this.isAnimating = true;
  }
  animationDone(){
    this.isAnimating = false;
  }

  @HostListener('window:scroll', ['$event']) 
  onScrollEvent($event: any){
    
    if(window.pageYOffset == 0){
      this.animateMe("show");
    }

    if(this.isAnimating == true)
      return;

    if(this.times != 0){
      this.times--;
      return;
    }
    else{
      this.times = 10;
    }

    let st = window.pageYOffset;

    //down
    if (st > this.lastScrollTop) {
      //this.isHidden = true;
      this.animateMe("hide");
    }
    //up
    else {
      //this.isHidden = false;
      this.animateMe("show");
    }
    this.lastScrollTop = st;
  }

  constructor(lc: NgZone){
    this.data = Phrases.getPhrasesDictionary();
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  hideMenu(){
    console.log('hideMenu triggered');
    this.collapseNav();
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

  collapseNav() {
    this.animateMe("hide");
  }

  changeLanguage(lang: string) {
    this.changeLangEvent.next(lang);
    this.data = Phrases.getPhrasesDictionary();
  }

}
