"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var data_service_1 = require("./providers/data.service");
var translate_service_1 = require("./providers/translate/translate.service");
var translation_1 = require("./providers/translate/translation");
var index_component_1 = require("./components/index/index.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var book_transfer_component_1 = require("./components/book-transfer/book-transfer.component");
var tours_component_1 = require("./components/tours/tours.component");
var index_carousel_component_1 = require("./components/index-carousel/index-carousel.component");
var dropdown_1 = require("../../node_modules/ngx-bootstrap/dropdown");
var carousel_1 = require("../../node_modules/ngx-bootstrap/carousel");
var datepicker_1 = require("../../node_modules/ngx-bootstrap/datepicker");
var timepicker_1 = require("../../node_modules/ngx-bootstrap/timepicker");
var ngx_bootstrap_1 = require("../../node_modules/ngx-bootstrap");
var footer_component_1 = require("./components/footer/footer.component");
var prices_component_1 = require("./components/prices/prices.component");
var moto_component_1 = require("./components/moto/moto.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            index_component_1.IndexComponent,
            navbar_component_1.NavbarComponent,
            book_transfer_component_1.BookTransferComponent,
            tours_component_1.ToursComponent,
            index_carousel_component_1.IndexCarouselComponent,
            footer_component_1.FooterComponent,
            prices_component_1.PricesComponent,
            moto_component_1.MotoComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            datepicker_1.BsDatepickerModule.forRoot(),
            timepicker_1.TimepickerModule.forRoot(),
            dropdown_1.BsDropdownModule.forRoot(),
            carousel_1.CarouselModule.forRoot(),
            ngx_bootstrap_1.CollapseModule,
            animations_1.BrowserAnimationsModule
        ],
        providers: [
            data_service_1.DataService,
            translation_1.TRANSLATION_PROVIDERS,
            translate_service_1.TranslateService,
        ],
        bootstrap: [index_component_1.IndexComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map