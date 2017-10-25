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
var carousel_1 = require("ngx-bootstrap/carousel");
var translate_service_1 = require("../../providers/translate/translate.service");
var phrases_1 = require("../../providers/translate/phrases");
var IndexComponent = (function () {
    function IndexComponent(_translate) {
        this._translate = _translate;
        phrases_1.Phrases.setTranslateService(this._translate);
        phrases_1.Phrases.refreshText();
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.selectLang('en');
    };
    IndexComponent.prototype.selectLang = function (lang) {
        this._translate.use(lang);
        phrases_1.Phrases.refreshText();
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        selector: 'georgioupolis-taxi-root',
        templateUrl: './index.component.html',
        styleUrls: ['./index.component.css'],
        providers: [{ provide: carousel_1.CarouselConfig, useValue: { interval: 30000, noPause: true } }]
    }),
    __metadata("design:paramtypes", [translate_service_1.TranslateService])
], IndexComponent);
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map