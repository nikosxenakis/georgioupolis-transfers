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
//import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
var granim_min_js_1 = require("../../../assets/scripts/granim.min.js");
var MotoComponent = (function () {
    function MotoComponent() {
        var granimInstance = new granim_min_js_1.Granim({
            element: '#canvasIndex',
            direction: 'top-bottom',
            opacity: [0.7, 0.6, 0.9],
            isPausedWhenNotInView: true,
            states: {
                "default-state": {
                    gradients: [
                        ['#66582c', '#300d00'],
                        ['#ad9e6d', '#300d00'] //light
                    ],
                    transitionSpeed: 2000
                }
            }
        });
    }
    return MotoComponent;
}());
MotoComponent = __decorate([
    core_1.Component({
        selector: 'georgioupolis-taxi-moto',
        templateUrl: './moto.component.html',
        styleUrls: ['./moto.component.css'],
        animations: []
    }),
    __metadata("design:paramtypes", [])
], MotoComponent);
exports.MotoComponent = MotoComponent;
//# sourceMappingURL=moto.component.js.map