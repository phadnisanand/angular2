"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var first_component_1 = require("./first.component");
var second_component_1 = require("./second.component");
var third_component_1 = require("./third.component");
var hero_form_component_1 = require("./hero-form.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'first' },
    { path: 'first', component: first_component_1.FirstComponent },
    { path: 'second', component: second_component_1.SecondComponent },
    { path: 'third', component: third_component_1.ThirdComponent },
    { path: 'form', component: hero_form_component_1.HeroFormComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [first_component_1.FirstComponent, second_component_1.SecondComponent, third_component_1.ThirdComponent, hero_form_component_1.HeroFormComponent];
//# sourceMappingURL=app.routing.js.map