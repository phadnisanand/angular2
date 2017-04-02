"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var country_contacts_1 = require("./country.contacts");
var CountryService = (function () {
    //CountryService exposes the getContacts() method that returns the data
    function CountryService() {
    }
    CountryService.prototype.getContacts = function () {
        return Promise.resolve(country_contacts_1.COUNTRIES);
    };
    return CountryService;
}());
CountryService = __decorate([
    core_1.Injectable()
    //CountryService exposes the getContacts() method that returns the data
], CountryService);
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map