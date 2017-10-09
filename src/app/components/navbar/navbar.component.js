"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var phrases_1 = require("../../providers/translate/phrases");
var animations_1 = require("@angular/animations");
var NavbarComponent = (function () {
    function NavbarComponent(lc) {
        this.changeLangEvent = new core_1.EventEmitter();
        this.isHidden = false;
        this.lastScrollTop = 0;
        this.times = 0;
        this.isAnimating = false;
        //animation
        this.state = 'visible';
        this.data = phrases_1.Phrases.getPhrasesDictionary();
    }
    NavbarComponent.prototype.animateMe = function (task) {
        if (window.pageYOffset == 0) {
            this.state = "visible";
            return;
        }
        if (task == "hide")
            this.state = "invisible";
        else if (task == "show")
            this.state = "visible";
    };
    NavbarComponent.prototype.animationStarted = function () {
        this.isAnimating = true;
    };
    NavbarComponent.prototype.animationDone = function () {
        this.isAnimating = false;
    };
    NavbarComponent.prototype.onScrollEvent = function ($event) {
        if (window.pageYOffset == 0) {
            this.animateMe("show");
        }
        if (this.isAnimating == true)
            return;
        if (this.times != 0) {
            this.times--;
            return;
        }
        else {
            this.times = 10;
        }
        var st = window.pageYOffset;
        //down
        if (st > this.lastScrollTop) {
            //this.isHidden = true;
            this.animateMe("hide");
        }
        else {
            //this.isHidden = false;
            this.animateMe("show");
        }
        this.lastScrollTop = st;
    };
    NavbarComponent.prototype.navBarTogglerIsVisible = function () {
        return this.navbarToggler.nativeElement.offsetParent !== null;
    };
    NavbarComponent.prototype.hideMenu = function () {
        console.log('hideMenu triggered');
        if (this.navBarTogglerIsVisible()) {
            this.navbarToggler.nativeElement.click();
        }
    };
    NavbarComponent.prototype.collapseNav = function () {
        this.animateMe("hide");
    };
    NavbarComponent.prototype.changeLanguage = function (lang) {
        this.changeLangEvent.next(lang);
        this.data = phrases_1.Phrases.getPhrasesDictionary();
    };
    return NavbarComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "changeLangEvent", void 0);
__decorate([
    core_1.ViewChild('navbarToggler'),
    __metadata("design:type", core_1.ElementRef)
], NavbarComponent.prototype, "navbarToggler", void 0);
__decorate([
    core_1.HostListener('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavbarComponent.prototype, "onScrollEvent", null);
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'georgioupolis-taxi-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css'],
        animations: [
            animations_1.trigger('navbarAnimation', [
                animations_1.state('visible', animations_1.style({
                    transform: 'translateY(0%)',
                })),
                animations_1.state('invisible', animations_1.style({
                    transform: 'translateY(-100%)',
                })),
                animations_1.transition('visible => invisible', animations_1.animate('500ms ease-in', animations_1.keyframes([
                    animations_1.style({ opacity: 1, transform: 'translateY(0%)', offset: 0 }),
                    animations_1.style({ opacity: 1, transform: 'translateY(-100%)', offset: 1 })
                ]))),
                animations_1.transition('invisible => visible', animations_1.animate('500ms ease-in', animations_1.keyframes([
                    animations_1.style({ opacity: 1, transform: 'translateY(-100%)', offset: 0 }),
                    animations_1.style({ opacity: 1, transform: 'translateY(0%)', offset: 1 })
                ]))),
            ]),
        ]
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map