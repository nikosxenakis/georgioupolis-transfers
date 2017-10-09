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
var data_service_1 = require("../../providers/data.service");
var Email_1 = require("../../classes/Email");
var BookTransferComponent = (function () {
    function BookTransferComponent(dataService) {
        this.dataService = dataService;
        this.date = new Date();
        this.babySheatOptions = [
            { value: 'yes', display: 'Yes', checked: 'false' },
            { value: 'no', display: 'No', checked: 'true' }
        ];
        this.noPeopleOptions = [
            { value: '1', display: '1' },
            { value: '2', display: '2' },
            { value: '3', display: '3' },
            { value: '4', display: '4' },
            { value: '5', display: '5' },
            { value: '6', display: '6' },
            { value: '7', display: '7' },
            { value: '8', display: '8' }
        ];
        console.log(this.date.toLocaleDateString());
        console.log(this.date.getUTCMonth());
        console.log(this.date.getMonth());
        console.log(this.date.getDate());
        console.log(this.date.getUTCDay());
        console.log(this.date.getFullYear());
        //this.myDate = this.mytime.toLocaleDateString();
        this.user = {
            'firstName': '',
            'lastName': '',
            'email': '',
            'noPeople': this.noPeopleOptions[3].value,
            'babySheat': this.babySheatOptions[1].value,
            'comments': '',
            'date': this.date,
            'time': ''
        };
        /*test*/
        this.emailObject = new Email_1.Email(this.dataService, {
            firstName: 'defaultFirstName',
            lastName: 'defaultLastName',
            email: 'defaultEmail',
            noPeople: 'defaultNoPeople',
            babySheat: 'deafaultBabySheat',
            comments: 'defaultComments'
        });
        console.log(this.emailObject);
        //test
        //this.emailObject.sendMail();
    }
    BookTransferComponent.prototype.onSubmitMail = function (form) {
        console.log(form);
        var myDate = form.date.toLocaleDateString();
        var myTime = form.date.getHours() + " : " + form.getMinutes();
        console.log('Date = ' + myDate);
        console.log('Time = ' + myTime);
        /*
        this.emailObject = new Email(this.dataService,{
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            noPeople: form.noPeople,
            babySheat: form.babySheat,
            comments: form.comments
        });

        console.log(this.emailObject);

        //test
        this.emailObject.sendMail();
        */
    };
    return BookTransferComponent;
}());
BookTransferComponent = __decorate([
    core_1.Component({
        selector: 'georgioupolis-taxi-book-transfer',
        templateUrl: './book-transfer.component.html',
        styleUrls: ['./book-transfer.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], BookTransferComponent);
exports.BookTransferComponent = BookTransferComponent;
//# sourceMappingURL=book-transfer.component.js.map