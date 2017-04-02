"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SecondComponent = (function () {
    function SecondComponent() {
    }
    return SecondComponent;
}());
SecondComponent = __decorate([
    core_1.Component({
        selector: 'my-second',
        styleUrls: ['app/first.css'],
        template: "\n    <h1>Second Component</h1>\n   \n    This is the second component!\n  "
    })
], SecondComponent);
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=second.component.js.map